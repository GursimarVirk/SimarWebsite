import type { Metadata } from "next";
import type React from "react";
import { notFound } from "next/navigation";
import { legacyImage } from "../../legacy-image";
import { LegacyEmbed } from "../../components/legacy-embed";
import { legacyPages } from "../../legacy/legacy-data";

const projects = {
  "30-lb-combat-robot": {
    title: "30 lb Combat Robot",
    kicker: "COMBAT ROBOTICS AT BERKELEY · 30 LB",
    role: "Technical Program Manager · Builder · Driver",
    intro: "A competition robot built under a deliberately unreasonable schedule: design, manufacture, wire, debug, test, and get it into the arena.",
    image: "/images/30lb Robot/024d3371033a659dea795ef2ed7f08cf.webp",
    stats: [["30 LB","competition class"],["15+","people coordinated"],["~4 MO","concept to battle-ready"],["25%","reported resilience gain"]],
    sections: [
      ["The build","I led the program from concept through competition while juggling an Amazon Robotics internship, Sorcerer.Earth work, and the beginning of the school year. The job was not one subsystem; it was keeping the whole machine moving."],
      ["Engineering","I worked across weapon design, machining, heat treatment, wiring, assembly, troubleshooting, materials, and final validation. The eggbeater weapon and armor geometry were iterated with heat treatment and Rockwell testing to improve structural resilience."],
      ["Program ownership","I coordinated 15+ people, parts flow, schedules, machine time, design reviews, and the inevitable last-minute failures. I also drove the finished robot in competition."],
    ],
    links: [["Combat Robotics at Berkeley","https://combatrobotics.studentorg.berkeley.edu/"],["BattleBots / GLITCH archive","https://battlebots.com/robot/glitch-2021/"],["Robot fight archive","https://www.youtube.com/results?search_query=Combat+Robotics+at+Berkeley+30+lb+robot"],["Original build video — IMG_3117","https://drive.google.com/open?id=1U0sGefeTy-mgxSCmwakIn-yLlCH2FqND"],["Original build video — IMG_1216","https://drive.google.com/open?id=1fH7ez-kV6GPiqSfBAdNE74UVMMxthJfs"]]
  },
  "15-lb-combat-robots": {
    image: "/images/15lb Robot/1a739db5b66e7a72ddd145ae4ced166e.webp",
    title: "15/12 lb Combat Robots",
    kicker: "COMBAT ROBOTICS AT BERKELEY · 15 / 12 LB",
    role: "Technical Lead · CAD · Manufacturing · Mentor",
    intro: "A combined archive of my 15 lb and 12 lb combat-robot work, including the original build photography, design and manufacturing process, and competition trail for Poundtown and Global Pounding.",
    stats: [["15 / 12 LB","weight classes"],["CAD → SHOP","design to fabrication"],["FEA","weapon iteration"],["AR500","weapon material"]],
    sections: [
      ["Design","I drove end-to-end development in Fusion 360 and Onshape, using FEA and CAM simulation to iterate geometry before putting material on a machine."],
      ["Manufacturing","I pocketed the chassis for weight reduction, fabricated and finished the AR500 weapon, and worked through the physical details that do not show up in a CAD screenshot."],
      ["Poundtown · 15 lb","The original 15 lb project centered on team leadership, CAD ownership, bill-of-materials management, schedule coordination, weapon fabrication, and mentoring teammates new to combat robotics. The chassis was pocketed to reduce weight, and Fusion 360 FEA informed weapon geometry and impact-load decisions."],
      ["Global Pounding · 12 lb","Global Pounding represents the 12 lb side of the archive. Robot Combat Events lists it with Combat Robotics at Berkeley at the April 25–26, 2026 Sacramento Bot Battles event, where it placed 9th in the 12 lb Hobbyweight field. The event record is linked below; I’m keeping competition claims tied to the published record."],
      ["Mentorship","The builds were also teaching projects. I helped newer teammates learn to design manufacturable parts, manage constraints, fabricate components, and prepare robots for competition."],
    ],
    links: [["Combat Robotics at Berkeley","https://combatrobotics.studentorg.berkeley.edu/"],["Robot Combat Events · Berkeley Bot Bash","https://www.robotcombatevents.com/events/7353"],["Global Pounding · 12 lb event record","https://www.robotcombatevents.com/events/6695/competitions/7397"]]
  },
  "combat-box": {
    image: "/images/1b8531ca4ea42eb702b0ae7fbf321db2.webp",
    title: "Combat Box",
    kicker: "COMBAT ROBOTICS AT BERKELEY · FABRICATION",
    role: "Designer · Fabricator · Project Lead",
    intro: "A reusable test environment built because the teams I mentored needed somewhere safe to find out what their robots would do before a competition.",
    stats: [["1/2 IN","polycarbonate"],["300+ LB","estimated completed weight"],["1 LB","initial target class"],["REUSABLE","larger test environment"]],
    sections: [
      ["Structure","Designed around 1/2-inch polycarbonate panels obtained through sponsorship, with a structure intended to handle repeated testing rather than one-off demonstration use."],
      ["Build","This was a different kind of engineering from the metalworking I normally did: woodworking, structural planning, fabrication, assembly, and safety all mattered."],
      ["Why it mattered","The box gave the club a controlled place to test small robots and a foundation that could be reused as larger teams and machines came through the program."],
    ],
    links: [["Combat Robotics at Berkeley","https://combatrobotics.studentorg.berkeley.edu/"],["Berkeley Bot Bash","https://www.robotcombatevents.com/events/7353"]]
  },
  "robotic-hand": {
    image: "/images/robotic-hand-15dof.jpg",
    title: "15-DOF Teleoperated Humanoid Robotic Hand",
    kicker: "UC BERKELEY · ROBOTIC HAND",
    role: "Sensor Component · Robotic Portion",
    intro: "A 15-DOF teleoperated humanoid hand. The original portfolio identifies my work on the sensor component and on the robotic portion of the hand.",
    stats: [["15-DOF","hand"],["TELEOP","control concept"],["SENSORS","my contribution"],["BERKELEY","course project"]],
    sections: [
      ["My contribution","The original portfolio specifically credits me with making the sensor component of the hand and helping with the robotic portion. I am keeping that scope explicit rather than claiming ownership of the entire system."],
      ["Documentation","The original project was backed by a final report and a machine-shop presentation. Those documents remain the best technical record until the full project archive is reconstructed."],
    ],
    links: [["HANDI Final Report","https://drive.google.com/open?id=1AvCRkP0JC-o5meU10HXgGXU879HWbJR_sAYAJnsuo3Y"],["Machine Shop Presentation","https://docs.google.com/presentation/d/1EurbqNbWvZzMdbJHNEz-lKYVH1hz9U8cfXV7Ef7xOoQ/present"]]
  },
  "grocerygizmo": {
    image: "/images/Robotic Arms/9a1205816b57cf9e2ea83a3a711fbc88.webp",
    title: "Autonomous 6-DOF Vision-Based Grasping",
    kicker: "UC BERKELEY · GROCERYGIZMO",
    role: "Manipulation & CAD Engineer",
    intro: "An Omron TM5-700 robot that used perception, planning, and manipulation to autonomously move groceries into a refrigerator.",
    stats: [["6-DOF","Omron TM5-700"],["ROS 2","system stack"],["MOVEIT2","motion planning"],["REAL SENSE","wrist vision"]],
    sections: [
      ["System","GroceryGizmo combined an Omron TM5-700, Robotiq gripper, wrist-mounted Intel RealSense camera, AR-tag perception, ROS 2, MoveIt2, coordinate transforms, and a GUI into one manipulation pipeline."],
      ["My role","I was the Manipulation & CAD Engineer. My work included the custom RealSense mount and manipulation testing, including grasp-offset calibration, safe approach sequences into the refrigerator, motion-stop safety conditions, soft-limit handling, and manual recovery procedures."],
      ["What it taught me","The hard part was not getting an arm to move. It was making the motion predictable around a real refrigerator, camera offsets, grasp alignment, collision constraints, and failure recovery."],
    ],
    links: [["GroceryGizmo project site","https://grocerygizmo.pchrisoc.com/"],["Project source / code","https://github.com/pchrisoc/GroceryGizmo"]]
  },
  "humanoid-robotics": {
    image: "/images/Humanoids/ccacc1b06bfe5fd19878ae0b81668eef.webp",
    title: "Humanoid Robotics",
    kicker: "ULTIMATE FIGHT BOTS · UNITREE · BOOSTER",
    role: "Driver · Team Lead · Integration",
    intro: "Humanoid robots are where software, hardware, dynamics, and live-event pressure all stop being separate problems.",
    stats: [["UFB","live events"],["UNITREE","platform"],["BOOSTER","platform"],["MuJoCo","motion tooling"]],
    sections: [
      ["Bring-up","Worked across hardware bring-up, calibration, communications, system debugging, and competition readiness on Unitree and Booster humanoid platforms."],
      ["Motion","Developed custom motion behaviors and combat movesets through video-to-robot motion pipelines and MuJoCo/mjlab, then dealt with the gap between simulation and a real robot."],
      ["Reality check","Actuator limits, balance instability, impact disturbances, thermal constraints, communication latency, and recovery procedures all become part of the engineering problem when the robot is fighting in front of an audience."],
    ],
    links: [["UFB competition archive","https://roboxing.tv/competitions/ufb"],["Linus Tech Tips — I Joined Robot Fight Club","https://www.youtube.com/watch?v=VJqMPFNP4to"],["BattleBots UFB audience page","https://battlebots.com/audience-waiver-ufb/"]]
  },
  "motorcycle-communication-system": {
    image: "/images/Home/027b9604ec0a299f5ae4b6edd26c88b4.webp",
    title: "Motorcycle Communication System",
    kicker: "PRODUCT DEVELOPMENT · MOTORCYCLE",
    role: "Technical Lead · Product Development",
    intro: "A smart motorcycle helmet communication concept built around the reality of riding: sensors, audio, connectivity, packaging, and a user who is actually on a motorcycle.",
    stats: [["GPS","location"],["BLUETOOTH","connectivity"],["MIC + SPEAKERS","audio"],["AI","planned module"]],
    sections: [
      ["Engineering","Led hardware selection and the design/implementation process for a system combining sensors, actuators, GPS, Bluetooth, microphones, speakers, and AI-driven modules."],
      ["Team","Coordinated mechanical engineers, business students, and software developers around defined responsibilities while keeping the product architecture coherent."],
      ["Product","Led product research, market analysis, pricing/customer considerations, user testing, and a preliminary go-to-market plan alongside the technical work."],
    ],
    links: [["Final Team Presentation","https://docs.google.com/presentation/d/1PtgBqGz5OtcBSldxkl2myrix2rrQJnmgBT-T3LMhKNM/present"],["Project Files","https://drive.google.com/open?id=10YD4BgO1cErMJDVZd0fNw2fc2POT41JBLmXO1r42Nz8"]]
  },
  "nasa-hunch-magnetic-boots": {
    image: "",
    title: "NASA HUNCH — Magnetic Boots",
    kicker: "NASA HUNCH · STUDENT ENGINEERING",
    role: "Team Lead",
    intro: "An early engineering project that put me in the role of team lead and carried the team to National Semi-Finalist status.",
    stats: [["NASA HUNCH","program"],["TEAM LEAD","role"],["NATIONAL","semi-finalist"],["EARLY","engineering work"]],
    sections: [
      ["Concept","The project explored magnetic boots intended to help traverse ship hulls."],
      ["Leadership","I led the student team through development and presentation, with the competition result becoming one of the earliest public markers of my engineering work."],
    ],
    links: [["NASA HUNCH project archive","https://www.nasahunch.com/"],["Original MES presentation","https://drive.google.com/open?id=1kWWs35ymY47IgBklKLPiP0Gaa6mUgs5U"]]
  },
  "iot-millipede-monitor": {
    image: "",
    title: "IoT Millipede Monitor",
    kicker: "UC BERKELEY · IOT",
    role: "Embedded / IoT Project",
    intro: "An embedded project from the original portfolio that shows a different side of my engineering work outside the robot shop.",
    stats: [["IOT","embedded"],["SENSING","monitoring"],["DATA","collection"],["BERKELEY","coursework"]],
    sections: [
      ["Archive","The original Google Site included this project as a dedicated page with imagery and project documentation. The page is preserved in the new archive even where the old linked files are not currently indexed."],
    ],
    links: [["Final E29 Group 1014 Report","https://drive.google.com/open?id=10EKXcRYNI4yIqnktIm28kWT_yl87F7WZ"]]
  },
  "towel-holder-innovation": {
    image: "",
    title: "Towel Holder Innovation",
    kicker: "FRESHMAN DESIGN · MANUFACTURING",
    role: "Team Lead · CAD",
    intro: "A freshman design project built around a deceptively useful engineering constraint: make something simple enough to manufacture at scale.",
    stats: [["CAD","design"],["DFM","manufacturing"],["TEAM","leadership"],["SCALE","design goal"]],
    sections: [
      ["Design","Led CAD and concept development with manufacturability, efficiency, and scalability as core requirements."],
      ["Team","Coordinated teammates while they handled report writing and drawing contributions, keeping the technical concept moving toward a manufacturable solution."],
    ],
    links: [["Final Project Report","https://drive.google.com/open?id=1StqncetTzhLofEB4IHNGd_RE-WSRPR8V_fhoEn94NMc"]]
  },
  "statistics-data-project": {
    image: "",
    title: "Statistics / Data Project",
    kicker: "PROGRAMMING · DATA",
    role: "Data Analysis",
    intro: "A coursework project using Jupyter Hub and statistical methods to transform, analyze, and communicate data.",
    stats: [["JUPYTER","environment"],["PYTHON","analysis"],["ONE-HOT","encoding"],["DATA","statistics"]],
    sections: [
      ["Technical work","Applied statistical methods including one-hot encoding to transform categorical variables for analysis and modeling."],
      ["Archive","The original portfolio linked the final project report because the Jupyter environment itself could not be shared publicly."],
    ],
    links: [["Final Project Report","https://drive.google.com/open?id=1StqncetTzhLofEB4IHNGd_RE-WSRPR8V_fhoEn94NMc"]]
  },
  "robotic-arms": {
    image: "/images/Robotic Arms/9a1205816b57cf9e2ea83a3a711fbc88.webp",
    title: "Robotic Arms",
    kicker: "ROBOTICS · MANIPULATION",
    role: "Coursework / Research / Industry Exposure",
    intro: "The broader manipulator archive behind the more focused GroceryGizmo project.",
    stats: [["MULTI-DOF","manipulators"],["PLANNING","motion"],["CONTROL","robotics"],["PERCEPTION","sensing"]],
    sections: [
      ["Scope","The original portfolio kept robotic arms as a broader category spanning multi-DOF manipulators, planning, control, perception, hardware integration, and industrial-arm familiarity."],
      ["Connection","GroceryGizmo is the strongest standalone example from this category and now lives as its own technical project."],
    ],
    links: [["GroceryGizmo","https://grocerygizmo.pchrisoc.com/"],["Original Robotic Arms project files","https://drive.google.com/open?id=1GsRopkHQfxFNaJGNeoxqZqlqboKadXVn"],["Original Robotic Arms video / file","https://drive.google.com/open?id=1a5LYMUZ90Gz9tzDCJB7CowEVaLreWUcM"]]
  },
  "keiser-wire-raceway": {
    image: "/images/Kesier Wire Raceway/a7c13c2d2bd19eb90e68383b5a985ac4.webp",
    title: "Keiser Wire Raceway",
    kicker: "MANUFACTURING · PRODUCT DESIGN",
    role: "Mechanical Design · Manufacturing · Product Development",
    intro: "A modular raceway designed to route pneumatic lines and electrical wiring through a single, manufacturable, installable system.",
    stats: [["MODULAR","architecture"],["PNEUMATICS","+ electrical"],["DFM","manufacturability"],["FIELD","installation"]],
    sections: [
      ["Problem","Keiser needed a solution that could house pneumatic lines and electrical wiring together. Existing products did not meet the application’s requirements, so I worked from the constraints rather than forcing a poor fit."],
      ["Design process","I worked with the electrical team and safety coordinator, researched alternatives, evaluated manufacturers, and designed a cost-effective, modular raceway that could accommodate the required ports and interfaces."],
      ["Broader manufacturing work","The original page also documents jigs, drawing updates, sticker placers, powder-coating rack redesigns, a warehouse ramp, and repurposing a wire-cutting machine to make it modular."],
      ["Installation","The CEO assigned this as a capstone-style project and discussed the design and manufacturability with me in regular reviews. I was later offered the opportunity to travel to Texas to oversee the first installation at a major college campus gym."]
    ],
    links: [["Original Keiser project archive","/legacy/keiser-wire-raceway"]]
  },
  "class-projects": {
    image: "",
    title: "Class Projects",
    kicker: "UC BERKELEY · COURSEWORK",
    role: "Mechanical Engineering · Robotics · Design",
    intro: "The coursework side of the original portfolio: the projects that built the engineering habits behind the larger robots.",
    stats: [["ME","DEGREE"],["CAD","DESIGN"],["SHOP","FABRICATION"],["ROBOTS","SYSTEMS"]],
    sections: [
      ["What belongs here","Mechanical design, manufacturing, programming, robotics, materials, controls, electronics, and data-analysis work from Berkeley coursework."],
      ["Representative work","The new archive expands the strongest class projects into dedicated pages, including GroceryGizmo, the teleoperated hand, robotic arms, the towel-holder design, and the statistics/data project."],
      ["Why keep it","The small projects show the progression: not every useful engineering lesson came from a competition robot."],
    ],
    links: [["GroceryGizmo","https://grocerygizmo.pchrisoc.com/"],["E29 course reference","https://asme.studentorg.berkeley.edu/student-resources/course-guide/"]]
  },
  "hobbies-other": {
    image: "/images/Cars and Machines/2ea1f7ee762bbaaa434b56d33143590f.webp",
    title: "Hobbies / Other",
    kicker: "PERSONAL · MACHINES · LIFE OUTSIDE WORK",
    role: "Cars · Motorcycles · Machining · Making",
    intro: "The original site also had a place for the machines and hobbies that explain why I ended up liking engineering in the first place.",
    stats: [["6+ YEARS","MACHINING"],["NINJA 300","MOTORCYCLE"],["C4","CORVETTE"],["JEEP","RESTORATION"]],
    sections: [
      ["Machines","Motorcycles, classic cars, restoration work, machining, welding, and the endless small repairs that teach you how real hardware behaves."],
      ["Shop","Lathe training, milling, fabrication, maintenance, and restoring an abandoned lathe became a parallel education to formal coursework."],
      ["Keep exploring","Cars & Machines is the deeper technical archive; this page preserves the broader personality of the original portfolio."],
    ],
    links: [["Cars & Machines","/projects/cars-and-machines"]]
  },
  "locomotion": {
    title: "Locomotion",
    kicker: "ROBOTICS · HARDWARE INTEGRATION",
    role: "Mechanical Systems · Integration",
    intro: "A project entry for the locomotion-focused hardware work. The portfolio image is being reused as requested; this page keeps the description conservative until the exact project write-up and media are attached.",
    image: "/images/Home/027b9604ec0a299f5ae4b6edd26c88b4.webp",
    stats: [["HARDWARE","mechanisms"],["INTEGRATION","system-level"],["ITERATION","build and test"],["ROBOTICS","application"]],
    sections: [
      ["Focus","This entry highlights the mechanical and integration side of getting robotic hardware to move reliably."],
      ["Next step","The original locomotion project images or slides can replace the placeholder cover when the specific source is identified."]
    ],
    links: []
  },
  "cars-and-machines": {
    image: "/images/Cars and Machines/2ea1f7ee762bbaaa434b56d33143590f.webp",
    title: "Cars & Machines",
    kicker: "PERSONAL SHOP · MACHINING",
    role: "Machinist · Restorer · Lifelong Tinkerer",
    intro: "The stuff that taught me to stop being precious about machines: make the part, fix the problem, learn why it failed.",
    stats: [["6+ YEARS","machining"],["LATHE","training"],["C4","Corvette"],["JEEP","restoration"]],
    sections: [
      ["Shop experience","The original portfolio documents six-plus years around machining, including lathe training at ADCO, milling, welding, bending, and machine maintenance."],
      ["Machines","I restored an abandoned lathe and have worked on a C4 Corvette and a roughly $3k Jeep restoration — the kind of projects where diagnostics, fabrication, and persistence matter more than a perfect parts list."],
    ],
    links: [["GroceryGizmo","https://grocerygizmo.pchrisoc.com/"]]
  },
};

