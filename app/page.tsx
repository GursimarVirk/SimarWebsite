"use client";

import type { ReactNode } from "react";

const resumeUrl = "https://sites.google.com/view/gvirk/resume";

const heroImages = [
  ["https://sites.google.com/sitesv-images-rt/AMxu72v7B4bK5oKIHrtfGMBbrWgtaAijXDQ_PBxYuweZnmUAx0P4qoHPTM1pXW-RtDYR-6XcNi3nSM52GEBNVfMZJo_11f4I6dL2qtySnsEIqt6HGoEtAI2KbgRzJA4ip6E_KbnEq3caSba3EjAF-5GAR-Xxr7l7RjxMlT4VlKiiGJwXL2IhyhboM9m9nPq7K0TowRwI2QzAuaG9cBgudLYHW-ZP_VSDqdk9Z5GtB2AcBc%3Dw1280","PORTRAIT / HOME"],
  ["https://sites.google.com/sitesv-images-rt/AMxu72sKrS6x-hWqxIjFJHkXU2mmqM7cCzTphE39JsTjp9L7R1GW0--tCR2QnYSUfj-nVlRl9i6bauc9il1ghyY0CezMgOB8SKSAGNFb6YYFmg6cUXCFpYdu5X0QMnIDvllizJcnFPaUxcn9n4fPKIfIx3-DE-RonvI1W8EVq4twwXVOgZR9GY23Fbdlc2N098aakNxmZju_-mG3qTofdlsDAl5qFnLSj3OWU41vYBWECNo%3Dw1280","HUMANOIDS"],
  ["https://sites.google.com/sitesv-images-rt/AMxu72sKO8MIuLZRTc2E_2I-DqjoOnRIN4AgDGHFbB7B-NAXw7LoWn6R1Z5UgPLhTMZ-o2cqne9iXtfzwm6QrZKaWs83_JZoYdOV_6z_XcncoxCjm7gDwAY9CNZTj_rgZobAGfve8ncaqAei_2VHNkiZDMi00PZ-Ef-CV8q5-lRDikMk3587dWWETgP_jx0NOhw5bIwcTbtcHKMayPxYuBCUL1Sgn2-kDBGyJaPESftSACA%3Dw1280","30 LB ROBOT"],
  ["https://sites.google.com/sitesv-images-rt/AMxu72uRXqYXsejAavet79fXc4WVQMbAGUSX9Mwr4M-nyO410D7TFfy5cvOuvpX0ZHUhy0xw1UmK5T0m_s6TGMSXVyE4QaGH5AtfcEnX0G36TJFkzgSFuh7osYTHj8PePfwwmYdSzntiQ0ei9cT2tXfjYJVcXqzcgn-_xPvxVeTZRK2opLOsus6TdOKTQC7FoXvcSzGqE3vgL0KGnyHsIOxO3vubX0jz9Ld9Pq7R6Ms%3Dw1280","ROBOTIC HAND"],
  ["https://sites.google.com/sitesv-images-rt/AMxu72vv9B-OoCaTbJpEIqg8E_K_G1qou6hB-s-1-zP_WfmRFoNb05ghSxAtZthSul0qNdSxMeQ2XHos895-bxekrwSXXRjVykMDxBSr9_WIvagi9OirkJ9hhFu5JxX1jzkCnXUhyVnJSpTSKG1Unl5EEj4Akluj9ul9uScZ1SMMEI1ejxl0kwTAu5NBn6UcXFOVj7kosSUHdk4pvVTaVQuxGfPJD8ipAEIS2PKib1JE%3Dw1280","AMAZON ROBOTICS"],
  ["https://sites.google.com/sitesv-images-rt/AMxu72uREjFXsVIRyq8U7fxB14uHEFG_StZYFTX4cGq4D0h-rO60q37mQ4ti8WLncv3HcIw5Zen4Hu0SNHwgvAwY-xxYYk0w0nXIVCXuqQNuLFsXpxWwd0SV6tFTauveb5G2OOu4K7kGuL46O-POIbHBeIHqE-_wGYnym2vTJSvnFDvw1ExhOkAHTkkKfYGtVbl_nUGWWV0qQ1MFB2ISLC3L4_pitjrek5zBMLfPA2dvef4%3Dw1280","15 LB ROBOT"],
  ["https://sites.google.com/sitesv-images-rt/AMxu72sg-T38vR_JYQMTp719HR9EwZJx4KfcLhNEnRl4xAAni9-N53zArhZTtMcAnpYGhBpOHTDSzluGKME0A78B2jTPdhIT3s1gkK2k161SrEzE3yVmwRoH0d1ruI5E49ZUXuA2eH1cF_p85P7b-AqIXJoxmDuq32WchoyPMeAeTmQlrQ7W5TJRg_B7twZpobeeLe4WCtVZNxgPfa_34wGueS5s_nNnBX88Ajf0-lH8Mj0%3Dw1280","AUTOPALLET"],
];

