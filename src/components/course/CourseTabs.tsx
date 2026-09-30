import { NavLink } from "react-router-dom";

interface CourseTabsProps {
  courseId: string;
  activeTab: string;
}

export default function CourseTabs({
  courseId,
  activeTab,
}: CourseTabsProps) {
  const tabs = [
    {
      label: "About",
      path: `/courses/${courseId}/about`,
    },
    {
      label: "Lessons",
      path: `/courses/${courseId}/lessons`,
    },
    {
      label: "Reviews",
      path: `/courses/${courseId}/reviews`,
    },
  ];

  return (
    <div className="flex gap-2 border-b border-gray-100 py-6">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.label.toLowerCase();

        return (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={[
              "rounded-full px-4 py-2 text-[10px] font-medium transition",
              isActive
                ? "bg-[#c8ff00] text-black"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200",
            ].join(" ")}
          >
            {tab.label}
          </NavLink>
        );
      })}
    </div>
  );
}