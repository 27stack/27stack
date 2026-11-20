import { Link } from "react-router";
import type { Route } from "./+types/home";
import { DeskComputer, MainframeRoom, OwnedCloud, RentedCloud, SwingChart } from "~/components/home/drawings";
import { SiteHeader } from "~/components/site-header";
import { pageMeta } from "~/lib/meta";
import { CONTACT_EMAIL, SITE_NAME } from "~/lib/site";
import "./home.css";

export const meta: Route.MetaFunction = () =>
  pageMeta({
    description: `Cities, schools, agencies and local businesses rent the software they run on, and pay for every change. ${SITE_NAME} is an open foundation for a cloud your organization owns: public infrastructure for anyone who wants their tools back.`,
    path: "/",
  });

interface ExhibitProps {
  /** Its version in the changelog, from 1. */
  number: number;
  /** What the era ran on and whose it was, for the eyebrow. */
  label: string;
  year: string;
  /** Whose machine it was. Owned entries are cobalt and put the drawing first; rented ones are orange. */
  owned: boolean;
  heading: string;
  children: React.ReactNode;
  drawing: React.ReactNode;
}

/** One entry in the changelog: its era, what it meant for you, where it sat between theirs and yours, and a drawing. */
function Exhibit({ number, label, year, owned, heading, children, drawing }: ExhibitProps) {
  return (
    <section className="exhibit" id={`e${number - 1}`} data-owned={owned || undefined}>
      <div className="exhibit-grid">
        <div className="exhibit-text">
          <p className="eyebrow">
            <span className="version">v{number}</span> · {label}
          </p>
          <p className="exhibit-year">{year}</p>
          <h2>{heading}</h2>
          <p className="exhibit-body">{children}</p>
          {/* The eyebrow already says which side it's on. */}
          <div className="slider" aria-hidden="true">
            <span>Theirs</span>
            <span className="slider-track">
              <span className="slider-knob" />
            </span>
            <span>Yours</span>
          </div>
        </div>
        <div>{drawing}</div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    heading: "Start on what you have",
    body: "Your own servers, a rack in the closet, or the cloud account you already pay for.",
  },
  {
    heading: "Connect what’s already there",
    body: "Keep your existing sign-in directory, storage and monitoring.",
  },
  {
    heading: "Move in at your own pace",
    body: "Bring apps over one at a time while everything else keeps running.",
  },
];

