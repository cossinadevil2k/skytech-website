import Logo from "@assets/logo-white.png";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const MenuItem: React.FC<{
  label: string;
  sectionId: string;
  device: string;
  scrollToSection: (sectionId: string) => void;
}> = ({ label, sectionId, device, scrollToSection }) => {
  return device === "mobile" ? (
    <button
      className={`cursor-pointer border-b border-gray-500 border-opacity-50 py-3 text-start text-white hover:text-blue-400`}
      onClick={() => scrollToSection(sectionId)}
    >
      {label}
    </button>
  ) : (
    <button
      className={`cursor-pointer py-5 text-[15px] font-normal leading-[18px] text-white hover:text-blue-400`}
      onClick={() => scrollToSection(sectionId)}
    >
      {label}
    </button>
  );
};

const Overlay: React.FC<{ onClick: () => void; isOpen: boolean }> = ({
  onClick,
  isOpen,
}) => (
  <div
    className={`fixed right-0 top-0 z-10 h-screen w-[50vw] transform bg-blue-950 opacity-30 transition-all duration-300 ease-in-out ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
    onClick={onClick}
  ></div>
);

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav>
      {isMobile ? (
        <div
          className={`flex items-center justify-between px-5 py-3 shadow-md transition-all delay-75 duration-300 ease-in-out ${
            isScrolled
              ? "fixed left-0 right-0 top-0 z-10 bg-blue-950 bg-opacity-30 backdrop-blur-sm"
              : "sticky left-0 right-0 top-0 z-10 bg-transparent"
          }`}
        >
          <button>
            <img src={Logo} alt="logo" className="h-[36px]" />
          </button>
          <div
            className={`cursor-pointer p-1 text-white ${isMenuOpen ? "z-20 rounded-full bg-gray-400" : ""}`}
          >
            {isMenuOpen ? (
              <X size={32} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            ) : (
              <Menu size={32} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            )}
          </div>
          <div
            className={`fixed left-0 top-0 z-20 flex h-screen w-[50vw] transform flex-col overflow-hidden bg-blue-950 px-6 py-8 transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <MenuItem
              label="Home"
              sectionId="home"
              device="mobile"
              scrollToSection={scrollToSection}
            />
            <MenuItem
              label="Ecosystems"
              sectionId="ecosystems"
              device="mobile"
              scrollToSection={scrollToSection}
            />
            <MenuItem
              label="Tokens"
              sectionId="tokens"
              device="mobile"
              scrollToSection={scrollToSection}
            />
            <MenuItem
              label="Participators"
              sectionId="participators"
              device="mobile"
              scrollToSection={scrollToSection}
            />
            <MenuItem
              label="Roadmap"
              sectionId="roadmap"
              device="mobile"
              scrollToSection={scrollToSection}
            />
            <button className="mt-auto rounded-full border-2 border-blue-400 py-3 text-white hover:bg-blue-400">
              Market Beta
            </button>
          </div>
          <Overlay onClick={() => setIsMenuOpen(false)} isOpen={isMenuOpen} />
        </div>
      ) : (
        <div
          className={`flex items-center justify-between py-5 transition-all delay-75 duration-300 ease-in-out ${
            isScrolled
              ? "fixed left-0 right-0 top-0 z-10 bg-blue-950 bg-opacity-30 backdrop-blur-sm"
              : "sticky left-0 right-0 top-0 z-10 bg-transparent"
          }`}
        >
          <div className="container mx-auto flex w-full items-center justify-between px-5">
            <button>
              <img src={Logo} alt="logo" className="h-[36px]" />
            </button>
            <div className="flex items-center gap-[30px]">
              <MenuItem
                label="Home"
                sectionId="home"
                device="desktop"
                scrollToSection={scrollToSection}
              />
              <MenuItem
                label="Ecosystems"
                sectionId="ecosystems"
                device="desktop"
                scrollToSection={scrollToSection}
              />
              <MenuItem
                label="Tokens"
                sectionId="tokens"
                device="desktop"
                scrollToSection={scrollToSection}
              />
              <MenuItem
                label="Participators"
                sectionId="participators"
                device="desktop"
                scrollToSection={scrollToSection}
              />
              <MenuItem
                label="Roadmap"
                sectionId="roadmap"
                device="desktop"
                scrollToSection={scrollToSection}
              />
              <div className="py-[7px]">
                <button className="ml-[10px] rounded-full border-2 border-blue-400 px-5 py-2 text-xs font-medium leading-6 tracking-[1.2px] text-white hover:bg-blue-400">
                  MARKETPLACE BETA
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
