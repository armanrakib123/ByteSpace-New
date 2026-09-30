import { Search, Star } from "lucide-react";
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
    <main className="relative min-h-[100svh] w-full overflow-hidden bg-[#073de0] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.65) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.65) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "86px 86px",
        }}
      />

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

      <div
        className="
          pointer-events-none
          absolute
          -right-[65px]
          top-[15%]
          z-10
          h-[210px]
          w-[145px]
          rotate-[-18deg]
          rounded-[45px]
          bg-[#d7ff00]
          sm:-right-[70px]
          sm:h-[225px]
          sm:w-[155px]
          md:h-[240px]
          md:w-[170px]
          lg:-right-[75px]
          lg:top-[14%]
          lg:h-[245px]
          lg:w-[175px]
        "
      />

      <section
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1500px]
          flex-col
          items-center
          px-4
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
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

        <div
          className="
            relative
            mt-[32px]
            h-[390px]
            w-full
            max-w-[1200px]

            min-[390px]:h-[415px]

            min-[414px]:h-[440px]

            sm:mt-[35px]
            sm:h-[455px]

            md:h-[490px]

            lg:mt-[38px]
            lg:h-[520px]

            xl:h-[550px]
          "
        >
          <div className="
              absolute
              bottom-[-245px]
              left-1/2
              h-[400px]
              w-[500px]
              -translate-x-1/2
              rounded-t-full
              bg-[#caff00]

              min-[390px]:bottom-[-260px]
              min-[390px]:h-[535px]
              min-[390px]:w-[535px]

              min-[414px]:bottom-[-280px]
              min-[414px]:h-[570px]
              min-[414px]:w-[570px]

              sm:bottom-[-290px]
              sm:h-[600px]
              sm:w-[600px]

              md:bottom-[-315px]
              md:h-[650px]
              md:w-[650px]

              lg:bottom-[-350px]
              lg:h-[700px]
              lg:w-[700px]

              xl:bottom-[-370px]
              xl:h-[740px]
              xl:w-[740px]
            "
          />
          <div
            className="
              absolute
              bottom-[85px]
              left-[-5px]
              z-30
              h-[105px]
              w-[130px]
              rotate-[18deg]
              rounded-[50%]
              bg-white

              min-[390px]:h-[115px]
              min-[390px]:w-[140px]

              min-[414px]:h-[125px]
              min-[414px]:w-[150px]

              sm:left-[2%]
              sm:h-[135px]
              sm:w-[165px]

              md:h-[145px]
              md:w-[175px]

              lg:left-[3%]
              lg:h-[150px]
              lg:w-[180px]

              xl:h-[160px]
              xl:w-[190px]
            "
          >
            <div
              className="
                absolute
                left-[38px]
                top-[29px]
                h-[48px]
                w-[57px]
                rounded-[50%]
                bg-[#073de0]

                sm:left-[48px]
                sm:top-[35px]
                sm:h-[55px]
                sm:w-[65px]

                lg:left-[52px]
                lg:top-[40px]
                lg:h-[62px]
                lg:w-[72px]
              "
            />
          </div>

          <div
            className="
              absolute
              left-[7%]
              top-[12px]
              z-30
              h-[80px]
              w-[65px]
              rotate-[-20deg]
              scale-[0.75]

              sm:left-[10%]
              sm:scale-[0.85]

              md:left-[12%]
              md:scale-90

              lg:left-[15%]
              lg:top-[1vh]
              lg:scale-100
            "
          >
            <span className="absolute left-0 top-0 h-[16px] w-[60px] rotate-[-15deg] rounded-full bg-white" />

            <span className="absolute left-[5px] top-[19px] h-[17px] w-[65px] rotate-[5deg] rounded-full bg-white" />

            <span className="absolute left-[10px] top-[39px] h-[17px] w-[65px] rotate-[-4deg] rounded-full bg-white" />

            <span className="absolute left-[14px] top-[59px] h-[17px] w-[60px] rotate-[7deg] rounded-full bg-white" />
          </div>

          <div
            className="
              absolute
              bottom-[80px]
              right-[-5px]
              z-30
              h-[135px]
              w-[90px]
              rotate-[-13deg]
              scale-[0.75]

              sm:right-[2%]
              sm:scale-[0.85]

              md:right-[4%]
              md:scale-90

              lg:right-[2%]
              lg:bottom-[8vh]
              lg:scale-100
            "
          >
            <span className="absolute right-0 top-0 h-[27px] w-[85px] rotate-[15deg] rounded-full bg-white" />

            <span className="absolute right-[3px] top-[31px] h-[28px] w-[100px] rotate-[-5deg] rounded-full bg-white" />

            <span className="absolute right-0 top-[62px] h-[28px] w-[98px] rotate-[8deg] rounded-full bg-white" />

            <span className="absolute right-[8px] top-[94px] h-[28px] w-[88px] rotate-[-7deg] rounded-full bg-white" />
          </div>

          <div
            className="
              absolute
              right-[7%]
              top-[5px]
              z-20
              hidden
              h-[110px]
              w-[110px]

              md:block
              lg:right-[8%]
              lg:h-[140px]
              lg:w-[140px]
            "
          >
            <div
              className="
                absolute
                left-[15px]
                top-[20px]
                h-0
                w-0
                rotate-[5deg]
                border-b-[50px]
                border-l-[40px]
                border-r-[40px]
                border-b-white
                border-l-transparent
                border-r-transparent
                drop-shadow-[0_5px_8px_rgba(0,0,0,0.08)]

                lg:left-[20px]
                lg:top-[27px]
                lg:border-b-[62px]
                lg:border-l-[50px]
                lg:border-r-[50px]
              "
            />
          </div>

          <div
            className="
              absolute
              bottom-[-3px]
              left-1/2
              z-30
              w-[245px]
              -translate-x-1/2

              min-[390px]:w-[265px]

              min-[414px]:w-[285px]

              sm:w-[320px]

              md:w-[365px]

              lg:w-[420px]

              xl:w-[460px]
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
                drop-shadow-[0_15px_20px_rgba(0,0,0,0.08)]
              "
            />
          </div>

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

          <div
            className="
              absolute
              right-[7%]
              top-[78px]
              z-40
              w-[145px]
              rounded-[11px]
              bg-white
              px-3
              py-2.5
              text-left
              shadow-[0_10px_30px_rgba(0,0,0,0.14)]

              min-[390px]:right-[8%]
              min-[390px]:top-[82px]

              min-[414px]:right-[9%]
              min-[414px]:w-[155px]

              sm:right-[15%]
              sm:top-[90px]
              sm:w-[160px]
              sm:px-3

              md:right-[17%]
              md:w-[165px]

              lg:right-[22%]
              lg:top-[4vh]
              lg:w-[168px]
              lg:py-3
            "
          >
            <p className="text-[7px] text-gray-700 sm:text-[8px] md:text-[9px]">
              Learning Progress
            </p>

            <p className="mt-1 text-[27px] font-bold leading-none text-gray-900 sm:text-[31px] md:text-[35px]">
              55%
            </p>

            <div className="mt-2 h-[5px] w-full rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-[#caff00]" />
            </div>
          </div>

          <div
            className="
              absolute
              bottom-[55px]
              left-[11%]
              z-40
              w-[165px]
              rounded-[11px]
              bg-white
              p-2.5
              text-left
              shadow-[0_10px_30px_rgba(0,0,0,0.14)]

              min-[390px]:left-[10%]
              min-[390px]:bottom-[60px]

              min-[414px]:left-[11%]
              min-[414px]:w-[175px]

              sm:left-[18%]
              sm:bottom-[70px]
              sm:w-[180px]
              sm:p-3

              md:left-[20%]
              md:w-[185px]

              lg:left-[20%]
              lg:bottom-[8vh]
              lg:w-[190px]
            "
          >
            <p className="text-[9px] font-medium text-gray-800 sm:text-[10px] md:text-[11px]">
              Happy Students
            </p>

            <div className="mt-1 flex items-center gap-1">
              <span className="text-[6px] text-gray-500 sm:text-[7px] md:text-[8px]">
                4.5 (240)
              </span>

              <Star
                size={8}
                fill="#ffb800"
                className="text-[#ffb800]"
              />

              <span className="text-[6px] text-gray-400 sm:text-[7px] md:text-[8px]">
                •
              </span>

              <span className="text-[6px] text-gray-400 sm:text-[7px] md:text-[8px]">
                1200+
              </span>
            </div>
            <Avatars></Avatars>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
