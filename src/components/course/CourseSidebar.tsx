import {
  Award,
  BookOpen,
  FileText,
  LockKeyhole,
  UserRound,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseById, type CourseDetail } from "../../config/courseService";

export default function CourseSidebar({ course: propCourse }: { course?: CourseDetail }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = propCourse || getCourseById(id || 1)!;
  const sidebar = course.sidebar;
  const lessons = sidebar?.lessons || [];
  const instructor = sidebar?.instructor;

  const featureIcons = [
    <BookOpen size={10} key="book" />,
    <FileText size={10} key="file" />,
    <Award size={10} key="award" />,
    <LockKeyhole size={10} key="lock" />,
  ];

  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-[12px]
        border
        border-[#E1E3E7]
        bg-white
        p-4
        shadow-[0_8px_25px_rgba(0,0,0,.08)]
        sm:p-5
      "
    >
      {/* ================= LESSONS ================= */}

      <h2 className="text-[11px] font-bold text-[#17191D] sm:text-xs">
        {sidebar?.lessonTitle || `${course.lessonsCount} Lessons`} ({sidebar?.totalDuration || course.duration})
      </h2>

      <div className="mt-4 space-y-3">
        {lessons.map((lesson, idx) => (
          <LessonRow
            key={lesson.number || idx}
            number={lesson.number || String(idx + 1).padStart(2, "0")}
            title={lesson.title}
            duration={lesson.duration}
          />
        ))}
      </div>

      {sidebar?.moreLessonsText && (
        <p className="mt-3 text-[8px] text-gray-500">
          {sidebar.moreLessonsText}
        </p>
      )}

      {/* ================= CTA ================= */}

      <p className="mt-4 text-[8px] leading-[1.55] text-gray-500">
        Ready to Dive In? Enroll Now and Start
        <br />
        Building Your Digital Future!
      </p>

      <div className="mt-1.5 flex items-baseline">
        <span className="text-[20px] font-bold tracking-tight text-[#064DE8]">
          ${sidebar?.price ?? course.price}
        </span>

        <span className="ml-1 text-[8px] text-gray-500">
          {sidebar?.priceLabel || "/Lifetime"}
        </span>
      </div>

      <button
        type="button"
        className="
          mt-2.5
          w-full
          rounded-full
          bg-[#C8FF00]
          py-2
          text-[9px]
          font-semibold
          text-[#1B2500]
          transition
          hover:bg-[#B7EF00]
          focus:outline-none
          focus:ring-2
          focus:ring-[#C8FF00]/40
        "
      >
        {sidebar?.enrollText || "Enroll Now"}
      </button>

      {/* ================= COURSE INCLUDE ================= */}

      <h3 className="mt-5 text-[10px] font-bold text-[#17191D]">
        This course include
      </h3>

      <div className="mt-3 space-y-2.5">
        {(sidebar?.includes || []).map((feature, idx) => (
          <Feature key={idx} icon={featureIcons[idx % featureIcons.length]}>
            {feature}
          </Feature>
        ))}
      </div>

      <div className="my-4 border-t border-gray-200" />

      {/* ================= INSTRUCTOR ================= */}

      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#E8EAED]">
          {instructor?.avatar ? (
            <img
              src={instructor.avatar}
              alt={instructor.name}
              onError={(e) => {
                e.currentTarget.src = "/images/student_png.webp";
              }}
              className="h-full w-full object-cover"
            />
          ) : (
            <UserRound
              size={15}
              className="text-gray-500"
            />
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-[9px] font-semibold text-[#202329]">
            {instructor?.name || course.creator}
          </p>

          <p className="text-[7px] text-gray-500">
            {instructor?.role || course.creatorRole}
          </p>
        </div>
      </div>

      <p className="mt-3 text-[7px] leading-[1.6] text-gray-500">
        {instructor?.description || "A professional creative studio focused on modern UI/UX design, digital products and visual experiences."}
      </p>

      <button
        type="button"
        onClick={() => {
          const creatorName = instructor?.name || course.creator;
          navigate(`/creators?creator=${encodeURIComponent(creatorName)}`);
        }}
        className="
          mt-2
          rounded-full
          border
          border-gray-300
          px-3
          py-1
          text-[7px]
          text-gray-600
          transition
          hover:border-gray-400
          hover:bg-gray-50
        "
      >
        See Full Profile
      </button>
    </div>
  );
}

/* ================= LESSON ROW ================= */

function LessonRow({
  number,
  title,
  duration,
}: {
  number: string;
  title: string;
  duration: string;
}) {
  return (
    <div className="flex items-start gap-2 text-[7px] sm:text-[8px]">
      {/* Number */}
      <span className="w-4 shrink-0 text-gray-500">
        {number}
      </span>

      {/* Title */}
      <div className="min-w-0 flex-1">
        <p className="font-medium leading-[1.35] text-[#30343A]">
          {title}
        </p>
      </div>

      {/* Duration */}
      <span className="shrink-0 text-[7px] text-[#064DE8]">
        {duration}
      </span>
    </div>
  );
}

/* ================= FEATURE ================= */

function Feature({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-[8px] text-gray-600">
      <span className="shrink-0 text-[#064DE8]">
        {icon}
      </span>

      <span>{children}</span>
    </div>
  );
}