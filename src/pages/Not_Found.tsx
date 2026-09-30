export default function Not_Found() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#123FDF] px-5 py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1F52EF]/50 blur-[90px]"
      />

      <section className="relative z-10 flex w-full max-w-[900px] flex-col items-center text-center">
        <div
          className="select-none text-[150px] font-black leading-[0.72] tracking-[-9px] text-transparent sm:text-[190px] sm:tracking-[-12px] md:text-[230px] lg:text-[270px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #D8FF00 8%, #C6F000 40%, #91B67B 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          404
        </div>
        <h1 className="mt-6 max-w-[650px] text-[34px] font-bold leading-[1.05] tracking-[-1.5px] text-white sm:text-[43px] md:mt-7 md:text-[49px] lg:text-[52px]">
          The page you are looking
          <br />
          for doesn&apos;t exist
        </h1>
        <p className="mt-6 text-[10px] font-normal leading-[1.6] text-white/70 sm:text-[11px] md:mt-7 md:text-[12px]">
          Try to use a correct url or go back to homepage to start again
        </p>
        <a
          href="/"
          className="mt-5 inline-flex h-[36px] min-w-[80px] items-center justify-center gap-1.5 rounded-full bg-[#C7FF00] px-4 text-[10px] font-medium text-[#172000] shadow-[0_5px_16px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D5FF35] hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#123FDF] sm:h-[38px] sm:text-[11px]"
        >
          Back to Home
        </a>
      </section>
    </main>
  );
}
