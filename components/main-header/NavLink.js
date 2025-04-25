"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./NavLink.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link className={`${classes.link} ${path.startsWith(href) && classes.active}`} href={href}>
      {children}
    </Link>
  );
}
