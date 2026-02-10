export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
  grade?: string; // ✅ optional
};

export const education: EducationItem[] = [
  {
    degree: "B.Sc. (Hons) Computer Science",
    institution: "University of Bedfordshire",
    location: "Bedfordshire, UK",
    period: "Mar 2024 — Present",
    details: [
      "Foundational coursework in Software Engineering, Data Structures & Algorithms, Databases, and Project Management.",
    ],
    // grade: "First Class", // ← optional, add later if you want
  },
];
