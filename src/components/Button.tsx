import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-coral text-white hover:bg-coral/90 focus-visible:ring-offset-bg",
        outlineLight: "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 focus-visible:ring-offset-navy",
        outlineDark: "bg-transparent text-navy border border-navy/30 hover:border-navy hover:bg-navy/5 focus-visible:ring-offset-bg",
        ghost: "bg-white/10 text-white hover:bg-white/20 focus-visible:ring-offset-navy",
      },
      size: {
        md: "px-5 py-2.5 text-sm",
        lg: "px-7 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type CommonProps = VariantProps<typeof button> & {
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonLink({ href, external, variant, size, className, children, ...rest }: LinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(button({ variant, size }), className)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(button({ variant, size }), className)} {...rest as object}>
      {children}
    </Link>
  );
}

export function Button({ variant, size, className, children, ...rest }: ButtonProps) {
  return (
    <button className={cn(button({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}
