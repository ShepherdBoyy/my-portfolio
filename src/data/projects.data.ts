import type { Project } from "@/types";
import { generateSlug } from "@/utils/slug";

const project = (p: Omit<Project, "slug">): Project => ({
    ...p,
    slug: generateSlug(p.title)
});

export const projects: Project[] = [
  project({
    title:       "Track Wise",
    description: "Hospital invoice tracking and management system.",
    details:     "TrackWise is a web-based hospital invoice management system designed to streamline the monitoring and tracking of billing records. The application features an interactive dashboard that provides visual summaries of invoice data, enabling users to quickly assess payment performance and outstanding balances. It includes an updates page for viewing the latest activities on individual invoices, as well as an aging tracker that categorizes invoices as Current, 1–30 days overdue, 31–60 days overdue, 61–90 days overdue, or Over 90 days overdue to help prioritize collections. Additionally, each invoice contains a detailed history log that records payment activities, status changes, and notes explaining why an invoice is overdue or remains unpaid, ensuring transparency and improving financial management.",
    images:      [
      "/projects/track-wise/img1.png",
      "/projects/track-wise/img2.png",
      "/projects/track-wise/img3.png",
      "/projects/track-wise/img4.png",
      "/projects/track-wise/img5.png",
      "/projects/track-wise/img6.png",
      "/projects/track-wise/img7.png",
      "/projects/track-wise/img8.png",
    ],
    category:    "Full Stack",
    platform:    "Website",
    techStack:   ["React", "Inertia.js", "TailwindCSS", "DaisyUI", "Vite", "Laravel", "MYSQL"],
    githubUrl:   "https://github.com/ShepherdBoyy/track-wise",
    isFeatured:  true,
  }),
  project({
    title:       "Community Connect",
    description: "A barangay management system for local government units.",
    details:     "Community Connect is a barangay management system that centralizes and simplifies the administration of resident information and barangay records. The system features an interactive dashboard that provides an overview of the barangay's demographics, including the total population, total number of male and female residents, and total households. It includes a comprehensive Barangay Officials Management module that allows administrators to add, update, view, and remove official records. The Resident Records module enables efficient management of resident information through organized digital profiles, making it easier to search, update, and maintain resident data. Additionally, the Household Records module keeps track of all households within the barangay, providing an accurate count and organized listing of household information. By digitizing these essential records, the system improves data organization, enhances administrative efficiency, and supports faster access to important barangay information.",
    images:      [
      "/projects/community-connect/img1.png",
      "/projects/community-connect/img2.png",
      "/projects/community-connect/img3.png",
      "/projects/community-connect/img4.png",
      "/projects/community-connect/img5.png",
      "/projects/community-connect/img6.png",
    ],
    category:    "Full Stack",
    platform:    "Website",
    techStack:   ["React", "Vite", "Bootstrap", "TailwindCSS", "Axios", "Node.js", "Express.js", "MySQL"],
    githubUrl:   "https://github.com/ShepherdBoyy/community-connect",
    isFeatured:  true,
  }),
  project({
    title:       "Currency Trace",
    description: "AI-powered app for identifying and exploring coins and banknotes.",
    details:     "Currency Trace is an AI-powered web application designed to help users learn about different coins and banknotes from around the world. By uploading an image of a currency, the system uses object detection to identify the coin or banknote and provides detailed information about its country of origin, denomination, historical background, and the meaning behind its design and symbols. In addition to currency identification, the application features a built-in currency converter that allows users to convert the detected currency into other supported currencies using current exchange rates. It also includes a comprehensive catalog of coins and banknotes, enabling users to browse and explore currency information even without uploading an image. Currency Trace combines machine learning, computer vision, and web technologies to provide an educational and interactive platform for currency recognition and exploration.",
    images:      [
      "/projects/currency-trace/img1.png",
      "/projects/currency-trace/img2.png",
      "/projects/currency-trace/img3.png",
      "/projects/currency-trace/img4.png",
      "/projects/currency-trace/img5.png",
    ],
    category:    "Full Stack",
    platform:    "Website",
    techStack:   ["React", "Vite", "Python", "Flask", "MySQL", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    githubUrl:   "https://github.com/ShepherdBoyy/currency-trace-frontend",
    isFeatured:  true,
  }),
  project({
    title:       "Study Compass (Thesis)",
    description: "AI-powered platform for analyzing and improving study habits",
    details:     "Study Compass is an AI-powered web application designed to evaluate students' study habits and provide personalized recommendations for improving their learning routines. After creating an account and completing a study habit assessment, the system analyzes various factors such as study hours, study environment, sleep duration, preferred study time, and study frequency using a trained machine learning model. Based on the analysis, users receive an overall assessment of their study habits along with tailored recommendations and a suggested weekly study schedule. The system also allows users to submit weekly progress reports, enabling it to generate updated recommendations based on their improvements and adherence to previous suggestions. Additionally, an interactive progress dashboard visualizes changes in key study habits over time, helping users monitor their development and build more effective and consistent study routines.",
    images:      [
      "/projects/study-compass/img1.png",
      "/projects/study-compass/img2.png",
      "/projects/study-compass/img3.png",
      "/projects/study-compass/img4.png",
      "/projects/study-compass/img5.png",
    ],
    category:    "Full Stack",
    platform:    "Website",
    techStack:   ["React", "Vite", "TailwindCSS", "Python", "Flask", "MySQL", "Machine Learning", "Articial Intelligence"],
    githubUrl:   "https://github.com/ShepherdBoyy/study-compass",
    isFeatured:  true,
  }),
  project({
    title:       "Outfitted",
    description: "Wardrobe planning web app that lets users browse curated outfits by category and style.",
    details:     "Outfitted is a fashion and wardrobe management platform that helps users plan their personal style with ease. The Wardrobe feature lets users pick a category — male, female, or unisex — then browse outfits by style, including Casual, Formal, Summer, Sports, Street, and Retro. From there, users can assign chosen outfits to specific days of the week using the Daily Outfit Planner, building a simple, visual weekly outfit schedule. The app also includes a Top Trends section, highlighting popular fashion movements — from Gen Z aesthetics like monochromatic dressing and clashing patterns, to nostalgic styles like chunky soles and vintage layering — offering inspiration alongside the planning tools. Together, these features make Outfitted both a practical styling tool and a source of fashion inspiration.",
    images:      [
      "/projects/outfitted/img1.png",
      "/projects/outfitted/img2.png",
      "/projects/outfitted/img3.png",
      "/projects/outfitted/img4.png",
      "/projects/outfitted/img5.png",
    ],
    category:    "Frontend",
    platform:    "Website",
    techStack:   ["React", "Vite"],
    githubUrl:   "https://github.com/ShepherdBoyy/outfitted",
    isFeatured:  false,
  }),
  project({
    title:       "Style Match",
    description: "AI-powered hairstyle recommendation application",
    details:     "StyleMatch is an AI-powered mobile application designed to help users discover hairstyles that best complement their facial features and appearance. Using computer vision and machine learning, the app analyzes a user’s face shape, skin tone, and gender from an uploaded image and generates personalized hairstyle recommendations tailored to those characteristics. The system aims to simplify hairstyle selection by providing suggestions that enhance facial balance, suit individual skin tones, and match the user’s overall style profile. With an intuitive mobile interface and real-time image analysis, StyleMatch offers a convenient and personalized grooming experience for both male and female users.",
    images:      [
      "/projects/style-match/img1.png",
      "/projects/style-match/img2.png",
      "/projects/style-match/img3.png",
      "/projects/style-match/img4.png",
    ],
    category:    "Full Stack",
    platform:    "Mobile",
    techStack:   ["React Native", "Expo", "TypeScript", "NativeWind", "Python", "Flask", "YOLO", "PyTorch", "InsightFace"],
    githubUrl:   "https://github.com/ShepherdBoyy/style-match",
    isFeatured:  false,
  }),
]

export const featuredProjects: Project[] = projects.filter(p => p.isFeatured)

export const getProjectBySlug = (slug: string): Project | undefined =>
    projects.find(p => p.slug === slug)

export const getPreviousProject = (slug: string): Project | undefined => {
    const index = projects.findIndex(p => p.slug === slug)
    return index > 0 ? projects[index - 1] : undefined
}

export const getNextProject = (slug: string): Project | undefined => {
    const index = projects.findIndex(p => p.slug === slug)
    return index < projects.length - 1 ? projects[index + 1] : undefined
}

export const getCategories = (): string[] => {
    const categories = projects.map(p => p.category)
    return ["All", ...Array.from(new Set(categories))]
}

export const getPlatforms = (): string[] => {
    const platforms = projects.map(p => p.platform)
    return ["All", ...Array.from(new Set(platforms))]
}