import { Outlet, useLocation, useParams } from "react-router-dom";
import CourseHero from "../components/course/CoursesHero";
import CourseTabs from "../components/course/CourseTabs";
import { getCourseById } from "../config/courseService";

export default function CoursesPage() {
  const { id } = useParams();
  const location = useLocation();

  const activeTab = location.pathname.split("/").pop();
  const course = getCourseById(id || 1);

  return (
    <main className="min-h-screen bg-white">
      <CourseHero course={course}></CourseHero>

      <div className="mx-auto max-w-[1180px] px-5">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
          
          <section className="min-w-0">
            <CourseTabs
              courseId={id || ""}
              activeTab={activeTab || "about"}
            />

            <div className="pb-20">
              <Outlet context={{ course }} />
            </div>
          </section>

          <aside className="hidden lg:block">
          </aside>
        </div>
      </div>
    </main>
  );
}