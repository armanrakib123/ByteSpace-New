import coursesJson from "./courses.json";

export interface CourseLessonItem {
  title: string;
  duration: string;
  type?: string;
  preview?: boolean;
}

export interface CourseModule {
  module: string;
  title: string;
  description: string;
  lessons?: CourseLessonItem[];
}

export interface ReviewItem {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

export interface CourseReviewData {
  title: string;
  description: string;
  overallRating: number;
  totalReviews: number;
  ratingBreakdown: Record<string, number>;
  availableFilters: string[];
  items: ReviewItem[];
}

export interface CourseAboutData {
  description: string[];
  sneakPeek: string[];
  keyPoints: string[];
}

export interface CourseSidebarLesson {
  number: string;
  title: string;
  duration: string;
}

export interface CourseSidebarInstructor {
  name: string;
  role: string;
  avatar: string;
  description: string;
}

export interface CourseSidebarData {
  lessonTitle: string;
  totalDuration: string;
  lessons: CourseSidebarLesson[];
  moreLessonsText: string;
  price: number;
  priceLabel: string;
  enrollText: string;
  includes: string[];
  instructor: CourseSidebarInstructor;
}

export interface CourseHeroData {
  title: string;
  subtitle: string;
  instructor: string;
  level: string;
  rating: number;
  reviewText: string;
  studentsText: string;
  previewImage: string;
}

export interface CourseDetail {
  id: number;
  image: string;
  title: string;
  shortDescription: string;
  creator: string;
  creatorRole: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  reviewCount: number;
  students: number;
  lessonsCount: number;
  duration: string;
  price: number;
  currency: string;
  featured?: boolean;
  hero: CourseHeroData;
  sidebar: CourseSidebarData;
  about: CourseAboutData;
  lessons: {
    title: string;
    description: string;
    modules: CourseModule[];
    lessonContent?: {
      description: string;
      resources: string[];
    };
    progress?: {
      enabled: boolean;
      percentage: number;
      label: string;
    };
  };
  reviews: CourseReviewData;
}

export interface CourseListingItem {
  id: number;
  image: string;
  title: string;
  creator: string;
  rating: number;
  lessons: string;
  duration: string;
  comments: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  featured?: boolean;
}

export interface CreatorProfile {
  name: string;
  role: string;
  avatar: string;
  description: string;
  productsCount: number;
}

export const allCoursesData: CourseDetail[] = coursesJson as CourseDetail[];

export function getCourses(): CourseDetail[] {
  return allCoursesData;
}

export function getCourseById(id: number | string): CourseDetail | undefined {
  const numericId = Number(id);
  return allCoursesData.find((c) => c.id === numericId) || allCoursesData[0];
}

export function getCourseListingItems(): CourseListingItem[] {
  return allCoursesData.map((c) => ({
    id: c.id,
    image: c.image || c.hero?.previewImage || "/images/course-1.jpg",
    title: c.title,
    creator: c.creator,
    rating: Number(c.rating) || 0,
    lessons: `${c.lessonsCount || 0} Lessons`,
    duration: c.duration || "",
    comments: `${c.reviewCount || c.reviews?.totalReviews || 0} Comments`,
    category: c.category,
    level: c.level as "Beginner" | "Intermediate" | "Advanced",
    price: Number(c.price) || 0,
    featured: Boolean(c.featured),
  }));
}

export function getCategories(): string[] {
  const cats = Array.from(new Set(allCoursesData.map((c) => c.category).filter(Boolean)));
  return ["All", ...cats];
}

export function getAllCreators(): CreatorProfile[] {
  const creatorMap = new Map<string, CreatorProfile>();

  for (const c of allCoursesData) {
    if (!creatorMap.has(c.creator)) {
      creatorMap.set(c.creator, {
        name: c.creator,
        role: c.creatorRole || c.sidebar?.instructor?.role || "Creator",
        avatar: c.sidebar?.instructor?.avatar || "/images/student_png.webp",
        description:
          c.sidebar?.instructor?.description ||
          `Welcome to the creative world of ${c.creator}. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!`,
        productsCount: 1,
      });
    } else {
      const existing = creatorMap.get(c.creator)!;
      existing.productsCount += 1;
    }
  }

  return Array.from(creatorMap.values());
}

export function getCreatorByName(name?: string | null): CreatorProfile {
  const creators = getAllCreators();
  if (!name) return creators[0];
  const found = creators.find(
    (c) => c.name.toLowerCase() === name.trim().toLowerCase()
  );
  return found || creators[0];
}
