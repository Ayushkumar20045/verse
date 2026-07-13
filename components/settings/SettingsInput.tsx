type SettingsInputProps = {
  label: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder?: string;
  disabled?: boolean;
};

export default function SettingsInput({
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
}: SettingsInputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-lg border border-neutral-800 bg-black px-4 py-3 outline-none transition-colors focus:border-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-500"
      />
    </div>
  );
}