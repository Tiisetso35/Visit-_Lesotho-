import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Attractions", href: "#attractions" },
  { label: "Enquiry", href: "#enquiry" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home">Visit Lesotho</a>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
