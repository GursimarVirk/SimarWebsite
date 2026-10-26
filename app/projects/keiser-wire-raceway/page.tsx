import type { Metadata } from "next";
import { legacyImage } from "../../legacy-image";
import { legacyPages } from "../../legacy/legacy-data";

export const metadata: Metadata = {
  title: "Wire Raceway · Keiser · Gursimar Virk",
};

const gallery = [
  "1659fbdfb81da2192bf57b0d637e7928.webp",
  "20eb40783fd13313e90a08f66c0b7635.webp",
  "41c365e0a36cc9a7204ba52e8c68204d.webp",
  "713775a98ac36c0a6367270a12a24c25.webp",
  "905d19c6b95c8f9960e0badb2f55b7db.webp",
  "a7c13c2d2bd19eb90e68383b5a985ac4.webp",
  "bc03775b72c8ffa7a74c2e5812b33ebd.webp",
  "c92efdb0945b9126f716935c8128d95b.webp",
];

export default function WireRacewayPage() {
  const original = legacyPages["keiser-wire-raceway"];
  return (
    <main className="detail-page">
      <div className="page-width">
        <a className="detail-back" href="/experience/keiser">← BACK TO KEISER</a>
        <header className="detail-hero" style={{backgroundImage: `linear-gradient(90deg,rgba(9,8,15,.96),rgba(9,8,15,.55)),url(${legacyImage("/images/Kesier Wire Raceway/a7c13c2d2bd19eb90e68383b5a985ac4.webp")})`}}>
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
            <p>
              Keiser needed a product that could route pneumatic lines and electrical wiring
              together. Existing products did not fit the application, so I developed a modular
              raceway designed around the machines' interfaces, safety requirements, cost, and
              practical installation.
            </p>
            <ul>
              <li>Researched existing products and contacted multiple manufacturers to evaluate fabrication methods and integration.</li>
              <li>Worked with the electrical team and safety coordinator to define requirements for a safe, cost-effective, modular system with the necessary ports.</li>
              <li>Received regular design and manufacturability reviews from the CEO, who assigned the raceway as a capstone-style project.</li>
              <li>Was offered the opportunity to travel to Texas to oversee the first installation at a major college campus gym.</li>
            </ul>
            <h2>Additional manufacturing work</h2>
            <ul>
              <li>Modified and repaired an existing wire-cutting machine to make it modular, allowing it to cut multiple wire diameters instead of only one. Repurposing unused equipment offered a cost-effective alternative to designing a new machine from scratch.</li>
              <li>Designed jigs, updated engineering drawings, and created assembly aids such as sticker placers to improve manufacturing efficiency and precision.</li>
              <li>Redesigned a powder-coating rack, adding laser-cut notches and assembly features to simplify construction and improve functionality.</li>
              <li>Designed a warehouse ramp to reclaim unused overhead space while accounting for safe operation, slope grade, and ongoing warehouse work.</li>
            </ul>
            <section className="detail-section original-writing">
              <span className="section-label">FULL ORIGINAL PROJECT WRITE-UP</span>
              <h2>{original.title} — Original portfolio notes</h2>
              {original.blocks.map((block, index) =>
                block.length < 55 && !/[.!?]$/.test(block) && !/^Twitch Link:/.test(block) && !/^https?:/.test(block)
                  ? <h3 key={index}>{block}</h3>
                  : <p key={index}>{block}</p>
              )}
            </section>
            <section className="detail-gallery">
              <div className="detail-gallery-heading">
                <span className="section-label">ORIGINAL PORTFOLIO PHOTOGRAPHY</span>
                <h2>Build gallery</h2>
                <p>Photos preserved from the original Keiser project page.</p>
              </div>
              <div className="detail-gallery-grid">
                {gallery.map((file) => {
                  const src = legacyImage("/images/Kesier Wire Raceway/" + file);
                  return <a href={src} target="_blank" rel="noreferrer" key={file}><img src={src} alt="Keiser wire raceway and manufacturing work" loading="lazy" /></a>;
                })}
              </div>
            </section>
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
