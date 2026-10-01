import {
  BarChart3,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  Star,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Avatars from "../components/UI/Avatars";

import {
  getCourseListingItems,
  getCategories,
  type CourseListingItem,
} from "../config/courseService";

export type Course = CourseListingItem;

export const courses: Course[] = getCourseListingItems();

const categories = getCategories();
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const PAGE_SIZE = 12;

type Sort = "relevant" | "rating" | "low" | "high" | "newest";

export default function CourseListingPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [sort, setSort] = useState<Sort>("relevant");
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return [...courses]
      .filter(
        (c) =>
          (!q ||
            `${c.title} ${c.creator} ${c.category}`
              .toLowerCase()
              .includes(q)) &&
          (category === "All" || c.category === category) &&
          (level === "All" || c.level === level)
      )
      .sort((a, b) =>
        sort === "rating"
          ? b.rating - a.rating
          : sort === "low"
            ? a.price - b.price
            : sort === "high"
              ? b.price - a.price
              : sort === "newest"
                ? b.id - a.id
                : Number(Boolean(b.featured)) -
                  Number(Boolean(a.featured))
      );
  }, [search, category, level, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / PAGE_SIZE)
  );

  const currentPage = Math.min(page, totalPages);

  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const activeCount =
    Number(!!search.trim()) +
    Number(category !== "All") +
    Number(level !== "All");

  const clear = () => {
    setSearch("");
    setCategory("All");
    setLevel("All");
    setSort("relevant");
    setPage(1);
  };

  const setAndReset = (fn: () => void) => {
    fn();
    setPage(1);
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#20232A]">
      {/* =========================================================
          HERO / SEARCH
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#123FDF]">
        <Grid />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[154px]
            w-full
            max-w-[1440px]
            flex-col
            items-center
            justify-center
            px-4
            py-7
            min-[390px]:px-5
            sm:px-7
            md:px-10
            lg:px-12
            xl:px-16
            2xl:px-20
          "
        >
          <h1
            className="
              text-center
              text-[23px]
              font-bold
              leading-tight
              tracking-[-0.5px]
              text-white
              min-[390px]:text-[25px]
              sm:text-[29px]
              md:text-[32px]
            "
          >
            Find Your Next Course
          </h1>

          {/* Search */}
          <div
            className="
              mt-3
              flex
              w-full
              max-w-[430px]
              items-center
              gap-2
              min-[375px]:gap-2
              sm:max-w-[500px]
            "
          >
            <div className="relative min-w-0 flex-1">
              <Search
                size={14}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                value={search}
                onChange={(e) =>
                  setAndReset(() => setSearch(e.target.value))
                }
                placeholder="Search courses..."
                className="
                  h-[36px]
                  w-full
                  rounded-full
                  border
                  border-white/20
                  bg-white
                  px-9
                  pr-8
                  text-[12px]
                  outline-none
                  placeholder:text-gray-400
                  focus:ring-2
                  focus:ring-[#C7FF00]
                  min-[390px]:text-[13px]
                  sm:text-[14px]
                "
              />

              {search && (
                <button
                  type="button"
                  onClick={() =>
                    setAndReset(() => setSearch(""))
                  }
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                    transition
                    hover:text-gray-700
                  "
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Desktop search category */}
            <select
              value={category === "All" ? "" : category}
              onChange={(e) =>
                setAndReset(() =>
                  setCategory(e.target.value || "All")
                )
              }
              className="
                hidden
                h-[36px]
                w-[94px]
                shrink-0
                appearance-none
                rounded-full
                bg-[#C7FF00]
                px-3
                text-[12px]
                text-[#263000]
                outline-none
                sm:block
                md:w-[100px]
              "
            >
              <option value="">Courses</option>

              {categories
                .filter((x) => x !== "All")
                .map((x) => (
                  <option key={x}>{x}</option>
                ))}
            </select>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <section
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-6
          min-[390px]:px-5
          min-[390px]:py-7
          sm:px-7
          md:px-10
          lg:px-12
          lg:py-9
          xl:px-16
          2xl:px-20
        "
      >
        {/* =====================================================
            FILTER TOOLBAR
        ====================================================== */}
        <div
          className="
            flex
            w-full
            flex-wrap
            items-center
            justify-between
            gap-2
            sm:gap-3
          "
        >
          {/* Left controls */}
          <div className="flex min-w-0 flex-wrap gap-2">
            {/* Filter */}
            <button
              type="button"
              onClick={() => setFilterOpen((v) => !v)}
              className={`
                inline-flex
                h-[30px]
                shrink-0
                items-center
                gap-1.5
                rounded-full
                border
                px-3
                text-[11px]
                font-medium
                transition
                min-[390px]:text-[12px]
                ${
                  activeCount
                    ? "border-[#123FDF] bg-[#EEF2FF] text-[#123FDF]"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }
              `}
            >
              <Filter size={11} />

              <span>Filter</span>

              {activeCount > 0 && (
                <b
                  className="
                    flex
                    h-4
                    min-w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-[#123FDF]
                    px-1
                    text-[10px]
                    text-white
                  "
                >
                  {activeCount}
                </b>
              )}
            </button>

            {/* Level */}
            <SmallSelect
              value={level}
              onChange={(v) =>
                setAndReset(() => setLevel(v))
              }
              options={levels}
              label="Level"
              icon={<BarChart3 size={11} />}
            />

            {/* Category */}
            <SmallSelect
              value={category}
              onChange={(v) =>
                setAndReset(() => setCategory(v))
              }
              options={categories}
              label="Category"
              mobileHide
            />
          </div>

          {/* Sort */}
          <SmallSelect
            value={sort}
            onChange={(v) =>
              setAndReset(() => setSort(v as Sort))
            }
            options={[
              "relevant",
              "rating",
              "low",
              "high",
              "newest",
            ]}
            labels={{
              relevant: "Most relevant",
              rating: "Top rated",
              low: "Price: Low",
              high: "Price: High",
              newest: "Newest",
            }}
            label="Sort"
          />
        </div>

        {/* =====================================================
            EXPANDED FILTER
        ====================================================== */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ${
              filterOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              mt-4
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              p-3
              min-[390px]:p-4
              sm:p-5
            "
          >
            <div className="flex flex-wrap gap-1.5">
              {categories.map((x) => (
                <Chip
                  key={x}
                  active={category === x}
                  onClick={() =>
                    setAndReset(() => setCategory(x))
                  }
                >
                  {x}
                </Chip>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {levels.map((x) => (
                <Chip
                  key={x}
                  active={level === x}
                  onClick={() =>
                    setAndReset(() => setLevel(x))
                  }
                >
                  {x}
                </Chip>
              ))}
            </div>

            {activeCount > 0 && (
              <button
                type="button"
                onClick={clear}
                className="
                  mt-3
                  text-[12px]
                  font-semibold
                  text-[#123FDF]
                  hover:underline
                "
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* =====================================================
            CATEGORY CHIPS
        ====================================================== */}
        <div
          className="
            mt-4
            flex
            gap-2
            overflow-x-auto
            pb-1
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {categories
            .filter((x) => x !== "All")
            .map((x) => (
              <button
                key={x}
                type="button"
                onClick={() =>
                  setAndReset(() => setCategory(x))
                }
                className={`
                  shrink-0
                  rounded-full
                  px-3
                  py-1.5
                  text-[11px]
                  font-medium
                  transition
                  min-[390px]:text-[12px]
                  ${
                    category === x
                      ? "bg-[#C7FF00] text-[#263000]"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }
                `}
              >
                {x}
              </button>
            ))}
        </div>

        {/* =====================================================
            RESULT HEADER
        ====================================================== */}
        <div
          className="
            mt-6
            flex
            items-end
            justify-between
            gap-3
            min-[390px]:mt-7
          "
        >
          <div className="min-w-0">
            <p
              className="
                text-[14px]
                font-semibold
                text-gray-900
                min-[390px]:text-[15px]
              "
            >
              Explore courses
            </p>

            <p className="mt-0.5 text-[11px] text-gray-500 min-[390px]:text-[12px]">
              Showing <b>{visible.length}</b> of{" "}
              <b>{filtered.length}</b> courses
            </p>
          </div>

          {activeCount > 0 && (
            <button
              type="button"
              onClick={clear}
              className="
                hidden
                shrink-0
                items-center
                gap-1
                text-[12px]
                text-gray-500
                transition
                hover:text-[#123FDF]
                sm:flex
              "
            >
              <X size={11} />
              Clear filters
            </button>
          )}
        </div>

        {/* =====================================================
            COURSE GRID
        ====================================================== */}
        {visible.length ? (
          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-4
              min-[390px]:gap-5
              sm:grid-cols-2
              sm:gap-5
              lg:grid-cols-3
              lg:gap-6
              xl:gap-7
            "
          >
            {visible.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        ) : (
          <Empty onReset={clear} />
        )}

        {/* =====================================================
            PAGINATION
        ====================================================== */}
        {filtered.length > 0 && (
          <Pagination
            page={currentPage}
            total={totalPages}
            onChange={setPage}
          />
        )}
      </section>
    </main>
  );
}

/* =============================================================
   COURSE CARD
============================================================= */

function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="
        block
        h-full
        min-w-0
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#123FDF]
        focus-visible:ring-offset-2
      "
    >
      <article
        className="
          group
          relative
          flex
          h-full
          min-h-[350px]
          min-w-0
          flex-col
          overflow-hidden
          rounded-[16px]
          border
          border-gray-200
          bg-white
          p-[8px]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-gray-300
          hover:shadow-[0_16px_35px_rgba(16,24,40,.10)]
        "
      >
        {/* Featured */}
        {course.featured && (
          <span
            className="
              absolute
              left-4
              top-4
              z-10
              rounded-full
              bg-[#C7FF00]
              px-2.5
              py-1
              text-[9px]
              font-bold
              text-[#263000]
              min-[390px]:text-[10px]
            "
          >
            Featured
          </span>
        )}

        {/* Image */}
        <div
          className="
            relative
            h-[145px]
            w-full
            overflow-hidden
            rounded-[11px]
            bg-gray-100
            min-[390px]:h-[154px]
            sm:h-[150px]
            lg:h-[154px]
            xl:h-[160px]
          "
        >
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/images/course-1.jpg";
            }}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-[1.05]
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />

          {/* Meta */}
          <div
            className="
              absolute
              bottom-2
              left-2
              right-2
              grid
              grid-cols-3
              gap-1
            "
          >
            <Meta>{course.lessons}</Meta>
            <Meta>{course.duration}</Meta>
            <Meta>{course.comments}</Meta>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col px-1 pt-3">
          {/* Title + Rating */}
          <div className="flex min-w-0 items-start justify-between gap-2">
            <h3
              className="
                min-w-0
                flex-1
                truncate
                text-[15px]
                font-semibold
                leading-5
                text-gray-900
                min-[390px]:text-[16px]
                sm:text-[16px]
                lg:text-[17px]
              "
            >
              {course.title}
            </h3>

            <span
              className="
                flex
                shrink-0
                items-center
                gap-1
                text-[12px]
                text-gray-500
                min-[390px]:text-[13px]
              "
            >
              {course.rating.toFixed(1)}

              <Star
                size={12}
                fill="#D1D5DB"
                className="text-gray-300"
              />
            </span>
          </div>

          {/* Creator */}
          <p className="mt-0.5 text-[10px] text-gray-500 min-[390px]:text-[11px]">
            by{" "}
            <span className="text-[#3858D6]">
              {course.creator}
            </span>
          </p>

          {/* Level + Avatars */}
          <div
            className="
              mt-3
              flex
              min-w-0
              items-center
              justify-between
              gap-2
            "
          >
            <span
              className="
                flex
                h-[25px]
                shrink-0
                items-center
                gap-1.5
                rounded-full
                bg-gray-100
                px-2
                text-[10px]
                text-gray-600
                min-[390px]:px-2.5
                min-[390px]:text-[11px]
              "
            >
              <BarChart3 size={11} />
              {course.level}
            </span>

            <div className="min-w-0">
              <Avatars />
            </div>
          </div>

          {/* Price */}
          <div className="mt-auto pt-4">
            <b
              className="
                text-[17px]
                text-[#064DE8]
                min-[390px]:text-[18px]
              "
            >
              ${course.price}
            </b>

            <span className="ml-1 text-[10px] text-gray-500 min-[390px]:text-[11px]">
              /lifetime
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* =============================================================
   META
============================================================= */

function Meta({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        min-w-0
        truncate
        rounded-full
        bg-white/75
        px-1
        py-[4px]
        text-center
        text-[8px]
        font-medium
        text-gray-700
        backdrop-blur-[5px]
        min-[390px]:px-1.5
        min-[390px]:text-[9px]
        sm:text-[10px]
      "
    >
      {children}
    </span>
  );
}

/* =============================================================
   SMALL SELECT
============================================================= */

function SmallSelect({
  value,
  onChange,
  options,
  label,
  labels,
  icon,
  mobileHide = false,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  label: string;
  labels?: Record<string, string>;
  icon?: React.ReactNode;
  mobileHide?: boolean;
}) {
  return (
    <div className={mobileHide ? "hidden sm:block" : ""}>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            h-[30px]
            max-w-[145px]
            appearance-none
            rounded-full
            border
            border-gray-200
            bg-white
            py-0
            pl-3
            pr-7
            text-[11px]
            font-medium
            text-gray-600
            outline-none
            transition
            focus:border-[#123FDF]
            focus:ring-2
            focus:ring-[#123FDF]/10
            min-[390px]:text-[12px]
          "
        >
          {options.map((x) => (
            <option key={x} value={x}>
              {labels?.[x] ?? (x === "All" ? label : x)}
            </option>
          ))}
        </select>

        {icon && (
          <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2">
            {icon}
          </span>
        )}

        <ChevronDown
          size={11}
          className="
            pointer-events-none
            absolute
            right-2
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        />
      </div>
    </div>
  );
}

/* =============================================================
   CHIP
============================================================= */

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        rounded-full
        border
        px-2.5
        py-1.5
        text-[10px]
        font-medium
        transition
        min-[390px]:text-[11px]
        ${
          active
            ? "border-[#123FDF] bg-[#123FDF] text-white"
            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
        }
      `}
    >
      {children}
    </button>
  );
}

/* =============================================================
   PAGINATION
============================================================= */

function Pagination({
  page,
  total,
  onChange,
}: {
  page: number;
  total: number;
  onChange: (p: number) => void;
}) {
  const items = pages(page, total);

  return (
    <nav
      className="
        mt-8
        flex
        w-full
        items-center
        justify-center
        gap-0.5
        overflow-x-auto
        px-1
        pb-1
        min-[390px]:gap-1
        sm:gap-1.5
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
      aria-label="Course pagination"
    >
      {/* Previous */}
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          text-gray-500
          transition
          hover:border-gray-300
          hover:bg-gray-50
          disabled:opacity-30
        "
      >
        <ChevronLeft size={14} />
      </button>

      {/* Pages */}
      {items.map((x, i) =>
        x === "..." ? (
          <span
            key={`dots-${i}`}
            className="
              flex
              h-8
              w-6
              shrink-0
              items-center
              justify-center
              text-[12px]
              text-gray-400
              min-[390px]:text-[13px]
            "
          >
            ...
          </span>
        ) : (
          <button
            type="button"
            key={x}
            onClick={() => onChange(x)}
            className={`
              flex
              h-8
              min-w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              px-2
              text-[12px]
              font-medium
              transition
              min-[390px]:text-[13px]
              ${
                x === page
                  ? "bg-[#123FDF] text-white"
                  : "text-gray-600 hover:bg-[#EEF2FF] hover:text-[#123FDF]"
              }
            `}
          >
            {x}
          </button>
        )
      )}

      {/* Next */}
      <button
        type="button"
        disabled={page === total}
        onClick={() => onChange(page + 1)}
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          text-gray-500
          transition
          hover:border-gray-300
          hover:bg-gray-50
          disabled:opacity-30
        "
      >
        <ChevronRight size={14} />
      </button>
    </nav>
  );
}

/* =============================================================
   PAGE NUMBER GENERATOR
============================================================= */

function pages(
  current: number,
  total: number
): (number | "...")[] {
  if (total <= 6) {
    return Array.from(
      { length: total },
      (_, i) => i + 1
    );
  }

  if (current <= 3) {
    return [1, 2, 3, 4, "...", total];
  }

  if (current >= total - 2) {
    return [
      1,
      "...",
      total - 3,
      total - 2,
      total - 1,
      total,
    ];
  }

  return [
    1,
    "...",
    current - 1,
    current,
    current + 1,
    "...",
    total,
  ];
}

/* =============================================================
   EMPTY STATE
============================================================= */

function Empty({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div
      className="
        mt-8
        flex
        min-h-[260px]
        w-full
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-gray-300
        bg-gray-50
        px-5
        text-center
      "
    >
      <Search size={20} className="text-[#123FDF]" />

      <h3 className="mt-3 text-[16px] font-semibold min-[390px]:text-[17px]">
        No courses found
      </h3>

      <p className="mt-1 text-[10px] text-gray-500">
        Try another keyword or clear your filters.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="
          mt-4
          rounded-full
          bg-[#123FDF]
          px-4
          py-2
          text-[11px]
          text-white
          transition
          hover:bg-[#0D35C0]
          min-[390px]:text-[12px]
        "
      >
        Clear all filters
      </button>
    </div>
  );
}

/* =============================================================
   GRID BACKGROUND
============================================================= */

function Grid() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[.16]
      "
      style={{
        backgroundImage:
          "linear-gradient(to right,rgba(255,255,255,.75) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.75) 1px,transparent 1px)",
        backgroundSize: "57px 57px",
      }}
    />
  );
}
