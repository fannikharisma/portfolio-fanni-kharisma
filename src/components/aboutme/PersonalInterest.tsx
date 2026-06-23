import { TfiUser, TfiBook, TfiDribbble } from "react-icons/tfi";
import InfoItem from "../layout/InfoItem";

export default function PersonalInterest() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3 mb-5">
        <TfiUser className="text-blue-600" size={20} />
        <h3 className="font-semibold text-slate-900">Personal Interests</h3>
      </div>
      <div className="space-y-6">
        <InfoItem icon={<TfiBook size={18} />} title="Reading" value="Tech, Science" />
        <InfoItem icon={<TfiDribbble size={18} />} title="Fitness" value="Football, Workout, Chess" />
      </div>
    </div>
  );
}
