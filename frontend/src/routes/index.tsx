import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <section class="card">
      <h2>Solid + TanStack Router + TypeScript</h2>
    </section>
  );
}
