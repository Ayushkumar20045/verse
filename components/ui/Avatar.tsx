import Image from "next/image";

type AvatarProps = {
  name: string;
  photoURL?: string;
};

export default function Avatar({
  name,
  photoURL,
}: AvatarProps) {
  const initial =
    name.charAt(0).toUpperCase();

  if (photoURL) {
    return (
      <Image
        src={photoURL}
        alt={name}
        width={48}
        height={48}
        className="rounded-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 font-bold text-white">
      {initial}
    </div>
  );
}