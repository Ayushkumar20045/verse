type AvatarProps = {
  name: string;
};

export default function Avatar({ name }: AvatarProps) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 font-bold text-white">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}