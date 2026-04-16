import { Outlet, createRootRoute } from "@tanstack/solid-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <header>
        <h1>Wails Template</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
