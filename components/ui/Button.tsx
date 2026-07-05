import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant: "primary" | "secondary" | "danger";
  size?: "sm" | "md";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant,
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-3",
  };

  return (
    <button
      className={clsx(
        "rounded-lg font-semibold transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}