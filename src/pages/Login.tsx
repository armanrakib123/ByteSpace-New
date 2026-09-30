import { BarChart3, Eye, EyeOff, Star } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Avatars from "../components/UI/Avatars";

const IMAGE_PATHS = {
  mainCourse: "/image/course-big-data.png",
  sideCourse: "/image/course-digital.png",
  student1: "/image/student-1.png",
  student2: "/image/student-2.png",
  student3: "/image/student-3.png",
  student4: "/image/student-4.png",
  student5: "/image/student-5.png",
};

const students = [
  IMAGE_PATHS.student1,
  IMAGE_PATHS.student2,
  IMAGE_PATHS.student3,
  IMAGE_PATHS.student4,
  IMAGE_PATHS.student5,
];

type AuthMode = "login" | "signup";

export default function Login() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const signup = mode === "signup";

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#123FDF]">
      <div className="relative min-h-screen w-full overflow-hidden">
        <GridBackground />
        <Link to="/">
          <div className="absolute left-[20px] top-[55px] z-30 h-[70px] w-[70px] sm:left-[35px] sm:h-[76px] sm:w-[76px]">
            <img
              src="/bbytespace.png"
              alt="Brand Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-5 py-8 sm:px-8 md:px-10 lg:px-12 xl:px-16">

          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,520px)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_520px] xl:gap-20">

            <section className="relative mx-auto w-full max-w-[560px] lg:mx-0">
              <div className="mb-7 max-w-[410px] lg:mb-9">
                <h1 className="text-[18px] font-semibold leading-[1.25] text-white sm:text-[19px]">
                  {signup ? "Sign up and come in" : "Sign in with ease"}
                </h1>
                <p className="mt-3 max-w-[400px] text-[12px] leading-[1.8] text-white/85 sm:text-[13px]">
                  {signup
                    ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
                    : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
                </p>
              </div>
              <PromoArtwork />
            </section>

            <section className="mx-auto w-full max-w-[520px]">
              <div className="min-h-[560px] rounded-[20px] bg-white px-7 py-9 shadow-[0_18px_50px_rgba(0,0,0,.12)] sm:px-10 sm:py-11 md:px-12 md:py-12 lg:min-h-[618px] lg:px-[50px] lg:py-[50px]">
                <p className="text-[13px] text-[#1255FF]">
                  {signup ? "Create an Account" : "Sign In"}
                </p>

                <h2 className="mt-2 text-[35px] font-bold leading-[1.15] tracking-[-1.2px] text-[#25272C] sm:text-[37px]">
                  {signup ? <>Welcome to<br />ByteSpace</> : "Welcome Back"}
                </h2>

                <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
                  {signup && <FormField label="Full Name" type="text" placeholder="Jamie Davis" />}

                  <FormField
                    className={signup ? "mt-5" : ""}
                    label="Email"
                    type="email"
                    placeholder="designer@example.com"
                  />

                  <div className="mt-5">
                    <label htmlFor="password" className="mb-2 block text-[11px] font-medium text-[#303238]">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        className="h-[42px] w-full rounded-[10px] border border-[#E0E1E4] bg-white px-4 pr-11 text-[12px] text-[#34373D] outline-none transition placeholder:text-[#92969E] focus:border-[#1255FF] focus:ring-2 focus:ring-[#1255FF]/10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A8F97] hover:text-[#25272C]"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 flex justify-end">
                    <button
                      type="submit"
                      className="h-[37px] rounded-full bg-[#C7FF00] px-5 text-[11px] font-medium text-[#1B2500] shadow-[0_6px_16px_rgba(0,0,0,.08)] transition hover:-translate-y-0.5 hover:bg-[#D7FF35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1255FF] focus-visible:ring-offset-2"
                    >
                      {signup ? "Continue" : "Sign In"}
                    </button>
                  </div>

                  {!signup && (
                    <div className="mt-16">
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-[#E1E2E5]" />
                        <span className="px-1 text-[11px] text-[#8B8F96]">or</span>
                        <div className="h-px flex-1 bg-[#E1E2E5]" />
                      </div>
                      <div className="mt-7 flex justify-center gap-3">
                        <SocialButton ariaLabel="Facebook login"><span className="text-[23px] font-bold leading-none">f</span></SocialButton>
                        <SocialButton ariaLabel="Google login"><span className="text-[20px] font-semibold">G</span></SocialButton>
                      </div>
                    </div>
                  )}

                  <p className={`text-center text-[11px] text-[#777B83] ${signup ? "mt-20 sm:mt-[100px]" : "mt-16"}`}>
                    {signup ? (
                      <>
                        Already have an account?{" "}
                        <button type="button" onClick={() => { setMode("login"); setShowPassword(false); }} className="text-[#1255FF] hover:underline">
                          Login
                        </button>
                      </>
                    ) : (
                      <>
                        New user?{" "}
                        <button type="button" onClick={() => { setMode("signup"); setShowPassword(false); }} className="text-[#1255FF] hover:underline">
                          Create an account
                        </button>
                      </>
                    )}
                  </p>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function PromoArtwork() {
  return (
    <div className="relative mx-auto h-[390px] w-full max-w-[500px] sm:h-[420px] lg:h-[440px]">
      <CourseCard className="absolute left-0 top-[105px] z-10 w-[190px] sm:w-[205px]" image={IMAGE_PATHS.sideCourse} title="Build Digital Skills" />

      <div className="absolute left-[55px] top-[28px] z-20 w-[285px] overflow-hidden rounded-[17px] border-[9px] border-white bg-white shadow-[0_15px_30px_rgba(0,0,0,.12)] sm:left-[85px] sm:w-[300px] lg:left-[90px]">

        <div className="relative h-[155px] overflow-hidden rounded-[8px] bg-[#171B20]">
          <img src="/images/Course_Login.jpg" alt="Course preview" className="h-full w-full object-cover" />
          <div className="absolute bottom-2 left-2 right-2 flex gap-1.5">
            <MiniPill>17 Lessons</MiniPill><MiniPill>2 hours 16 mins</MiniPill><MiniPill>59 Comments</MiniPill>
          </div>
        </div>
        <div className="px-0 pb-1 pt-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="truncate text-[15px] font-bold text-[#25272B]">the Power of Big Data</h3>
            <span className="flex shrink-0 items-center text-[13px] text-[#575B62]">4.5<Star size={15} fill="#C7FF00" className="ml-0.5 text-[#C7FF00]" /></span>
          </div>
          <p className="mt-0.5 text-[8px] text-[#767B83]">by <span className="text-[#1255FF]">purepearl studio</span></p>
          <div className="mt-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#F0F1F3] px-2 py-1 text-[8px] text-[#4F535A]"><BarChart3 size={10} />Beginner</span>
            <AvatarStack />
          </div>
          <p className="mt-3 text-[15px] font-bold text-[#1255FF]">$25<span className="text-[8px] font-normal text-[#777C84]">/lifetime</span></p>
        </div>
      </div>

      <div className="absolute left-[20px] top-[55px] z-30 h-[70px] w-[70px] rounded-full border-[17px] border-[#C7FF00] sm:left-[35px] sm:h-[76px] sm:w-[76px] sm:border-[18px]" />
      <div className="absolute bottom-[8px] left-0 z-30 h-[105px] w-[100px] rotate-[10deg] sm:h-[115px] sm:w-[110px]"><Triangle /></div>
      <div className="absolute bottom-[62px] right-[10px] z-40 h-[90px] w-[75px] rotate-[12deg] sm:right-0"><Squiggle color="#FFFFFF" /></div>

      <div className="absolute bottom-0 right-0 z-40 w-[205px] rounded-[12px] bg-[#C7FF00] px-3 py-3 shadow-[0_10px_25px_rgba(0,0,0,.14)]">
        <p className="text-[11px] font-medium text-[#263100]">Happy Students</p>
        <p className="mt-0.5 text-[7px] text-[#3D4A00]">4.5 (240)<Star size={8} fill="currentColor" className="ml-0.5 inline" /></p>
        <Avatars></Avatars>
      </div>
    </div>
  );
}

function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.17]"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.7) 1px, transparent 1px)",
        backgroundSize: "95px 95px",
      }}
    />
  );
}

