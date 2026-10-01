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

export default function Signup() {
  const [mode, setMode] = useState<AuthMode>("signup");
  const [showPassword, setShowPassword] = useState(false);

  const signup = mode === "signup";

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#123FDF]">
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* =====================================================
            GRID BACKGROUND
        ====================================================== */}
        <GridBackground />

        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link to="/">
          <div
            className="
              absolute
              left-5
              top-5
              z-30
              h-12
              w-12

              xs:left-6
              xs:top-6
              xs:h-14
              xs:w-14

              sm:left-8
              sm:top-7
              sm:h-16
              sm:w-16

              md:left-10
              md:top-8
              md:h-[68px]
              md:w-[68px]

              lg:left-12
              lg:top-10
              lg:h-[70px]
              lg:w-[70px]

              xl:left-16
              xl:top-[55px]
              xl:h-[70px]
              xl:w-[70px]
            "
          >
            <img
              src="/bbytespace.png"
              alt="Brand Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-screen
            w-full
            max-w-[1440px]
            items-center
            px-5
            py-24

            xs:px-6
            xs:py-24

            sm:px-8
            sm:py-28

            md:px-10
            md:py-28

            lg:px-12
            lg:py-16

            xl:px-16
          "
        >
          {/* =====================================================
              MAIN GRID
          ====================================================== */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-center
              gap-14

              sm:gap-16

              md:gap-20

              lg:grid-cols-[minmax(0,1fr)_minmax(420px,520px)]
              lg:gap-12

              xl:grid-cols-[minmax(0,1fr)_520px]
              xl:gap-20
            "
          >
            {/* ===================================================
                LEFT SIDE
            ==================================================== */}
            <section
              className="
                relative
                mx-auto
                w-full
                max-w-[560px]

                lg:mx-0
              "
            >
              {/* Heading */}
              <div
                className="
                  mb-8
                  max-w-[410px]

                  xs:mb-9

                  sm:mb-10

                  md:mb-11

                  lg:mb-9
                "
              >
                <h1
                  className="
                    text-[20px]
                    font-semibold
                    leading-[1.25]
                    text-white

                    xs:text-[21px]

                    sm:text-[22px]

                    md:text-[23px]

                    lg:text-[21px]

                    xl:text-[22px]
                  "
                >
                  {signup ? "Sign up and come in" : "Sign in with ease"}
                </h1>

                <p
                  className="
                    mt-3
                    max-w-[400px]
                    text-[13px]
                    leading-[1.75]
                    text-white/85

                    xs:text-[14px]

                    sm:text-[15px]

                    md:text-[15px]

                    lg:text-[15px]
                  "
                >
                  {signup
                    ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
                    : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
                </p>
              </div>

              {/* Promo Artwork */}
              <PromoArtwork />
            </section>

            {/* ===================================================
                RIGHT / FORM
            ==================================================== */}
            <section
              className="
                mx-auto
                w-full
                max-w-[520px]

                lg:mx-0
              "
            >
              <div
                className="
                  min-h-[560px]
                  w-full
                  rounded-[20px]
                  bg-white
                  px-6
                  py-8
                  shadow-[0_18px_50px_rgba(0,0,0,.12)]

                  xs:px-7
                  xs:py-9

                  sm:px-10
                  sm:py-11

                  md:px-12
                  md:py-12

                  lg:min-h-[618px]
                  lg:px-[50px]
                  lg:py-[50px]

                  xl:min-h-[618px]
                "
              >
                <p
                  className="
                    text-[14px]
                    text-[#1255FF]

                    xs:text-[15px]

                    sm:text-[16px]
                  "
                >
                  {signup ? "Create an Account" : "Sign In"}
                </p>

                <h2
                  className="
                    mt-2
                    text-[30px]
                    font-bold
                    leading-[1.15]
                    tracking-[-1.2px]
                    text-[#25272C]

                    xs:text-[34px]

                    sm:text-[38px]

                    md:text-[39px]
                  "
                >
                  {signup ? (
                    <>
                      Welcome to ByteSpace
                    </>
                  ) : (
                    "Welcome Back"
                  )}
                </h2>

                {/* =================================================
                    FORM
                ================================================== */}
                <form
                  className="
                    mt-7

                    xs:mt-8

                    sm:mt-8
                  "
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Full Name */}
                  {signup && (
                    <FormField
                      label="Full Name"
                      type="text"
                      placeholder="Jamie Davis"
                    />
                  )}

                  {/* Email */}
                  <FormField
                    className={signup ? "mt-5" : ""}
                    label="Email"
                    type="email"
                    placeholder="designer@example.com"
                  />

                  {/* Password */}
                  <div className="mt-5">
                    <label
                      htmlFor="password"
                      className="
                        mb-2
                        block
                        text-[13px]
                        font-medium
                        text-[#303238]

                        sm:text-[14px]
                      "
                    >
                      Password
                    </label>

                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        className="
                          h-[42px]
                          w-full
                          rounded-[10px]
                          border
                          border-[#E0E1E4]
                          bg-white
                          px-4
                          pr-11
                          text-[14px]
                          text-[#34373D]
                          outline-none
                          transition

                          placeholder:text-[#92969E]

                          focus:border-[#1255FF]
                          focus:ring-2
                          focus:ring-[#1255FF]/10

                          sm:text-[15px]
                        "
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword((value) => !value)
                        }
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                        className="
                          absolute
                          right-3
                          top-1/2
                          -translate-y-1/2
                          text-[#8A8F97]
                          transition
                          hover:text-[#25272C]
                        "
                      >
                        {showPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mt-5 flex justify-end">
                    <button
                      type="submit"
                      className="
                        h-[37px]
                        rounded-full
                        bg-[#C7FF00]
                        px-5
                        text-[14px]
                        font-medium
                        text-[#1B2500]
                        shadow-[0_6px_16px_rgba(0,0,0,.08)]
                        transition

                        hover:-translate-y-0.5
                        hover:bg-[#D7FF35]

                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#1255FF]
                        focus-visible:ring-offset-2

                        sm:text-[15px]
                      "
                    >
                      {signup ? "Continue" : "Sign In"}
                    </button>
                  </div>

                  {/* =================================================
                      SOCIAL LOGIN
                  ================================================== */}
                  {!signup && (
                    <div
                      className="
                        mt-14

                        xs:mt-15

                        sm:mt-16
                      "
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-px flex-1 bg-[#E1E2E5]" />

                        <span className="px-1 text-[13px] text-[#8B8F96] sm:text-[14px]">
                          or
                        </span>

                        <div className="h-px flex-1 bg-[#E1E2E5]" />
                      </div>

                      <div
                        className="
                          mt-6
                          flex
                          justify-center
                          gap-3

                          sm:mt-7
                        "
                      >
                        <SocialButton ariaLabel="Facebook login">
                          <span className="text-[26px] font-bold leading-none">
                            f
                          </span>
                        </SocialButton>

                        <SocialButton ariaLabel="Google login">
                          <span className="text-[23px] font-semibold">
                            G
                          </span>
                        </SocialButton>
                      </div>
                    </div>
                  )}

                  {/* =================================================
                      SWITCH LOGIN / SIGNUP
                  ================================================== */}
                  <p
                    className={`
                      text-center
                      text-[13px]
                      text-[#777B83]

                      sm:text-[14px]

                      ${
                        signup
                          ? "mt-16 xs:mt-20 sm:mt-[100px]"
                          : "mt-14 xs:mt-16 sm:mt-16"
                      }
                    `}
                  >
                    {signup ? (
                      <>
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            setMode("login");
                            setShowPassword(false);
                          }}
                          className="
                            text-[#1255FF]
                            hover:underline
                          "
                        >
                          Login
                        </button>
                      </>
                    ) : (
                      <>
                        New user?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            setMode("signup");
                            setShowPassword(false);
                          }}
                          className="
                            text-[#1255FF]
                            hover:underline
                          "
                        >
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

/* ================================================================
   PROMO ARTWORK
================================================================ */

function PromoArtwork() {
  return (
    <div
      className="
        relative
        mx-auto
        h-[350px]
        w-full
        max-w-[500px]

        xs:h-[370px]

        sm:h-[400px]

        md:h-[420px]

        lg:h-[440px]
      "
    >
      {/* ==========================================================
          BACK COURSE CARD
      =========================================================== */}
      <CourseCard
        className="
          absolute
          left-0
          top-[100px]
          z-10
          w-[165px]

          xs:w-[175px]

          sm:w-[190px]

          md:w-[200px]

          lg:w-[205px]
        "
        image={IMAGE_PATHS.sideCourse}
        title="Build Digital Skills"
      />

      {/* ==========================================================
          MAIN COURSE CARD
      =========================================================== */}
      <div
        className="
          absolute
          left-[42px]
          top-[22px]
          z-20
          w-[250px]
          overflow-hidden
          rounded-[16px]
          border-[8px]
          border-white
          bg-white
          shadow-[0_15px_30px_rgba(0,0,0,.12)]

          xs:left-[48px]
          xs:w-[270px]

          sm:left-[65px]
          sm:w-[285px]

          md:left-[78px]
          md:w-[300px]

          lg:left-[90px]
        "
      >
        {/* Course Image */}
        <div
          className="
            relative
            h-[125px]
            overflow-hidden
            rounded-[7px]
            bg-[#171B20]

            xs:h-[135px]

            sm:h-[145px]

            md:h-[155px]
          "
        >
          <img
            src="/images/Course_Login.jpg"
            alt="Course preview"
            className="h-full w-full object-cover"
          />

          <div
            className="
              absolute
              bottom-2
              left-2
              right-2
              flex
              gap-1
              overflow-hidden
            "
          >
            <MiniPill>17 Lessons</MiniPill>

            <MiniPill>2 hours 16 mins</MiniPill>

            <MiniPill>59 Comments</MiniPill>
          </div>
        </div>

        {/* Course Info */}
        <div
          className="
            px-0
            pb-1
            pt-3
          "
        >
          <div className="flex items-center justify-between gap-2">
            <h3
              className="
                min-w-0
                truncate
                text-[14px]
                font-bold
                text-[#25272B]

                xs:text-[15px]

                sm:text-[16px]

                md:text-[18px]
              "
            >
              the Power of Big Data
            </h3>

            <span
              className="
                flex
                shrink-0
                items-center
                text-[12px]
                text-[#575B62]

                sm:text-[14px]

                md:text-[16px]
              "
            >
              4.5

              <Star
                size={14}
                fill="#C7FF00"
                className="ml-0.5 text-[#C7FF00]"
              />
            </span>
          </div>

          <p
            className="
              mt-0.5
              text-[9px]
              text-[#767B83]

              sm:text-[10px]

              md:text-[11px]
            "
          >
            by{" "}
            <span className="text-[#1255FF]">
              purepearl studio
            </span>
          </p>

          <div className="mt-3 flex items-center justify-between gap-2">
            <span
              className="
                inline-flex
                items-center
                gap-1
                rounded-full
                bg-[#F0F1F3]
                px-2
                py-1
                text-[8px]
                text-[#4F535A]

                sm:text-[9px]

                md:text-[11px]
              "
            >
              <BarChart3 size={10} />

              Beginner
            </span>

            <AvatarStack />
          </div>

          <p
            className="
              mt-3
              text-[15px]
              font-bold
              text-[#1255FF]

              sm:text-[16px]

              md:text-[18px]
            "
          >
            $25

            <span
              className="
                text-[9px]
                font-normal
                text-[#777C84]

                md:text-[11px]
              "
            >
              /lifetime
            </span>
          </p>
        </div>
      </div>

      {/* ==========================================================
          LIME RING
      =========================================================== */}
      <div
        className="
          absolute
          left-[8px]
          top-[48px]
          z-30
          h-[58px]
          w-[58px]
          rounded-full
          border-[14px]
          border-[#C7FF00]

          xs:left-[12px]
          xs:h-[64px]
          xs:w-[64px]

          sm:left-[25px]
          sm:top-[52px]
          sm:h-[70px]
          sm:w-[70px]
          sm:border-[16px]

          md:left-[32px]
          md:h-[74px]
          md:w-[74px]
          md:border-[17px]

          lg:left-[35px]
          lg:h-[76px]
          lg:w-[76px]
          lg:border-[18px]
        "
      />

      {/* ==========================================================
          TRIANGLE
      =========================================================== */}
      <div
        className="
          absolute
          bottom-[4px]
          left-0
          z-30
          h-[85px]
          w-[82px]
          rotate-[10deg]

          xs:h-[95px]
          xs:w-[92px]

          sm:h-[105px]
          sm:w-[100px]

          md:h-[110px]
          md:w-[105px]

          lg:h-[115px]
          lg:w-[110px]
        "
      >
        <Triangle />
      </div>

      {/* ==========================================================
          WHITE SQUIGGLE
      =========================================================== */}
      <div
        className="
          absolute
          bottom-[55px]
          right-0
          z-40
          h-[70px]
          w-[60px]
          rotate-[12deg]

          xs:h-[78px]
          xs:w-[65px]

          sm:h-[85px]
          sm:w-[70px]

          md:h-[90px]
          md:w-[75px]
        "
      >
        <Squiggle color="#FFFFFF" />
      </div>

      {/* ==========================================================
          HAPPY STUDENTS
      =========================================================== */}
      <div
        className="
          absolute
          bottom-0
          right-0
          z-40
          w-[175px]
          rounded-[12px]
          bg-[#C7FF00]
          px-3
          py-2.5
          shadow-[0_10px_25px_rgba(0,0,0,.14)]

          xs:w-[185px]

          sm:w-[195px]

          md:w-[205px]
        "
      >
        <p
          className="
            text-[11px]
            font-medium
            text-[#263100]

            sm:text-[12px]

            md:text-[14px]
          "
        >
          Happy Students
        </p>

        <p
          className="
            mt-0.5
            text-[7px]
            text-[#3D4A00]

            sm:text-[8px]

            md:text-[9px]
          "
        >
          4.5 (240)

          <Star
            size={8}
            fill="currentColor"
            className="ml-0.5 inline"
          />
        </p>

        <Avatars />
      </div>
    </div>
  );
}

/* ================================================================
   GRID BACKGROUND
================================================================ */

function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.17]
      "
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.7) 1px, transparent 1px)",
        backgroundSize: "95px 95px",
      }}
    />
  );
}

/* ================================================================
   FORM FIELD
================================================================ */

function FormField({
  label,
  type,
  placeholder,
  className = "",
}: {
  label: string;
  type: string;
  placeholder: string;
  className?: string;
}) {
  const id = label.toLowerCase().replaceAll(" ", "-");

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="
          mb-2
          block
          text-[13px]
          font-medium
          text-[#303238]

          sm:text-[14px]
        "
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="
          h-[42px]
          w-full
          rounded-[10px]
          border
          border-[#E0E1E4]
          bg-white
          px-4
          text-[14px]
          text-[#34373D]
          outline-none
          transition

          placeholder:text-[#92969E]

          focus:border-[#1255FF]
          focus:ring-2
          focus:ring-[#1255FF]/10

          sm:text-[15px]
        "
      />
    </div>
  );
}

/* ================================================================
   COURSE CARD
================================================================ */

function CourseCard({
  className = "",
  image,
  title,
}: {
  className?: string;
  image: string;
  title: string;
}) {
  return (
    <div
      className={`
        ${className}
        overflow-hidden
        rounded-[16px]
        border-[8px]
        border-white
        bg-white
        shadow-[0_14px_28px_rgba(0,0,0,.1)]
      `}
    >
      <div
        className="
          h-[115px]
          overflow-hidden
          rounded-[7px]
          bg-[#E8EAED]

          xs:h-[125px]

          sm:h-[135px]

          md:h-[145px]

          lg:h-[150px]
        "
      >
        <img
          src="/images/Course_Preview.webp"
          alt=""
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      <div className="px-1 pb-3 pt-2">
        <div className="flex items-center justify-between gap-1">
          <p
            className="
              min-w-0
              truncate
              text-[10px]
              font-bold
              text-[#282A2F]

              sm:text-[11px]

              md:text-[12px]
            "
          >
            {title}
          </p>

          <span
            className="
              shrink-0
              text-[9px]
              text-[#555A62]

              sm:text-[10px]

              md:text-[11px]
            "
          >
            4.5

            <Star
              size={10}
              fill="#C7FF00"
              className="ml-0.5 inline text-[#C7FF00]"
            />
          </span>
        </div>

        <p
          className="
            mt-0.5
            text-[9px]
            text-[#1255FF]

            sm:text-[10px]

            md:text-[11px]
          "
        >
          by purepearl studio
        </p>

        <div
          className="
            mt-3
            inline-flex
            items-center
            gap-1
            rounded-full
            bg-[#F0F1F3]
            px-2
            py-1
            text-[8px]
            text-[#565A62]

            sm:text-[9px]

            md:text-[10px]
          "
        >
          <BarChart3 size={8} />

          Beginner
        </div>

        <p
          className="
            mt-3
            text-[13px]
            font-bold
            text-[#1255FF]

            sm:text-[14px]

            md:text-[16px]
          "
        >
          $25

          <span
            className="
              text-[8px]
              font-normal
              text-[#777B83]

              md:text-[10px]
            "
          >
            /lifetime
          </span>
        </p>
      </div>
    </div>
  );
}

/* ================================================================
   AVATAR STACK
================================================================ */

function AvatarStack() {
  return (
    <div className="flex items-center">
      <Avatars />
    </div>
  );
}

/* ================================================================
   MINI PILL
================================================================ */

function MiniPill({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span
      className="
        whitespace-nowrap
        rounded-full
        bg-[#30343A]/85
        px-1.5
        py-1
        text-[7px]
        text-white

        sm:px-2
        sm:text-[8px]

        md:text-[10px]
      "
    >
      {children}
    </span>
  );
}

/* ================================================================
   SOCIAL BUTTON
================================================================ */

function SocialButton({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="
        flex
        h-[52px]
        w-[52px]
        items-center
        justify-center
        rounded-[16px]
        border
        border-[#D9DADF]
        bg-white
        text-[#050505]
        transition

        hover:-translate-y-0.5
        hover:border-[#BFC2C8]
        hover:shadow-sm

        sm:h-[57px]
        sm:w-[57px]
        sm:rounded-[17px]
      "
    >
      {children}
    </button>
  );
}

/* ================================================================
   TRIANGLE
================================================================ */

function Triangle() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="home9Triangle"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#DFFF00" />
          <stop offset="100%" stopColor="#AEE600" />
        </linearGradient>
      </defs>

      <path
        d="M50 4 L94 91 L6 91 Z"
        fill="url(#home9Triangle)"
      />
    </svg>
  );
}

/* ================================================================
   SQUIGGLE
================================================================ */

function Squiggle({
  color,
}: {
  color: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17 15C31 8 54 10 65 18C75 25 67 34 51 36C32 39 15 43 20 53C25 63 51 62 68 59C82 57 83 65 72 73C60 81 38 79 29 89"
        stroke={color}
        strokeWidth="16"
        strokeLinecap="round"
      />
    </svg>
  );
}