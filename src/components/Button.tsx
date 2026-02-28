import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block font-heading font-bold uppercase tracking-wider text-sm px-8 py-3 transition-colors duration-200";
  const variants = {
    primary: "bg-brand-green text-brand-dark hover:bg-brand-green/90",
    outline:
      "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-dark",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
