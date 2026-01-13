import { PageHeader } from '@/components/page-header';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-16">
      <PageHeader
        title="ScheduleIt"
        subtitle="A minimal foundation for booking, admin, and configuration workflows."
      />
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
        <h2 className="text-xl font-semibold text-white">Next steps</h2>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>Build booking flows in the booking feature folder.</li>
          <li>Add admin tools with role-aware layouts.</li>
          <li>Configure providers and availability settings.</li>
        </ul>
      </section>
    </main>
  );
}
