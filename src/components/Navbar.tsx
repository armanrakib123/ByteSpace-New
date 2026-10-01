import React, { useEffect, useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Courses",
        href: "/courses",
    },
    {
        label: "Creators",
        href: "/creators",
    },
];

const Navbar: React.FC = () => {
    const { setIsCartOpen, cartCount } = useCart();
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Top of the page
            if (currentScrollY <= 10) {
                setIsVisible(true);
            }
            // Scrolling down
            else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
                setMobileMenuOpen(false);
            }
            // Scrolling up
            else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Navbar */}
            <header
                className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          bg-[#073BDD]
          transition-transform
          duration-300
          ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
            >
                <nav className="mx-auto flex h-[106px] w-full items-center">

                    {/* ================= Logo ================= */}
                    <div
                        className="
              flex
              h-full
              w-[320px]
              shrink-0
              items-center
              px-[106px]
            "
                    >
                        <a
                            href="/"
                            className="flex items-center gap-2 whitespace-nowrap"
                        >
                            <div className="w-10 h-10 flex items-center justify-center">
                                <img src="/bbytespace.png" alt="Logo" />
                            </div>

                            <span className="text-[28px] font-bold tracking-[-0.7px] text-white">
                                ByteSpace
                            </span>
                        </a>
                    </div>

                    {/* ================= Left Empty Space ================= */}
                    <div className="hidden h-full flex-1 lg:block" />

                    {/* ================= Center Menu ================= */}
                    <div className="hidden h-full lg:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="
                  flex
                  h-full
                  w-[106px]
                  items-center
                  justify-center
                  text-[17px]
                  font-normal
                  text-white
                  transition-colors
                  duration-200
                  hover:bg-white/10
                "
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* ================= Right Empty Space ================= */}
                    <div className="hidden h-full flex-1  lg:block" />

                    {/* ================= Right Actions ================= */}
                    <div className="hidden h-full lg:flex">
                        <a
                            href="/login"
                            className="
                flex
                h-full
                w-[105px]
                items-center
                justify-center
                text-[17px]
                text-white
                transition-colors
                hover:bg-white/10
              "
                        >
                            Sign In
                        </a>

                        <a
                            href="/signup"
                            className="
                flex
                h-full
                w-[106px]
                items-center
                justify-center
                text-[17px]
                text-white
                transition-colors
                hover:bg-white/10
              "
                        >
                            Join Us
                        </a>

                        <a
                            href="/cart"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsCartOpen(true);
                            }}
                            aria-label="Shopping cart"
                            className="
                relative
                flex
                h-full
                w-[104px]
                items-center
                justify-center
                text-white
                transition-colors
                hover:bg-white/10
              "
                        >
                            <ShoppingBag
                                size={20}
                                strokeWidth={1.8}
                            />
                            {cartCount > 0 && (
                                <span className="absolute top-9 right-8 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C8FF00] px-1 text-[10px] font-bold text-[#1B2500]">
                                    {cartCount}
                                </span>
                            )}
                        </a>
                    </div>

                    {/* ================= Mobile Menu Button ================= */}
                    <div className="ml-auto flex h-full items-center px-5 lg:hidden">
                        <button
                            type="button"
                            aria-label="Toggle menu"
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            className="text-white"
                        >
                            {mobileMenuOpen ? (
                                <X size={25} strokeWidth={1.8} />
                            ) : (
                                <Menu size={25} strokeWidth={1.8} />
                            )}
                        </button>
                    </div>
                </nav>

                {/* ================= Mobile Menu ================= */}
                <div
                    className={`
            overflow-hidden
            bg-[#073BDD]
            transition-all
            duration-300
            lg:hidden
            ${mobileMenuOpen ? "max-h-[400px]" : "max-h-0"}
          `}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="
                block
                px-6
                py-4
                text-sm
                text-white
                transition-colors
                hover:bg-white/10
              "
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="/login"
                        className="
              block
              px-6
              py-4
              text-sm
              text-white
              hover:bg-white/10
            "
                    >
                        Sign In
                    </a>

                    <a
                        href="/signup"
                        className="
              block
              px-6
              py-4
              text-sm
              text-white
              hover:bg-white/10
            "
                    >
                        Join Us
                    </a>

                    <a
                        href="/cart"
                        onClick={(e) => {
                            e.preventDefault();
                            setMobileMenuOpen(false);
                            setIsCartOpen(true);
                        }}
                        className="
              flex
              items-center
              justify-between
              px-6
              py-4
              text-sm
              text-white
              hover:bg-white/10
            "
                    >
                        <div className="flex items-center gap-3">
                            <ShoppingBag size={18} />
                            Cart
                        </div>
                        {cartCount > 0 && (
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C8FF00] px-1.5 text-xs font-bold text-[#1B2500]">
                                {cartCount}
                            </span>
                        )}
                    </a>
                </div>
            </header>

            {/* Navbar space */}
            <div className="h-[106px] w-full" />
        </>
    );
};

export default Navbar;