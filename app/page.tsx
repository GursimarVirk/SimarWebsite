"use client";

import type { ReactNode } from "react";
import { legacyImage } from "./legacy-image";

const resumeUrl = "https://sites.google.com/view/gvirk/resume";

const heroImages = [
  ["/images/Home/dcb69b8d3505bf2fbe6ff659aff682b4.webp","PORTRAIT / HOME"],
  ["/images/Humanoids/ccacc1b06bfe5fd19878ae0b81668eef.webp","HUMANOIDS"],
  ["/images/30lb Robot/024d3371033a659dea795ef2ed7f08cf.webp","30 LB ROBOT"],
  ["/images/Home/d40fc533c4af7350b0ce95a3627f0658.webp","ROBOTIC HAND"],
  ["https://sites.google.com/sitesv-images-rt/AMxu72vv9B-OoCaTbJpEIqg8E_K_G1qou6hB-s-1-zP_WfmRFoNb05ghSxAtZthSul0qNdSxMeQ2XHos895-bxekrwSXXRjVykMDxBSr9_WIvagi9OirkJ9hhFu5JxX1jzkCnXUhyVnJSpTSKG1Unl5EEj4Akluj9ul9uScZ1SMMEI1ejxl0kwTAu5NBn6UcXFOVj7kosSUHdk4pvVTaVQuxGfPJD8ipAEIS2PKib1JE%3Dw1280","AMAZON ROBOTICS"],
  ["/images/15lb Robot/1a739db5b66e7a72ddd145ae4ced166e.webp","15 LB ROBOT"],
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
  {slug:"30-lb-combat-robot", title:"30 lb Combat Robot", group:"COMBAT ROBOTICS", description:"A full robot program: weapon design, machining, heat treatment, wiring, troubleshooting, people, parts, and competition driving.", image:"/images/30lb Robot/024d3371033a659dea795ef2ed7f08cf.webp", size:"large"},
  {slug:"15-lb-combat-robots", title:"15 lb Combat Robots", group:"COMBAT ROBOTICS", description:"Competition-ready builds using Fusion 360 / Onshape, FEA, CAM, weight reduction, AR500 fabrication, and mentorship.", image:"/images/15lb Robot/1a739db5b66e7a72ddd145ae4ced166e.webp", size:"small"},
  {slug:"humanoid-robotics", title:"Humanoid Robotics", group:"ULTIMATE FIGHT BOTS", description:"Unitree + Booster integration, calibration, motion behaviors, debugging, recovery, and live robot fights.", image:"/images/Humanoids/ccacc1b06bfe5fd19878ae0b81668eef.webp", size:"small"},
  {slug:"grocerygizmo", title:"Autonomous 6-DOF Grasping", group:"UC BERKELEY · GROCERYGIZMO", description:"Omron TM5-700, RealSense, AR tags, ROS 2, MoveIt2, Robotiq, custom CAD, and manipulation recovery.", image:"/images/Robotic Arms/9a1205816b57cf9e2ea83a3a711fbc88.webp", size:"large"},
  {slug:"robotic-hand", title:"15-DOF Teleoperated Hand", group:"UC BERKELEY", description:"Sensor component + robotic portion of a teleoperated humanoid hand, backed by the original final report and shop presentation.", image:"/images/Robotic Arms/2ed803397858d570e590a832d3365844.webp", size:"small"},
  {slug:"robotic-arms", title:"Robotic Arms", group:"ROBOTICS · MANIPULATION", description:"Multi-DOF manipulators spanning planning, control, perception, hardware integration, and industrial-arm exposure.", image:"/images/Robotic Arms/9a1205816b57cf9e2ea83a3a711fbc88.webp", size:"small"},
  {slug:"motorcycle-communication-system", title:"Motorcycle Communication System", group:"PRODUCT DEVELOPMENT", description:"A connected helmet concept combining GPS, Bluetooth, sensors, audio, AI, product research, and team coordination.", image:"/images/Home/027b9604ec0a299f5ae4b6edd26c88b4.webp", size:"small"},
  {slug:"combat-box", title:"Combat Box", group:"COMBAT ROBOTICS", description:"A 1/2-inch polycarbonate testing environment built for the teams I mentored.", image:"/images/Combat Box/76e706e5b8a5d2856e048b6e3f51bf92.webp", size:"small"},
  {slug:"cars-and-machines", title:"Cars & Machines", group:"PERSONAL SHOP", description:"6+ years of machining, lathe work, welding, maintenance, a C4 Corvette, and a Jeep restoration.", image:"/images/Cars and Machines/2ea1f7ee762bbaaa434b56d33143590f.webp", size:"small"},
  {slug:"iot-millipede-monitor", title:"IoT Millipede Monitor", group:"UC BERKELEY · IOT", description:"An embedded monitoring project combining sensors, actuators, data, and a real-world application.", image:"/images/Home/67c15c7a7ba0b7e2a3252cb7c0b6c6e6.webp", size:"small"},
  {slug:"towel-holder-innovation", title:"Towel Holder Innovation", group:"FRESHMAN DESIGN", description:"A mass-manufacturable part designed around CAD, scalability, efficiency, and practical manufacturing constraints.", image:"/images/Robotic Arms/95b3ce2f73b8bec877e0fcc27428e9aa.webp", size:"small"},
  {slug:"statistics-data-project", title:"Statistics / Data Project", group:"PROGRAMMING · DATA", description:"Jupyter Hub, Python, statistical methods, one-hot encoding, and data analysis.", image:"/images/Robotic Arms/07a3486b8df22099776ca84ff37c188e.webp", size:"small"},
  {slug:"nasa-hunch-magnetic-boots", title:"NASA HUNCH — Magnetic Boots", group:"NASA HUNCH", description:"An early engineering project that reached National Semi-Finalist status.", image:"/images/Home/027b9604ec0a299f5ae4b6edd26c88b4.webp", size:"small"},
  {slug:"keiser-wire-raceway", title:"Keiser Wire Raceway", group:"MANUFACTURING · PRODUCT DESIGN", description:"A modular raceway combining pneumatic lines and electrical wiring, designed around safety, manufacturability, installation, and cost.", image:"/images/Kesier Wire Raceway/a7c13c2d2bd19eb90e68383b5a985ac4.webp", size:"small"},
  {slug:"class-projects", title:"Class Projects", group:"UC BERKELEY · COURSEWORK", description:"The broader coursework archive behind the dedicated projects and engineering habits.", image:"/images/Home/b5edc2802fd22f5e3d828898fd11e6f4.webp", size:"small"},
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
  ["The New York Times","Robot fight / San Francisco","PRESS","https://www.nytimes.com/2025/09/19/technology/san-francisco-robot-fight.html"],
  ["San Francisco Standard","Robot boxing in San Francisco","PRESS","https://sfstandard.com/2025/08/10/robot-boxing-match-sf/"],
  ["AFP / International Press","Humanoid robots go for knockout","PRESS","https://kuwaittimes.com/article/38267/technology/humanoid-robots-go-for-knockout-in-high-tech-vegas-fight-night/"],
  ["UC Berkeley Mechanical Engineering","Combat Robotics on BattleBots","UNIVERSITY","https://me.berkeley.edu/news/me-student-group-berkeley-combat-robotics-competes-on-battlebots/"],
];

