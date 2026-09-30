import {
  Video,
} from "lucide-react";
import { useOutletContext, useParams } from "react-router-dom";
import { getCourseById, type CourseDetail } from "../../config/courseService";

export default function Lessons() {
  const { id } = useParams();
  const context = useOutletContext<{ course?: CourseDetail }>();
  const course = context?.course || getCourseById(id || 1)!;

  const modules = course.lessons?.modules || [];
  const lessonTitle = course.lessons?.title || "Explore the Modules";
  const lessonDesc = course.lessons?.description || "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.";
  const lessonContentDesc = course.lessons?.lessonContent?.description || "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources and practical assignments.";
  const progressPercentage = course.lessons?.progress?.percentage ?? 55;
  const progressLabel = course.lessons?.progress?.label || "Learning Progress";

  return (
    <div className="pt-1">
      <h2 className="text-sm font-bold text-gray-900">
        {lessonTitle}
      </h2>

      <p className="mt-3 max-w-2xl text-[10px] leading-5 text-gray-500">
        {lessonDesc}
      </p>

      <h3 className="mt-6 text-xs font-bold">
        Lesson List
      </h3>

      <div className="mt-4 space-y-3">
        {modules.map((lesson) => (
          <div
            key={lesson.module}
            className="flex gap-3"
          >
            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c8ff00]">
              <Video
                size={17}
                strokeWidth={2}
              />
            </div>

            <div>
              <h4 className="text-[10px] font-semibold text-gray-900">
                {lesson.module}: {lesson.title}
              </h4>

              <p className="mt-1 text-[9px] leading-4 text-gray-500">
                {lesson.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lesson Content */}
      <section className="mt-7">
        <h3 className="text-xs font-bold">
          Lesson Content
        </h3>

        <p className="mt-3 text-[10px] leading-5 text-gray-500">
          {lessonContentDesc}
        </p>
      </section>

      {/* Progress */}
      <section className="mt-7">
        <h3 className="text-xs font-bold">
          Lesson Progress Tracking
        </h3>

        <p className="mt-2 text-[10px] leading-5 text-gray-500">
          Witness your growth as you complete lessons, with an
          intuitive progress tracking feature guiding you through
          your learning journey.
        </p>

        <div className="mt-4 max-w-xl rounded-xl border border-gray-200 p-4">
          <div className="flex justify-between text-[9px]">
            <span>{progressLabel}</span>
            <span className="font-bold">{progressPercentage}%</span>
          </div>

          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-[#c8ff00]"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}