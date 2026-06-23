import { SlArrowDown } from "react-icons/sl";

const projects = [
  {
    title: "Procure To Pay Digitization",
    image: "src/assets/projects/project-ba-p2p.png",
    description: "Led the IT setup and implementation of P2P process digitization",
    technologies: ["AWS Redshift", "SAP", "IDOC", "Oracle", "Tableau"],
  },
  {
    title: "Procurement Hub SAP Implementation",
    image: "src/assets/projects/project-ba-hub.png",
    description: "Led the IT design and implementation of a Distribution Center in Singapore to consolidate demand and supply for electronic materials.",
    technologies: ["SAP", "EDI", "Manhattan WMS", "Kinaxis", "SupplyOn", "Tableau"],
  },
  {
    title: "Master Data Management",
    image: "src/assets/projects/project-da-mdm.png",
    description: "Built automated ETL pipelines using Databricks to manage large-scale of master data, ensuring compliance and accuracy of SAP master data as per process configuration.",
    technologies: ["AWS Redshift", "Python", "SQL", "Tableau", "Databricks"],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className=" bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h3 className="text-blue-600 text-sm font-semibold uppercase tracking-[0.3em]">Projects</h3>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">Selected Work</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">A selection of projects showcasing expertise across business, technology, and data-driven solutions.</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.title} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />

              <div className="p-5">
                <h3 className="font-semibold text-slate-900 text-lg">{project.title}</h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-slate-100 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="mt-5 inline-flex items-center gap-2 text-sm text-blue-600 font-medium hover:text-blue-700">
                  View Details
                  <SlArrowDown size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
