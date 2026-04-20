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
  const baseClassName =
    "inline-flex min-h-12 items-center justify-center rounded-full border px-5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";
  const variantClassName =
    variant === "primary"
      ? "border-transparent bg-accent text-white shadow-[var(--shadow-soft)] hover:bg-accent-strong"
      : "border-border-soft bg-surface text-ink hover:border-accent/40 hover:bg-white";
  const className = `${baseClassName} ${variantClassName}`;
  const shouldOpenExternal = external && /^https?:\/\//.test(href);

  if (shouldOpenExternal) {
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
