import type { ExperienceItem, Certification } from "@/types"

export const workExperiences: ExperienceItem[] = [
  {
    title:        "Frontend Developer",
    organization: "Company Name",
    date:         "Jan 2023 - Present",
    address:      "Manila, Philippines",
    url:          "https://company.com",
  },
  {
    title:        "Web Developer Intern",
    organization: "Another Company",
    date:         "Jun 2022 - Dec 2022",
    address:      "Quezon City, Philippines",
    url:          "https://anothercompany.com",
  },
  {
    title:        "Freelance Developer",
    organization: "Self Employed",
    date:         "Jan 2022 - May 2022",
    address:      "Remote",
    url:          "https://github.com",
  },
  {
    title:        "Junior Developer",
    organization: "Startup Company",
    date:         "Jun 2021 - Dec 2021",
    address:      "Makati, Philippines",
    url:          "https://startup.com",
  },
]

export const academicBackground: ExperienceItem[] = [
  {
    title:        "Bachelor of Science in Computer Science",
    organization: "Your University",
    date:         "2021 - Present",
    address:      "Manila, Philippines",
    url:          "https://university.edu.ph",
  },
  {
    title:        "Senior High School — ICT Track",
    organization: "Your High School",
    date:         "2019 - 2021",
    address:      "Your City, Philippines",
    url:          "https://school.edu.ph",
  },
]

export const certifications: Certification[] = [
  {
    name:       "Responsive Web Design",
    issuer:     "freeCodeCamp",
    issuedDate: "January 2024",
    image:      "/certs/freecodecamp-responsive.jpg",
  },
  {
    name:       "JavaScript Algorithms and Data Structures",
    issuer:     "freeCodeCamp",
    issuedDate: "March 2024",
    image:      "/certs/freecodecamp-js.jpg",
  },
  {
    name:       "React Basics",
    issuer:     "Coursera",
    issuedDate: "June 2024",
    image:      "/certs/coursera-react.jpg",
  },
]