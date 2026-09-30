import {
  BarChart3,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  Heart,
  Search,
  Star,
  X,
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  getCourseListingItems,
  getCategories,
  getCreatorByName,
  type CourseListingItem,
} from "../config/courseService";

export type Course = CourseListingItem;

export const courses: Course[] = getCourseListingItems();

const avatars = [
  "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
  "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
  "https://img.daisyui.com/images/profile/demo/averagebulk@192.webp",
  "https://img.daisyui.com/images/profile/demo/wonderwoman@192.webp",
];

const categories = getCategories();

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const PAGE_SIZE = 6;
type Sort = "relevant" | "rating" | "low" | "high" | "newest";

export default function Creator() {
  const [searchParams] = useSearchParams();
  const creatorQuery = searchParams.get("creator") || searchParams.get("name");
  const currentCreator = getCreatorByName(creatorQuery);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [sort, setSort] = useState<Sort>("relevant");
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [following, setFollowing] = useState(false);

  const coursePool = useMemo(() => {
    if (creatorQuery) {
      const creatorMatches = courses.filter(
        (c) => c.creator.toLowerCase() === currentCreator.name.toLowerCase()
      );
      if (creatorMatches.length > 0) return creatorMatches;
    }
    return courses;
  }, [creatorQuery, currentCreator.name]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return [...coursePool]
      .filter(
        (course) =>
          (!q ||
            `${course.title} ${course.creator} ${course.category}`
              .toLowerCase()
              .includes(q)) &&
          (category === "All" || course.category === category) &&
          (level === "All" || course.level === level)
      )
      .sort((a, b) => {
        if (sort === "rating") return b.rating - a.rating;
        if (sort === "low") return a.price - b.price;
        if (sort === "high") return b.price - a.price;
        if (sort === "newest") return b.id - a.id;

        return (
          Number(Boolean(b.featured)) - Number(Boolean(a.featured)) ||
          a.id - b.id
        );
      });
  }, [coursePool, search, category, level, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const activeCount =
    Number(Boolean(search.trim())) +
    Number(category !== "All") +
    Number(level !== "All");

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setLevel("All");
    setSort("relevant");
    setPage(1);
  };

  const resetPage = (callback: () => void) => {
    callback();
    setPage(1);
  };

  const creatorProductsCount = courses.filter(
    (c) => c.creator.toLowerCase() === currentCreator.name.toLowerCase()
  ).length;

  return (
    <main className="min-h-screen w-full bg-white text-[#20232A]">
      {/* Creator Header */}
      <section className="relative overflow-hidden bg-[#123FDF]">
        <Grid />

        <div className="relative z-10 mx-auto max-w-[1180px] px-5 py-8 sm:px-8 lg:px-0 lg:py-9">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="h-[58px] w-[58px] shrink-0 overflow-hidden rounded-[15px] border border-white/30 bg-white/10 shadow-lg sm:h-[68px] sm:w-[68px]">
                <img
                  src={currentCreator.avatar || "/images/student_png.webp"}
                  alt={currentCreator.name}
                  onError={(e) => {
                    e.currentTarget.src = "/images/student_png.webp";
                  }}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-[22px] font-bold tracking-[-0.5px] text-white sm:text-[27px]">
                    {currentCreator.name}
                  </h1>

                  <span className="rounded-full bg-[#C7FF00] px-3 py-1 text-[8px] font-bold text-[#263000]">
                    Creator
                  </span>
                </div>

                <p className="mt-1 text-[10px] text-white/80 sm:text-[11px]">
                  {currentCreator.role}
                </p>
              </div>
            </div>

            <div className="max-w-[950px] space-y-1 text-[9px] leading-[1.7] text-white/85 sm:text-[10px]">
              <p>
                {currentCreator.description ||
                  `Welcome to the creative world of ${currentCreator.name}. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!`}
              </p>
              <p>
                Explore my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Stat
                  value={String(creatorProductsCount || currentCreator.productsCount || 1)}
                  label="Products"
                />
                <Stat value="12" label="Followers" />
              </div>

              <button
                type="button"
                onClick={() => setFollowing((value) => !value)}
                className={`inline-flex h-[30px] items-center justify-center rounded-full px-5 text-[9px] font-semibold transition ${
                  following
                    ? "bg-white text-[#123FDF]"
                    : "bg-[#C7FF00] text-[#263000] hover:bg-[#d5ff38]"
                }`}
              >
                {following ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Area */}
      <section className="mx-auto w-full max-w-[1240px] px-5 py-7 sm:px-7 lg:px-10 lg:py-9">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFilterOpen((value) => !value)}
              className={`inline-flex h-[30px] items-center gap-1.5 rounded-full border px-3 text-[9px] font-medium transition ${
                activeCount
                  ? "border-[#123FDF] bg-[#EEF2FF] text-[#123FDF]"
                  : "border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              <Filter size={11} />
              Filter

              {activeCount > 0 && (
                <b className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#123FDF] px-1 text-[8px] text-white">
                  {activeCount}
                </b>
              )}
            </button>

            <SmallSelect
              value={level}
              onChange={(value) =>
                resetPage(() => setLevel(value))
              }
              options={levels}
              label="Level"
              icon={<BarChart3 size={11} />}
            />

            <SmallSelect
              value={category}
              onChange={(value) =>
                resetPage(() => setCategory(value))
              }
              options={categories}
              label="Category"
              mobileHide
            />
          </div>

          <SmallSelect
            value={sort}
            onChange={(value) =>
              resetPage(() => setSort(value as Sort))
            }
            options={["relevant", "rating", "low", "high", "newest"]}
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

        {/* Expandable filters */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            filterOpen
              ? "mt-4 max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-2 text-[9px] font-semibold text-gray-700">
              Categories
            </p>

            <div className="flex flex-wrap gap-1.5">
              {categories.map((item) => (
                <Chip
                  key={item}
                  active={category === item}
                  onClick={() =>
                    resetPage(() => setCategory(item))
                  }
                >
                  {item}
                </Chip>
              ))}
            </div>

            <p className="mb-2 mt-4 text-[9px] font-semibold text-gray-700">
              Level
            </p>

            <div className="flex flex-wrap gap-1.5">
              {levels.map((item) => (
                <Chip
                  key={item}
                  active={level === item}
                  onClick={() => resetPage(() => setLevel(item))}
                >
                  {item}
                </Chip>
              ))}
            </div>

            {activeCount > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="mt-3 text-[9px] font-semibold text-[#123FDF]"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {categories
            .filter((item) => item !== "All")
            .map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  resetPage(() => setCategory(item))
                }
                className={`shrink-0 rounded-full px-3 py-1.5 text-[8px] font-medium transition ${
                  category === item
                    ? "bg-[#C7FF00] text-[#263000]"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {item}
              </button>
            ))}
        </div>

        <div className="mt-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold text-gray-900">
              Explore courses
            </p>
            <p className="mt-0.5 text-[9px] text-gray-500">
              Showing <b>{visible.length}</b> of{" "}
              <b>{filtered.length}</b> courses
            </p>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <label className="relative">
              <Search
                size={11}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                value={search}
                onChange={(event) =>
                  resetPage(() => setSearch(event.target.value))
                }
                placeholder="Search courses"
                className="h-[30px] w-[145px] rounded-full border border-gray-200 bg-white pl-8 pr-7 text-[9px] outline-none transition placeholder:text-gray-400 focus:border-[#123FDF] focus:ring-2 focus:ring-[#123FDF]/10"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => resetPage(() => setSearch(""))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <X size={11} />
                </button>
              )}
            </label>

            {activeCount > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="flex items-center gap-1 text-[9px] text-gray-500 transition hover:text-[#123FDF]"
              >
                <X size={11} />
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Mobile search */}
        <div className="mt-4 sm:hidden">
          <label className="relative block">
            <Search
              size={12}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={search}
              onChange={(event) =>
                resetPage(() => setSearch(event.target.value))
              }
              placeholder="Search courses..."
              className="h-[36px] w-full rounded-full border border-gray-200 bg-white pl-9 pr-8 text-[10px] outline-none focus:border-[#123FDF] focus:ring-2 focus:ring-[#123FDF]/10"
            />
            {search && (
              <button
                type="button"
                onClick={() => resetPage(() => setSearch(""))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <X size={13} />
              </button>
            )}
          </label>
        </div>

        {visible.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <Empty onReset={clearFilters} />
        )}

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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="inline-flex h-[27px] items-center gap-1.5 rounded-full bg-white px-3 text-[9px] text-gray-700">
      <b className="text-[#123FDF]">{value}</b>
      <span>{label}</span>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Link to={`/courses/${course.id}`} className="block">
      <article className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[16px] border border-gray-200 bg-white p-[8px] transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_16px_35px_rgba(16,24,40,.10)]">
        {course.featured && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#C7FF00] px-2.5 py-1 text-[7px] font-bold text-[#263000]">
            Featured
          </span>
        )}

        <div className="relative h-[154px] overflow-hidden rounded-[11px] bg-gray-100">
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/images/course-1.jpg";
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          <div className="absolute bottom-2 left-2 right-2 grid grid-cols-3 gap-1">
            <Meta>{course.lessons}</Meta>
            <Meta>{course.duration}</Meta>
            <Meta>{course.comments}</Meta>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-1 pt-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="min-w-0 flex-1 truncate text-[14px] font-semibold leading-5 text-gray-900">
              {course.title}
            </h3>

            <span className="flex shrink-0 items-center gap-1 text-[10px] text-gray-500">
              {course.rating.toFixed(1)}
              <Star
                size={12}
                fill="#D1D5DB"
                className="text-gray-300"
              />
            </span>
          </div>

          <p className="mt-0.5 text-[8px] text-gray-500">
            by{" "}
            <span className="text-[#3858D6]">
              {course.creator}
            </span>
          </p>

          <div className="mt-3 flex items-center justify-between gap-2">
            <span className="flex h-[25px] items-center gap-1.5 rounded-full bg-gray-100 px-2.5 text-[8px] text-gray-600">
              <BarChart3 size={11} />
              {course.level}
            </span>

            <Avatars />
          </div>

          <div className="mt-auto flex items-end justify-between pt-4">
            <div>
              <b className="text-[15px] text-[#064DE8]">
                ${course.price}
              </b>
              <span className="ml-1 text-[8px] text-gray-500">
                /lifetime
              </span>
            </div>

            <button
              type="button"
              aria-label={`Favorite ${course.title}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-100 text-gray-400 transition hover:border-[#123FDF]/20 hover:text-[#123FDF]"
            >
              <Heart size={12} />
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}

function Meta({ children }: { children: ReactNode }) {
  return (
    <span className="truncate rounded-full bg-white/80 px-1.5 py-[4px] text-center text-[7px] font-medium text-gray-700 backdrop-blur-[5px]">
      {children}
    </span>
  );
}

function Avatars() {
  return (
    <div className="flex items-center">
      {avatars.map((avatar, index) => (
        <div
          key={avatar}
          className={`relative h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-gray-200 ${
            index ? "-ml-[7px]" : ""
          }`}
        >
          <img
            src={avatar}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      <span className="relative -ml-[7px] flex h-6 min-w-[29px] items-center justify-center rounded-full border-2 border-white bg-[#C7FF00] px-1 text-[7px] font-bold text-[#263000]">
        26+
      </span>
    </div>
  );
}

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
  onChange: (value: string) => void;
  options: string[];
  label: string;
  labels?: Record<string, string>;
  icon?: ReactNode;
  mobileHide?: boolean;
}) {
  return (
    <div className={mobileHide ? "hidden sm:block" : ""}>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-2 top-1/2 z-10 -translate-y-1/2 text-gray-500">
            {icon}
          </span>
        )}

        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`h-[30px] max-w-[155px] appearance-none rounded-full border border-gray-200 bg-white py-0 pr-7 text-[9px] font-medium text-gray-600 outline-none transition focus:border-[#123FDF] focus:ring-2 focus:ring-[#123FDF]/10 ${
            icon ? "pl-7" : "pl-3"
          }`}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {labels?.[option] ?? (option === "All" ? label : option)}
            </option>
          ))}
        </select>

        <ChevronDown
          size={11}
          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-2.5 py-1.5 text-[8px] font-medium transition ${
        active
          ? "border-[#123FDF] bg-[#123FDF] text-white"
          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
      }`}
    >
      {children}
    </button>
  );
}

