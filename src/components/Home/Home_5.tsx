const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/images/image_1.png",
    text: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/images/Image_2.jpg",
    text: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/images/Image_3.jpg",
    text: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

export default function Home_5() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[27%] top-[-18%] h-[420px] w-[420px] rounded-full bg-[#C7FF00]/25 blur-[100px] sm:h-[520px] sm:w-[520px]" />
        <div className="absolute bottom-[-35%] left-[-8%] h-[420px] w-[620px] rounded-full bg-[#D7E0FF]/75 blur-[100px]" />
        <div className="absolute right-[-12%] top-[25%] h-[420px] w-[520px] rounded-full bg-[#EFFFBD]/65 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-[66px] lg:py-[52px]">
        {/* Heading */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:items-start md:gap-12 lg:gap-[75px]">
          <div>
            <h2 className="max-w-[450px] text-[31px] font-bold leading-[1.08] tracking-[-1.1px] text-[#050505] sm:text-[36px] md:text-[37px] lg:text-[34px] xl:text-[36px]">
              Discover What Our
              <br className="hidden sm:block" />
              Community Is Saying
            </h2>
          </div>

          <div className="max-w-[490px] md:pt-1">
            <p className="text-[12px] leading-[1.75] text-[#64666D] sm:text-[13px]">
              At ByteSpace, our vibrant community of learners and creators is
              at the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating
              on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-[305px] flex-col rounded-[17px] bg-white px-[18px] py-[18px] shadow-[0_8px_30px_rgba(30,35,50,0.035)] ring-1 ring-white/70 sm:min-h-[310px] sm:px-[18px] sm:py-[18px] lg:min-h-[313px]"
            >
              {/* Avatar */}
              <div className="flex items-center gap-3">
                <div className="h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full bg-[#EEF0F2]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    onError={(e) => {
                      e.currentTarget.src = "/images/student_png.webp";
                    }}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[14px] font-bold leading-[1.2] text-[#17191D]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-[12px] leading-none text-[#1255FF]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-7 flex flex-1 flex-col">
                <p className="text-[12px] leading-[1.75] text-[#676970] sm:text-[12.5px]">
                  {testimonial.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
