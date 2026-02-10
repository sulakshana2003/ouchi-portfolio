/* import PillNav from "../PillNav";
// put your logo file in src/assets/logo.svg (or change the path)
import logo from "../../assets/react.svg";

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-slate-950/80 border-b border-slate-800/60 backdrop-blur">
      <div className="section-container h-16 flex items-center">
        <PillNav
          logo={logo}
          logoAlt="Sulakshana Portfolio"
          items={[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
            { label: "Education", href: "#education" },
            { label: "Contact", href: "#contact" },
          ]}
          activeHref="#home"
          className="w-full justify-between"
          ease="power2.easeOut"
          baseColor="#020617" // slate-950
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#020617" // dark text on white pill
        />
      </div>
    </header>
  );
};
 */

import StaggeredMenu from "../StaggeredMenu";
import logo from "../../assets/react.svg";

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <StaggeredMenu
        position="right"
        isFixed={true}
        logoUrl={logo}
        colors={["#0f172a", "#1e293b", "#334155"]} // subtle slate colors
        accentColor="#6366f1" // indigo highlight

        // navbar items linking to your sections
        items={[
          { label: "Home", ariaLabel: "Go to Home", link: "#home" },
          { label: "About", ariaLabel: "Go to About section", link: "#about" },
          { label: "Skills", ariaLabel: "Go to Skills section", link: "#skills" },
          { label: "Projects", ariaLabel: "Go to Projects section", link: "#projects" },
          { label: "Education", ariaLabel: "Go to Education section", link: "#education" },
          { label: "Contact", ariaLabel: "Go to Contact section", link: "#contact" },
        ]}

        // socials
        socialItems={[
          { label: "GitHub", link: "https://github.com" },
          { label: "LinkedIn", link: "https://linkedin.com" },
          { label: "Twitter", link: "https://twitter.com" },
        ]}

        displaySocials={true}
        displayItemNumbering={true}

        menuButtonColor="#fff"
        openMenuButtonColor="#111"
        changeMenuColorOnOpen={true}

        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
    </header>
  );
};

export default Navbar;
