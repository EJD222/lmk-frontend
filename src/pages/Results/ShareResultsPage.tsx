export function ShareResultsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-lmk-dark text-lmk-light">
      <div className="flex-1 flex items-center justify-center">
        <div className="px-8 w-full max-w-[600px] mx-auto text-center flex flex-col items-center">
          <p className="font-brand font-extrabold text-[56px] tracking-[-0.04em] mb-6">lmk</p>
          <p className="font-brand text-[22px] tracking-[-0.01em] mb-12 opacity-60">
            <span className="font-light">from</span> let me know,{" "}
            <span className="font-light">to</span>{" "}
            <span className="font-extrabold text-lmk-primary opacity-100">let's go</span>
          </p>
          <div className="flex flex-col gap-3 mb-8 w-full max-w-[400px]">
            <button className="w-full h-12 rounded-sm bg-lmk-primary text-white font-brand font-semibold text-[16px]">
              Share results
            </button>
            <button className="w-full h-12 rounded-sm bg-transparent text-white font-brand font-semibold text-[16px] border-2 border-white/20">
              Save as image
            </button>
          </div>
          <div className="flex gap-6 justify-center mb-6">
            {["📸", "💬", "📱"].map((icon) => (
              <div
                key={icon}
                className="w-10 h-10 rounded-full bg-white/[0.12] flex items-center justify-center text-[18px]"
              >
                {icon}
              </div>
            ))}
          </div>
          <p className="font-brand text-[13px] opacity-30">try it at lmk.app</p>
        </div>
      </div>
    </div>
  );
}