const experiences = [
  {
    name:"Meta",
    role:"Robotics Hardware Integration Engineer",
    date:"CURRENT",
    text:"End-to-end integration and deployment of a growing robotics fleet for continuous research data collection — hardware, software configuration, networking, validation, technicians, and recovery.",
    bullets:["30+ robotic systems and 50+ UMI systems in the fleet.","Train and coordinate robotics technicians across integration, troubleshooting, hardware modification, and fleet operations.","Build custom fixtures, mounts, and integration hardware; solve failures across subsystem boundaries.","Drive mobile UMI deployment and offsite data-collection readiness."],
    href:"/experience/meta"
  },
  {
    name:"Combat Robotics at Berkeley",
    role:"President · Technical Lead · Shop & Operations",
    date:"2023–2026",
    text:"A 120+ member organization where I moved between robot design, manufacturing, shop operations, competition logistics, mentorship, and technical program management.",
    bullets:["Directed R&D across 1, 3, 15, and 30 lb combat robots using CAD, FEA, GD&T, DFM/DFA, machining, heat treatment, and testing.","Mentored 26+ teams and supervised 20+ projects.","Managed shop safety, training, vendors, sponsorships, machine utilization, and competition logistics."],
    href:"/experience/combat-robotics-at-berkeley"
  },
  {
    name:"Amazon Robotics",
    role:"Hardware & Process Engineering Intern",
    date:"SUMMER 2025",
    text:"Prototype-to-production engineering during an alpha-to-beta transition: fixtures, production flow, tooling, parts, takt time, and documentation.",
    bullets:["Custom fixtures improved assembly speed by ~20%.","Parts restocking/storage for ~1,000 unique parts saved ~10% of build time.","Flow-based design and takt analysis increased capacity from 1 to 21 units/week.","Standardized 170+ design and tooling specifications in ProPlanner."],
    href:"/experience/amazon-robotics"
  },
  {
    name:"Ultimate Fight Bots",
    role:"Humanoid Robotics · Driver · Team Lead",
    date:"2025–PRESENT",
    text:"Unitree and Booster humanoid integration where bring-up, motion, debugging, recovery, and live-event execution happen at the same time.",
    bullets:["Hardware bring-up, calibration, communications, debugging, and competition readiness.","Custom motion behaviors and combat movesets using video-to-robot pipelines and MuJoCo/mjlab.","Worked through actuator limits, balance instability, impact disturbances, thermal limits, and communication latency."],
    href:"/experience/ultimate-fight-bots"
  },
  {
    name:"Sorcerer.Earth",
    role:"R&D Design & Integration Technician",
    date:"2025",
    text:"High-altitude airborne sensor systems, PCB assembly, fabrication infrastructure, and production scaling.",
    bullets:["Mechanical/electrical subsystem prototyping and integration.","100+ component PCB assembly, reflow, and fine-pitch soldering.","Helped increase production from ~1 to 7 units/week.","Built, refurbished, operated, and calibrated CNC, laser, and 3D-printing equipment."],
    href:"/experience/sorcerer-earth"
  },
  {
    name:"AutoPallet Robotics",
    role:"R&D Design & Robotics Integration Technician",
    date:"2025",
    text:"Rapid robot prototyping where mechanical design, electronics, soldering, and debugging all had to happen at once.",
    bullets:["Designed controlled-failure components and battery/pump mounts.","Built and troubleshot prototypes for investor showcases and validation.","Used low-cost 3D-printed mechanisms to accelerate iteration."],
    href:"/experience/autopallet-robotics"
  },
  {
    name:"Keiser",
    role:"Mechanical Design · Manufacturing · Product Development",
    date:"2023",
    text:"Manufacturing engineering shaped by real installation, electrical, pneumatic, safety, cost, and production constraints.",
    bullets:["Designed a modular pneumatic/electrical wire raceway when no existing product fit the application.","Designed jigs, drawings, assembly parts, and laser-cut powder-coating rack features.","Designed a warehouse ramp and supported the first raceway installation at a major college campus gym in Texas."],
    href:"/experience/keiser"
  },
];

