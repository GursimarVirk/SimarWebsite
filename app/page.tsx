const experiences = [
  {
    title: "Meta",
    role: "Robotics Hardware Integration Engineer",
    tag: "ROBOTICS · SYSTEMS · FLEET · TECHNICAL LEADERSHIP",
    intro:
      "I work across the full robot stack, from mechanical hardware and custom integration parts through electrical interfaces, firmware, software configuration, networking, validation, deployment, and fleet recovery.",
    bullets: [
      "Own end-to-end integration and deployment of a growing fleet of 30+ robotic and 50+ UMI systems used for continuous research data collection.",
      "Lead and coordinate robotics technicians, assigning daily technical work, establishing build and repair workflows, and training across integration, troubleshooting, hardware modification, and fleet operations.",
      "Drive robot readiness across mechanical assembly, custom hardware, firmware, software setup, networking, and system validation, resolving failures that cross subsystem boundaries.",
      "Design and fabricate custom fixtures, mounts, and integration hardware from system-level requirements while balancing manufacturability, reliability, deployment constraints, and aggressive timelines.",
      "Led development and deployment of mobile UMI capabilities, coordinating hardware, networking, software configuration, and operational requirements for offsite data collection.",
    ],
  },
  {
    title: "Combat Robotics at Berkeley",
    role: "President · Technical Lead · Shop & Operations",
    tag: "ROBOTICS · MANUFACTURING · LEADERSHIP",
    intro:
      "A 120+ member robotics organization where I moved between robot design, manufacturing, shop operations, competition logistics, mentorship, and technical program management.",
    bullets: [
      "Directed R&D and manufacturing across 1, 3, 15, and 30 lb combat robots using CAD, FEA, GD&T, DFM/DFA, machining, heat treatment, assembly, and physical testing.",
      "Led development of multiple 15 lb and 30 lb robot programs while managing people, materials, machine utilization, safety, schedules, and competition logistics.",
      "Mentored 26+ teams and supervised 20+ projects, helping newer members learn manufacturable design, robotics fundamentals, fabrication, and competition preparation.",
      "Managed shop operations and training while coordinating vendors, sponsorships, machine access, and the practical constraints of building robots on student timelines.",
    ],
  },
  {
    title: "Amazon Robotics",
    role: "Hardware & Process Engineering Intern",
    tag: "MANUFACTURING · PROCESS ENGINEERING · HARDWARE",
    intro:
      "Worked on prototype-to-production hardware and manufacturing processes during an alpha-to-beta transition.",
    bullets: [
      "Designed custom fixtures that improved assembly speed by ~20%, with concepts aimed at eliminating hundreds of thousands of repetitive torques annually.",
      "Built a modular restocking and storage approach for ~1,000 unique parts, cutting retrieval inefficiencies and saving ~10% of build time.",
      "Used flow-based design and takt analysis to increase production capacity from 1 to 21 units/week, including an intermediate milestone of 3 units/week.",
      "Standardized 170+ design and tooling specifications in ProPlanner, improving handoffs and creating reusable documentation.",
    ],
  },
  {
    title: "Ultimate Fight Bots",
    role: "Humanoid Robotics · Driver · Team Lead",
    tag: "HUMANOIDS · INTEGRATION · MOTION",
    intro:
      "Hands-on work integrating Unitree and Booster humanoid platforms for live events, system bring-up, debugging, and custom motion behaviors.",
    bullets: [
      "Integrated humanoid platforms across hardware bring-up, system debugging, calibration, communication, and competition readiness.",
      "Developed custom humanoid motion behaviors and combat movesets using video-to-robot motion pipelines and MuJoCo/mjlab.",
      "Worked through real-world constraints including actuator limits, balance instability, impact disturbances, thermal limits, and communication latency.",
      "Drove robots at live events including UC Berkeley and a Linus Tech Tips featured showcase in the Las Vegas BattleBots arena.",
    ],
  },
  {
    title: "Sorcerer.Earth",
    role: "R&D Design & Integration Technician",
    tag: "HARDWARE · ELECTRICAL · FABRICATION",
    intro:
      "Supported high-altitude airborne sensor systems through mechanical/electrical prototyping, PCB assembly, fabrication infrastructure, and production scaling.",
    bullets: [
      "Prototyped and integrated mechanical and electrical subsystems for high-altitude airborne sensors.",
      "Hand-assembled and reflowed densely populated PCBs with 100+ components and fine-pitch soldering.",
      "Helped streamline assembly and production from roughly 1 unit/week to 7 units/week.",
      "Built, refurbished, operated, and calibrated fabrication equipment including CNC, laser cutting, and 3D printing tools.",
      "Diagnosed and repaired a one-of-a-kind 12-foot sealing machine during a time-sensitive build window.",
    ],
  },
  {
    title: "AutoPallet Robotics",
    role: "R&D Design & Robotics Integration Technician",
    tag: "ROBOTICS · PROTOTYPING · DEBUGGING",
    intro:
      "Rapid robot prototyping where mechanical design, electronics, soldering, and troubleshooting all had to happen at the same time.",
    bullets: [
      "Designed controlled-failure components and internal mounts for batteries and pumps using ultra-low-cost manufacturing methods.",
      "Built and troubleshot robots for investor showcases and internal validation, handling soldering, electrical debugging, and rapid mechanical fixes.",
      "Used 3D-printed chassis components and unconventional low-cost mechanisms to accelerate iteration.",
      "Design and validation changes reduced prototype downtime by ~25% and accelerated fabrication cycles by ~15%.",
    ],
  },
  {
    title: "Keiser Wire Raceway",
    role: "Mechanical Design · Manufacturing · Product Development",
    tag: "MECHANICAL · MANUFACTURING · PRODUCT",
    intro:
      "A real-world manufacturing project where I designed around electrical, pneumatic, safety, cost, installation, and production constraints.",
    bullets: [
      "Designed a modular raceway combining pneumatic lines and electrical wiring after finding no existing product that fit the application.",
      "Worked with electrical and safety teams and contacted manufacturers to evaluate materials, manufacturing approaches, and integration.",
      "Designed jigs, updated drawings, created assembly parts, and redesigned powder-coating racks with laser-cut assembly features.",
      "Designed a warehouse ramp to reclaim unused space while accounting for safety and slope requirements.",
      "The major raceway project was assigned by the CEO and ultimately led to an opportunity to travel to Texas to oversee the first installation at a major college campus gym.",
    ],
  },
];

