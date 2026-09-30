import { CheckCircle } from "lucide-react";
import { useOutletContext, useParams } from "react-router-dom";
import { getCourseById, type CourseDetail } from "../../config/courseService";

export default function About() {
  const { id } = useParams();
  const context = useOutletContext<{ course?: CourseDetail }>();
  const course = context?.course || getCourseById(id || 1)!;

  const descriptions = course.about?.description || [course.shortDescription];
  const sneakPeek = course.about?.sneakPeek && course.about.sneakPeek.length > 0
    ? course.about.sneakPeek
    : [course.image || "/images/course-1.jpg"];
  const points = course.about?.keyPoints || [];

  return (
    <div className="pt-1">
      <section>
        <h2 className="text-sm font-bold text-gray-900">
          Description
        </h2>

        <div className="mt-4 space-y-4 text-[11px] leading-5 text-gray-500">
          {descriptions.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Sneak Peek */}
      <section className="mt-8">
        <h2 className="text-sm font-bold">
          Sneak Peek
        </h2>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {sneakPeek.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="aspect-[1.5] overflow-hidden rounded-lg bg-gray-100"
            >
              <img
                src={image}
                alt={`Course preview ${index + 1}`}
                onError={(e) => {
                  e.currentTarget.src = course.image || "/images/course-1.jpg";
                }}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Key Points */}
      <section className="mt-8">
        <h2 className="text-sm font-bold">
          Key Points
        </h2>

        <div className="mt-4 space-y-2">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-2 text-[10px] text-gray-600"
            >
              <CheckCircle
                size={12}
                className="shrink-0 text-blue-600"
                fill="currentColor"
                color="white"
              />

              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}