const projects = [
  {slug:"30-lb-combat-robot", title:"30 lb Combat Robot", group:"COMBAT ROBOTICS", description:"A full robot program: weapon design, machining, heat treatment, wiring, troubleshooting, people, parts, and competition driving.", image:heroImages[1][0], size:"large"},
  {slug:"15-lb-combat-robots", title:"15 lb Combat Robots", group:"COMBAT ROBOTICS", description:"Two competition-ready builds using Fusion 360 / Onshape, FEA, CAM, weight reduction, AR500 fabrication, and mentorship.", image:heroImages[4][0], size:"small"},
  {slug:"humanoid-robotics", title:"Humanoid Robotics", group:"ULTIMATE FIGHT BOTS", description:"Unitree + Booster integration, calibration, motion behaviors, debugging, and live robot fights.", image:heroImages[0][0], size:"small"},
  {slug:"grocerygizmo", title:"Autonomous 6-DOF Grasping", group:"UC BERKELEY · GROCERYGIZMO", description:"Omron TM5-700, RealSense, AR tags, ROS 2, MoveIt2, Robotiq, custom CAD, and manipulation recovery.", image:"https://sites.google.com/sitesv-images-rt/AMxu72uRXqYXsejAavet79fXc4WVQMbAGUSX9Mwr4M-nyO410D7TFfy5cvOuvpX0ZHUhy0xw1UmK5T0m_s6TGMSXVyE4QaGH5AtfcEnX0G36TJFkzgSFuh7osYTHj8PePfwwmYdSzntiQ0ei9cT2tXfjYJVcXqzcgn-_xPvxVeTZRK2opLOsus6TdOKTQC7FoXvcSzGqE3vgL0KGnyHsIOxO3vubX0jz9Ld9Pq7R6Ms%3Dw1280", size:"large"},
  {slug:"robotic-hand", title:"15-DOF Teleoperated Hand", group:"UC BERKELEY", description:"Sensor component + robotic portion of a teleoperated humanoid hand, backed by the original final report and shop presentation.", image:heroImages[2][0], size:"small"},
  {slug:"combat-box", title:"Combat Box", group:"COMBAT ROBOTICS", description:"A 1/2-inch polycarbonate testing environment built for the teams I mentored.", image:"https://sites.google.com/sitesv-images-rt/AMxu72uKtzzuaH1SY5Alxz9Ybp9xDGQ3KmsPkG-Yp0QQZqfkV-bmBS589VwgBSsPfopi8JdvHACPK_ooD1MIWXseIbkg4geCqge331FwYO2jOP3RQpA_4sUmZMmz38RqcxrNwTWDH7s-7Jx1qXg0EjyPa7nScevsyn375ccfzuhfWqJ3memxYgPprkp5rmrZd8xdMDvLa4rNxJfVgnQDK1MymiSruWP-Grko9wLzbPkhfrc%3Dw1280", size:"small"},
  {slug:"motorcycle-communication-system", title:"Motorcycle Communication System", group:"PRODUCT DEVELOPMENT", description:"A connected helmet concept combining GPS, Bluetooth, sensors, audio, AI, product research, and team coordination.", image:"https://sites.google.com/sitesv-images-rt/AMxu72uE7IRyV7jLfu8c47rMSsk9lcrwQyic8n7x8w9ud7YkC4EOHjgjV75nRHfDjoYFetG5oPVmsNo9Nvtc9vCJAj54RUak9SAcf0tJQViiK0CQFxQLbRGNNwzRSgr79C3dNqhqQ9KbAHnsHc1XPtAk5RKt1ujZ1sxwRxkRM0bFcktSU0Cca4iM5CJfwJELsPdLsBjeeMpqEdT7nFCZOHvhCfS6VJw8cVDdd32TtYuI%3Dw1280", size:"small"},
  {slug:"cars-and-machines", title:"Cars & Machines", group:"PERSONAL SHOP", description:"6+ years of machining, lathe work, welding, maintenance, a C4 Corvette, and a Jeep restoration.", image:"https://sites.google.com/sitesv-images-rt/AMxu72vFKS5F-A0nJU3qBYodUrH4zk9o1Qtd1FiCtAB16zPVtcf7XCSnOxkZNSf_CMZzWRi4r-ICcVSp4-a1-7xkIFTPtb5RSU3wLO8H2Dgz38huIcw9Jlm9GFZ3cfG8MJWATUNx0ew9c8QXB1x-Myu5D2sMk7QSjXVNTzqR7K7WIJpTEJX89tWg5xC7H1lkduqJDToXoOp0zlw5ArszwLYj5h0prywIxGbkarwK0zEAHKs%3Dw1280", size:"small"},
];

