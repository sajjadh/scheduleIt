type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="space-y-3">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
        Launchpad
      </p>
      <h1 className="text-4xl font-semibold text-white sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-2xl text-lg text-slate-300">{subtitle}</p>
    </header>
  );
}
