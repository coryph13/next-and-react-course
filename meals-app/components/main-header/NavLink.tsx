'use client'

import classes from '@/components/main-header/NavLink.module.css';

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({
  href,
  children
}: {
  href: string;
  children: string;
}) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ?
          `${classes.link} ${classes.active}` :
          classes.link
      }
    >
      {children}
    </Link>
  )
}