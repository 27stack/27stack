import { createRoutesStub } from "react-router";
import { expect, test } from "vitest";
import { render as renderInBrowser } from "vitest-browser-react";
import Home from "./home";

/** Render the home page inside a router, since it links with <Link>. */
function render(page: React.ReactElement) {
  const Stub = createRoutesStub([{ path: "/", Component: () => page }]);
  return renderInBrowser(<Stub initialEntries={["/"]} />);
}

test("the hero shows the headline, the swing chart, and ways into the plan and the changelog", async () => {
  const screen = await render(<Home />);
  const main = screen.getByRole("main");
  const hero = screen.container.querySelector<HTMLElement>(".hero")!;

  expect(hero.textContent).toContain("A short changelog for computing");
  await expect
    .element(main.getByRole("heading", { level: 1, name: /You used to own\s*your computer\.\s*You can again\./ }))
    .toBeInTheDocument();
  await expect.element(main.getByRole("img", { name: /A line swinging between theirs and yours/ })).toBeInTheDocument();
  expect(hero.querySelector("a.hero-plan")?.textContent).toBe("Read the plan");
  expect(hero.querySelector("a.hero-plan")?.getAttribute("href")).toBe("/plan");
  await expect.element(main.getByRole("link", { name: "or start with the changelog" })).toHaveAttribute("href", "#e0");
  // The link's target is the first entry.
  expect(screen.container.querySelector("#e0")?.textContent).toContain("1960s");
});

test("the changelog has four entries, each with its version, its era, its side and a drawing", async () => {
  const screen = await render(<Home />);
  const entries = [
    { label: "Mainframes, rented", year: "1960s", owned: false, heading: "You rented time." },
    { label: "Personal computers, owned", year: "1980s", owned: true, heading: "You owned the machine." },
    { label: "Software as a service, rented", year: "2000s", owned: false, heading: "You rented again." },
    { label: "In-house clouds, owned again", year: "2027", owned: true, heading: "You own it again." },
  ];

  for (const [i, { label, year, owned, heading }] of entries.entries()) {
    const entry = screen.container.querySelector<HTMLElement>(`#e${i}`)!;
    expect(entry.querySelector(".eyebrow")?.textContent).toBe(`v${i + 1} · ${label}`);
    expect(entry.hasAttribute("data-owned")).toBe(owned);
    expect(entry.querySelector(".exhibit-year")?.textContent).toBe(year);
    expect(entry.querySelector("h2")?.textContent).toBe(heading);
    expect(entry.querySelectorAll("svg[role=img][aria-label]")).toHaveLength(1);
  }
  expect(screen.container.querySelectorAll(".exhibit")).toHaveLength(4);
});

test("the page explains the three layers and how it fits what you already run", async () => {
  const screen = await render(<Home />);
  const main = screen.getByRole("main");

  await expect
    .element(main.getByRole("heading", { level: 2, name: /The PC needed a standard\.\s*So does the cloud\./ }))
    .toBeInTheDocument();
  for (const layer of ["Apps on top", "One layer in the middle", "Any hardware underneath"]) {
    await expect.element(main.getByRole("heading", { level: 3, name: layer })).toBeInTheDocument();
  }

  await expect
    .element(main.getByRole("heading", { level: 2, name: "Works with your existing infrastructure" }))
    .toBeInTheDocument();
  const steps = [...screen.container.querySelectorAll(".steps > li h3")].map((h) => h.textContent);
  expect(steps).toEqual(["Start on what you have", "Connect what’s already there", "Move in at your own pace"]);
});

test("the page closes with where things stand, and links to the plan, to follow, and to get in touch", async () => {
  const screen = await render(<Home />);
  const standing = screen.container.querySelector<HTMLElement>("#source")!;
  const link = (name: string) => [...standing.querySelectorAll("a")].find((a) => a.textContent === name);

  await expect
    .element(screen.getByRole("main").getByRole("heading", { level: 2, name: "Where things stand" }))
    .toBeInTheDocument();
  expect(link("Read the plan")?.getAttribute("href")).toBe("/plan");
  expect(link("Follow the project")?.getAttribute("href")).toBe("/contribute");
  expect(link("Get in touch")?.getAttribute("href")).toMatch(/^mailto:/);
});
