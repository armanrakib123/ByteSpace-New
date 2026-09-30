import { BarChart3, ChevronDown, ChevronLeft, ChevronRight, Filter, Search, Star, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Avatars from "../components/UI/Avatars";

import { getCourseListingItems, getCategories, type CourseListingItem } from "../config/courseService";

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
    return [...courses].filter(c =>
      (!q || `${c.title} ${c.creator} ${c.category}`.toLowerCase().includes(q)) &&
      (category === "All" || c.category === category) &&
      (level === "All" || c.level === level)
    ).sort((a,b) => sort === "rating" ? b.rating-a.rating : sort === "low" ? a.price-b.price : sort === "high" ? b.price-a.price : sort === "newest" ? b.id-a.id : Number(Boolean(b.featured))-Number(Boolean(a.featured)));
  }, [search, category, level, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const activeCount = Number(!!search.trim()) + Number(category !== "All") + Number(level !== "All");

  const clear = () => { setSearch(""); setCategory("All"); setLevel("All"); setSort("relevant"); setPage(1); };
  const setAndReset = (fn: () => void) => { fn(); setPage(1); };

  return (
    <main className="min-h-screen w-full bg-white text-[#20232A]">
      <section className="relative overflow-hidden bg-[#123FDF]">
        <Grid />
        <div className="relative z-10 mx-auto flex min-h-[154px] max-w-[1180px] flex-col items-center justify-center px-5 py-7">
          <h1 className="text-center text-[22px] font-bold tracking-[-.5px] text-white sm:text-[26px] md:text-[29px]">Find Your Next Course</h1>
          <div className="mt-3 flex w-full max-w-[430px] gap-2">
            <div className="relative min-w-0 flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input value={search} onChange={e => setAndReset(() => setSearch(e.target.value))} placeholder="Search courses..." className="h-[36px] w-full rounded-full border border-white/20 bg-white px-9 pr-8 text-[10px] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#C7FF00]" />
              {search && <button onClick={() => setAndReset(() => setSearch(""))} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><X size={13}/></button>}
            </div>
            <select value={category === "All" ? "" : category} onChange={e => setAndReset(() => setCategory(e.target.value || "All"))} className="hidden h-[36px] w-[94px] appearance-none rounded-full bg-[#C7FF00] px-3 text-[9px] text-[#263000] outline-none sm:block">
              <option value="">Courses</option>{categories.filter(x=>x!=="All").map(x=><option key={x}>{x}</option>)}
            </select>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-5 py-7 sm:px-7 lg:px-10 lg:py-9">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <button onClick={()=>setFilterOpen(v=>!v)} className={`inline-flex h-[30px] items-center gap-1.5 rounded-full border px-3 text-[9px] font-medium ${activeCount ? "border-[#123FDF] bg-[#EEF2FF] text-[#123FDF]" : "border-gray-200 text-gray-600"}`}><Filter size={11}/>Filter{activeCount>0&&<b className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#123FDF] px-1 text-[8px] text-white">{activeCount}</b>}</button>
            <SmallSelect value={level} onChange={v=>setAndReset(()=>setLevel(v))} options={levels} label="Level" icon={<BarChart3 size={11}/>}/>
            <SmallSelect value={category} onChange={v=>setAndReset(()=>setCategory(v))} options={categories} label="Category" mobileHide />
          </div>
          <SmallSelect value={sort} onChange={v=>setAndReset(()=>setSort(v as Sort))} options={["relevant","rating","low","high","newest"]} labels={{relevant:"Most relevant",rating:"Top rated",low:"Price: Low",high:"Price: High",newest:"Newest"}} label="Sort"/>
        </div>

        <div className={`${filterOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-300`}>
          <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex flex-wrap gap-1.5">
              {categories.map(x=><Chip key={x} active={category===x} onClick={()=>setAndReset(()=>setCategory(x))}>{x}</Chip>)}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {levels.map(x=><Chip key={x} active={level===x} onClick={()=>setAndReset(()=>setLevel(x))}>{x}</Chip>)}
            </div>
            {activeCount>0&&<button onClick={clear} className="mt-3 text-[9px] font-semibold text-[#123FDF]">Clear all filters</button>}
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {categories.filter(x=>x!=="All").map(x=><button key={x} onClick={()=>setAndReset(()=>setCategory(x))} className={`shrink-0 rounded-full px-3 py-1.5 text-[8px] font-medium ${category===x ? "bg-[#C7FF00] text-[#263000]" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>{x}</button>)}
        </div>

        <div className="mt-7 flex items-end justify-between">
          <div><p className="text-[12px] font-semibold text-gray-900">Explore courses</p><p className="mt-0.5 text-[9px] text-gray-500">Showing <b>{visible.length}</b> of <b>{filtered.length}</b> courses</p></div>
          {activeCount>0&&<button onClick={clear} className="hidden items-center gap-1 text-[9px] text-gray-500 hover:text-[#123FDF] sm:flex"><X size={11}/>Clear filters</button>}
        </div>

        {visible.length ? <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{visible.map(c=><CourseCard key={c.id} course={c}/>)}</div> : <Empty onReset={clear}/>}
        {filtered.length>0 && <Pagination page={currentPage} total={totalPages} onChange={setPage}/>} 
      </section>
    </main>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="block"
    >
      <article className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-[16px] border border-gray-200 bg-white p-[8px] transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_16px_35px_rgba(16,24,40,.10)]">

        {/* Featured */}
        {course.featured && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#C7FF00] px-2.5 py-1 text-[7px] font-bold text-[#263000]">
            Featured
          </span>
        )}

        {/* Image */}
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

          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />

          {/* Meta */}
          <div className="absolute bottom-2 left-2 right-2 grid grid-cols-3 gap-1">
            <Meta>{course.lessons}</Meta>
            <Meta>{course.duration}</Meta>
            <Meta>{course.comments}</Meta>
          </div>
        </div>

        {/* Content */}
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

          <div className="mt-auto pt-4">
            <b className="text-[15px] text-[#064DE8]">
              ${course.price}
            </b>

            <span className="ml-1 text-[8px] text-gray-500">
              /lifetime
            </span>
          </div>

        </div>
      </article>
    </Link>
  );
}
function Meta({children}:{children:React.ReactNode}){return <span className="truncate rounded-full bg-white/75 px-1.5 py-[4px] text-center text-[7px] font-medium text-gray-700 backdrop-blur-[5px]">{children}</span>}

function SmallSelect({value,onChange,options,label,labels,icon,mobileHide=false}:{value:string;onChange:(v:string)=>void;options:string[];label:string;labels?:Record<string,string>;icon?:React.ReactNode;mobileHide?:boolean}){
  return <div className={mobileHide?"hidden sm:block":""}><div className="relative"><select value={value} onChange={e=>onChange(e.target.value)} className="h-[30px] max-w-[145px] appearance-none rounded-full border border-gray-200 bg-white py-0 pl-3 pr-7 text-[9px] font-medium text-gray-600 outline-none focus:border-[#123FDF] focus:ring-2 focus:ring-[#123FDF]/10">{options.map(x=><option key={x} value={x}>{labels?.[x]??(x==="All"?label:x)}</option>)}</select>{icon&&<span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2">{icon}</span>}<ChevronDown size={11} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"/></div></div>
}
function Chip({active,onClick,children}:{active:boolean;onClick:()=>void;children:React.ReactNode}){return <button onClick={onClick} className={`rounded-full border px-2.5 py-1.5 text-[8px] font-medium ${active?"border-[#123FDF] bg-[#123FDF] text-white":"border-gray-200 bg-white text-gray-600 hover:border-gray-300"}`}>{children}</button>}
function Pagination({page,total,onChange}:{page:number;total:number;onChange:(p:number)=>void}){const items=pages(page,total);return <nav className="mt-9 flex items-center justify-center gap-1.5" aria-label="Course pagination"><button disabled={page===1} onClick={()=>onChange(page-1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 disabled:opacity-30"><ChevronLeft size={14}/></button>{items.map((x,i)=>x==="..."?<span key={i} className="px-1 text-[10px] text-gray-400">...</span>:<button key={x} onClick={()=>onChange(x)} className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-[10px] font-medium ${x===page?"bg-[#123FDF] text-white":"text-gray-600 hover:bg-[#EEF2FF] hover:text-[#123FDF]"}`}>{x}</button>)}<button disabled={page===total} onClick={()=>onChange(page+1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 disabled:opacity-30"><ChevronRight size={14}/></button></nav>}
function pages(current:number,total:number):(number|"...")[]{if(total<=6)return Array.from({length:total},(_,i)=>i+1);if(current<=3)return[1,2,3,4,"...",total];if(current>=total-2)return[1,"...",total-3,total-2,total-1,total];return[1,"...",current-1,current,current+1,"...",total]}
function Empty({onReset}:{onReset:()=>void}){return <div className="mt-8 flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-center"><Search size={20} className="text-[#123FDF]"/><h3 className="mt-3 text-[14px] font-semibold">No courses found</h3><p className="mt-1 text-[10px] text-gray-500">Try another keyword or clear your filters.</p><button onClick={onReset} className="mt-4 rounded-full bg-[#123FDF] px-4 py-2 text-[9px] text-white">Clear all filters</button></div>}
function Grid(){return <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[.16]" style={{backgroundImage:"linear-gradient(to right,rgba(255,255,255,.75) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.75) 1px,transparent 1px)",backgroundSize:"57px 57px"}}/>}
