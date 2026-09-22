import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-start px-5 py-24 sm:px-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-5xl font-semibold text-navy">
        This page isn’t here
      </h1>
      <p className="mt-4 text-lg text-muted">
        The guide may have moved. Head back to the homepage or browse the full
        list of UK Google Sheets explainers.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/guides">All guides</Link>
        </Button>
      </div>
    </main>
  );
}
