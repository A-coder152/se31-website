export interface TimetableEntry {
  course: string;
  type: "LEC" | "TUT" | "LAB" | "SEM";
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
  start: string;
  end: string;
  location: string;
  color: string;
}

export const TIMETABLE_META = {
  term: "Fall 2026",
  status: "Unofficial planning draft",
  audience: "Incoming SE31 students",
  lastChecked: "2026-07-16",
  sourceLabel: "Check your official schedule in Quest",
  sourceUrl: "https://uwaterloo.ca/quest/",
  notice:
    "This community-created draft was assembled before official schedules were released. Check Quest for your current official schedule; this draft may differ and should not be used for enrolment or travel decisions.",
} as const;

export const TIMETABLE: TimetableEntry[] = [
  // Monday
  {
    course: "MATH 135",
    type: "LEC",
    day: "Monday",
    start: "08:30",
    end: "09:20",
    location: "RCH 302",
    color: "bg-stone-200 dark:bg-stone-700 text-black dark:text-white",
  },
  {
    course: "MATH 117",
    type: "LEC",
    day: "Monday",
    start: "09:30",
    end: "10:20",
    location: "",
    color: "bg-green-200 dark:bg-green-700 text-black dark:text-white",
  },
  {
    course: "CHE 102",
    type: "LEC",
    day: "Monday",
    start: "10:30",
    end: "11:20",
    location: "",
    color: "bg-yellow-200 dark:bg-yellow-700 text-black dark:text-white",
  },
  {
    course: "MATH 115",
    type: "LEC",
    day: "Monday",
    start: "12:30",
    end: "13:20",
    location: "",
    color: "bg-red-300 dark:bg-red-700 text-black dark:text-white",
  },
  {
    course: "CHE 102",
    type: "TUT",
    day: "Monday",
    start: "14:30",
    end: "16:20",
    location: "",
    color: "bg-yellow-100 dark:bg-yellow-600 text-black dark:text-white",
  },

  // Tuesday
  {
    course: "CS 137",
    type: "LEC",
    day: "Tuesday",
    start: "10:00",
    end: "11:20",
    location: "STC 0040",
    color: "bg-blue-200 dark:bg-blue-700 text-black dark:text-white",
  },
  {
    course: "CS 137",
    type: "TUT",
    day: "Tuesday",
    start: "12:30",
    end: "14:20",
    location: "",
    color: "bg-sky-100 dark:bg-sky-700 text-black dark:text-white",
  },
  {
    course: "MATH 115",
    type: "TUT",
    day: "Tuesday",
    start: "14:30",
    end: "16:20",
    location: "",
    color: "bg-red-200 dark:bg-red-600 text-black dark:text-white",
  },

  // Wednesday
  {
    course: "MATH 135",
    type: "LEC",
    day: "Wednesday",
    start: "08:30",
    end: "09:20",
    location: "RCH 302",
    color: "bg-stone-200 dark:bg-stone-700 text-black dark:text-white",
  },
  {
    course: "MATH 117",
    type: "LEC",
    day: "Wednesday",
    start: "09:30",
    end: "10:20",
    location: "",
    color: "bg-green-200 dark:bg-green-700 text-black dark:text-white",
  },
  {
    course: "CHE 102",
    type: "LEC",
    day: "Wednesday",
    start: "10:30",
    end: "11:20",
    location: "",
    color: "bg-yellow-200 dark:bg-yellow-700 text-black dark:text-white",
  },
  {
    course: "MATH 115",
    type: "LEC",
    day: "Wednesday",
    start: "12:30",
    end: "13:20",
    location: "",
    color: "bg-red-300 dark:bg-red-700 text-black dark:text-white",
  },
  {
    course: "SE 101",
    type: "LEC",
    day: "Wednesday",
    start: "15:30",
    end: "16:20",
    location: "",
    color: "bg-fuchsia-300 text-black dark:bg-fuchsia-700 dark:text-white",
  },
  {
    course: "MATH 135",
    type: "TUT",
    day: "Wednesday",
    start: "16:30",
    end: "17:20",
    location: "",
    color: "bg-stone-300 dark:bg-stone-600 text-black dark:text-white",
  },

  // Thursday
  {
    course: "CS 137",
    type: "LEC",
    day: "Thursday",
    start: "10:00",
    end: "11:20",
    location: "STC 0040",
    color: "bg-blue-200 dark:bg-blue-700 text-black dark:text-white",
  },
  {
    course: "SE 101",
    type: "LAB",
    day: "Thursday",
    start: "12:30",
    end: "14:20",
    location: "E2 1792",
    color: "bg-fuchsia-200 text-black dark:bg-fuchsia-700 dark:text-white",
  },
  {
    course: "MATH 117",
    type: "TUT",
    day: "Thursday",
    start: "14:30",
    end: "16:20",
    location: "",
    color: "bg-green-100 dark:bg-green-600 text-black dark:text-white",
  },

  // Friday
  {
    course: "MATH 135",
    type: "LEC",
    day: "Friday",
    start: "08:30",
    end: "09:20",
    location: "RCH 302",
    color: "bg-stone-200 dark:bg-stone-700 text-black dark:text-white",
  },
  {
    course: "MATH 117",
    type: "LEC",
    day: "Friday",
    start: "09:30",
    end: "10:20",
    location: "",
    color: "bg-green-200 dark:bg-green-700 text-black dark:text-white",
  },
  {
    course: "CHE 102",
    type: "LEC",
    day: "Friday",
    start: "10:30",
    end: "11:20",
    location: "",
    color: "bg-yellow-200 dark:bg-yellow-700 text-black dark:text-white",
  },
  {
    course: "MATH 115",
    type: "LEC",
    day: "Friday",
    start: "12:30",
    end: "13:20",
    location: "",
    color: "bg-red-300 dark:bg-red-700 text-black dark:text-white",
  },
  {
    course: "SE 101",
    type: "SEM",
    day: "Friday",
    start: "14:30",
    end: "15:20",
    location: "",
    color: "bg-fuchsia-200 text-black dark:bg-fuchsia-600 dark:text-white",
  },
];
