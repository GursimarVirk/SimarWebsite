import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wire Raceway · Keiser · Gursimar Virk",
};

export default function WireRacewayPage() {
  return (
    <main className="detail-page">
      <div className="page-width">
        <a className="detail-back" href="/experience/keiser">← BACK TO KEISER</a>
        <header className="detail-hero">
          <span className="section-label">KEISER · MECHANICAL · MANUFACTURING</span>
          <h1>Wire Raceway</h1>
          <p className="detail-role">Mechanical Design · Manufacturing · Product Development</p>
          <p className="lead">
            A modular routing system for pneumatic lines and electrical wiring, developed around
            real installation, manufacturing, safety, and production constraints.
          </p>
        </header>

        <div className="detail-grid">
          <section className="detail-main">
            <h2>The project</h2>
            <ul>
              <li>Designed a modular raceway after finding no existing product that fit the application.</li>
              <li>Worked with electrical and safety teams and contacted manufacturers to evaluate materials, fabrication approaches, and integration.</li>
              <li>Designed jigs, updated drawings, and created manufactured assembly parts.</li>
              <li>Redesigned powder-coating racks around laser-cut assembly features.</li>
              <li>Designed a warehouse ramp to reclaim unused space while accounting for safety and slope requirements.</li>
              <li>The CEO-assigned project led to an opportunity to travel to Texas for the first installation at a major college campus gym.</li>
            </ul>
          </section>
          <aside className="detail-side">
            <h3>Related</h3>
            <div className="side-item">
              <a href="/experience/keiser">Keiser ↗</a>
              <small>Company experience</small>
            </div>
            <div className="side-item">
              <a href="/#projects">Project archive ↗</a>
              <small>Engineering builds</small>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
