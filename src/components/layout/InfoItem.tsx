type InfoItemProps = {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
};

export default function InfoItem({ icon, title, value }: InfoItemProps) {
  return (
    <div className="flex gap-4">
      <div className="text-blue-600 mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-sm text-slate-900">{title}</h4>
        <div className="text-sm text-slate-600 mt-1">{value}</div>
      </div>
    </div>
  );
}
