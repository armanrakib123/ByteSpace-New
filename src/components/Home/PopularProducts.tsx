import React, { useEffect, useMemo, useState } from "react";
import { Star, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import Avatars from "../UI/Avatars";
import coursesJson from "../../config/courses.json";

interface Category {
  name: string;
  featured?: boolean;
}

interface Course {
  id: number;
  image: string;
  title: string;
  creator: string;
  rating: number | string;
  lessons: string;
  duration: string;
  comments: string;
  category?: string;
  level?: string;
  price?: number;
  featured?: boolean;
}

/* =========================================================
   DATA FORMATTER FOR courses.json
========================================================= */

const formatCourseData = (item: any): Course => ({
  id: item.id,
  image: item.image || item.hero?.previewImage || "/images/course-1.jpg",
  title: item.title,
  creator: item.creator,
  rating: Number(item.rating) || 0,
  lessons: typeof item.lessons === "string" ? item.lessons : `${item.lessonsCount || 0} Lessons`,
  duration: item.duration || "",
  comments: typeof item.comments === "string" ? item.comments : `${item.reviewCount || item.reviews?.totalReviews || 0} Comments`,
  category: item.category,
  level: item.level || "Beginner",
  price: Number(item.price) || 0,
  featured: Boolean(item.featured),
});

export const courses: Course[] = (coursesJson as any[]).map(formatCourseData);

/* =========================================================
   CATEGORIES
========================================================= */

const categories: Category[] = [
  { name: "Featured", featured: true },
  { name: "Drawing & Painting" },
  { name: "Marketing" },
  { name: "Animation" },
  { name: "Social Media" },
  { name: "UI/UX Design" },
  { name: "Creative Marketing" },
  { name: "Digital Illustration" },
  { name: "Film & Video" },
  { name: "Crafts" },
  { name: "Freelance & Entrepreneurship" },
  { name: "Graphic Design" },
  { name: "Photography" },
  { name: "Productivity" },
  { name: "Web Development" },
  { name: "Data Science" },
  { name: "Cooking" },
];

/* =========================================================
   COURSE CARD
========================================================= */

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="block">
      <article
        className="
          group
          w-full
          overflow-hidden
          rounded-[16px]
          border
          border-gray-300
          bg-white
          p-[10px]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-gray-400
          hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
        "
      >
        {/* COURSE IMAGE */}
        <div className="relative h-[142px] w-full overflow-hidden rounded-[11px]">
          <img
            src={course.image}
            alt={course.title}
            onError={(e) => {
              e.currentTarget.src = "/images/course-1.jpg";
            }}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-[1.04]
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

          {/* IMAGE META */}
          <div className="absolute bottom-[10px] left-2 right-2 flex items-center justify-between gap-1">
            <span
              className="
                rounded-full
                bg-white/75
                px-2.5
                py-[4px]
                text-[8px]
                font-medium
                text-gray-700
                backdrop-blur-[4px]
              "
            >
              {course.lessons}
            </span>

            <span
              className="
                rounded-full
                bg-white/75
                px-2.5
                py-[4px]
                text-[8px]
                font-medium
                text-gray-700
                backdrop-blur-[4px]
              "
            >
              {course.duration}
            </span>

            <span
              className="
                rounded-full
                bg-white/75
                px-2.5
                py-[4px]
                text-[8px]
                font-medium
                text-gray-700
                backdrop-blur-[4px]
              "
            >
              {course.comments}
            </span>
          </div>
        </div>

        {/* COURSE INFO */}
        <div className="px-0.5 pt-3">
          {/* Title + Rating */}
          <div className="flex items-center justify-between gap-2">
            <h3
              className="
                min-w-0
                truncate
                text-[14px]
                font-semibold
                leading-5
                text-gray-900
              "
            >
              {course.title}
            </h3>

            <div className="flex shrink-0 items-center gap-1">
              <span className="text-[11px] text-gray-500">
                {course.rating}
              </span>

              <Star
                size={13}
                fill="#d1d5db"
                className="text-gray-300"
              />
            </div>
          </div>

          {/* Creator */}
          <p className="mt-[1px] text-[9px] text-gray-500">
            by{" "}
            <span className="text-[#3858d6]">
              {course.creator}
            </span>
          </p>

          {/* LEVEL + AVATARS */}
          <div className="mt-3 flex items-center justify-between gap-2">
            <div
              className="
                flex
                h-[25px]
                items-center
                gap-1.5
                rounded-full
                bg-gray-100
                px-2.5
              "
            >
              <BarChart3
                size={12}
                strokeWidth={2.2}
                className="text-gray-600"
              />

              <span className="text-[9px] text-gray-600">
                {course.level}
              </span>
            </div>

            <Avatars />
          </div>

          {/* PRICE */}
          <div className="mt-3 flex items-baseline gap-[2px]">
            <span className="text-[15px] font-bold text-[#064de8]">
              ${course.price}
            </span>

            <span className="text-[8px] text-gray-500">
              /lifetime
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

/* =========================================================
   HOME CATEGORIES + POPULAR PRODUCTS
========================================================= */

const PopularProducts = () => {
  const [coursesList, setCoursesList] = useState<Course[]>(courses);
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  /* =========================================================
     FETCH DATA FROM courses.json
  ========================================================== */

  useEffect(() => {
    let isMounted = true;

    fetch("/courses.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch courses.json");
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setCoursesList(data.map(formatCourseData));
        }
      })
      .catch((error) => {
        console.warn("Could not fetch /courses.json, using fallback courses:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  /* =========================================================
     FILTER COURSES (MAX 6 CARDS)
  ========================================================== */

  const filteredCourses = useMemo(() => {
    let result: Course[] = [];

    if (selectedCategory === "Featured") {
      result = coursesList.filter((course) => Boolean(course.featured));
    } else {
      const target = selectedCategory.trim().toLowerCase();

      result = coursesList.filter((course) => {
        const cat = (course.category || "").trim().toLowerCase();
        if (cat === target) return true;

        // Smart aliases for UI category filters to match courses.json data
        if (target === "web development" && (cat === "it & software" || course.title.toLowerCase().includes("web"))) return true;
        if (target === "data science" && (course.title.toLowerCase().includes("data") || cat.includes("data"))) return true;
        if (target === "productivity" && (course.title.toLowerCase().includes("productivity") || course.title.toLowerCase().includes("time management"))) return true;
        if (target === "freelance & entrepreneurship" && (cat === "business" || course.title.toLowerCase().includes("startup"))) return true;
        if (target === "film & video" && (course.title.toLowerCase().includes("video") || cat === "animation")) return true;
        if (target === "digital illustration" && (cat === "drawing & painting" || cat === "graphic design")) return true;

        return false;
      });
    }

    // Maximum 6 cards show korbe
    return result.slice(0, 6);
  }, [selectedCategory, coursesList]);

  return (
    <main className="min-h-screen w-full bg-white">

      {/* =====================================================
          CATEGORY SECTION
      ====================================================== */}

      <section className="w-full bg-white px-5 py-12 sm:px-8 md:py-14 lg:px-10">
        <div className="mx-auto w-full max-w-[1100px]">

          {/* HEADING */}
          <div className="flex justify-center">
            <h2
              className="
                w-fit
                max-w-[530px]
                px-8
                py-1
                text-center
                text-[34px]
                font-bold
                leading-[1.12]
                tracking-[-1px]
                text-[#080d20]
                sm:text-[40px]
                md:text-[42px]
              "
            >
              Discover Your Passion,
              <br />
              Build Your Skills
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-2 flex justify-center">
            <p
              className="
                max-w-[665px]
                px-1
                py-[2px]
                text-center
                text-[11px]
                leading-[1.8]
                text-[#92949c]
                sm:text-[12px]
              "
            >
              At Bytespace Courses, we bring you closer to life-changing
              knowledge. Explore a variety of courses across different
              <br className="hidden sm:block" />
              fields, from technology to the arts, and make a difference in
              your career and life.
            </p>
          </div>

          {/* CATEGORY FILTER */}
          <div className="mx-auto mt-7 flex max-w-[800px] flex-wrap items-center justify-center gap-x-2.5 gap-y-3">

            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() =>
                  setSelectedCategory(category.name)
                }
                className={`
                  rounded-full
                  px-4
                  py-[8px]
                  text-[11px]
                  font-normal
                  leading-none
                  transition-all
                  duration-200
                  ${selectedCategory === category.name
                    ? `
                        bg-[#c8ff00]
                        text-[#101010]
                        hover:bg-[#b8ef00]
                      `
                    : `
                        bg-[#f4f4f5]
                        text-[#484a51]
                        hover:bg-[#e9e9eb]
                        hover:text-[#111]
                      `
                  }
                `}
              >
                {category.name}
              </button>
            ))}

            {/* More */}
            <button
              type="button"
              className="
                rounded-full
                px-2
                py-[8px]
                text-[11px]
                font-normal
                text-[#0047ff]
                transition-colors
                duration-200
                hover:text-[#002db3]
              "
              onClick={() => {
                // More categories button
              }}
            >
              + More
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          COURSE CARDS
      ====================================================== */}

      <section
        className="
          mx-auto
          grid
          w-full
          max-w-[1150px]
          grid-cols-1
          gap-x-7
          gap-y-7
          px-5
          py-4
          sm:grid-cols-2
          sm:px-8
          lg:grid-cols-3
          lg:px-0
        "
      >
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))
        ) : (
          <div className="col-span-full flex min-h-[180px] items-center justify-center">
            <p className="text-sm text-gray-400">
              No courses available in this category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default PopularProducts;