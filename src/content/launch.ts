/**
 * New & upcoming Studio Academy courses (source: the live LMS).
 *
 * `newlyLiveCourses` are already published and link to the LMS.
 * `upcomingCourses` are announced but not yet uploaded — no launch date yet,
 * so there is no countdown.
 */
export type Course = {
  code: string;
  title: string;
  blurb: string;
  tags: string[];
  /** External link to the live course (only for published courses). */
  href?: string;
};

/** Just published on Studio Academy. */
export const newlyLiveCourses: Course[] = [
  {
    code: "MMT-OAI-USRP",
    title: "Private 5G SA with OpenAirInterface",
    blurb:
      "Build a complete private 5G Standalone network from open-source code on your own laptop — the OpenAirInterface 5G Core, gNB and nrUE in the RF simulator — and read it at every layer in Wireshark. No radio hardware needed; optional chapters move the gNB onto a real USRP B210.",
    tags: ["5G SA · OAI", "RF simulator", "USRP B210 (optional)"],
    href: "https://studioacademy.makemytechnology.com/",
  },
];

/** Announced but not yet uploaded — no launch date yet. */
export const upcomingCourses: Course[] = [
  {
    code: "DRONE",
    title: "Drone Technology & UAV Systems",
    blurb:
      "Hands-on training in drone hardware, flight control, and autonomous UAV systems — a brand-new track.",
    tags: ["Flight control", "Aerial imaging"],
  },
];
