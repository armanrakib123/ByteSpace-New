import { Search, Star, ArrowRight } from "lucide-react";
import Avatars from "../UI/Avatars";

const Home = () => {

  const avatars = [
    "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
    "https://img.daisyui.com/images/profile/demo/averagebulk@192.webp",
    "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp",
    "https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp",
    "https://img.daisyui.com/images/profile/demo/distracted2@192.webp",
  ];
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#073de0] text-white">
      {/* ================= BACKGROUND GRID ================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* ================= DECORATIVE LEFT SHAPE ================= */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[30px]
          top-[18%]
          z-10
          scale-[0.8]
          sm:scale-[0.9]
          lg:scale-100
        "
      >
        <div className="relative h-[190px] w-[150px]">
          <span className="absolute left-[2px] top-0 h-[48px] w-[128px] rotate-[8deg] rounded-full bg-[#caff00]" />

          <span className="absolute -left-[4px] top-[43px] h-[49px] w-[130px] rotate-[18deg] rounded-full bg-[#caff00]" />

          <span className="absolute -left-[8px] top-[91px] h-[48px] w-[125px] rotate-[21deg] rounded-full bg-[#caff00]" />

          <span className="absolute left-0 top-[140px] h-[43px] w-[95px] rotate-[28deg] rounded-full bg-[#caff00]" />
        </div>
      </div>

      {/* ================= DECORATIVE RIGHT SHAPE ================= */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[75px]
          top-[17%]
          z-10
          h-[250px]
          w-[180px]
          rotate-[-18deg]
          rounded-[55px]
          bg-[#d7ff00]
          opacity-95
          sm:h-[280px]
          sm:w-[200px]
        "
      />

      {/* ================= HERO ================= */}
      <section className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col items-center px-5 sm:px-8 lg:px-12">
        {/* ================= HEADING ================= */}
        <div
          className="
            mt-[42px]
            flex
            w-full
            flex-col
            items-center
            text-center
            sm:mt-[50px]
            md:mt-[54px]
            lg:mt-[46px]
            xl:mt-[48px]
          "
        >
          <h1
            className="
              max-w-[900px]
              text-[38px]
              font-bold
              leading-[1.04]
              tracking-[-2px]

              min-[390px]:text-[40px]

              min-[414px]:text-[42px]

              sm:text-[46px]

              md:text-[54px]

              lg:text-[60px]

              xl:text-[68px]

              2xl:text-[70px]
            "
          >
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-[20px]
              max-w-[650px]
              px-3
              text-[10px]
              leading-5
              text-white/75

              min-[390px]:text-[11px]

              sm:mt-[24px]
              sm:text-[12px]
              sm:leading-6

              md:text-[13px]

              lg:mt-[26px]
              lg:text-[14px]
            "
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        {/* ================= SEARCH ================= */}
        <div
          className="
            mt-[25px]
            flex
            w-full
            max-w-[500px]
            items-center
            gap-2
            px-2

            min-[390px]:mt-[27px]

            sm:mt-[30px]
            sm:px-0

            lg:mt-[32px]
          "
        >
          {/* Search Input */}
          <div
            className="
              flex
              h-[40px]
              min-w-0
              flex-1
              items-center
              rounded-full
              bg-white
              px-4
              shadow-[0_8px_25px_rgba(0,0,0,0.12)]

              min-[390px]:h-[42px]

              sm:h-[44px]
              sm:px-5
            "
          >
            <Search
              size={15}
              strokeWidth={2}
              className="
                mr-2
                shrink-0
                text-gray-500

                sm:mr-2.5
              "
            />

            <input
              type="text"
              placeholder="Course, topic, creator"
              className="
                w-full
                min-w-0
                bg-transparent
                text-[10px]
                text-gray-800
                outline-none
                placeholder:text-gray-400

                sm:text-[11px]

                md:text-[12px]
              "
            />
          </div>

          {/* Search Button */}
          <button
            className="
              h-[40px]
              shrink-0
              rounded-full
              bg-[#caff00]
              px-5
              text-[10px]
              font-medium
              text-black
              shadow-[0_8px_20px_rgba(202,255,0,0.18)]
              transition-all
              duration-200
              hover:scale-[1.03]
              hover:bg-[#d8ff3d]

              min-[390px]:h-[42px]

              sm:h-[44px]
              sm:px-6
              sm:text-[11px]

              md:text-[12px]
            "
          >
            Search
          </button>
        </div>

        {/* ================= HERO VISUAL AREA ================= */}
        <div
          className="
            relative
            mt-12
            h-[570px]
            w-full
            max-w-[1250px]
            sm:mt-14
            md:h-[610px]
            lg:mt-16
            lg:h-[650px]
          "
        >
          {/* ================= LARGE LIME ARCH ================= */}
          <div
            className="
              absolute
              bottom-[-350px]
              left-1/2
              h-[690px]
              w-[690px]
              -translate-x-1/2
              rounded-t-full
              bg-[#caff00]
              sm:bottom-[-380px]
              sm:h-[760px]
              sm:w-[760px]
              md:h-[820px]
              md:w-[820px]
            "
          />

          {/* ================= LEFT ABSTRACT SHAPE ================= */}
          <div
            className="
              absolute
              bottom-[105px]
              left-[2%]
              z-30
              h-[155px]
              w-[190px]
              rotate-[18deg]
              rounded-[50%]
              bg-white
              sm:left-[5%]
              sm:h-[175px]
              sm:w-[215px]
            "
          >
            <div
              className="
                absolute
                left-[60px]
                top-[44px]
                h-[70px]
                w-[82px]
                rounded-[50%]
                bg-[#073de0]
              "
            />
          </div>

          {/* ================= LEFT WHITE LINES ================= */}
          <div
            className="
              absolute
              left-[13%]
              top-[25px]
              z-30
              h-[110px]
              w-[85px]
              rotate-[-20deg]
            "
          >
            <span className="absolute left-0 top-0 h-[17px] w-[68px] rotate-[-15deg] rounded-full bg-white" />
            <span className="absolute left-[5px] top-[23px] h-[18px] w-[72px] rotate-[5deg] rounded-full bg-white" />
            <span className="absolute left-[10px] top-[46px] h-[18px] w-[72px] rotate-[-4deg] rounded-full bg-white" />
            <span className="absolute left-[15px] top-[69px] h-[18px] w-[68px] rotate-[7deg] rounded-full bg-white" />
          </div>

          {/* ================= RIGHT WHITE LINES ================= */}
          <div
            className="
              absolute
              bottom-[105px]
              right-[3%]
              z-30
              h-[185px]
              w-[125px]
              rotate-[-13deg]
              sm:right-[6%]
            "
          >
            <span className="absolute right-0 top-0 h-[29px] w-[92px] rotate-[15deg] rounded-full bg-white" />
            <span className="absolute right-[3px] top-[34px] h-[30px] w-[108px] rotate-[-5deg] rounded-full bg-white" />
            <span className="absolute right-0 top-[68px] h-[30px] w-[106px] rotate-[8deg] rounded-full bg-white" />
            <span className="absolute right-[8px] top-[102px] h-[30px] w-[96px] rotate-[-7deg] rounded-full bg-white" />
          </div>

          {/* ================= TRIANGLE ================= */}
          <div
            className="
              absolute
              right-[10%]
              top-[10px]
              z-20
              hidden
              h-[150px]
              w-[150px]
              lg:block
            "
          >
            <div
              className="
                absolute
                left-[20px]
                top-[30px]
                h-0
                w-0
                rotate-[5deg]
                border-b-[65px]
                border-l-[52px]
                border-r-[52px]
                border-b-white
                border-l-transparent
                border-r-transparent
                drop-shadow-[0_8px_12px_rgba(0,0,0,0.08)]
              "
            />
          </div>

          {/* ================= STUDENT ================= */}
          <div
            className="
              absolute
              bottom-[-5px]
              left-1/2
              z-30
              w-[310px]
              -translate-x-1/2
              sm:w-[370px]
              md:w-[430px]
              lg:w-[490px]
            "
          >
            <img
              src="/images/happy-student-on-a-transparent-background-png.webp"
              alt="Student learning online"
              className="
                block
                h-auto
                w-full
                object-contain
                drop-shadow-[0_20px_25px_rgba(0,0,0,0.1)]
              "
            />
          </div>

          {/* ================= COURSE CARD ================= */}
          <div
            className="
              absolute
              left-[10%]
              top-[70px]
              z-40
              w-[135px]
              rounded-[11px]
              bg-white
              p-2.5
              text-left
              shadow-[0_10px_30px_rgba(0,0,0,0.14)]

              min-[390px]:left-[9%]
              min-[390px]:top-[75px]

              min-[414px]:left-[10%]
              min-[414px]:w-[145px]

              sm:left-[16%]
              sm:top-[82px]
              sm:w-[150px]
              sm:p-3

              md:left-[18%]
              md:w-[155px]

              lg:left-[23%]
              lg:top-[3vh]
              lg:w-[150px]
            "
          >
            <p className="text-[9px] font-medium text-gray-800 sm:text-[10px] md:text-[11px]">
              UI/UX Design
            </p>

            <p className="mt-1 text-[6px] text-gray-400 sm:text-[7px] md:text-[8px]">
              200 Courses • 1000+ Students
            </p>
          </div>

          {/* ================= PROGRESS CARD ================= */}
          <div
            className="
              absolute
              right-[3%]
              top-[120px]
              z-40
              w-[190px]
              rounded-[16px]
              border
              border-white/30
              bg-white
              px-4
              py-4
              text-left
              shadow-[0_18px_45px_rgba(0,0,0,0.15)]
              transition-transform
              duration-300
              hover:-translate-y-2
              sm:right-[16%]
              sm:top-[115px]
            "
          >
            <p className="text-[9px] font-medium text-gray-500">
              Learning Progress
            </p>

            <p className="mt-2 text-[39px] font-bold leading-none text-gray-900">
              55%
            </p>

            <div className="mt-3 h-[7px] w-full rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-[#caff00]" />
            </div>

            <p className="mt-2 text-[8px] text-gray-400">
              Keep going — you're doing great!
            </p>
          </div>

          {/* ================= STUDENTS CARD ================= */}
          <div
            className="
              absolute
              bottom-[115px]
              left-[7%]
              z-40
              w-[205px]
              rounded-[16px]
              border
              border-white/30
              bg-white
              p-4
              text-left
              shadow-[0_18px_45px_rgba(0,0,0,0.15)]
              transition-transform
              duration-300
              hover:-translate-y-2
              sm:left-[18%]
              md:left-[20%]
            "
          >
            <p className="text-[11px] font-bold text-gray-800">
              Happy Students
            </p>

            <div className="mt-2 flex items-center gap-1.5">
              <span className="text-[8px] font-medium text-gray-500">
                4.5 (240)
              </span>

              <Star
                size={10}
                fill="#ffb800"
                className="text-[#ffb800]"
              />

              <span className="text-[8px] text-gray-400">
                •
              </span>

              <span className="text-[8px] text-gray-400">
                1200+
              </span>
            </div>
            <Avatars></Avatars>

            {/* <div className="mt-2 flex items-center">
              {avatars.map((avatar, index) => (
                <div
                  key={avatar}
                  className={`
                    relative
                    h-6
                    w-6
                    overflow-hidden
                    rounded-full
                    border-2
                    border-white
                    bg-gray-200
                    ${index ? "-ml-[6px]" : ""}
                  `}
                >
                  <img
                    src={avatar}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}

              <div
                className="
                  -ml-[5px]
                  flex
                  h-6
                  min-w-[28px]
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-[#caff00]
                  px-1
                  text-[7px]
                  font-bold
                  text-black
                "
              >
                1K+
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