function FormField({ label, type, placeholder, className = "" }: { label: string; type: string; placeholder: string; className?: string }) {
  const id = label.toLowerCase().replaceAll(" ", "-");
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-[11px] font-medium text-[#303238]">{label}</label>
      <input id={id} type={type} placeholder={placeholder} className="h-[42px] w-full rounded-[10px] border border-[#E0E1E4] bg-white px-4 text-[12px] text-[#34373D] outline-none transition placeholder:text-[#92969E] focus:border-[#1255FF] focus:ring-2 focus:ring-[#1255FF]/10" />
    </div>
  );
}

function CourseCard({ className = "", image, title }: { className?: string; image: string; title: string }) {
  return (
    <div className={`${className} overflow-hidden rounded-[16px] border-[9px] border-white bg-white shadow-[0_14px_28px_rgba(0,0,0,.1)]`}>
      <div className="h-[150px] overflow-hidden rounded-[7px] bg-[#E8EAED]"><img src="/images/Course_Preview.webp" alt="" className="h-full w-full object-cover opacity-80" /></div>
      <div className="px-1 pb-3 pt-2">
        <div className="flex items-center justify-between gap-1"><p className="truncate text-[12px] font-bold text-[#282A2F]">{title}</p><span className="shrink-0 text-[11px] text-[#555A62]">4.5<Star size={11} fill="#C7FF00" className="ml-0.5 inline text-[#C7FF00]" /></span></div>
        <p className="mt-0.5 text-[7px] text-[#1255FF]">by purepearl studio</p>
        <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#F0F1F3] px-2 py-1 text-[7px] text-[#565A62]"><BarChart3 size={8} />Beginner</div>
        <p className="mt-3 text-[13px] font-bold text-[#1255FF]">$25<span className="text-[7px] font-normal text-[#777B83]">/lifetime</span></p>
      </div>
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="flex items-center">
      <Avatars></Avatars>
    </div>
  );
}

function MiniPill({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-[#30343A]/85 px-2 py-1 text-[7px] text-white">{children}</span>;
}

function SocialButton({ children, ariaLabel }: { children: ReactNode; ariaLabel: string }) {
  return (
    <button type="button" aria-label={ariaLabel} className="flex h-[57px] w-[57px] items-center justify-center rounded-[17px] border border-[#D9DADF] bg-white text-[#050505] transition hover:-translate-y-0.5 hover:border-[#BFC2C8] hover:shadow-sm">
      {children}
    </button>
  );
}

function Triangle() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <defs><linearGradient id="home9Triangle" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#DFFF00" /><stop offset="100%" stopColor="#AEE600" /></linearGradient></defs>
      <path d="M50 4 L94 91 L6 91 Z" fill="url(#home9Triangle)" />
    </svg>
  );
}

function Squiggle({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17 15C31 8 54 10 65 18C75 25 67 34 51 36C32 39 15 43 20 53C25 63 51 62 68 59C82 57 83 65 72 73C60 81 38 79 29 89" stroke={color} strokeWidth="16" strokeLinecap="round" />
    </svg>
  );
}