const legacyGallery: Record<string,string[]> = {
  "15lb Robot":["1a739db5b66e7a72ddd145ae4ced166e.webp","5b500beba2060fac1329213b6d81ea2d.webp","64e8aeddf152c7c0f6ef86523968d7d7.webp","d2c02d2966cd48500d5198a9733b7bc4.webp"],
  "30lb Robot":["024d3371033a659dea795ef2ed7f08cf.webp","30e9ddb3e8263200eb82535af1cc109d.webp","43fe4185e9fe830a438c397ea7cd9f5d.webp","5677c453ac313db764187b8cd6062e0f.webp","6bba6027a1b9be3118985b911144e534.webp","e6b597c12aa25fe4e8b508a74b490720.webp","ef1064ebb6ada2d31cc5062d9f54954e.webp"],
  "Cars and Machines":["2ea1f7ee762bbaaa434b56d33143590f.webp","45e6ac408e1e9f42402510fde2280f16.webp","94e578495834318443d01ed35a10c4cd.webp","9ab0877f074aba8ce3731db3a6936262.webp","a0ad65cccb395275961bcbf88b8e791d.webp","b7e5a70686675297535fa60b2dea90bf.webp","b93b751f4450db4e21ed19e493095301.webp"],
  "Home":["027b9604ec0a299f5ae4b6edd26c88b4.webp","0916f5e28e0a1edb3590341eb6dd5c2c.webp","1659fbdfb81da2192bf57b0d637e7928.webp","2ea1f7ee762bbaaa434b56d33143590f.webp","60a566a5a4395445cc3d781dbab4e536.webp","67c15c7a7ba0b7e2a3252cb7c0b6c6e6.webp","b5edc2802fd22f5e3d828898fd11e6f4.webp","d40fc533c4af7350b0ce95a3627f0658.webp","dcb69b8d3505bf2fbe6ff659aff682b4.webp"],
  "Humanoids":["45a7332f8783b13b3d7e2b3f9a834515.webp","6e9f6dcd80b82da583f490dd1d4070ce.webp","a5ed269a2fa97a70ddce2992aafbb6ba.webp","ccacc1b06bfe5fd19878ae0b81668eef.webp","d7e1caeaa9364bdcbfaaac0de6823d57.webp"],
  "Kesier Wire Raceway":["1659fbdfb81da2192bf57b0d637e7928.webp","20eb40783fd13313e90a08f66c0b7635.webp","41c365e0a36cc9a7204ba52e8c68204d.webp","713775a98ac36c0a6367270a12a24c25.webp","905d19c6b95c8f9960e0badb2f55b7db.webp","a7c13c2d2bd19eb90e68383b5a985ac4.webp","bc03775b72c8ffa7a74c2e5812b33ebd.webp","c92efdb0945b9126f716935c8128d95b.webp"],
  "Robotic Arms":["07a3486b8df22099776ca84ff37c188e.webp","2ed803397858d570e590a832d3365844.webp","95b3ce2f73b8bec877e0fcc27428e9aa.webp","9a1205816b57cf9e2ea83a3a711fbc88.webp"],
  "Sorcererearth":["43b4d985e231b4b733e280187b11bbf6.webp","565694279feb70b9b1dbea28f4c7b27b.webp","db2753fbabdbfd3b14d70b3f9725bee3.webp"]
};

