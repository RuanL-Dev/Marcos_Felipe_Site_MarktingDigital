import Link from "next/link";
import type { ReactNode } from "react";

interface ActionLinkProps {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  children: ReactNode;
}

export function ActionLink({
  href,
  variant = "primary",
  external = false,
  children,
}: ActionLinkProps) {
  const className =
    variant === "primary" ? "button-primary" : "button-secondary";

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
