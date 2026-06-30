import { ImAccessibility } from "react-icons/im";

export default function Story() {
  return (
    <div className="flex mb-8 ">
      <div className="w-2/3 justify-between">
        <div className="flex items-center">
          <ImAccessibility size={20} />
          <h2>My Story</h2>
        </div>
        <div className="mt-5 pr-10 text-justify">
          <p className="mt-3">
            My journey as Business Analyst started from manufacturing engineering background. I was involved in projects improving lean manufacturing and lean management processes for the production lines. Learning manufacturing processes
            has made me realized that improvement does not only come from manufacturing side, but it can also come from process and systems side.
          </p>
          <p className="mt-3">
            A year and half after, I took the opportunity to move to Supply Chain Planning BA role and had the opportunity to be involved in global scale digital transformation projects for supply chain planning. This is where I started to
            be exposed into supply chain planning processes, ERP systems such as SAP, and digital transformation projects.
          </p>
          <p className="mt-3">
            During those years, I developed skills in data analytics, process design and transformation, and project management. Thanks to my background in IT, I was able to quickly understand the IT sides of the projects, which include
            integrations, data models, and technical solutions.
          </p>
          <p className="mt-3">Outside of work, as a father of 2 young kids, I enjoy spending time with families. I also enjoy playing chess and learning new things.</p>
          <p className="mt-3">For me, Business Analyst is not just a role, but it is a mindset of continuous improvement. It is about always curious, asking questions, and finding better ways to do things.</p>
        </div>
      </div>

      <div className="p-1 w-1/3">
        <img src="/dummy_profile1.png" alt="Fanni Kharisma Profile Image" className="rounded-3xl " />
      </div>
    </div>
  );
}
