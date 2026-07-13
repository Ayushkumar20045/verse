type SettingsToggleProps = {
  label: string;
  description?: string;
  enabled: boolean;
  onToggle: () => void;
};

export default function SettingsToggle({
  label,
  description,
  enabled,
  onToggle,
}: SettingsToggleProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-medium">
          {label}
        </h3>

        {description && (
          <p className="mt-1 text-sm text-neutral-500">
            {description}
          </p>
        )}
      </div>

      <button
        onClick={onToggle}
        className={`relative h-7 w-14 rounded-full transition-colors ${
          enabled
            ? "bg-white"
            : "bg-neutral-700"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-black transition-transform ${
            enabled
              ? "translate-x-8"
              : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}