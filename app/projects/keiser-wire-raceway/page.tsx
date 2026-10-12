import type { Metadata } from "next";
import { legacyImage } from "../../legacy-image";

export const metadata: Metadata = {
  title: "Wire Raceway · Keiser · Gursimar Virk",
};

export default function WireRacewayPage() {
  return (
    <main className="detail-page">
      <div className="page-width">
        <a className="detail-back" href="/experience/keiser">← BACK TO KEISER</a>
        <header className="detail-hero" style={{backgroundImage: `linear-gradient(90deg,rgba(9,8,15,.96),rgba(9,8,15,.55)),url(${legacyImage("https://sites.google.com/sitesv-images-rt/AMxu72tiaMHMZmiqobc8eLP7lUfUSVAibaaD3w4WN_WDsRPsGi9K-XczJY0pa6URe_glOkOOhvJDZYeR5_w9MtHYyrEZ1QOr8hz0Msay0nmYBiURdI4zaX_rMLoqTDYIzT-4SnotwJhdrAYXWB92cUVysgnNZZUmkz0J2FK2JjN-OY8V35OMyje3aArVXMWwv0EsAhBSCf2n2X177mc194_cxIsJiw7q4VaQqZ-jnNli3Ec%3Dw1280")})`}}>
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
