import { useState } from "react";
import { Star } from "lucide-react";
import { useOutletContext, useParams } from "react-router-dom";
import { getCourseById, type CourseDetail } from "../../config/courseService";

export default function Reviews() {
  const { id } = useParams();
  const context = useOutletContext<{ course?: CourseDetail }>();
  const course = context?.course || getCourseById(id || 1)!;

  const [selectedFilter, setSelectedFilter] = useState("All ratings");

  const reviewsData = course.reviews;
  const title = reviewsData?.title || "What Learners Are Saying";
  const description =
    reviewsData?.description ||
    `Discover how learners are applying the concepts from ${course.title} to real projects and careers.`;
  const overallRating = reviewsData?.overallRating ?? course.rating ?? 4.5;
  const ratingBreakdown = reviewsData?.ratingBreakdown || {
    5: 80,
    4: 15,
    3: 3,
    2: 1,
    1: 1,
  };
  const availableFilters = reviewsData?.availableFilters || [
    "All ratings",
    "5",
    "4",
    "3",
    "2",
    "1",
  ];
  const items = reviewsData?.items || [];

  const filteredItems = items.filter((item) => {
    if (selectedFilter === "All ratings") return true;
    return String(item.rating) === selectedFilter;
  });

  return (
    <div className="pt-1">
      <h2 className="text-sm font-bold">
        {title}
      </h2>

      <p className="mt-3 text-[10px] leading-5 text-gray-500">
        {description}
      </p>

      {/* Rating */}
      <div className="mt-5 flex flex-col gap-5 rounded-xl border border-gray-200 p-4 sm:flex-row sm:items-center">
        <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-[#c8ff00]">
          <span className="text-lg font-bold">
            {overallRating.toFixed(1)}
          </span>

          <span className="text-[8px]">
            Rating
          </span>
        </div>

        <div className="flex-1 space-y-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <RatingBar
              key={rating}
              rating={rating}
              value={ratingBreakdown[String(rating)] ?? 0}
            />
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="mt-6">
        <h3 className="text-xs font-bold">
          Individual Reviews:
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {availableFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSelectedFilter(item)}
              className={[
                "rounded-full px-3 py-1.5 text-[9px] transition",
                selectedFilter === item
                  ? "bg-[#c8ff00] text-black font-semibold"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200",
              ].join(" ")}
            >
              {item === "All ratings"
                ? item
                : `${item} ★`}
            </button>
          ))}
        </div>
      </div>

      {/* Review cards */}
      <div className="mt-5 space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((review) => (
            <ReviewCard
              key={review.id || review.name}
              {...review}
            />
          ))
        ) : (
          <div className="rounded-xl border border-dashed border-gray-200 p-6 text-center text-[10px] text-gray-500">
            No reviews found for this rating.
          </div>
        )}
      </div>
    </div>
  );
}

function RatingBar({
  rating,
  value,
}: {
  rating: number;
  value: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-3 text-[8px] text-gray-500">
        {rating}
      </span>

      <Star size={9} fill="currentColor" />

      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full bg-[#c8ff00]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function ReviewCard({
  name,
  role,
  text,
  avatar,
  date,
  rating = 5,
}: {
  name: string;
  role: string;
  text: string;
  avatar?: string;
  date?: string;
  rating?: number;
}) {
  return (
    <article className="rounded-xl border border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>

          <div>
            <p className="text-[10px] font-semibold">
              {name}
            </p>

            <p className="text-[8px] text-gray-500">
              {role}
            </p>
          </div>
        </div>

        <span className="text-[8px] text-gray-400">
          {date || "recently"}
        </span>
      </div>

      <div className="mt-3 flex gap-0.5">
        {[1, 2, 3, 4, 5].map((item) => (
          <Star
            key={item}
            size={10}
            fill={item <= rating ? "currentColor" : "none"}
            className={item <= rating ? "text-[#20232A]" : "text-gray-300"}
          />
        ))}
      </div>

      <p className="mt-3 text-[9px] leading-5 text-gray-500">
        {text}
      </p>
    </article>
  );
}