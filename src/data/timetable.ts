export type Weekday = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
export type CourseComponent = "LEC" | "TUT" | "LAB" | "SEM" | "TST";
export type SectionGroupKey =
  | "math135Lec"
  | "math135Tut"
  | "che102Tut"
  | "math115Tut"
  | "math117Tut";

export interface SectionOption {
  value: string;
  label: string;
  room: string;
  meeting: string;
}

export interface SectionGroup {
  key: SectionGroupKey;
  queryParam: string;
  course: string;
  type: CourseComponent;
  impact: "time" | "room";
  defaultLabel: string;
  options: readonly SectionOption[];
}

interface WeeklyMeeting {
  id: string;
  course: string;
  type: CourseComponent;
  section?: string;
  days: readonly Weekday[];
  start: string;
  end: string;
  location: string;
  color: string;
  sectionGroup?: SectionGroupKey;
  sectionValue?: string;
}

export interface TimetableEntry extends Omit<WeeklyMeeting, "days"> {
  day: Weekday;
}

export interface SpecialMeeting {
  id: string;
  course: string;
  type: CourseComponent;
  section: string;
  date: string;
  start: string;
  end: string;
  location: string;
  note: string;
  color: string;
}

export const TIMETABLE_META = {
  term: "Fall 2026",
  status: "Official schedule data",
  audience: "SE31 Fall 2026 · personalize the currently mapped sections",
  lastChecked: "2026-08-10",
  sourceLabel: "View Waterloo's Fall 2026 class listings",
  sourceUrl: "https://classes.uwaterloo.ca/under.html",
  personalSourceLabel: "Open your schedule in Quest",
  personalSourceUrl:
    "https://quest.pecs.uwaterloo.ca/psp/SS/ACADEMIC/SA/?cmd=login&languageCd=ENG",
  notice:
    "Based on Waterloo's official Fall 2026 schedule data and Quest rows shared by the cohort. Sections and rooms vary; your own Quest schedule remains authoritative for your enrolment and any changes.",
} as const;

const COURSE_COLORS = {
  math135: "border-[#48301f] bg-[#fefdfa] text-[#48301f]",
  math117: "border-[#48301f] bg-[#6dacb1] text-[#48301f]",
  math115: "border-[#48301f] bg-[#f4ad4b] text-[#48301f]",
  cs137: "border-[#48301f] bg-[#83ced5] text-[#48301f]",
  che102: "border-[#48301f] bg-[#f8cb10] text-[#48301f]",
  se101: "border-[#fefdfa] bg-[#48301f] text-[#fefdfa]",
  gene119: "border-[#48301f] bg-[#d8efee] text-[#48301f]",
  mthel99: "border-[#356f72] bg-[#eaf7f6] text-[#48301f]",
} as const;

export const SECTION_GROUPS: readonly SectionGroup[] = [
  {
    key: "math135Lec",
    queryParam: "m135-lec",
    course: "MATH 135",
    type: "LEC",
    impact: "time",
    defaultLabel: "Not sure — show both lectures",
    options: [
      {
        value: "011",
        label: "011 · after MATH 115",
        room: "MC 2066",
        meeting: "MWF 1:30–2:20 PM",
      },
      {
        value: "012",
        label: "012 · morning",
        room: "RCH 302",
        meeting: "MWF 8:30–9:20 AM",
      },
    ],
  },
  {
    key: "che102Tut",
    queryParam: "che102-tut",
    course: "CHE 102",
    type: "TUT",
    impact: "room",
    defaultLabel: "Choose section for room",
    options: [
      { value: "128", label: "128", room: "MC 4058", meeting: "Monday 2:30–4:20 PM" },
      { value: "129", label: "129", room: "DWE 3519", meeting: "Monday 2:30–4:20 PM" },
      { value: "130", label: "130", room: "STC 0040", meeting: "Monday 2:30–4:20 PM" },
      { value: "131", label: "131", room: "RCH 206", meeting: "Monday 2:30–4:20 PM" },
    ],
  },
  {
    key: "math115Tut",
    queryParam: "m115-tut",
    course: "MATH 115",
    type: "TUT",
    impact: "room",
    defaultLabel: "Choose section for room",
    options: [
      { value: "119", label: "119", room: "MC 4040", meeting: "Tuesday 2:30–4:20 PM" },
      { value: "120", label: "120", room: "RCH 110", meeting: "Tuesday 2:30–4:20 PM" },
    ],
  },
  {
    key: "math117Tut",
    queryParam: "m117-tut",
    course: "MATH 117",
    type: "TUT",
    impact: "room",
    defaultLabel: "Choose section for room",
    options: [
      { value: "113", label: "113", room: "DWE 1515", meeting: "Thursday 2:30–4:20 PM" },
      { value: "114", label: "114", room: "DWE 3522A", meeting: "Thursday 2:30–4:20 PM" },
      { value: "115", label: "115", room: "DWE 3522", meeting: "Thursday 2:30–4:20 PM" },
    ],
  },
  {
    key: "math135Tut",
    queryParam: "m135-tut",
    course: "MATH 135",
    type: "TUT",
    impact: "room",
    defaultLabel: "Choose section for room",
    options: [
      { value: "101", label: "101", room: "STC 1012", meeting: "Wednesday 4:00–5:20 PM" },
    ],
  },
] as const;

