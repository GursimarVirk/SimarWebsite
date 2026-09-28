import type { Metadata } from "next";
import { notFound } from "next/navigation";

const experiences = {
  meta: {
    title: "Meta",
    role: "Robotics Hardware Integration Engineer",
    tag: "ROBOTICS · SYSTEMS · FLEET · TECHNICAL LEADERSHIP",
    intro: "End-to-end robotics integration and deployment across mechanical hardware, electrical interfaces, firmware, software configuration, networking, validation, and fleet recovery.",
    bullets: [
      "Own integration and deployment of a growing fleet of 30+ robotic and 50+ UMI systems used for continuous research data collection.",
      "Lead and coordinate robotics technicians across integration, troubleshooting, hardware modification, and fleet operations.",
      "Design and fabricate custom fixtures, mounts, and integration hardware from system-level requirements.",
      "Coordinate mobile UMI capabilities for offsite data collection across hardware, networking, software configuration, and operations."
    ]
  },
  "amazon-robotics": {
    title: "Amazon Robotics",
    role: "Hardware & Process Engineering Intern",
    tag: "MANUFACTURING · PROCESS ENGINEERING · HARDWARE",
    intro: "Prototype-to-production hardware and manufacturing process work during an alpha-to-beta transition.",
    bullets: [
      "Designed custom fixtures that improved assembly speed by about 20%.",
      "Built a modular restocking and storage approach for about 1,000 unique parts, saving about 10% of build time.",
      "Used flow-based design and takt analysis to increase production capacity from 1 to 21 units/week.",
      "Standardized 170+ design and tooling specifications in ProPlanner."
    ]
  },
  "combat-robotics-at-berkeley": {
    title: "Combat Robotics at Berkeley",
    role: "President · Technical Lead · Shop & Operations",
    tag: "ROBOTICS · MANUFACTURING · LEADERSHIP",
    intro: "A 120+ member robotics organization spanning robot design, manufacturing, shop operations, competition logistics, mentorship, and technical program management.",
    bullets: [
      "Directed R&D and manufacturing across 1, 3, 15, and 30 lb combat robots using CAD, FEA, GD&T, DFM/DFA, machining, heat treatment, assembly, and physical testing.",
      "Led multiple 15 lb and 30 lb robot programs while managing people, materials, machine utilization, safety, schedules, and competition logistics.",
      "Mentored 26+ teams and supervised 20+ projects.",
      "Managed shop operations and training while coordinating vendors, sponsorships, and machine access."
    ]
  },
  "ultimate-fight-bots": {
    title: "Ultimate Fight Bots",
    role: "Humanoid Robotics · Driver · Team Lead",
    tag: "HUMANOIDS · INTEGRATION · MOTION",
    intro: "Hands-on integration of Unitree and Booster humanoid platforms for live events, system bring-up, debugging, and custom motion behaviors.",
    bullets: [
      "Integrated humanoid platforms across hardware bring-up, debugging, calibration, communication, and competition readiness.",
      "Developed custom humanoid motion behaviors and combat movesets using video-to-robot motion pipelines and MuJoCo/mjlab.",
      "Worked through actuator limits, balance instability, impact disturbances, thermal limits, and communication latency.",
      "Drove robots at live events including UC Berkeley and a Linus Tech Tips featured showcase in the Las Vegas BattleBots arena."
    ]
  },
  "sorcerer-earth": {
    title: "Sorcerer.Earth",
    role: "R&D Design & Integration Technician",
    tag: "HARDWARE · ELECTRICAL · FABRICATION",
    intro: "High-altitude airborne sensor systems through mechanical/electrical prototyping, PCB assembly, fabrication infrastructure, and production scaling.",
    bullets: [
      "Prototyped and integrated mechanical and electrical subsystems for high-altitude airborne sensors.",
      "Hand-assembled and reflowed densely populated PCBs with 100+ components and fine-pitch soldering.",
      "Helped streamline assembly and production from roughly 1 unit/week to 7 units/week.",
      "Built, refurbished, operated, and calibrated CNC, laser-cutting, and 3D-printing equipment."
    ]
  },
  "autopallet-robotics": {
    title: "AutoPallet Robotics",
    role: "R&D Design & Robotics Integration Technician",
    tag: "ROBOTICS · PROTOTYPING · DEBUGGING",
    intro: "Rapid robot prototyping combining mechanical design, electronics, soldering, and troubleshooting.",
    bullets: [
      "Designed controlled-failure components and internal mounts for batteries and pumps using low-cost manufacturing methods.",
      "Built and troubleshot robots for investor showcases and internal validation.",
      "Used 3D-printed chassis components and low-cost mechanisms to accelerate iteration.",
      "Design and validation changes reduced prototype downtime by about 25%."
    ]
  },
  keiser: {
    title: "Keiser",
    role: "Mechanical Design · Manufacturing · Product Development",
    tag: "MECHANICAL · MANUFACTURING · PRODUCT",
    intro: "Manufacturing engineering and product-development work spanning electrical, pneumatic, safety, cost, installation, and production constraints.",
    bullets: [
      "Designed a modular raceway combining pneumatic lines and electrical wiring.",
      "Worked with electrical and safety teams and contacted manufacturers to evaluate materials and manufacturing approaches.",
      "Designed jigs, updated drawings, created assembly parts, and redesigned powder-coating racks with laser-cut assembly features.",
      "Designed a warehouse ramp to reclaim unused space while accounting for safety and slope requirements.",
      "The CEO-assigned raceway project led to an opportunity to travel to Texas to oversee the first installation at a major college campus gym."
    ]
  }
} as const;

export function generateStaticParams() {
  return Object.keys(experiences).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = experiences[slug as keyof typeof experiences];
  return { title: item ? item.title + " · Gursimar Virk" : "Experience · Gursimar Virk" };
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = experiences[slug as keyof typeof experiences];
  if (!item) notFound();

  return (
    <main className="detail-page">
      <div className="page-width">
        <a className="detail-back" href="/#experience">← BACK TO EXPERIENCE</a>
        <header className="detail-hero">
          <span className="section-label">{item.tag}</span>
          <h1>{item.title}</h1>
          <p className="detail-role">{item.role}</p>
          <p className="lead">{item.intro}</p>
        </header>
        <div className="detail-grid">
          <section className="detail-main">
            <h2>What I worked on</h2>
            <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </section>
          <aside className="detail-side">
            <h3>Related</h3>
            {slug === "keiser" && <div className="side-item"><a href="/projects/keiser-wire-raceway">Wire Raceway ↗</a><small>Project detail</small></div>}
            <div className="side-item"><a href="/#projects">Project archive ↗</a><small>Robotics and engineering builds</small></div>
            <div className="side-item"><a href="/#contact">Contact ↗</a><small>gursimvirk3@gmail.com</small></div>
          </aside>
        </div>
      </div>
    </main>
  );
}