function Pagination({
  page,
  total,
  onChange,
}: {
  page: number;
  total: number;
  onChange: (page: number) => void;
}) {
  const items = getPages(page, total);

  return (
    <nav
      className="mt-9 flex items-center justify-center gap-1.5"
      aria-label="Course pagination"
    >
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#123FDF] hover:text-[#123FDF] disabled:opacity-30"
      >
        <ChevronLeft size={14} />
      </button>

      {items.map((item, index) =>
        item === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="px-1 text-[10px] text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-[10px] font-medium transition ${
              item === page
                ? "bg-[#123FDF] text-white"
                : "text-gray-600 hover:bg-[#EEF2FF] hover:text-[#123FDF]"
            }`}
          >
            {item}
          </button>
        )
      )}

      <button
        type="button"
        disabled={page === total}
        onClick={() => onChange(page + 1)}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#123FDF] hover:text-[#123FDF] disabled:opacity-30"
      >
        <ChevronRight size={14} />
      </button>
    </nav>
  );
}

function getPages(
  current: number,
  total: number
): Array<number | "..."> {
  if (total <= 6) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  if (current <= 3) {
    return [1, 2, 3, 4, "...", total];
  }

  if (current >= total - 2) {
    return [1, "...", total - 3, total - 2, total - 1, total];
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

function Empty({ onReset }: { onReset: () => void }) {
  return (
    <div className="mt-8 flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-center">
      <Search size={20} className="text-[#123FDF]" />
      <h3 className="mt-3 text-[14px] font-semibold">
        No courses found
      </h3>
      <p className="mt-1 text-[10px] text-gray-500">
        Try another keyword or clear your filters.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 rounded-full bg-[#123FDF] px-4 py-2 text-[9px] text-white transition hover:bg-[#0c35c4]"
      >
        Clear all filters
      </button>
    </div>
  );
}

function Grid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.16]"
      style={{
        backgroundImage:
          "linear-gradient(to right,rgba(255,255,255,.75) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.75) 1px,transparent 1px)",
        backgroundSize: "57px 57px",
      }}
    />
  );
}
