import React from "react";
import {
  Waves,
  Sun,
  Zap,
  CircleDot,
  Orbit,
} from "lucide-react";

interface LogoItem {
  icon: React.ElementType;
  variant?: "circle" | "normal";
}

const logos: LogoItem[] = [
  { icon: Waves, variant: "circle" },
  { icon: Sun, variant: "normal" },
  { icon: Zap, variant: "circle" },
  { icon: CircleDot, variant: "circle" },
  { icon: Orbit, variant: "normal" },
];

const Features: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f5f5]">
      <div
        className="
          mx-auto
          flex
          min-h-[174px]
          w-full
          items-center
          justify-center
          px-6
          sm:px-10
          lg:px-20
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1600px]
            items-center
            justify-between
            gap-12
          "
        >
          {logos.map((logo, index) => {
            const Icon = logo.icon;

            return (
              <div
                key={index}
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  text-[#858991]
                "
              >
                {/* Logo Icon */}
                <div
                  className={`
                    flex
                    h-[35px]
                    w-[35px]
                    items-center
                    justify-center
                    ${logo.variant === "circle"
                      ? "rounded-full bg-[#858991] text-[#f5f5f5]"
                      : ""
                    }
                  `}
                >
                  <Icon
                    size={logo.variant === "circle" ? 23 : 35}
                    strokeWidth={2.5}
                  />
                </div>

                {/* Logo Text */}
                <span
                  className="
                    whitespace-nowrap
                    text-[20px]
                    font-bold
                    tracking-[-0.7px]
                    text-[#858991]
                    sm:text-[21px]
                  "
                >
                  Logoipsum
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
