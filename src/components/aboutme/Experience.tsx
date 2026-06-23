export interface Experience {
  id: number;
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  description: string;
  achievements: string[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const experiences: Experience[] = [
  {
    id: 1,
    company: "Schneider Electric",
    role: "Business Process Referent",
    start: "2022",
    end: "2026",
    location: "Batam, Indonesia",
    description: "Leading operating model design and SAP setup for new Distribution Centre in Singapore",
    achievements: [
      "Production go live 4 different operating model in new DC - Dropshipment, Crossdock, Central Stock and Subcontracting",
      "Migrated 30+ electronics manufacturers and 9 customers covering 160M Euro spend into new DC",
      "Improved operational efficiency by 30% through RPA automation",
    ],
  },
  {
    id: 2,
    company: "Schneider Electric",
    role: "Application Lifecycle Manager",
    start: "2020",
    end: "2022",
    location: "Batam, Indonesia",
    description: "Managed Schneider Supplier Portal application lifecycle",
    achievements: [
      "Delivered 4 different operating model in new DC - Dropshipment, Crossdock, Central Stock and Subcontracting",
      "Migrated 30+ electronics manufacturers and 9 customers covering 160M Euro spend into new DC",
      "Improved operational efficiency by 30% through RPA automation",
    ],
  },
  {
    id: 3,
    company: "Schneider Electric",
    role: "Business Process and System Analyst",
    start: "2013",
    end: "2019",
    location: "Batam, Indonesia",
    description: "Leading the IT implementation of digital upstream supply chain",
    achievements: [
      "Production go live 5 modules in upstream supply chain apps - vendor forecast, procure to pay, VMI and Consignment, Lead Time Management, Logistics Contract",
      "Migrated 30+ electronics manufacturers and 9 customers covering 160M Euro spend into new DC",
      "Improved operational efficiency by 30% through RPA automation",
    ],
  },
  {
    id: 4,
    company: "Schneider Electric",
    role: "Graduate Trainee Engineer",
    start: "2012",
    end: "2013",
    location: "Batam, Indonesia",
    description: "Completed 1-year program of manufacturing and supply chain excellence",
    achievements: [
      "Production go live 5 modules in upstream supply chain apps - vendor forecast, procure to pay, VMI and Consignment, Lead Time Management, Logistics Contract",
      "Migrated 30+ electronics manufacturers and 9 customers covering 160M Euro spend into new DC",
      "Improved operational efficiency by 30% through RPA automation",
    ],
  },
];

type Props = {
  experience: Experience;
};

function ExperienceItem({ experience }: Props) {
  return (
    <div className="mb-5">
      {/* <div className="absolute left-3 top-10 bottom-0" /> */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{experience.role}</h3>
            <p className="font-medium text-blue-600">{experience.company}</p>
          </div>

          <div className="text-sm text-slate-500">
            {experience.start} - {experience.end}
          </div>
        </div>

        {/* <p className="mt-2 text-sm text-slate-500">{experience.location}</p> */}
        <p className="mt-2 text-slate-600 leading-7">{experience.description}</p>
        {/* <ul className="mt-4 ">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="flex gap-3 text-slate-600">
              <span className="text-blue-600">•</span>

              <span>{achievement}</span>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

import { FcBusiness } from "react-icons/fc";

export default function Experience() {
  return (
    <div>
      <div className=" gap-3 flex items-center mb-5">
        <FcBusiness size={20} />
        <h2>Work Experience</h2>
      </div>
      <div>
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