function Label({children}:{children:ReactNode}){return <p className="eyebrow">{children}</p>;}

function ProjectCard({project}:{project:(typeof projects)[number]}){
  return <a className={`project-tile ${project.size}`} href={`/projects/${project.slug}`}>
    {project.image && <img src={legacyImage(project.image)} alt={project.title} loading="lazy" />}
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
        <a href="#projects">Projects</a><a href="#work">Work</a><a href="/media">Media</a><a href="#berkeley">Berkeley</a><a href="#about">About</a>
        <details className="resume-menu"><summary>Resume ↗</summary><div className="resume-popover"><Label>ONE PAGE</Label><h3>Resume</h3><p>A fast version of the engineering story, with the details recruiters actually need first.</p><a className="button-light" href={resumeUrl} target="_blank" rel="noreferrer">OPEN RESUME ↗</a><a className="button-dark" href="https://www.linkedin.com/in/gursimarvirk" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></details>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    <section className="hero-collage page-width" id="top">
      <div className="hero-name">
        <p className="eyebrow">MECHANICAL ENGINEER · ROBOTICS</p>
        <h1>GURSIMAR<br/><span>VIRK</span></h1>
        <p>I build robots, break them, fix them, and then figure out how to make the next one easier to build.</p>
        <div className="hero-portrait"><img src={legacyImage(heroImages[0][0])} alt="Gursimar Virk"/></div>
      </div>
      <div className="photo-field" aria-label="A selection of robotics work">
        {heroImages.slice(1).map((image,i)=><figure className={["hero-photo","photo-a","photo-b","photo-c","photo-d","photo-e","photo-f"][i]} key={image[1]}><img src={legacyImage(image[0])} alt={image[1]}/><figcaption>{image[1]}</figcaption></figure>)}
        <div className="photo-orbit orbit-one"/>
        <div className="photo-orbit orbit-two"/>
        <div className="hero-note"><span>CAD → SHOP → ROBOT</span><span>01 / 06</span></div>
      </div>
    </section>

    <section className="as-seen page-width">
      <Label>PUBLIC FOOTPRINT</Label>
      <div className="seen-row">{publicFootprint.map(([source,title,type,href])=><a href={href} target="_blank" rel="noreferrer" key={source}><span>{type}</span><strong>{source}</strong><em>{title}</em></a>)}</div>
    </section>

    <section className="numbers page-width">
      <div><strong>120+</strong><span>PEOPLE MANAGED & MENTORED</span></div><div><strong>30+</strong><span>ROBOTIC SYSTEMS OWNED</span></div><div><strong>ALL TYPES</strong><span>HUMANOIDS · ARMS · MOBILE · COMBAT</span></div><div><strong>26+</strong><span>TEAMS / GROUPS MENTORED</span></div><div><strong>1 → 21</strong><span>UNITS / WEEK · AMAZON</span></div><div><strong>1 → 7</strong><span>UNITS / WEEK · SORCERER</span></div>
    </section>

    <section className="page-width intro-block">
      <div><Label>THE SHORT VERSION</Label><h2>Broad enough to see the whole system. Hands-on enough to fix the part that broke.</h2></div>
      <div className="intro-text"><div className="intro-photo"><img src="/images/Home/60a566a5a4395445cc3d781dbab4e536.webp" alt="Robotics project from the original portfolio"/></div><div><p>My strongest work sits at the boundaries between disciplines. I am comfortable designing mechanical hardware, making parts in a shop, wiring and debugging a robot, working with firmware and software, bringing up a new system, and figuring out how a team can build and operate it repeatedly.</p><p>I like robotics because the problems refuse to stay inside one engineering discipline.</p></div></div>
    </section>

    <section className="skill-band"><div className="skill-track">{["MECHANICAL DESIGN","ROBOTICS INTEGRATION","ROS 2","MANUFACTURING","HARDWARE BRING-UP","TECHNICAL LEADERSHIP","FIRMWARE + SOFTWARE","FLEET OPERATIONS","MECHATRONICS","SYSTEM VALIDATION"].map((x,i)=><span key={i}>{x}</span>)}{["MECHANICAL DESIGN","ROBOTICS INTEGRATION","ROS 2","MANUFACTURING","HARDWARE BRING-UP","TECHNICAL LEADERSHIP","FIRMWARE + SOFTWARE","FLEET OPERATIONS","MECHATRONICS","SYSTEM VALIDATION"].map((x,i)=><span key={"b"+i}>{x}</span>)}</div></section>

    <section className="dark-panel" id="projects">
      <div className="page-width section">
        <div className="section-head dark"><div><Label>01 · THINGS I’VE ACTUALLY BUILT</Label><h2>Things I’ve actually built.</h2></div><p>Combat robots, humanoids, manipulation, sensing, product development, and the machines I kept working on after class ended.</p></div>
        <div className="project-grid">{projects.map(p=><ProjectCard project={p} key={p.slug}/>)}</div>
      </div>
    </section>

    <section className="page-width section" id="work">
      <div className="section-head"><div><Label>02 · PLACES WHERE THE MACHINE HAD TO WORK</Label><h2>Places where the machine had to actually work.</h2></div><p>The experience section is organized around environments, not isolated bullet points: companies, shops, teams, and the systems that came out of them.</p></div>
      <div className="experience-list">{experiences.map((x,i)=><a className="experience-row" href={x.href} key={x.name}><span className="experience-num">{String(i+1).padStart(2,"0")}</span><div className="experience-main"><div className="experience-top"><span>{x.date}</span><span>{x.role}</span></div><h3>{x.name}</h3><p>{x.text}</p><ul>{x.bullets.map(b=><li key={b}>{b}</li>)}</ul></div><span className="row-arrow">↗</span></a>)}</div>
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

    <section className="page-width section" id="about">
      <div className="about-grid"><div><Label>04 · OUTSIDE THE SHOP</Label><h2>Still building things when nobody asked.</h2></div><div className="about-copy"><p><strong>Cars. Motorcycles. Machining. Photography. Music.</strong> I like machines that are old enough to require a little detective work.</p><p>Six-plus years around machining, a Kawasaki Ninja 300, a C4 Corvette, a Jeep restoration, and a restored lathe are a pretty good explanation for why I prefer making things to just talking about them.</p><div className="about-facts"><span>6+<small>YEARS MACHINING</small></span><span>NINJA 300<small>MOTORCYCLE</small></span><span>BERKELEY<small>B.S. ME</small></span></div></div></div>
    </section>

    <section className="page-width section berkeley-section" id="berkeley">
      <div className="section-head"><div><Label>05 · MY PAST</Label><h2>Where I came from.</h2></div><p>Berkeley was more than a degree: robotics, teaching, transportation, rowing, outreach, and the side quests that shaped how I work. It is part of the story, not the identity I am trying to hold onto forever.</p></div>
      <div className="berkeley-grid">{berkeley.map(([title,kind,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")} · {kind}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="media-callout">
      <div className="page-width media-callout-inner"><div><Label>06 · PUBLIC FOOTPRINT</Label><h2>The robots also escaped the shop.</h2><p>Interviews, creator videos, live fights, photographs, press, Berkeley records, and the competition trail.</p></div><a className="button-light" href="/media">OPEN MEDIA ARCHIVE ↗</a></div>
    </section>

    <section className="prompt-band">
      <div className="page-width prompt-inner"><Label>HIRING MANAGER MODE</Label><h2>Have a job description?</h2><p>Use the portfolio as a map. The resume is the compressed version; these pages show how the work actually happened.</p><div className="prompt">“Here is Gursimar Virk’s portfolio and our job description. Which parts of her experience are most relevant, and which projects should I look at?”</div></div>
    </section>

    <footer className="footer page-width" id="contact"><div><Label>CONTACT</Label><h2>Let’s build something.</h2></div><div className="footer-links"><a href="mailto:gursimvirk3@gmail.com">gursimvirk3@gmail.com</a><a href="https://www.linkedin.com/in/gursimarvirk" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/GursimarVirk" target="_blank" rel="noreferrer">GitHub ↗</a><a href={resumeUrl} target="_blank" rel="noreferrer">Resume ↗</a><a href="/legacy/home">Original Site Archive ↗</a></div><p className="copyright">© 2026 Gursimar Virk · Built in Berkeley / the Bay.</p></footer>
  </main>;
}
