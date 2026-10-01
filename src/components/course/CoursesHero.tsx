import {
  Play,
  Share2,
  Star,
  Users,
} from "lucide-react";
import { useParams } from "react-router-dom";
import CourseSidebar from "./CourseSidebar";
import { getCourseById, type CourseDetail } from "../../config/courseService";

export default function CourseHero({ course: propCourse }: { course?: CourseDetail }) {
  const { id } = useParams();
  const course = propCourse || getCourseById(id || 1)!;

  const title = course.hero?.title || course.title;
  const subtitle = course.hero?.subtitle || course.shortDescription;
  const instructor = course.hero?.instructor || course.creator;
  const level = course.hero?.level || course.level;
  const rating = course.hero?.rating ?? course.rating;
  const reviewText = course.hero?.reviewText || `${course.reviewCount || 0} reviews`;
  const studentsText = course.hero?.studentsText || `${course.students || 0} Students`;
  const previewImage = course.hero?.previewImage || course.image || "/images/course-1.jpg";

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-visible bg-[#063CE5]">
        {/* Grid Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
            `,
            backgroundSize: "49px 49px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pb-7 pt-7 sm:px-7 lg:px-8">
          {/* ================= COURSE HEADER ================= */}
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0">
              <h1 className="text-[22px] font-bold leading-tight tracking-[-0.4px] text-white sm:text-[24px] lg:text-[26px]">
                {title}
              </h1>

              <p className="mt-1 text-[12px] leading-4 text-white/90 sm:text-[13px]">
                {subtitle}
              </p>

              <p className="mt-2 text-[10px] text-white/80 sm:text-[11px]">
                by {instructor}
              </p>

              <div className="mt-2 flex flex-wrap gap-1.5">
                <Badge>
                  <span className="text-[10px]">●</span>
                  {level}
                </Badge>

                <Badge>
                  <Star size={9} fill="currentColor" />
                  {rating} ({reviewText})
                </Badge>

                <Badge>
                  <Users size={9} />
                  {studentsText}
                </Badge>
              </div>
            </div>

            {/* Share */}
            <button
              type="button"
              className="mt-0.5 flex shrink-0 items-center gap-1 rounded-full bg-[#C8FF00] px-3 py-1.5 text-[10px] font-semibold text-[#1B2500] transition hover:bg-[#D7FF35] sm:px-4 sm:text-[11px]"
            >
              <Share2 size={9} />
              Share
            </button>
          </div>

          {/* ================= DESKTOP HERO CONTENT ================= */}
          <div className="relative mt-5 lg:mt-6">
            {/* Video */}
            <div className="w-full lg:w-[calc(100%-350px)]">
              <div className="relative aspect-video w-full overflow-hidden rounded-[10px] bg-[#E9E9E9] sm:rounded-[12px]">
                <img
                  src={previewImage}
                  alt={title}
                  onError={(e) => {
                    e.currentTarget.src = "/images/course-1.jpg";
                  }}
                  className="h-full w-full object-cover"
                />

                {/* Play Button */}
                <button
                  type="button"
                  aria-label="Play course preview"
                  className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-[0_5px_18px_rgba(0,0,0,.18)] transition hover:scale-105 sm:h-12 sm:w-12"
                >
                  <Play
                    size={18}
                    fill="currentColor"
                    className="ml-0.5 text-[#888]"
                  />
                </button>
              </div>
            </div>

            {/* ================= DESKTOP SIDEBAR ================= */}
            <aside className="absolute right-0 top-0 hidden w-[330px] lg:block">
              <CourseSidebar course={course} />
            </aside>
          </div>

          {/* Mobile Sidebar */}
          <div className="mt-5 lg:hidden">
            <CourseSidebar course={course} />
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= BADGE ================= */

function Badge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-medium text-[#222] sm:px-3 sm:py-1.5 sm:text-[11px]">
      {children}
    </div>
  );
}