const LoadingPricing = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-purple-50/40 to-white">
      <div className="max-w-6xl mx-auto animate-pulse">
        <div className="text-center mb-10">
          <div className="h-3 w-24 mx-auto rounded bg-purple-100 mb-3" />
          <div className="h-8 w-72 max-w-full mx-auto rounded bg-slate-200 mb-3" />
          <div className="h-4 w-96 max-w-full mx-auto rounded bg-slate-200" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="h-5 w-40 rounded bg-slate-200 mb-3" />
              <div className="h-7 w-24 rounded bg-slate-200 mb-4" />
              <div className="space-y-2 mb-5">
                <div className="h-3 w-full rounded bg-slate-200" />
                <div className="h-3 w-5/6 rounded bg-slate-200" />
                <div className="h-3 w-4/5 rounded bg-slate-200" />
              </div>
              <div className="h-9 w-full rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoadingPricing;