const projects = [
  {
    title: "30 lb Combat Robot",
    group: "Combat Robotics at Berkeley",
    description:
      "Led the design and build of a 30 lb combat robot from scratch in roughly four months, overlapping with an Amazon Robotics internship, Sorcerer.Earth work, and the beginning of the school year.",
    details: [
      "Served as technical program manager for the build while managing 15+ team members, parts flow, schedules, and last-minute engineering problems.",
      "Led weapon design and manufacturing, including custom machining and heat treatment for toughness and resilience.",
      "Worked across wiring, machining, assembly, troubleshooting, and final competition preparation instead of staying inside one subsystem.",
      "Drove the robot in competition and took responsibility for getting the system from CAD to a functioning, battle-ready machine.",
    ],
  },
  {
    title: "15 lb Combat Robots",
    group: "Combat Robotics at Berkeley",
    description:
      "Led and mentored 15 lb robot development while teaching newer teammates how to design manufacturable parts and build a functional combat robot.",
    details: [
      "Managed the BOM, schedule, team progress, and manufacturing support.",
      "Used Fusion 360 FEA to iterate the weapon geometry and evaluate stress/strain distribution.",
      "Pocketed the chassis to reduce weight while maintaining structural integrity.",
      "Performed hands-on fabrication including grinding and finishing the AR500 weapon.",
      "This was also a leadership project: much of the engineering value came from teaching teammates how to turn designs into manufacturable parts.",
    ],
  },
  {
    title: "Combat Box",
    group: "Combat Robotics at Berkeley",
    description:
      "Led the design and fabrication of a heavy-duty combat testing box for the teams I mentored.",
    details: [
      "Designed a robust structure using 1/2-inch polycarbonate panels obtained through sponsorship.",
      "The completed box was estimated at more than 300 lb and initially supported 1 lb competition teams.",
      "Designed it to become a reusable test environment for larger robots as well.",
      "Applied woodworking, fabrication, structural planning, safety, and project coordination outside the normal metalworking environment.",
    ],
  },
  {
    title: "15-DOF Teleoperated Humanoid Robotic Hand",
    group: "UC Berkeley",
    description:
      "Worked on a 15-DOF humanoid robotic hand. The original portfolio specifically identifies my contribution as the sensor component of the hand plus work on the robotic portion.",
    details: [
      "The old portfolio links the HANDI final report and a machine-shop presentation.",
      "I want to rebuild this page around my actual contribution rather than the generic project description, using the technical material in those documents as supporting evidence.",
      "Detailed contribution, architecture, sensor design, fabrication, and testing notes will be added after reviewing the source slides/report.",
    ],
    links: [
      ["HANDI Final Report", "https://drive.google.com/open?id=1AvCRkP0JC-o5meU10HXgGXU879HWbJR_sAYAJnsuo3Y"],
      ["Machine Shop Presentation", "https://docs.google.com/presentation/d/1EurbqNbWvZzMdbJHNEz-lKYVH1hz9U8cfXV7Ef7xOoQ/present"],
    ],
  },
  {
    title: "Autonomous 6-DOF Vision-Based Grasping",
    group: "UC Berkeley · GroceryGizmo",
    description:
      "A robotic-arm project involving perception, planning, control, and manipulation.",
    details: [
      "The completed GroceryGizmo site documents a six-degree-of-freedom Omron TM5-700 arm using AR-tag perception, ROS 2, MoveIt2, a wrist-mounted RealSense camera, and a Robotiq gripper.",
      "My listed role on the project was Manipulation & CAD Engineer.",
      "I will separate the overall team system from my personal contribution once the project slides/materials are reviewed.",
    ],
    links: [["GroceryGizmo Project", "https://grocerygizmo.pchrisoc.com/"]],
  },
  {
    title: "Humanoid Robotics",
    group: "Ultimate Fight Bots",
    description:
      "Hands-on humanoid integration across live competitions, system bring-up, motion, calibration, debugging, and recovery.",
    details: [
      "UFB3 work included Berkeley vs. Stanford competition preparation and system readiness.",
      "UFB5 included Vegas Tech Week, rapid bring-up, calibration, actuator limits, balance issues, impact disturbances, thermal constraints, and communication latency.",
      "Worked on Unitree and Booster platforms and custom motion behaviors using modern simulation/motion tooling.",
    ],
  },
  {
    title: "Motorcycle Communication System",
    group: "Product Development",
    description:
      "Led a team developing a smart motorcycle helmet communication device integrating sensors, actuators, GPS, Bluetooth, microphones, speakers, and AI-driven modules.",
    details: [
      "As the only rider and most experienced engineer on the team, guided hardware selection and the design/implementation process.",
      "Coordinated mechanical engineers, business majors, and software developers around defined responsibilities.",
      "Led product research, market analysis, pricing/customer considerations, and a preliminary go-to-market plan alongside the technical work.",
      "Final deliverables included concept development, component selection, user testing, and a business pitch.",
    ],
    links: [
      ["Final Team Presentation", "https://docs.google.com/presentation/d/1PtgBqGz5OtcBSldxkl2myrix2rrQJnmgBT-T3LMhKNM/present"],
      ["Project Files", "https://drive.google.com/open?id=10YD4BgO1cErMJDVZd0fNw2fc2POT41JBLmXO1r42Nz8"],
    ],
  },
  {
    title: "NASA HUNCH — Magnetic Boots",
    group: "NASA HUNCH",
    description:
      "Led a student engineering project developing magnetic boots intended to help traverse ship hulls; the team reached National Semi-Finalist status.",
    details: [
      "This is an older project and currently has limited detail in the original portfolio.",
      "The original site links the MES presentation, which should be used to reconstruct the technical story.",
      "Leadership and the competition result are worth preserving even if the project is not one of the main homepage features.",
    ],
  },
  {
    title: "IoT Millipede Monitor",
    group: "UC Berkeley / IoT",
    description:
      "An embedded/IoT project from the original portfolio that demonstrates a different side of my engineering work.",
    details: [
      "The original site includes project documentation and imagery.",
      "The full technical description will be restored from the exported source material and linked project files.",
    ],
  },
  {
    title: "Towel Holder Innovation",
    group: "Freshman Design Project",
    description:
      "Led a freshman group project to design a simple mass-manufacturable part.",
    details: [
      "Led CAD and concept development with manufacturability as a core requirement.",
      "Coordinated teammates while they handled report writing and drawing contributions.",
      "Focused on scalability, efficiency, and practical manufacturing constraints.",
    ],
  },
  {
    title: "Statistics / Data Project",
    group: "Programming & Data",
    description:
      "Used Jupyter Hub, statistical methods, and programming to analyze and process data.",
    details: [
      "Applied techniques including one-hot encoding to transform categorical data for statistical models.",
      "The original portfolio links the final project report because the Jupyter environment itself cannot be shared.",
    ],
  },
];

