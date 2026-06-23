import { TfiUser, TfiLocationPin, TfiEmail, TfiLinkedin, TfiGithub, TfiWorld } from "react-icons/tfi";
import InfoItem from "../layout/InfoItem";

export default function ProfileCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3 mb-5">
        <TfiUser className="text-blue-600" size={20} />
        <h3 className="font-semibold text-slate-900">Professional Snapshot</h3>
      </div>
      <p className="text-sm text-slate-600 leading-7 mb-8">I help organizations turn data and technology into actionable insights and efficient solutions.</p>

      <div className="space-y-6">
        <InfoItem icon={<TfiLocationPin size={18} />} title="Location" value="Batam, Indonesia" />
        <InfoItem icon={<TfiEmail size={18} />} title="Email" value="fanni.kharisma88@gmail.com" />
        <InfoItem icon={<TfiLinkedin size={18} />} title="LinkedIn" value="linkedin.com/in/fanni-kharisma" />
        <InfoItem icon={<TfiGithub size={18} />} title="GitHub" value="github.com/fannikharisma" />
        <InfoItem
          icon={<TfiWorld size={18} />}
          title="Languages"
          value={
            <>
              Indonesian (Native)
              <br />
              English (Professional)
            </>
          }
        />
      </div>
    </div>
  );
}