const archive = [
  ["NASA HUNCH — Magnetic Boots","NASA HUNCH","nasa-hunch-magnetic-boots"],
  ["IoT Millipede Monitor","UC BERKELEY / IOT","iot-millipede-monitor"],
  ["Towel Holder Innovation","FRESHMAN DESIGN","towel-holder-innovation"],
  ["Statistics / Data Project","PROGRAMMING / DATA","statistics-data-project"],
  ["Robotic Arms","ROBOTICS / MANIPULATION","robotic-arms"],
  ["Cars & Machines","PERSONAL SHOP","cars-and-machines"],
];

const berkeley = [
  ["Combat Robotics at Berkeley","PRESIDENT · TECHNICAL LEAD","120+ members · robot R&D · shop operations · mentorship · competition logistics"],
  ["Ultimate Fight Bots","HUMANOIDS","Driver · team lead · integration · live competitions"],
  ["Engineering 98","INSTRUCTOR","Student-run Insider's Guide to Berkeley Engineering DeCal"],
  ["ASME","PROGRAMS COORDINATOR","Programs and engineering community leadership"],
  ["Cal ITE / AREMA / Transpo","TRANSPORTATION","Transportation planning, design competitions, AutoCAD, cost estimates, and regulations"],
  ["Cal Lightweight Crew","ROWING","Lightweight team rower / coxswain"],
  ["The Herositic Squlech","CREATIVE","Graphic design"],
  ["TechWomen","OUTREACH","Networking guest / robotics demonstration expert"],
  ["Women's Summit","VOLUNTEERING","Event volunteer"],
  ["Berkeley Engineering Tour","OUTREACH","Hosted an engineering tour for Australian students"],
];

const publicFootprint = [
  ["jobTopia","Robo Fight Club — Episode #297","PODCAST","https://podscan.fm/podcasts/jobtopia-with-tony-moore/episodes/robo-fight-club-ucb-berkeleys-glitch-and-malware-with-gursimar-virk-club-co-president-episode-297"],
  ["Linus Tech Tips","I Joined Robot Fight Club","VIDEO","https://www.youtube.com/watch?v=VJqMPFNP4to"],
  ["Washington Post","Pictures of the Year 2025","PHOTOGRAPHY","https://www.washingtonpost.com/nation/interactive/2025/pictures-of-the-year-2025/"],
  ["The New York Times","Robot fight / San Francisco","PRESS","https://www.nytimes.com/2025/09/19/technology/san-francisco-robot-fight.html"],
  ["San Francisco Standard","Robot boxing in San Francisco","PRESS","https://sfstandard.com/2025/08/10/robot-boxing-match-sf/"],
  ["AFP / International Press","Humanoid robots go for knockout","PRESS","https://kuwaittimes.com/article/38267/technology/humanoid-robots-go-for-knockout-in-high-tech-vegas-fight-night/"],
];

function Label({children}:{children:ReactNode}){return <p className="eyebrow">{children}</p>;}

function ProjectCard({project}:{project:(typeof projects)[number]}){
  return <a className={`project-tile ${project.size}`} href={`/projects/${project.slug}`}>
    {project.image && <img src={project.image} alt="" />}
    <div className="project-shade"/>
    <div className="project-tile-content">
      <Label>{project.group}</Label>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span className="tile-open">OPEN PROJECT ↗</span>
    </div>
  </a>;
}

