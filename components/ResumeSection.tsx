export default function ResumeSection({ title, items }) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-purple-400 mb-3">{title}</h4>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="border-l-2 border-purple-400/30 pl-4">
            <h5 className="font-semibold">{item.role}</h5>
            <p className="text-sm text-gray-400">{item.company}</p>
            <p className="text-xs text-gray-500">{item.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
