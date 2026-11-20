import { Link } from "react-router";
import { SITE_NAME } from "~/lib/site";
import { ThemeToggle } from "./theme-toggle";
import "./site-header.css";

/**
 * The logo, which leads home, and the nav: the plan, the way to help with it, and who's behind it.
 * The logo is the whole mark, so the site's name isn't set in type beside it.
 */
export function SiteHeader() {
  return (
    <header className="top">
      <Link className="mark" to="/" aria-label={`${SITE_NAME} home`}>
        <img className="logo-on-light" src="/logo-light.svg" alt="" />
        <img className="logo-on-dark" src="/logo-dark.svg" alt="" />
      </Link>
      <nav className="primary" aria-label="Primary">
        {/* Just "Read" on phones (site-header.css); screen readers still hear the whole name. The
            label is one span so its space survives: the link is a flex box, and a flex item drops
            leading spaces. */}
        <Link to="/plan">
          <span>
            Read<span className="nav-more"> the Plan</span>
          </span>
        </Link>
        <ThemeToggle />
        <Link to="/contribute">Contribute</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