const legacy = [
  ["Robotic Arms", "Coursework, research, and industry exposure with multi-DOF manipulators, planning, control, perception, hardware integration, and industrial-arm familiarity."],
  ["Sorcerer.Earth", "High-altitude airborne sensors, PCB assembly, fabrication tooling, documentation, production scaling, and repair of specialized equipment."],
  ["AutoPallet Robotics", "Low-cost robot prototyping, mechanical/electrical integration, soldering, troubleshooting, and rapid validation."],
  ["Keiser Wire Raceway", "Manufacturing engineering, fixtures, racks, warehouse optimization, pneumatic/electrical routing, and a CEO-sponsored capstone-style design."],
  ["Cars & Machines", "6+ years of machining experience, lathe work, milling, welding, metal bending, machine maintenance, a C4 Corvette, and a 1993 Jeep restoration."],
  ["Class Projects", "Archive of coursework and engineering work retained from the original portfolio."],
  ["Hobbies / Other", "Technical hobbies, motorcycles, cars, machining, and heavy machinery."],
];


const buildPlaces = [
  { title: "Meta", subtitle: "Robotics Integration", category: "professional", meta: "CURRENT · ROBOTICS SYSTEMS", description: "Fleet integration, robot bring-up, deployment, custom hardware, networking, validation." },
  { title: "Amazon Robotics", subtitle: "Hardware + Process Engineering", category: "professional", meta: "INTERNSHIP · MANUFACTURING", description: "Fixtures, production flow, takt time, tooling, parts management, scaling." },
  { title: "Combat Robotics at Berkeley", subtitle: "Technical Leadership + Shop", category: "robotics", meta: "120+ MEMBERS · 26+ TEAMS MENTORED", description: "Combat robots, manufacturing, shop operations, mentorship, competition logistics." },
  { title: "Ultimate Fight Bots", subtitle: "Humanoid Robotics", category: "robotics", meta: "UFB · UNITREE · BOOSTER", description: "Humanoid integration, motion, calibration, debugging, driving, live events." },
  { title: "Sorcerer.Earth", subtitle: "Airborne Sensor Systems", category: "professional", meta: "HARDWARE · PRODUCTION", description: "Sensors, PCB assembly, fabrication, production scaling, equipment repair." },
  { title: "AutoPallet Robotics", subtitle: "Rapid Prototyping", category: "professional", meta: "R&D · INTEGRATION", description: "Low-cost robots, mechanical/electrical integration, soldering, debugging." },
  { title: "Keiser", subtitle: "Industrial Engineering", category: "professional", meta: "MANUFACTURING · PRODUCT", description: "Fixtures, manufacturing, raceway design, equipment, installation." },
  { title: "UC Berkeley", subtitle: "Engineering + Student Life", category: "berkeley", meta: "B.S. ME · MATERIALS SCIENCE", description: "Engineering projects, DeCal teaching, organizations, rowing, outreach." },
  { title: "Personal Shop", subtitle: "Cars + Machines", category: "personal", meta: "6+ YEARS MACHINING", description: "Machining, welding, restoration, motorcycles, cars, and things with engines." },
];

