import Image from "next/image";
import clsx from "clsx";

type AvatarProps = {
  name: string;
  photoURL?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeClasses = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-32 w-32",
};

export default function Avatar({
  name,
  photoURL,
  size = "md",
}: AvatarProps) {
  const initial = name.charAt(0).toUpperCase();

  if (photoURL) {
    return (
      <Image
        src={photoURL}
        alt={name}
        width={128}
        height={128}
        className={clsx(
          "rounded-full object-cover",
          sizeClasses[size]
        )}
      />
    );
  }

  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full bg-neutral-800 font-bold text-white",
        sizeClasses[size],
        {
          "text-base": size === "sm",
          "text-lg": size === "md",
          "text-2xl": size === "lg",
          "text-4xl": size === "xl",
        }
      )}
    >
      {initial}
    </div>
  );
}