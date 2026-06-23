import { FcWorkflow } from "react-icons/fc";
import { FcAutomatic } from "react-icons/fc";
// import { FcTodoList } from "react-icons/fc";
import { FcDataConfiguration } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
// import { FcMultipleDevices } from "react-icons/fc";

const expertiseData = [
  {
    title: "Business Analysis",
    icon: FcWorkflow,
    color: "text-blue-500",
    description: "Eliciting requirements, analyzing processes, and translating business needs into actionable solutions.",
    skills: ["Requirements Analysis", "Process Modeling (BPMN)", "Stakeholder & Change Management", "Business Case & KPI"],
  },
  {
    title: "SAP",
    icon: FcAutomatic,
    color: "text-blue-500",
    description: "End-to-end experience in SAP implementation, configuration, and optimization.",
    skills: ["Sales and Distribution", "Material Management", "Warehouse Management", "Finance"],
  },
  // {
  //   title: "Project Management",
  //   icon: FcTodoList,
  //   color: "text-green-500",
  //   description: "Leading projects with structured methodologies to ensure successful delivery.",
  //   skills: ["Agile / Scrum", "Waterfall", "Project Planning", "Risk & Change Management"],
  // },
  {
    title: "Data Analysis",
    icon: FcDataConfiguration,
    color: "text-purple-500",
    description: "Designing and building robust data pipelines and architectures for reliable insights.",
    skills: ["ETL / ELT", "Data Warehousing", "Databricks", "Tableau / Power BI"],
  },
  {
    title: "AI / ML",
    icon: FcServices,
    color: "text-orange-500",
    description: "Building intelligent models and leveraging AI to solve real-world problems.",
    skills: ["Machine Learning", "Python", "Model Deployment"],
  },
  // {
  //   title: "Software Engineering",
  //   icon: FcMultipleDevices,
  //   color: "text-blue-500",
  //   description: "Developing scalable, maintainable applications with clean code and modern practices.",
  //   skills: ["Python / Java / SQL", "API Development", "Git / CI-CD", "Clean Architecture"],
  // },
];

const stats = [
  {
    value: "14+",
    label: "Years of Experience",
  },
  {
    value: "6",
    label: "Projects Delivered",
  },
  {
    value: "End-to-End",
    label: "Business to Tech Solutions",
  },
];

export default function ExpertiseArea() {
  return (
    <section id="expertise" className="bg-slate-50 ">
      <div className="container mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h3 className="text-blue-600 text-sm font-semibold uppercase tracking-[0.3em]">What I Do</h3>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">Areas of Expertise</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">I bring a multidisciplinary approach to solve complex problems and deliver end-to-end solutions.</p>
        </div>

        {/* Cards */}
        {/* <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"> */}
        <div className="grid gap-3 md:grid-cols-4">
          {expertiseData.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition">
                <Icon size={48} className={`${item.color} mb-6`} />
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.skills.map((skill) => (
                    <li key={skill} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 bg-white border border-slate-200 rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-8 px-4 border-b md:border-b-0 md:border-r last:border-r-0 border-slate-200">
              <h3 className="text-4xl font-bold text-slate-900">{stat.value}</h3>
              <p className="text-sm text-slate-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
