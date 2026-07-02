type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "danger";
};

export default function Button({
  children,
  variant,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-white text-black hover:bg-gray-200",
    secondary:
      "bg-neutral-800 text-white hover:bg-neutral-700",
    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`w-full rounded-lg px-4 py-3 font-semibold transition-colors ${variants[variant]}`}
    >
      {children}
    </button>
  );
}