const legacySlugByProject: Record<string,string> = {
  "30-lb-combat-robot":"30lb-robot",
  "15-lb-combat-robots":"15lb-robot",
  "humanoid-robotics":"humanoids",
  "motorcycle-communication-system":"motorcycle-comms",
  "nasa-hunch-magnetic-boots":"nasa-hunch",
  "towel-holder-innovation":"towel-holder",
  "statistics-data-project":"stats-project",
  "hobbies-other":"hobbies-other",
  "locomotion":"locomotion",
  "cars-and-machines":"cars-and-machines",
  "keiser-wire-raceway":"keiser-wire-raceway",
  "robotic-hand":"robotic-hand",
  "robotic-arms":"robotic-arms",
  "iot-millipede-monitor":"iot-millipede-monitor",
  "combat-box":"combat-box",
  "class-projects":"class-projects",
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  return { title: project ? `${project.title} · Gursimar Virk` : "Project · Gursimar Virk" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  if (!project) notFound();

  return (
    <main className="detail-page">
      <nav className="nav">
        <a className="brand" href="/">GURSIMAR VIRK</a>
        <div className="nav-links">
          <a href="/#work">Work</a><a href="/#projects">Robotics</a><a href="/media">Media</a>
          <a href="/#projects">Projects</a><a href="/#berkeley">Berkeley</a><a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>
      <div className="page-width">
        <a className="detail-back" href="/#projects">← ALL PROJECTS</a>
        <header className="detail-hero" style={{ "--detail-cover": `url("${project.image ? legacyImage(project.image) : ""}")` } as React.CSSProperties}>
          <div>
            <span className="section-label">{project.kicker}</span>
            <h1>{project.title}</h1>
            <p className="detail-role">{project.role}</p>
            <p className="lead">{project.intro}</p>
          </div>
        </header>
        <section className="detail-stats">
          {project.stats.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </section>
        <div className="detail-grid">
          <section className="detail-main">
            {project.sections.map(([heading,body]) => <div className="detail-section" key={heading}><h2>{heading}</h2><p>{body}</p></div>)}
            {(() => {
              const original = legacyPages[legacySlugByProject[slug] || slug];
              const images = original?.imageFolder ? (legacyGallery[original.imageFolder] || []) : [];
              return images.length > 0 ? <section className="detail-gallery">
                <div className="detail-gallery-heading"><span className="section-label">ORIGINAL PORTFOLIO PHOTOGRAPHY</span><h2>Build gallery</h2><p>Recovered images from the original project page, preserved here alongside the write-up.</p></div>
                <div className="detail-gallery-grid">{images.map((file) => <a href={legacyImage("/images/" + original!.imageFolder + "/" + file)} target="_blank" rel="noreferrer" key={file}><img src={legacyImage("/images/" + original!.imageFolder + "/" + file)} alt={original!.title + " — original project photo"} loading="lazy"/></a>)}</div>
              </section> : null;
            })()}
            {(() => {
              const original = legacyPages[legacySlugByProject[slug] || slug];
              return original?.links?.length ? <div className="detail-links original-links"><span className="section-label">LINKS FROM THE ORIGINAL PORTFOLIO</span>{original.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label || "Original project link"} ↗</a>)}</div> : null;
            })()}
            {project.links.length > 0 && <div className="detail-links"><span className="section-label">DOCUMENTATION / LINKS</span>{project.links.map(([label,href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}</div>}
            {(legacyPages[legacySlugByProject[slug] || slug]) ? <div className="detail-links legacy-source-link"><span className="section-label">ORIGINAL SITE</span><a href={"/legacy/" + (legacySlugByProject[slug] || slug)}>READ THE ORIGINAL WRITING + ARCHIVE ↗</a></div> : null}
            {(legacyPages[legacySlugByProject[slug] || slug]?.embeds?.length) ? <div className="detail-embeds"><span className="section-label">ORIGINAL EMBEDS</span>{legacyPages[legacySlugByProject[slug] || slug].embeds!.map((embed) => <LegacyEmbed key={embed.src} embed={embed}/>)}</div> : null}
          </section>
          <aside className="detail-side">
            <span className="section-label">KEEP EXPLORING</span>
            <a href="/#projects">Selected robotics ↗</a>
            <a href="/media">Media archive ↗</a>
            <a href="/media/stats">Robot competition stats ↗</a>
            <a href="/#contact">Contact ↗</a>
          </aside>
        </div>
      </div>
    </main>
  );
}
