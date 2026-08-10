import assert from "node:assert/strict";
import test from "node:test";

import {
  SECTION_GROUPS,
  SPECIAL_MEETINGS,
  TIMETABLE,
  TIMETABLE_META,
  UNSCHEDULED_COURSES,
} from "../src/data/timetable.ts";

function resolveMath135(section: "011" | "012") {
  return TIMETABLE.filter(
    (event) =>
      event.sectionGroup !== "math135Lec" || event.sectionValue === section,
  );
}

function minutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

test("official timetable metadata points students back to Waterloo and Quest", () => {
  assert.equal(TIMETABLE_META.term, "Fall 2026");
  assert.equal(TIMETABLE_META.status, "Official schedule data");
  assert.equal(TIMETABLE_META.lastChecked, "2026-08-10");
  assert.doesNotThrow(() => new URL(TIMETABLE_META.sourceUrl));
  assert.doesNotThrow(() => new URL(TIMETABLE_META.personalSourceUrl));
});

test("only the two SE31 MATH 135 lectures change the weekly grid", () => {
  const group = SECTION_GROUPS.find((candidate) => candidate.key === "math135Lec");
  assert.ok(group);
  assert.equal(group.impact, "time");
  assert.deepEqual(group.options.map((option) => option.value), ["011", "012"]);
  assert.equal(TIMETABLE.some((event) => event.course === "MATH 135" && event.type === "LEC" && event.section === "010"), false);

  for (const section of ["011", "012"] as const) {
    const resolved = resolveMath135(section);
    assert.equal(resolved.length, 23);
    assert.equal(resolved.filter((event) => event.course === "MATH 135" && event.type === "LEC").length, 3);
  }
});

test("valid personalized weeks have no overlapping recurring meetings", () => {
  for (const section of ["011", "012"] as const) {
    const byDay = Map.groupBy(resolveMath135(section), (event) => event.day);
    for (const events of byDay.values()) {
      const sorted = events.toSorted((a, b) => minutes(a.start) - minutes(b.start));
      for (let index = 1; index < sorted.length; index += 1) {
        assert.ok(
          minutes(sorted[index - 1].end) <= minutes(sorted[index].start),
          `${section} overlaps ${sorted[index - 1].id} and ${sorted[index].id}`,
        );
      }
    }
  }
});

test("tutorial section choices preserve time and provide confirmed rooms", () => {
  const expectedRooms = {
    che102Tut: ["MC 4058", "DWE 3519", "STC 0040", "RCH 206"],
    math115Tut: ["MC 4040", "RCH 110"],
    math117Tut: ["DWE 1515", "DWE 3522A", "DWE 3522"],
    math135Tut: ["STC 1012"],
  };

  for (const [key, rooms] of Object.entries(expectedRooms)) {
    const group = SECTION_GROUPS.find((candidate) => candidate.key === key);
    assert.ok(group);
    assert.equal(group.impact, "room");
    assert.deepEqual(group.options.map((option) => option.room), rooms);
    assert.equal(new Set(group.options.map((option) => option.value)).size, group.options.length);
  }
});

test("dated meetings are unique, chronological, and never mixed into the weekly grid", () => {
  assert.equal(SPECIAL_MEETINGS.length, 21);
  assert.equal(new Set(SPECIAL_MEETINGS.map((meeting) => meeting.id)).size, SPECIAL_MEETINGS.length);
  assert.deepEqual(
    SPECIAL_MEETINGS.map((meeting) => meeting.date),
    SPECIAL_MEETINGS.map((meeting) => meeting.date).toSorted(),
  );
  assert.equal(TIMETABLE.some((event) => event.type === "TST"), false);
  assert.equal(SPECIAL_MEETINGS.filter((meeting) => meeting.type === "TST").length, 4);
});

test("the exported agenda is chronological within each day", () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  for (const day of days) {
    const starts = TIMETABLE.filter((event) => event.day === day).map((event) => minutes(event.start));
    assert.deepEqual(starts, starts.toSorted((a, b) => a - b));
  }
});

test("known schedule corrections and unscheduled MTHEL 99 are represented", () => {
  assert.ok(TIMETABLE.some((event) => event.course === "CHE 102" && event.day === "Friday" && event.start === "14:30"));
  assert.ok(TIMETABLE.some((event) => event.course === "SE 101" && event.type === "SEM" && event.day === "Friday" && event.start === "10:30"));
  assert.ok(TIMETABLE.some((event) => event.course === "SE 101" && event.type === "LEC" && event.day === "Friday" && event.start === "15:30"));
  assert.ok(TIMETABLE.some((event) => event.course === "MATH 135" && event.type === "TUT" && event.start === "16:00"));
  assert.ok(TIMETABLE.some((event) => event.course === "GENE 119"));
  assert.equal(UNSCHEDULED_COURSES[0].course, "MTHEL 99");
  assert.equal(UNSCHEDULED_COURSES[0].section, "002");
  assert.equal(UNSCHEDULED_COURSES[0].location, "Online");
});
