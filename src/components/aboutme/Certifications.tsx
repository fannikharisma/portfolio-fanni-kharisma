import { PiMedal } from "react-icons/pi";

const courseStyles = {
  li: "flex gap-8 justify-between ",
  h: "font-bold ",
};

interface Course {
  id: number;
  name: string;
  year: string;
  url: string;
}

const courses: Course[] = [
  {
    id: 1,
    name: "Certified Business Analysis Professional (CBAP)",
    year: "2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/NRH6HEKO0YKX",
  },
  {
    id: 2,
    name: "Google Project Management",
    year: "2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/TYKW4EQHB1C1",
  },
  {
    id: 3,
    name: "Tableau Business Intelligence",
    year: "2025",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/QA3ZWY5GP1QB",
  },
  {
    id: 4,
    name: "Electrifier",
    year: "2024",
    url: "#",
  },
  {
    id: 3,
    name: "Edison",
    year: "2021",
    url: "#",
  },
];

type Props = {
  course: Course;
};

function CourseItem({ course }: Props) {
  return (
    <li className={courseStyles.li}>
      <h3 className={courseStyles.h}>{course.name}</h3>
      <div className="flex gap-8">
        <p>{course.year}</p> <a href={course.url}>View</a>
      </div>
    </li>
  );
}

export default function Course() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 w-full md:w-1/2">
      <div className="flex gap-10 items-center mb-8">
        <PiMedal size={20} />
        <h3 className="font-bold">Course & Certifications</h3>
      </div>
      <div>
        <ul className="mx-auto list-disc">
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </ul>
      </div>
    </div>
  );
}