const berkeley = [
  ["Combat Robotics at Berkeley", "LEADERSHIP", "President / technical leadership, shop operations, robot R&D, mentorship, manufacturing, and competition logistics."],
  ["Ultimate Fight Bots", "HUMANOIDS", "Driver, team lead, humanoid integration, motion, live competitions, and demonstrations."],
  ["Engineering 98 DeCal", "TEACHING", "Instructor for the Insider's Guide to Berkeley Engineering student-run DeCal."],
  ["ASME", "LEADERSHIP", "Programs Coordinator."],
  ["Cal ITE", "TRANSPORTATION", "Officer and transportation engineering involvement."],
  ["Cal Transpo", "TRANSPORTATION", "Student transportation engineering organization involvement."],
  ["Cal AREMA", "RAIL / TRANSPORTATION", "Railway and transportation engineering organization involvement."],
  ["Cal Lightweight Crew", "ROWING", "Lightweight team rower / coxswain."],
  ["The Herositic Squlech", "CREATIVE", "Graphic design involvement."],
  ["Rotaract", "COMMUNITY", "Campus community involvement."],
  ["TechWomen", "OUTREACH", "Networking guest / robotics demonstration expert at a Berkeley event."],
  ["Women's Summit", "VOLUNTEERING", "Volunteer involvement; event details to be expanded."],
  ["Berkeley Engineering Tour", "OUTREACH", "Gave a group of Australian students a tour of Berkeley Engineering; event details to be expanded."],
];

const media = [
  ["San Francisco Examiner", "Berkeley × Stanford UFB", "EVENT COVERAGE", "01", "San Francisco Examiner photography and coverage from the Berkeley–Stanford Ultimate Fighting Bots event."],
  ["San Francisco Standard", "UFB in San Francisco", "EVENT COVERAGE", "02", "Coverage of the San Francisco robot-fighting scene and UFB events."],
  ["The New York Times", "Robot fight / San Francisco", "EVENT COVERAGE", "03", "Major-publication coverage of UFB's San Francisco robot fighting scene."],
  ["Washington Post", "Pictures of the Year", "EVENT PHOTOGRAPHY", "04", "UFB event photography appeared in the Washington Post's 2025 Pictures of the Year collection."],
  ["AFP + International Press", "UFB · Las Vegas", "INTERNATIONAL SYNDICATION", "05", "The Las Vegas UFB event generated AFP photography and international newspaper syndication, including French-language coverage."],
  ["jobTopia with Tony Moore", "Episode #297", "PODCAST", "06", "Featured in a conversation about Berkeley Combat Robotics, GLITCH, MALWARE, competition robotics, and student robotics leadership."],
];

