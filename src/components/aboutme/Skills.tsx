import { PiMedal } from "react-icons/pi";

const courseStyles = {
  li: "flex gap-8",
  h: "font-bold ",
};

interface Skill {
  id: number;
  domain: string;
  name: string;
}

const skills: Skill[] = [
  {
    id: 1,
    domain: "Business Analysis",
    name: "BPMN, UML, Requirement Documents, User Stories, Acceptance Criteria, UAT, Change Management",
  },
  {
    id: 2,
    domain: "Data Analysis",
    name: "SQL, Python, Tableau, Power BI, Databricks, Excel",
  },
  {
    id: 3,
    domain: "ERP",
    name: "SAP (SD, MM, FI, WM), Oracle, EDI(ORDERS,ORDCHG,ORDRSP,INVOIC,DELFOR,INVRPT), Signavio, Kinaxis, SupplyOn",
  },
  {
    id: 4,
    domain: "Supply Chain Management",
    name: "Demand Forecast Management, MRP, Order to Cash, Procure to Pay, Warehouse Management, Master Data",
  },
];

type Props = {
  skill: Skill;
};

function SkillItem({ skill }: Props) {
  return (
    <li>
      <div className={courseStyles.li}>
        <h3 className={courseStyles.h}>{skill.domain}</h3>
      </div>
      <p className="mb-5">{skill.name}</p>
    </li>
  );
}

export default function Skill() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 w-full md:w-1/2">
      <div className="flex gap-10 items-center mb-8">
        <PiMedal size={20} />
        <h3 className="font-bold">Core Skills</h3>
      </div>
      <div>
        <ul className="mx-auto">
          {skills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </ul>
      </div>
    </div>
  );
}
