import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant: "primary" | "secondary" | "danger";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={clsx(
        "rounded-lg px-4 py-3 font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}