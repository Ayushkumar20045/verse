type SettingsSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function SettingsSection({
  title,
  description,
  children,
}: SettingsSectionProps) {
  return (
    <section className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm text-neutral-500">
            {description}
          </p>
        )}
      </div>

      <div className="space-y-5">
        {children}
      </div>
    </section>
  );
}