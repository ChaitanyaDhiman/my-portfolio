function Section({ id, title, icon: Icon, children }) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center px-8 py-24"
    >
      <div className="max-w-4xl w-full text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Icon size={28} className="text-purple-400" />
          </div>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">{title}</h2>
        <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}