const WEEKLY_MEETINGS: readonly WeeklyMeeting[] = [
  {
    id: "math135-lec-011",
    course: "MATH 135",
    type: "LEC",
    section: "011",
    days: ["Monday", "Wednesday", "Friday"],
    start: "13:30",
    end: "14:20",
    location: "MC 2066",
    color: COURSE_COLORS.math135,
    sectionGroup: "math135Lec",
    sectionValue: "011",
  },
  {
    id: "math135-lec-012",
    course: "MATH 135",
    type: "LEC",
    section: "012",
    days: ["Monday", "Wednesday", "Friday"],
    start: "08:30",
    end: "09:20",
    location: "RCH 302",
    color: COURSE_COLORS.math135,
    sectionGroup: "math135Lec",
    sectionValue: "012",
  },
  {
    id: "math117-lec-005",
    course: "MATH 117",
    type: "LEC",
    section: "005",
    days: ["Monday", "Wednesday", "Friday"],
    start: "09:30",
    end: "10:20",
    location: "STC 0040",
    color: COURSE_COLORS.math117,
  },
  {
    id: "che102-lec-010-mw",
    course: "CHE 102",
    type: "LEC",
    section: "010",
    days: ["Monday", "Wednesday"],
    start: "10:30",
    end: "11:20",
    location: "STC 0040",
    color: COURSE_COLORS.che102,
  },
  {
    id: "che102-lec-010-f",
    course: "CHE 102",
    type: "LEC",
    section: "010",
    days: ["Friday"],
    start: "14:30",
    end: "15:20",
    location: "STC 0040",
    color: COURSE_COLORS.che102,
  },
  {
    id: "math115-lec-010",
    course: "MATH 115",
    type: "LEC",
    section: "010",
    days: ["Monday", "Wednesday", "Friday"],
    start: "12:30",
    end: "13:20",
    location: "STC 0040",
    color: COURSE_COLORS.math115,
  },
  {
    id: "che102-tut",
    course: "CHE 102",
    type: "TUT",
    days: ["Monday"],
    start: "14:30",
    end: "16:20",
    location: "Room varies — choose your section",
    color: COURSE_COLORS.che102,
    sectionGroup: "che102Tut",
  },
  {
    id: "cs137-lec-001",
    course: "CS 137",
    type: "LEC",
    section: "001",
    days: ["Tuesday", "Thursday"],
    start: "10:00",
    end: "11:20",
    location: "STC 0040",
    color: COURSE_COLORS.cs137,
  },
  {
    id: "cs137-tut-101",
    course: "CS 137",
    type: "TUT",
    section: "101",
    days: ["Tuesday"],
    start: "12:30",
    end: "14:20",
    location: "STC 0040",
    color: COURSE_COLORS.cs137,
  },
  {
    id: "math115-tut",
    course: "MATH 115",
    type: "TUT",
    days: ["Tuesday"],
    start: "14:30",
    end: "16:20",
    location: "Room varies — choose your section",
    color: COURSE_COLORS.math115,
    sectionGroup: "math115Tut",
  },
  {
    id: "gene119-sem-016",
    course: "GENE 119",
    type: "SEM",
    section: "016",
    days: ["Wednesday"],
    start: "14:30",
    end: "15:20",
    location: "STC 0040",
    color: COURSE_COLORS.gene119,
  },
  {
    id: "math135-tut",
    course: "MATH 135",
    type: "TUT",
    days: ["Wednesday"],
    start: "16:00",
    end: "17:20",
    location: "Room varies — choose your section",
    color: COURSE_COLORS.math135,
    sectionGroup: "math135Tut",
  },
  {
    id: "se101-lab-201",
    course: "SE 101",
    type: "LAB",
    section: "201",
    days: ["Thursday"],
    start: "12:30",
    end: "14:20",
    location: "E2 1792",
    color: COURSE_COLORS.se101,
  },
  {
    id: "math117-tut",
    course: "MATH 117",
    type: "TUT",
    days: ["Thursday"],
    start: "14:30",
    end: "16:20",
    location: "Room varies — choose your section",
    color: COURSE_COLORS.math117,
    sectionGroup: "math117Tut",
  },
  {
    id: "se101-sem-101",
    course: "SE 101",
    type: "SEM",
    section: "101",
    days: ["Friday"],
    start: "10:30",
    end: "11:20",
    location: "STC 0040",
    color: COURSE_COLORS.se101,
  },
  {
    id: "se101-lec-001",
    course: "SE 101",
    type: "LEC",
    section: "001",
    days: ["Friday"],
    start: "15:30",
    end: "16:20",
    location: "STC 0040",
    color: COURSE_COLORS.se101,
  },
];