const resumeUrl = "https://sites.google.com/view/gvirk/resume";

const heroImages = [
  {
    src: "https://sites.google.com/sitesv-images-rt/AMxu72sKrS6x-hWqxIjFJHkXU2mmqM7cCzTphE39JsTjp9L7R1GW0--tCR2QnYSUfj-nVlRl9i6bauc9il1ghyY0CezMgOB8SKSAGNFb6YYFmg6cUXCFpYdu5X0QMnIDvllizJcnFPaUxcn9n4fPKIfIx3-DE-RonvI1W8EVq4twwXVOgZR9GY23Fbdlc2N098aakNxmZju_-mG3qTofdlsDAl5qFnLSj3OWU41vYBWECNo%3Dw1280",
    label: "HUMANOIDS",
    className: "photo-a",
  },
  {
    src: "https://sites.google.com/sitesv-images-rt/AMxu72sKO8MIuLZRTc2E_2I-DqjoOnRIN4AgDGHFbB7B-NAXw7LoWn6R1Z5UgPLhTMZ-o2cqne9iXtfzwm6QrZKaWs83_JZoYdOV_6z_XcncoxCjm7gDwAY9CNZTj_rgZobAGfve8ncaqAei_2VHNkiZDMi00PZ-Ef-CV8q5-lRDikMk3587dWWETgP_jx0NOhw5bIwcTbtcHKMayPxYuBCUL1Sgn2-kDBGyJaPESftSACA%3Dw1280",
    label: "30 LB ROBOT",
    className: "photo-b",
  },
  {
    src: "https://sites.google.com/sitesv-images-rt/AMxu72uRXqYXsejAavet79fXc4WVQMbAGUSX9Mwr4M-nyO410D7TFfy5cvOuvpX0ZHUhy0xw1UmK5T0m_s6TGMSXVyE4QaGH5AtfcEnX0G36TJFkzgSFuh7osYTHj8PePfwwmYdSzntiQ0ei9cT2tXfjYJVcXqzcgn-_xPvxVeTZRK2opLOsus6TdOKTQC7FoXvcSzGqE3vgL0KGnyHsIOxO3vubX0jz9Ld9Pq7R6Ms%3Dw1280",
    label: "ROBOTIC HAND",
    className: "photo-c",
  },
  {
    src: "https://sites.google.com/sitesv-images-rt/AMxu72vv9B-OoCaTbJpEIqg8E_K_G1qou6hB-s-1-zP_WfmRFoNb05ghSxAtZthSul0qNdSxMeQ2XHos895-bxekrwSXXRjVykMDxBSr9_WIvagi9OirkJ9hhFu5JxX1jzkCnXUhyVnJSpTSKG1Unl5EEj4Akluj9ul9uScZ1SMMEI1ejxl0kwTAu5NBn6UcXFOVj7kosSUHdk4pvVTaVQuxGfPJD8ipAEIS2PKib1JE%3Dw1280",
    label: "AMAZON ROBOTICS",
    className: "photo-d",
  },
  {
    src: "https://sites.google.com/sitesv-images-rt/AMxu72uREjFXsVIRyq8U7fxB14uHEFG_StZYFTX4cGq4D0h-rO60q37mQ4ti8WLncv3HcIw5Zen4Hu0SNHwgvAwY-xxYYk0w0nXIVCXuqQNuLFsXpxWwd0SV6tFTauveb5G2OOu4K7kGuL46O-POIbHBeIHqE-_wGYnym2vTJSvnFDvw1ExhOkAHTkkKfYGtVbl_nUGWWV0qQ1MFB2ISLC3L4_pitjrek5zBMLfPA2dvef4%3Dw1280",
    label: "15 LB ROBOT",
    className: "photo-e",
  },
  {
    src: "https://sites.google.com/sitesv-images-rt/AMxu72sg-T38vR_JYQMTp719HR9EwZJx4KfcLhNEnRl4xAAni9-N53zArhZTtMcAnpYGhBpOHTDSzluGKME0A78B2jTPdhIT3s1gkK2k161SrEzE3yVmwRoH0d1ruI5E49ZUXuA2eH1cF_p85P7b-AqIXJoxmDuq32WchoyPMeAeTmQlrQ7W5TJRg_B7twZpobeeLe4WCtVZNxgPfa_34wGueS5s_nNnBX88Ajf0-lH8Mj0%3Dw1280",
    label: "AUTOPALLET",
    className: "photo-f",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function ExperienceCard({ item }: { item: (typeof experiences)[number] }) {
  return (
    <article className="experience-card">
      <div className="card-top">
        <div>
          <SectionLabel>{item.tag}</SectionLabel>
          <h3>{item.title}</h3>
          <p className="role">{item.role}</p>
        </div>
      </div>
      <p className="lead">{item.intro}</p>
      <ul>
        {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
    </article>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <details className="project-card">
      <summary>
        <div>
          <SectionLabel>{project.group}</SectionLabel>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <span className="open">+</span>
      </summary>
      <div className="project-body">
        <ul>
          {project.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
        {project.links && (
          <div className="links">
            {project.links.map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noreferrer">{label} ↗</a>
            ))}
          </div>
        )}
      </div>
    </details>
  );
}

export default function Home() {
  const [buildFilter, setBuildFilter] = useState("all");
  const [projectFilter, setProjectFilter] = useState("all");
  const filteredBuildPlaces = buildFilter === "all" ? buildPlaces : buildPlaces.filter((item) => item.category === buildFilter);
  const filteredProjects = projectFilter === "all" ? projects : projects.filter((item) => item.group.includes("Combat") ? projectFilter === "robotics" : projectFilter === "berkeley");
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">GURSIMAR VIRK</a>
        <div className="nav-links">
          <a href="#build">Build</a>
          <a href="#robotics">Robotics</a>
          <a href="#experience">Experience</a>
          <a href="#berkeley">Berkeley</a>
          <a href="#media">Media</a>
          <a href="#about">About</a>
          <details className="resume-menu">
            <summary>Resume <span>↗</span></summary>
            <div className="resume-popover">
              <SectionLabel>RESUME</SectionLabel>
              <h3>Want the one-page version?</h3>
              <p>Open my resume for a quick, recruiter-friendly overview of my engineering experience.</p>
              <a className="resume-button" href={resumeUrl} target="_blank" rel="noreferrer">View Resume ↗</a>
              <a className="resume-secondary" href="https://www.linkedin.com/in/gursimarvirk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </details>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-collage page-width" id="top">
        <div className="hero-name">
          <SectionLabel>MECHANICAL ENGINEER · ROBOTICS</SectionLabel>
          <h1>GURSIMAR<br /><span>VIRK</span></h1>
          <p>
            I build robots, break them, fix them, and then figure out how to make the next one
            easier to build.
          </p>
        </div>

        <div className="photo-field" aria-label="A selection of robotics work">
          {heroImages.map((image) => (
            <figure className={`hero-photo ${image.className}`} key={image.src}>
              <img src={image.src} alt={image.label} />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
          <div className="photo-orbit orbit-one" />
          <div className="photo-orbit orbit-two" />
        </div>

        <div className="hero-note">
          <span>01 / 06</span>
          <span>BUILT, TESTED, REBUILT</span>
        </div>
      </section>

      <section className="snapshot page-width" aria-label="Quick snapshot">
        <div className="snapshot-intro">
          <SectionLabel>QUICK SNAPSHOT</SectionLabel>
          <h2>A few numbers tell you more than a job title.</h2>
        </div>
        <div className="snapshot-stats">
          <div><strong>120+</strong><span>members in the robotics org</span></div>
          <div><strong>26+</strong><span>teams mentored</span></div>
          <div><strong>20+</strong><span>robotics projects supervised</span></div>
          <div><strong>2</strong><span>15 lb combat robots built</span></div>
          <div><strong>30 lb</strong><span>combat robot programs</span></div>
          <div><strong>1 → 21</strong><span>units/week at Amazon Robotics</span></div>
          <div><strong>1 → 7</strong><span>units/week at Sorcerer.Earth</span></div>
          <div><strong>BS</strong><span>Mechanical Engineering · UC Berkeley</span></div>
        </div>
      </section>

      <section className="marquee">
        <div>MECHANICAL DESIGN</div><div>ROBOTICS INTEGRATION</div><div>ROS2</div><div>MANUFACTURING</div><div>HARDWARE BRING-UP</div><div>TECHNICAL LEADERSHIP</div>
      </section>

      <section className="page-width intro-section">
        <div>
          <SectionLabel>HOW I WORK</SectionLabel>
          <h2>Broad enough to see the whole system. Hands-on enough to fix the part that broke.</h2>
        </div>
        <div className="intro-copy">
          <p>
            My strongest work sits at the boundaries between disciplines. I’m comfortable designing
            mechanical hardware, making parts in a shop, wiring and debugging a robot, working with
            firmware and software, bringing up a new system, and then figuring out how a team can
            build and operate it repeatedly.
          </p>
          <p>
            I’m especially interested in robotics because the problems refuse to stay inside one
            engineering discipline.
          </p>
        </div>
      </section>

      <section className="page-width section build-section" id="build">
        <div className="section-heading">
          <div><SectionLabel>01 · WHERE I BUILT THINGS</SectionLabel><h2>Not just projects. Places, teams, shops, and systems.</h2></div>
          <p>Explore the environments behind the work. Filter the archive, then jump into the technical projects that came out of each one.</p>
        </div>
        <div className="filter-row">
          {["all", "professional", "robotics", "berkeley", "personal"].map((value) => <button key={value} className={buildFilter === value ? "selected" : ""} onClick={() => setBuildFilter(value)}>{value}</button>)}
        </div>
        <div className="build-layout">
          <div className="build-list">
            {filteredBuildPlaces.map((item, index) => (
              <a className="build-card" key={item.title} href={item.title === "UC Berkeley" ? "#berkeley" : item.title === "Combat Robotics at Berkeley" || item.title === "Ultimate Fight Bots" ? "#robotics" : "#experience"}>
                <span className="build-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="build-card-main"><small>{item.meta}</small><strong>{item.title}</strong><em>{item.subtitle}</em><span>{item.description}</span></span>
                <span className="build-arrow">↗</span>
              </a>
            ))}
          </div>
          <div className="build-feature">
            <SectionLabel>THE RULE</SectionLabel>
            <div className="build-feature-number">01</div>
            <h3>Company ≠ project.</h3>
            <p className="role">The archive keeps the hierarchy clean.</p>
            <p><strong>Keiser</strong> is the company. <strong>Wire Raceway</strong> is a project I did there. The same structure applies everywhere else: organizations contain the work, and projects contain the technical story.</p>
            <div className="build-feature-meta"><span>PEOPLE</span><span>PLACE</span><span>PROJECT</span></div>
          </div>
        </div>
      </section>

      <section className="dark-section robotics-section" id="robotics">
        <div className="page-width">
          <SectionLabel>02 · ROBOTICS</SectionLabel>
          <div className="section-heading">
            <div><h2>The rabbit hole.</h2></div>
            <p>Combat robots, humanoids, manipulation, embedded systems, and the machinery around them.</p>
          </div>
          <div className="robotics-groups">
            <article className="robotics-group featured">
              <span>COMBAT ROBOTICS AT BERKELEY</span><strong>120+ MEMBERS</strong>
              <p>Technical leadership, shop operations, 1 / 3 / 12 / 15 / 30 lb programs, mentorship, manufacturing, and competition logistics.</p>
              <a href="#projects">Explore robots ↓</a>
            </article>
            <article className="robotics-group" id="humanoid-project">
              <span>ULTIMATE FIGHT BOTS</span><strong>HUMANOIDS</strong>
              <p>Unitree and Booster integration, motion, calibration, debugging, live competitions, and driving.</p>
              <a href="#projects">Open UFB ↓</a>
            </article>
            <article className="robotics-group">
              <span>MANIPULATION</span><strong>GROCERYGIZMO</strong>
              <p>6-DOF arm, vision, AR tags, RealSense, ROS 2, MoveIt2, and custom CAD.</p>
              <a href="#projects">See project ↓</a>
            </article>
            <article className="robotics-group">
              <span>SENSING + HARDWARE</span><strong>HANDI</strong>
              <p>15-DOF teleoperated hand with my work on the sensor component and robotic portion.</p>
              <a href="#projects">See project ↓</a>
            </article>
          </div>
        </div>
      </section>

      <section className="page-width section" id="projects">
        <div className="section-heading">
          <div><SectionLabel>03 · PROJECT ARCHIVE</SectionLabel><h2>Builds I can actually point at.</h2></div>
          <p>Open a card to see the technical story. The archive stays broad while we keep drilling into your exact contribution project by project.</p>
        </div>
        <div className="filter-row secondary">
          {["all", "robotics", "berkeley"].map((value) => <button key={value} className={projectFilter === value ? "selected" : ""} onClick={() => setProjectFilter(value)}>{value === "all" ? "ALL WORK" : value.toUpperCase()}</button>)}
        </div>
        <div className="project-grid">
          {filteredProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>

      <section className="page-width section" id="experience">
        <SectionLabel>04 · EXPERIENCE</SectionLabel>
        <h2>Where the work became real.</h2>
        <div className="experience-grid">{experiences.map((item) => <ExperienceCard key={item.title} item={item} />)}</div>
      </section>

      <section className="dark-section" id="skills">
        <div className="page-width">
          <SectionLabel>05 · TECHNICAL TOOLBOX</SectionLabel>
          <h2>The stack is bigger than CAD.</h2>
          <div className="skills-grid">
            <div><h3>Robotics</h3><p>ROS2 · robot integration · controls · motion · manipulation · humanoids · sensors · system bring-up</p></div>
            <div><h3>Software</h3><p>Python · C++ · MATLAB · Simulink · ROS2 · MuJoCo · mjlab · video-to-robot motion pipelines</p></div>
            <div><h3>Mechanical</h3><p>SolidWorks · Fusion 360 · Onshape · Inventor · FEA · GD&T · DFM/DFA · mechanism design</p></div>
            <div><h3>Manufacturing</h3><p>CNC milling · turning · 3D printing · sheet metal · soldering · reflow · TIG welding · fabrication</p></div>
            <div><h3>Systems</h3><p>hardware bring-up · firmware integration · networking · validation · debugging · deployment · fleet operations</p></div>
            <div><h3>Leadership</h3><p>technical program management · team leadership · technician training · shop operations · manufacturing coordination</p></div>
          </div>
        </div>
      </section>

      <section className="page-width section" id="berkeley">
        <div className="section-heading"><div><SectionLabel>06 · BERKELEY</SectionLabel><h2>More than a degree.</h2></div><p>Engineering organizations, teaching, transportation, rowing, creative work, outreach, and the projects that happened in between.</p></div>
        <div className="berkeley-grid">
          {berkeley.map(([title, kind, description], index) => <article key={title}><span className="berkeley-index">{String(index + 1).padStart(2, "0")}</span><SectionLabel>{kind}</SectionLabel><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section className="page-width section" id="media">
        <div className="section-heading"><div><SectionLabel>07 · MEDIA</SectionLabel><h2>Somehow, the robots made the papers.</h2></div><p>UFB event coverage, international press, photography, and conversations. Event coverage is kept distinct from personally verified appearances while we finish the media hunt.</p></div>
        <div className="media-wall">
          {media.map(([title, subtitle, status, number, description]) => <article key={title}><div className="media-number">{number}</div><SectionLabel>{status}</SectionLabel><h3>{title}</h3><p className="role">{subtitle}</p><p>{description}</p>{title === "jobTopia with Tony Moore" && <a href="https://podscan.fm/podcasts/jobtopia-with-tony-moore/episodes/robo-fight-club-ucb-berkeleys-glitch-and-malware-with-gursimar-virk-club-co-president-episode-297" target="_blank" rel="noreferrer">Open feature ↗</a>}</article>)}
        </div>
      </section>

      <section className="page-width section" id="about">
        <div className="about-grid">
          <div><SectionLabel>08 · OUTSIDE THE SHOP</SectionLabel><h2>Still building things when nobody asked.</h2></div>
          <div className="about-copy"><p><strong>Kawasaki Ninja 300.</strong> Cars. Machining. Rowing. Photography. Music. Machines that are probably too old to be worth fixing.</p><p>I’ve spent years around shops and mechanical systems because I like understanding how things work by taking them apart, making something, and putting it back together.</p><div className="about-facts"><span>6+ YEARS <small>MACHINING</small></span><span>NINJA 300 <small>MOTORCYCLE</small></span><span>BERKELEY <small>ME + MATERIALS</small></span></div></div>
        </div>
      </section>

      <section className="page-width section archive">
        <SectionLabel>09 · LEGACY ARCHIVE</SectionLabel>
        <h2>Everything from the old portfolio stays in the record.</h2>
        <p className="archive-intro">The original Google Site had more projects than fit the first pass. Nothing gets thrown away; weaker or older material can stay searchable until we decide where it belongs.</p>
        <div className="archive-list">{legacy.map(([title, description]) => <div key={title}><strong>{title}</strong><span>{description}</span></div>)}</div>
      </section>

      <section className="prompt-section">
        <div className="page-width prompt-inner">
          <SectionLabel>HIRING MANAGER MODE</SectionLabel>
          <h2>Not sure where I fit on your team?</h2>
          <p>
            I like the idea of giving recruiters and hiring managers a faster way to connect a job
            description to the relevant parts of my experience.
          </p>
          <div className="prompt-box">
            <span>TRY THIS PROMPT</span>
            <p>
              “Here is Gursimar Virk’s portfolio and here is our job description. What parts of her
              experience are most relevant to this role, and which projects should I look at?”
            </p>
          </div>
        </div>
      </section>

      <footer className="footer page-width" id="contact">
        <div>
          <SectionLabel>CONTACT</SectionLabel>
          <h2>Let’s build something.</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:gursimvirk3@gmail.com">gursimvirk3@gmail.com</a>
          <a href="https://www.linkedin.com/in/gursimarvirk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/GursimarVirk" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
        <p className="copyright">© 2026 Gursimar Virk · Built for robots, not just résumés.</p>
      </footer>
    </main>
  );
}
