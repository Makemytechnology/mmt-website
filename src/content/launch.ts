/**
 * Upcoming Studio Academy course launch.
 *
 * `COURSE_LAUNCH_ISO` is the fixed target the countdown counts down to — set to
 * 7 days from the 2026-11-02 announcement, at local (IST) midnight. Change this
 * one value to move the launch date everywhere the countdown appears.
 */
export const COURSE_LAUNCH_ISO = "2026-11-09T00:00:00+05:30";

export type UpcomingCourse = {
  code: string;
  title: string;
  blurb: string;
  tags: string[];
};

/** The new courses landing on Studio Academy (source: the live LMS). */
export const upcomingCourses: UpcomingCourse[] = [
  {
    code: "DRONE",
    title: "Drone Technology & UAV Systems",
    blurb:
      "Hands-on training in drone hardware, flight control, and autonomous UAV systems — a brand-new track.",
    tags: ["Flight control", "Aerial imaging"],
  },
  {
    code: "OAI · USRP",
    title: "Private 5G SA with OpenAirInterface & USRP",
    blurb:
      "Build and run your own private 5G Standalone network over the air — the OpenAirInterface gNB and core with a USRP B210. A 16-chapter course with heavy Wireshark & Linux practice.",
    tags: ["5G SA · RAN & Core", "USRP B210 radio"],
  },
];