const DAY_ORDER: readonly Weekday[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const timeToMinutes = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
};

export const TIMETABLE: TimetableEntry[] = WEEKLY_MEETINGS
  .flatMap(({ days, ...meeting }) =>
    days.map((day) => ({
      ...meeting,
      id: `${meeting.id}-${day.toLowerCase()}`,
      day,
    })),
  )
  .toSorted(
    (a, b) =>
      DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day) ||
      timeToMinutes(a.start) - timeToMinutes(b.start) ||
      a.course.localeCompare(b.course) ||
      a.type.localeCompare(b.type),
  );

export const UNSCHEDULED_COURSES = [
  {
    course: "MTHEL 99",
    type: "LEC" as const,
    section: "002",
    location: "Online",
    note: "Section 002 is in the supplied schedule; yours may differ. No meeting time is listed.",
    color: COURSE_COLORS.mthel99,
  },
] as const;

export const SPECIAL_MEETINGS: readonly SpecialMeeting[] = [
  { id: "cs137-lab-2026-09-15", course: "CS 137", type: "LAB", section: "201", date: "2026-09-15", start: "12:30", end: "14:20", location: "STC 0040", note: "Dated LAB meeting", color: COURSE_COLORS.cs137 },
  { id: "se101-extra-2026-09-17", course: "SE 101", type: "LEC", section: "001", date: "2026-09-17", start: "08:30", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.se101 },
  { id: "math115-extra-2026-09-22", course: "MATH 115", type: "LEC", section: "010", date: "2026-09-22", start: "08:30", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.math115 },
  { id: "che102-extra-2026-09-24", course: "CHE 102", type: "LEC", section: "010", date: "2026-09-24", start: "09:00", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.che102 },
  { id: "cs137-extra-2026-10-01", course: "CS 137", type: "LEC", section: "001", date: "2026-10-01", start: "08:30", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.cs137 },
  { id: "se101-extra-2026-10-08", course: "SE 101", type: "LEC", section: "001", date: "2026-10-08", start: "08:30", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.se101 },
  { id: "math117-extra-2026-10-20", course: "MATH 117", type: "LEC", section: "005", date: "2026-10-20", start: "08:30", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.math117 },
  { id: "math135-test-2026-10-21", course: "MATH 135", type: "TST", section: "201", date: "2026-10-21", start: "19:00", end: "20:50", location: "TBA", note: "Scheduled test", color: COURSE_COLORS.math135 },
  { id: "math117-test-2026-10-22", course: "MATH 117", type: "TST", section: "201", date: "2026-10-22", start: "16:30", end: "18:20", location: "TBA", note: "Scheduled test", color: COURSE_COLORS.math117 },
  { id: "che102-test-2026-10-23", course: "CHE 102", type: "TST", section: "201", date: "2026-10-23", start: "18:30", end: "20:00", location: "TBA", note: "Scheduled test", color: COURSE_COLORS.che102 },
  { id: "math115-test-2026-10-26", course: "MATH 115", type: "TST", section: "201", date: "2026-10-26", start: "16:30", end: "18:20", location: "TBA", note: "Scheduled test", color: COURSE_COLORS.math115 },
  { id: "cs137-extra-2026-10-27", course: "CS 137", type: "LEC", section: "001", date: "2026-10-27", start: "12:30", end: "14:20", location: "TBA", note: "Additional dated LEC", color: COURSE_COLORS.cs137 },
  { id: "che102-extra-2026-10-29", course: "CHE 102", type: "LEC", section: "010", date: "2026-10-29", start: "09:00", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.che102 },
  { id: "math115-extra-2026-11-03", course: "MATH 115", type: "LEC", section: "010", date: "2026-11-03", start: "08:30", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.math115 },
  { id: "cs137-extra-2026-11-05", course: "CS 137", type: "LEC", section: "001", date: "2026-11-05", start: "08:30", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.cs137 },
  { id: "math117-extra-2026-11-10", course: "MATH 117", type: "LEC", section: "005", date: "2026-11-10", start: "08:30", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.math117 },
  { id: "che102-extra-2026-11-12", course: "CHE 102", type: "LEC", section: "010", date: "2026-11-12", start: "09:00", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.che102 },
  { id: "math115-extra-2026-11-17", course: "MATH 115", type: "LEC", section: "010", date: "2026-11-17", start: "08:30", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.math115 },
  { id: "cs137-extra-2026-11-19", course: "CS 137", type: "LEC", section: "001", date: "2026-11-19", start: "08:30", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.cs137 },
  { id: "math117-extra-2026-11-24", course: "MATH 117", type: "LEC", section: "005", date: "2026-11-24", start: "08:30", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.math117 },
  { id: "se101-extra-2026-11-26", course: "SE 101", type: "LEC", section: "001", date: "2026-11-26", start: "08:30", end: "09:50", location: "STC 0040", note: "Additional dated LEC", color: COURSE_COLORS.se101 },
] as const;