export default function Home(){
  return <main>
    <nav className="nav">
      <a className="brand" href="#top">GURSIMAR VIRK</a>
      <div className="nav-links">
        <a href="#work">Work</a><a href="#projects">Projects</a><a href="/media">Media</a><a href="#berkeley">Berkeley</a><a href="#about">About</a>
        <details className="resume-menu"><summary>Resume ↗</summary><div className="resume-popover"><Label>ONE PAGE</Label><h3>Resume</h3><p>A fast version of the engineering story, with the details recruiters actually need first.</p><a className="button-light" href={resumeUrl} target="_blank" rel="noreferrer">OPEN RESUME ↗</a><a className="button-dark" href="https://www.linkedin.com/in/gursimarvirk" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></details>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    <section className="hero page-width" id="top">
      <div className="hero-copy">
        <Label>MECHANICAL ENGINEER · ROBOTICS · UC BERKELEY</Label>
        <h1>Gursimar<br/><span>Virk.</span></h1>
        <p className="hero-lede">I build robots, break them, fix them, and then figure out how to make the next one easier to build.</p>
        <div className="hero-actions"><a className="button-light" href="#work">SEE THE WORK ↓</a><a className="button-dark" href="/media">PUBLIC FOOTPRINT ↗</a></div>
        <div className="hero-meta"><span>NOW · ROBOTICS HARDWARE INTEGRATION</span><span>REDWOOD CITY / BAY AREA</span></div>
      </div>
      <div className="hero-visual">
        <div className="hero-main-photo"><img src={heroImages[0][0]} alt="Gursimar Virk portfolio image"/><span>01 / HUMANOIDS</span></div>
        <div className="hero-photo-stack"><img src={heroImages[2][0]} alt="Humanoid robotics"/><img src={heroImages[5][0]} alt="15 lb combat robot"/></div>
        <div className="hero-stamp">CAD<br/>→<br/>SHOP<br/>→<br/>ROBOT</div>
      </div>
    </section>

    <section className="as-seen page-width">
      <Label>PUBLIC FOOTPRINT</Label>
      <div className="seen-row">{publicFootprint.map(([source,title,type,href])=><a href={href} target="_blank" rel="noreferrer" key={source}><span>{type}</span><strong>{source}</strong><em>{title}</em></a>)}</div>
    </section>

    <section className="numbers page-width">
      <div><strong>120+</strong><span>MEMBERS IN CRB</span></div><div><strong>26+</strong><span>TEAMS / GROUPS MENTORED</span></div><div><strong>20+</strong><span>PROJECTS SUPERVISED</span></div><div><strong>2</strong><span>15 LB ROBOTS BUILT</span></div><div><strong>1 → 21</strong><span>UNITS / WEEK · AMAZON</span></div><div><strong>1 → 7</strong><span>UNITS / WEEK · SORCERER</span></div>
    </section>

    <section className="page-width intro-block">
      <div><Label>THE SHORT VERSION</Label><h2>Broad enough to see the whole system. Hands-on enough to fix the part that broke.</h2></div>
      <div className="intro-text"><p>My strongest work sits at the boundaries between disciplines. I am comfortable designing mechanical hardware, making parts in a shop, wiring and debugging a robot, working with firmware and software, bringing up a new system, and figuring out how a team can build and operate it repeatedly.</p><p>I like robotics because the problems refuse to stay inside one engineering discipline.</p></div>
    </section>

    <section className="skill-band"><div>MECHANICAL DESIGN</div><div>ROBOTICS INTEGRATION</div><div>ROS 2</div><div>MANUFACTURING</div><div>HARDWARE BRING-UP</div><div>TECHNICAL LEADERSHIP</div></section>

    <section className="page-width section" id="work">
      <div className="section-head"><div><Label>01 · WHERE I WORKED</Label><h2>Places where the machine had to actually work.</h2></div><p>The experience section is organized around environments, not isolated bullet points: companies, shops, teams, and the systems that came out of them.</p></div>
      <div className="experience-list">{experiences.map((x,i)=><a className="experience-row" href={x.href} key={x.name}><span className="experience-num">{String(i+1).padStart(2,"0")}</span><div className="experience-main"><div className="experience-top"><span>{x.date}</span><span>{x.role}</span></div><h3>{x.name}</h3><p>{x.text}</p><ul>{x.bullets.map(b=><li key={b}>{b}</li>)}</ul></div><span className="row-arrow">↗</span></a>)}</div>
    </section>

    <section className="dark-panel" id="projects">
      <div className="page-width section">
        <div className="section-head dark"><div><Label>02 · SELECTED WORK</Label><h2>Things I’ve actually built.</h2></div><p>Combat robots, humanoids, manipulation, sensing, product development, and the machines I kept working on after class ended.</p></div>
        <div className="project-grid">{projects.map(p=><ProjectCard project={p} key={p.slug}/>)}</div>
      </div>
    </section>

    <section className="page-width section build-system">
      <div className="section-head"><div><Label>03 · HOW I BUILD</Label><h2>The stack is bigger than CAD.</h2></div><p>My useful range is not a list of software. It is the ability to move from requirement → part → robot → failure → fix → repeatable system.</p></div>
      <div className="system-grid">
        <article><span>01</span><h3>Design</h3><p>SolidWorks · Fusion 360 · Onshape · Inventor · FEA · GD&T · mechanism design · DFM/DFA</p></article>
        <article><span>02</span><h3>Make</h3><p>CNC milling · turning · 3D printing · sheet metal · welding · soldering · reflow · fabrication</p></article>
        <article><span>03</span><h3>Integrate</h3><p>ROS 2 · hardware bring-up · sensors · networking · firmware integration · motion · manipulation</p></article>
        <article><span>04</span><h3>Recover</h3><p>Debugging · validation · field fixes · deployment · fleet operations · technician training · documentation</p></article>
      </div>
    </section>

    <section className="page-width section berkeley-section" id="berkeley">
      <div className="section-head"><div><Label>04 · BERKELEY</Label><h2>More than a degree.</h2></div><p>Organizations, teaching, transportation, rowing, outreach, and the weird side quests that made Berkeley feel like an engineering playground.</p></div>
      <div className="berkeley-grid">{berkeley.map(([title,kind,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")} · {kind}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="media-callout">
      <div className="page-width media-callout-inner"><div><Label>05 · PUBLIC FOOTPRINT</Label><h2>The robots also escaped the shop.</h2><p>Interviews, creator videos, live fights, photographs, press, Berkeley records, and the competition trail.</p></div><a className="button-light" href="/media">OPEN MEDIA ARCHIVE ↗</a></div>
    </section>

    <section className="page-width section" id="about">
      <div className="about-grid"><div><Label>06 · OUTSIDE THE SHOP</Label><h2>Still building things when nobody asked.</h2></div><div className="about-copy"><p><strong>Cars. Motorcycles. Machining. Photography. Music.</strong> I like machines that are old enough to require a little detective work.</p><p>Six-plus years around machining, a Kawasaki Ninja 300, a C4 Corvette, a Jeep restoration, and a restored lathe are a pretty good explanation for why I prefer making things to just talking about them.</p><div className="about-facts"><span>6+<small>YEARS MACHINING</small></span><span>NINJA 300<small>MOTORCYCLE</small></span><span>BERKELEY<small>B.S. ME</small></span></div></div></div>
    </section>

    <section className="page-width legacy-section">
      <div className="section-head"><div><Label>07 · LEGACY ARCHIVE</Label><h2>The old site, without the Google Sites limitations.</h2></div><p>Everything that deserved to survive the migration stays searchable here — even the smaller projects.</p></div>
      <div className="legacy-grid">{archive.map(([title,kind,slug])=><a href={`/projects/${slug}`} key={slug}><span>{kind}</span><strong>{title}</strong><em>OPEN ↗</em></a>)}</div>
    </section>

    <section className="prompt-band">
      <div className="page-width prompt-inner"><Label>HIRING MANAGER MODE</Label><h2>Have a job description?</h2><p>Use the portfolio as a map. The resume is the compressed version; these pages show how the work actually happened.</p><div className="prompt">“Here is Gursimar Virk’s portfolio and our job description. Which parts of her experience are most relevant, and which projects should I look at?”</div></div>
    </section>

    <footer className="footer page-width" id="contact"><div><Label>CONTACT</Label><h2>Let’s build something.</h2></div><div className="footer-links"><a href="mailto:gursimvirk3@gmail.com">gursimvirk3@gmail.com</a><a href="https://www.linkedin.com/in/gursimarvirk" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/GursimarVirk" target="_blank" rel="noreferrer">GitHub ↗</a><a href={resumeUrl} target="_blank" rel="noreferrer">Resume ↗</a></div><p className="copyright">© 2026 Gursimar Virk · Built in Berkeley / the Bay.</p></footer>
  </main>;
}