export default function Home() {
  return (
    <div className="home">
      <SiteHeader />
      <main>
        <div className="hero">
          <p className="eyebrow">An open cloud for public infrastructure</p>
          <h1>
            We used to own
            <br />
            our computers.
            <br />
            We can again.
          </h1>
          <p className="hero-lead">
            Computing keeps swinging between machines we rent and machines we own. Right now our cities, schools,
            agencies and local businesses rent the software they run on, and pay for every change.
          </p>
          {/* The chart sits between the problem and the answer. It takes the height the screen has left, and on a
              phone it keeps a readable width and scrolls sideways. */}
          <div className="swing">
            <div>
              <SwingChart />
            </div>
          </div>
          <p className="hero-lead">
            <strong>{SITE_NAME}</strong> is the swing back: an open foundation for a cloud your organization owns.
            Public infrastructure for anyone who wants their tools back.
          </p>
          <div className="hero-actions">
            <Link className="hero-plan" to="/plan">
              Read the plan
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a href="#e0">
              or start with the changelog
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>

        <Exhibit
          number={1}
          label="Mainframes, rented"
          year="1960s"
          owned={false}
          heading="You rented time."
          drawing={<MainframeRoom />}
        >
          Computers cost millions and filled rooms, so organizations rented them. Large ones leased a machine from its
          maker. Smaller ones bought time at a service bureau, or dialled in to someone else's mainframe from a
          terminal and paid by the minute.
        </Exhibit>
        <Exhibit
          number={2}
          label="Personal computers, owned"
          year="1980s"
          owned
          heading="You owned the machine."
          drawing={<DeskComputer />}
        >
          Then computers shrank to fit on a desk, at a price any office could pay. Software came on a disk you bought
          once and kept. The ledgers, letters and customer lists lived in your own office, and nobody could switch
          them off but you.
        </Exhibit>
        <Exhibit
          number={3}
          label="Software as a service, rented"
          year="2000s"
          owned={false}
          heading="You rented again."
          drawing={<RentedCloud />}
        >
          Then the IT department grew messy: a closet of aging servers, upgrades nobody dared start, and systems only
          one person understood. So software moved back to someone else's computer, where a vendor handled the upkeep
          for a monthly fee per seat. Over time, they came to hold your tools and your data, and to set the terms for
          both.
        </Exhibit>
        <Exhibit
          number={4}
          label="In-house clouds, owned again"
          year="2027"
          owned
          heading="You own it again."
          drawing={<OwnedCloud />}
        >
          An in-house cloud like {SITE_NAME} gives online services one common foundation to run on. It's on-prem
          without the mess: no team stitching the pieces together, apps that update on <i>your</i> schedule, and data
          that stays on machines you choose. And because every app targets the same foundation, open source tools and
          your own in-house software can sit side by side.
        </Exhibit>

        <section className="band how" id="how">
          <div className="band-inner">
            <div className="how-intro">
              <p className="how-kicker">Why it can swing back</p>
              <h2>
                The PC needed a standard. <br />
                So does the cloud.
              </h2>
              <p>
                Personal computers took off once software could count on the machine underneath. {SITE_NAME} is
                that layer for services.
              </p>
            </div>
            <div className="layers">
              <div className="layer">
                <div className="layer-box" aria-hidden="true">
                  <span className="app-tile is-cobalt" />
                  <span className="app-tile is-ink" />
                  <span className="app-tile is-soft" />
                  <span className="app-tile is-cobalt" />
                  <span className="app-tile is-ink" />
                  <span className="app-tile is-soft" />
                  <span className="app-tile is-empty" />
                </div>
                <div className="layer-text">
                  <h3>Apps on top</h3>
                  <p>Anyone can build one. Built once for {SITE_NAME}, it runs on every cloud that has it.</p>
                </div>
              </div>
              <div className="layer">
                <div className="layer-box is-middle">
                  <span className="layer-name">{SITE_NAME}</span>
                  <span className="chip">Sign-in</span>
                  <span className="chip">Updates</span>
                  <span className="chip">Notifications</span>
                  <span className="chip">Networking</span>
                  <span className="chip">Task runner</span>
                  <span className="chip">Analytics</span>
                  <span className="chip">Telemetry</span>
                </div>
                <div className="layer-text">
                  <h3>One layer in the middle</h3>
                  <p>The parts every service needs, handled the same way everywhere.</p>
                </div>
              </div>
              <div className="layer">
                <div className="layer-box">
                  <span className="chip">One box</span>
                  <span className="layer-or">or</span>
                  <span className="chip">A rack</span>
                  <span className="layer-or">or</span>
                  <span className="chip">AWS/Azure/GCP</span>
                </div>
                <div className="layer-text">
                  <h3>Any hardware underneath</h3>
                  <p>Machines and hosting become interchangeable. You can switch without touching the apps.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="band fits">
          <div className="band-inner">
            <h2>Works with your existing infrastructure</h2>
            <p className="fits-lead">
              {SITE_NAME} is built on industry-standard tools, so it fits alongside the infrastructure you already
              run. You don't have to rebuild everything to get started: adopt it one piece at a time, and swap out any
              part for one that suits you better.
            </p>
            <ol className="steps">
              {STEPS.map(({ heading, body }, i) => (
                <li className="step" key={heading}>
                  <span className="step-number" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{heading}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
            <p className="fits-note">Built on Kubernetes, containers and open standards your team already knows.</p>
          </div>
        </section>

        <section className="band standing" id="source">
          <div className="band-inner">
            <h2>Where things stand</h2>
            <p>{SITE_NAME} is in design and implementation. It is open source, and it will stay that way.</p>
            <div className="standing-actions">
              <Link className="standing-plan" to="/plan">
                Read the plan
              </Link>
              <Link className="standing-follow" to="/contribute">
                Follow the project
              </Link>
              <a className="standing-contact" href={`mailto:${CONTACT_EMAIL}`}>
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
