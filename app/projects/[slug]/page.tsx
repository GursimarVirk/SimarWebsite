import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legacyImage } from "../../legacy-image";

const projects = {
  "30-lb-combat-robot": {
    title: "30 lb Combat Robot",
    kicker: "COMBAT ROBOTICS AT BERKELEY · 30 LB",
    role: "Technical Program Manager · Builder · Driver",
    intro: "A competition robot built under a deliberately unreasonable schedule: design, manufacture, wire, debug, test, and get it into the arena.",
    image: "https://sites.google.com/sitesv-images-rt/AMxu72sKO8MIuLZRTc2E_2I-DqjoOnRIN4AgDGHFbB7B-NAXw7LoWn6R1Z5UgPLhTMZ-o2cqne9iXtfzwm6QrZKaWs83_JZoYdOV_6z_XcncoxCjm7gDwAY9CNZTj_rgZobAGfve8ncaqAei_2VHNkiZDMi00PZ-Ef-CV8q5-lRDikMk3587dWWETgP_jx0NOhw5bIwcTbtcHKMayPxYuBCUL1Sgn2-kDBGyJaPESftSACA%3Dw1280",
    stats: [["30 LB","competition class"],["15+","people coordinated"],["~4 MO","concept to battle-ready"],["25%","reported resilience gain"]],
    sections: [
      ["The build","I led the program from concept through competition while juggling an Amazon Robotics internship, Sorcerer.Earth work, and the beginning of the school year. The job was not one subsystem; it was keeping the whole machine moving."],
      ["Engineering","I worked across weapon design, machining, heat treatment, wiring, assembly, troubleshooting, materials, and final validation. The eggbeater weapon and armor geometry were iterated with heat treatment and Rockwell testing to improve structural resilience."],
      ["Program ownership","I coordinated 15+ people, parts flow, schedules, machine time, design reviews, and the inevitable last-minute failures. I also drove the finished robot in competition."],
    ],
    links: [["Combat Robotics at Berkeley","https://combatrobotics.studentorg.berkeley.edu/"],["BattleBots / GLITCH archive","https://battlebots.com/robot/glitch-2021/"],["Robot fight archive","https://www.youtube.com/results?search_query=Combat+Robotics+at+Berkeley+30+lb+robot"],["Original build video — IMG_3117","https://drive.google.com/open?id=1U0sGefeTy-mgxSCmwakIn-yLlCH2FqND"],["Original build video — IMG_1216","https://drive.google.com/open?id=1fH7ez-kV6GPiqSfBAdNE74UVMMxthJfs"]]
  },
  "15-lb-combat-robots": {
    image: "https://sites.google.com/sitesv-images-rt/AMxu72uREjFXsVIRyq8U7fxB14uHEFG_StZYFTX4cGq4D0h-rO60q37mQ4ti8WLncv3HcIw5Zen4Hu0SNHwgvAwY-xxYYk0w0nXIVCXuqQNuLFsXpxWwd0SV6tFTauveb5G2OOu4K7kGuL46O-POIbHBeIHqE-_wGYnym2vTJSvnFDvw1ExhOkAHTkkKfYGtVbl_nUGWWV0qQ1MFB2ISLC3L4_pitjrek5zBMLfPA2dvef4%3Dw1280",
    title: "15 lb Combat Robots",
    kicker: "COMBAT ROBOTICS AT BERKELEY · 15 LB",
    role: "Technical Lead · CAD · Manufacturing · Mentor",
    intro: "Two competition-ready 15 lb builds became one of the clearest examples of how I like to work: CAD, analysis, fabrication, teaching, and getting the thing to actually survive.",
    stats: [["2","robots built"],["<4 MO","concept to competition"],["FEA","weapon iteration"],["AR500","weapon material"]],
    sections: [
      ["Design","I drove end-to-end development in Fusion 360 and Onshape, using FEA and CAM simulation to iterate geometry before putting material on a machine."],
      ["Manufacturing","I pocketed the chassis for weight reduction, fabricated and finished the AR500 weapon, and worked through the physical details that do not show up in a CAD screenshot."],
      ["Mentorship","The build was also a teaching project. I helped newer teammates learn how to turn a design into a manufacturable part, work through constraints, and prepare a robot for competition."],
    ],
    links: [["Combat Robotics at Berkeley","https://combatrobotics.studentorg.berkeley.edu/"],["Robot Combat Events","https://www.robotcombatevents.com/events/7353"]]
  },
  "combat-box": {
    image: "https://sites.google.com/sitesv-images-rt/AMxu72uKtzzuaH1SY5Alxz9Ybp9xDGQ3KmsPkG-Yp0QQZqfkV-bmBS589VwgBSsPfopi8JdvHACPK_ooD1MIWXseIbkg4geCqge331FwYO2jOP3RQpA_4sUmZMmz38RqcxrNwTWDH7s-7Jx1qXg0EjyPa7nScevsyn375ccfzuhfWqJ3memxYgPprkp5rmrZd8xdMDvLa4rNxJfVgnQDK1MymiSruWP-Grko9wLzbPkhfrc%3Dw1280",
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
    image: "https://sites.google.com/sitesv-images-rt/AMxu72uRXqYXsejAavet79fXc4WVQMbAGUSX9Mwr4M-nyO410D7TFfy5cvOuvpX0ZHUhy0xw1UmK5T0m_s6TGMSXVyE4QaGH5AtfcEnX0G36TJFkzgSFuh7osYTHj8PePfwwmYdSzntiQ0ei9cT2tXfjYJVcXqzcgn-_xPvxVeTZRK2opLOsus6TdOKTQC7FoXvcSzGqE3vgL0KGnyHsIOxO3vubX0jz9Ld9Pq7R6Ms%3Dw1280",
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
    image: "https://sites.google.com/sitesv-images-rt/AMxu72uRXqYXsejAavet79fXc4WVQMbAGUSX9Mwr4M-nyO410D7TFfy5cvOuvpX0ZHUhy0xw1UmK5T0m_s6TGMSXVyE4QaGH5AtfcEnX0G36TJFkzgSFuh7osYTHj8PePfwwmYdSzntiQ0ei9cT2tXfjYJVcXqzcgn-_xPvxVeTZRK2opLOsus6TdOKTQC7FoXvcSzGqE3vgL0KGnyHsIOxO3vubX0jz9Ld9Pq7R6Ms%3Dw1280",
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
    image: "https://sites.google.com/sitesv-images-rt/AMxu72sKrS6x-hWqxIjFJHkXU2mmqM7cCzTphE39JsTjp9L7R1GW0--tCR2QnYSUfj-nVlRl9i6bauc9il1ghyY0CezMgOB8SKSAGNFb6YYFmg6cUXCFpYdu5X0QMnIDvllizJcnFPaUxcn9n4fPKIfIx3-DE-RonvI1W8EVq4twwXVOgZR9GY23Fbdlc2N098aakNxmZju_-mG3qTofdlsDAl5qFnLSj3OWU41vYBWECNo%3Dw1280",
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
    image: "https://sites.google.com/sitesv-images-rt/AMxu72uE7IRyV7jLfu8c47rMSsk9lcrwQyic8n7x8w9ud7YkC4EOHjgjV75nRHfDjoYFetG5oPVmsNo9Nvtc9vCJAj54RUak9SAcf0tJQViiK0CQFxQLbRGNNwzRSgr79C3dNqhqQ9KbAHnsHc1XPtAk5RKt1ujZ1sxwRxkRM0bFcktSU0Cca4iM5CJfwJELsPdLsBjeeMpqEdT7nFCZOHvhCfS6VJw8cVDdd32TtYuI%3Dw1280",
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
    image: "https://sites.google.com/sitesv-images-rt/AMxu72vFKS5F-A0nJU3qBYodUrH4zk9o1Qtd1FiCtAB16zPVtcf7XCSnOxkZNSf_CMZzWRi4r-ICcVSp4-a1-7xkIFTPtb5RSU3wLO8H2Dgz38huIcw9Jlm9GFZ3cfG8MJWATUNx0ew9c8QXB1x-Myu5D2sMk7QSjXVNTzqR7K7WIJpTEJX89tWg5xC7H1lkduqJDToXoOp0zlw5ArszwLYj5h0prywIxGbkarwK0zEAHKs%3Dw1280",
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
    image: "https://sites.google.com/sitesv-images-rt/AMxu72uE7IRyV7jLfu8c47rMSsk9lcrwQyic8n7x8w9ud7YkC4EOHjgjV75nRHfDjoYFetG5oPVmsNo9Nvtc9vCJAj54RUak9SAcf0tJQViiK0CQFxQLbRGNNwzRSgr79C3dNqhqQ9KbAHnsHc1XPtAk5RKt1ujZ1sxwRxkRM0bFcktSU0Cca4iM5CJfwJELsPdLsBjeeMpqEdT7nFCZOHvhCfS6VJw8cVDdd32TtYuI%3Dw1280",
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
    image: "https://sites.google.com/sitesv-images-rt/AMxu72sg-T38vR_JYQMTp719HR9EwZJx4KfcLhNEnRl4xAAni9-N53zArhZTtMcAnpYGhBpOHTDSzluGKME0A78B2jTPdhIT3s1gkK2k161SrEzE3yVmwRoH0d1ruI5E49ZUXuA2eH1cF_p85P7b-AqIXJoxmDuq32WchoyPMeAeTmQlrQ7W5TJRg_B7twZpobeeLe4WCtVZNxgPfa_34wGueS5s_nNnBX88Ajf0-lH8Mj0%3Dw1280",
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
    image: "https://sites.google.com/sitesv-images-rt/AMxu72v7B4bK5oKIHrtfGMBbrWgtaAijXDQ_PBxYuweZnmUAx0P4qoHPTM1pXW-RtDYR-6XcNi3nSM52GEBNVfMZJo_11f4I6dL2qtySnsEIqt6HGoEtAI2KbgRzJA4ip6E_KbnEq3caSba3EjAF-5GAR-Xxr7l7RjxMlT4VlKiiGJwXL2IhyhboM9m9nPq7K0TowRwI2QzAuaG9cBgudLYHW-ZP_VSDqdk9Z5GtB2AcBc%3Dw1280",
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
    image: "https://sites.google.com/sitesv-images-rt/AMxu72v7B4bK5oKIHrtfGMBbrWgtaAijXDQ_PBxYuweZnmUAx0P4qoHPTM1pXW-RtDYR-6XcNi3nSM52GEBNVfMZJo_11f4I6dL2qtySnsEIqt6HGoEtAI2KbgRzJA4ip6E_KbnEq3caSba3EjAF-5GAR-Xxr7l7RjxMlT4VlKiiGJwXL2IhyhboM9m9nPq7K0TowRwI2QzAuaG9cBgudLYHW-ZP_VSDqdk9Z5GtB2AcBc%3Dw1280",
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
  "class-projects": {
    image: "https://sites.google.com/sitesv-images-rt/AMxu72v7B4bK5oKIHrtfGMBbrWgtaAijXDQ_PBxYuweZnmUAx0P4qoHPTM1pXW-RtDYR-6XcNi3nSM52GEBNVfMZJo_11f4I6dL2qtySnsEIqt6HGoEtAI2KbgRzJA4ip6E_KbnEq3caSba3EjAF-5GAR-Xxr7l7RjxMlT4VlKiiGJwXL2IhyhboM9m9nPq7K0TowRwI2QzAuaG9cBgudLYHW-ZP_VSDqdk9Z5GtB2AcBc%3Dw1280",
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
    image: "https://sites.google.com/sitesv-images-rt/AMxu72vFKS5F-A0nJU3qBYodUrH4zk9o1Qtd1FiCtAB16zPVtcf7XCSnOxkZNSf_CMZzWRi4r-ICcVSp4-a1-7xkIFTPtb5RSU3wLO8H2Dgz38huIcw9Jlm9GFZ3cfG8MJWATUNx0ew9c8QXB1x-Myu5D2sMk7QSjXVNTzqR7K7WIJpTEJX89tWg5xC7H1lkduqJDToXoOp0zlw5ArszwLYj5h0prywIxGbkarwK0zEAHKs%3Dw1280",
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
  "cars-and-machines": {
    image: "https://sites.google.com/sitesv-images-rt/AMxu72vFKS5F-A0nJU3qBYodUrH4zk9o1Qtd1FiCtAB16zPVtcf7XCSnOxkZNSf_CMZzWRi4r-ICcVSp4-a1-7xkIFTPtb5RSU3wLO8H2Dgz38huIcw9Jlm9GFZ3cfG8MJWATUNx0ew9c8QXB1x-Myu5D2sMk7QSjXVNTzqR7K7WIJpTEJX89tWg5xC7H1lkduqJDToXoOp0zlw5ArszwLYj5h0prywIxGbkarwK0zEAHKs%3Dw1280",
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
        <header className="detail-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(7,6,12,.98) 0%,rgba(7,6,12,.72) 52%,rgba(7,6,12,.30) 100%),url("${project.image ? legacyImage(project.image) : ""}")` }}>
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
            {project.links.length > 0 && <div className="detail-links"><span className="section-label">DOCUMENTATION / LINKS</span>{project.links.map(([label,href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}</div>}
          </section>
          <aside className="detail-side">
            <span className="section-label">KEEP EXPLORING</span>
            <a href="/#selected-work">Selected robotics ↗</a>
            <a href="/media">Media archive ↗</a>
            <a href="/media/stats">Robot competition stats ↗</a>
            <a href="/#contact">Contact ↗</a>
          </aside>
        </div>
      </div>
    </main>
  );
}
