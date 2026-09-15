import { Link } from "react-router";
import type { ActionLink } from "../types";

interface ActionLinksProps {
  links: ActionLink[];
  className?: string;
}

/** Internal paths use the router; http and mailto links stay plain anchors. */
export function ActionLinks({ links, className }: ActionLinksProps) {
  return (
    <div className={className}>
      {links.map((link) => {
        if (link.href.startsWith("/")) {
          return (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
          );
        }
        const external = link.href.startsWith("http");
        return (
          <a
            key={link.label}
            href={link.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer noopener" : undefined}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
