import type { Metadata } from "next";
import styles from "./media.module.css";
import { legacyImage } from "../legacy-image";
import { ResumeModalTrigger } from "../components/resume-modal";

export const metadata: Metadata = {
  title: "Media · Gursimar Virk",
  description: "Video, press, photography, interviews, competition footage, and the public trail behind Gursimar Virk's robotics work.",
};

type MediaItem = {
  type: string;
  source: string;
  title: string;
  description: string;
  date: string;
  href: string;
  image?: string;
  tag?: string;
};

const videos: MediaItem[] = [
  {
    type: "PODCAST",
    source: "JOBTOPIA WITH TONY MOORE",
    title: "Robo Fight Club — Episode #297",
    description: "A 27-minute conversation with Gursimar Virk about leading Combat Robotics at Berkeley, GLITCH, MALWARE, competition repair, sponsorship, student engineering, and the strange career pipeline growing around humanoid robot fighting.",
    date: "NOV 18, 2025",
    href: "https://podscan.fm/podcasts/jobtopia-with-tony-moore/episodes/robo-fight-club-ucb-berkeleys-glitch-and-malware-with-gursimar-virk-club-co-president-episode-297",
    image: "https://pbcdn1.podbean.com/imglogo/image-logo/7944866/job_Topia_the_futureadwtr.png",
    tag: "DIRECT INTERVIEW",
  },
  {
    type: "YOUTUBE",
    source: "LINUS TECH TIPS",
    title: "I Joined Robot Fight Club",
    description: "UFB5 at the BattleBots Arena in Las Vegas. The video follows the creator pilots, the robots, the workshop, fight day, and the matches that turned UFB into a very public humanoid-robot spectacle.",
    date: "JAN 12, 2026",
    href: "https://www.youtube.com/watch?v=VJqMPFNP4to",
    image: "https://i.ytimg.com/vi/VJqMPFNP4to/maxresdefault.jpg",
    tag: "UFB5 · LAS VEGAS",
  },
  {
    type: "YOUTUBE CHANNEL",
    source: "ULTIMATE BOTS",
    title: "UFB videos on YouTube",
    description: "The league's uploaded videos and event clips — a better place to start than the live-stream archive because you can find individual fights and actually see the pilots in action.",
    date: "2025–2026",
    href: "https://www.youtube.com/results?search_query=Ultimate+Bots+UFB+humanoid+robot+fights",
    tag: "UPLOADED VIDEO",
  },
  {
    type: "FIGHT ARCHIVE",
    source: "ULTIMATE BOTS",
    title: "UFB Fight Footage Archive",
    description: "The league’s live-stream channel and clips preserve the event atmosphere, matchups, and robot behavior beyond the edited highlight videos.",
    date: "2025–2026",
    href: "https://www.twitch.tv/ufb0ts",
    tag: "TWITCH CHANNEL",
  },
  {
    type: "UFB",
    source: "ULTIMATE BOTS",
    title: "Watch the original UFB broadcasts",
    description: "UFB has publicly described its events as globally streamed competitions. The league's public footprint points to Twitch and YouTube as the primary broadcast platforms.",
    date: "2025–2026",
    href: "https://www.ultimatebots.com/",
    tag: "OFFICIAL ARCHIVE",
  },
];

const articles: MediaItem[] = [
  {
    type: "PRESS",
    source: "FRENCH / INTERNATIONAL PRESS",
    title: "French-language coverage of UFB",
    description: "French-language coverage of the Las Vegas humanoid-robot fight night, preserving the event’s international press trail.",
    date: "JAN 2026",
    href: "https://lequotidien.lu/culture/magazine-etats-unis-quand-les-robots-montent-sur-le-ring/",
    tag: "FRENCH-LANGUAGE EVENT COVERAGE",
  },
  {
    type: "PRESS",
    source: "BERKELEY × STANFORD",
    title: "Robot fight coverage",
    description: "A direct clip from UFB3’s Stanford-versus-Berkeley card, with the broader event VOD also listed on the competition stats page.",
    date: "OCT 3, 2025",
    href: "https://www.twitch.tv/ufb0ts/clip/SavoryHelpfulLeopardBrokeBack-BqkU3nvMaIOeVJJ8?tt_content=clip&tt_medium=mobile_web_share",
    tag: "UFB3 · STANFORD VS BERKELEY",
  },
  {
    type: "PHOTOGRAPHY",
    source: "THE WASHINGTON POST",
    title: "Pictures of the Year 2025",
    description: "A visual roundup from the wider 2025 news cycle, included as context for the media landscape around live robotics and combat-robot events.",
    date: "2025",
    href: "https://www.washingtonpost.com/nation/interactive/2025/pictures-of-the-year-2025/",
    tag: "PHOTO ARCHIVE",
  },
  {
    type: "PRESS",
    source: "THE NEW YORK TIMES",
    title: "Peak San Francisco robot fight",
    description: "A reported look at San Francisco’s emerging humanoid robot-fighting scene and the public attention around live robot competitions.",
    date: "SEP 19, 2025",
    href: "https://www.nytimes.com/2025/09/19/technology/san-francisco-robot-fight.html",
    tag: "MAJOR PRESS",
  },
  {
    type: "PRESS",
    source: "SAN FRANCISCO STANDARD",
    title: "The most San Francisco sport ever?",
    description: "Local reporting on Bay Area robot boxing and the emerging UFB fight circuit.",
    date: "AUG 10, 2025",
    href: "https://sfstandard.com/2025/08/10/robot-boxing-match-sf/",
    tag: "BAY AREA PRESS",
  },
  {
    type: "PRESS",
    source: "AFP / YAHOO NEWS",
    title: "Humanoid robots go for knockout in high-tech Vegas fight night",
    description: "An additional syndication of AFP’s report on the Las Vegas humanoid-robot fight night, alongside the French-language and Kuwait Times versions.",
    date: "JAN 2026",
    href: "https://uk.sports.yahoo.com/news/humanoid-robots-knockout-high-tech-163923909.html",
    tag: "AFP SYNDICATION",
  },
  {
    type: "PRESS",
    source: "AFP / KUWAIT TIMES",
    title: "Humanoid robots go for knockout in high-tech Vegas fight night",
    description: "I was there competing that night and was pulled for an interview. This AFP report documents the UFB5 event at the Las Vegas BattleBots Arena and its international press coverage.",
    date: "JAN 2026",
    href: "https://kuwaittimes.com/article/38267/technology/humanoid-robots-go-for-knockout-in-high-tech-vegas-fight-night/",
    image: "https://kuwaittimes.com/wp-content/uploads/2026/01/AFP__20260106__7M8H9Q3__v1__HighRes__UsRobots.jpg",
    tag: "INTERNATIONAL PRESS",
  },
  {
    type: "TEAM HISTORY",
    source: "COMBAT ROBOTICS AT BERKELEY",
    title: "GLITCH in the BattleBots yearbook",
    description: "The official BattleBots team record: GLITCH's builder roster, robot details, and match history. This replaces the generic university press article with the robot's own competition record.",
    date: "2021–2023",
    href: "https://battlebots.com/robot/glitch-wcvii/",
    tag: "OFFICIAL ROBOT RECORD",
  },
  {
    type: "CLUB WEBSITE + INSTAGRAM",
    source: "COMBAT ROBOTICS AT BERKELEY",
    title: "Combat Robotics at Berkeley — current website",
    description: "The current club website for its 1 lb, 15 lb, 30 lb, and heavyweight programs.",
    date: "CURRENT",
    href: "https://combatrobotics.studentorg.berkeley.edu/",
    tag: "CURRENT CLUB WEBSITE",
  },

  {
    type: "INSTAGRAM",
    source: "GLITCH / COMBAT ROBOTICS AT BERKELEY",
    title: "Follow GLITCH on Instagram",
    description: "The GLITCH BattleBots Instagram account, alongside the official robot record and competition archive.",
    date: "CURRENT",
    href: "https://www.instagram.com/glitch.battlebots/",
    tag: "INSTAGRAM",
  },];

const archive: MediaItem[] = [
  {
    type: "OUTREACH",
    source: "TECHWOMEN × UC BERKELEY",
    title: "Robotics Demo Expert",
    description: "TechWomen 2025 orientation materials publicly identify Gursimar among the networking guests and robotics demo experts at the CITRIS / Banatao Institute / UC Berkeley event. The organizer also said more photos and videos were coming.",
    date: "2025",
    href: "https://www.linkedin.com/in/jillfinlayson/",
    tag: "JILL FINLAYSON · LINKEDIN",
  },
  {
    type: "COMPETITION RECORD",
    source: "ROBOT COMBAT EVENTS",
    title: "Berkeley Bot Bash",
    description: "I started the first Berkeley Bot Bash and began the tradition. With the help of my team, we were able to launch the event; it has since been passed on and continues as a team tradition.",
    date: "MAY 2, 2026",
    href: "https://www.robotcombatevents.com/events/7353",
    tag: "COMPETITION ARCHIVE",
  },
  {
    type: "ROBOTICS ARCHIVE",
    source: "COMBAT ROBOTICS AT BERKELEY",
    title: "CRB public archive",
    description: "Primary club documentation for GLITCH, MALWARE, the 1 lb / 3 lb / 15 lb / 30 lb program, Berkeley Bot Bash, and the team's BattleBots history.",
    date: "2020–PRESENT",
    href: "https://combatrobotics.studentorg.berkeley.edu/",
    tag: "PRIMARY SOURCE",
  },
  {
    type: "BATTLEBOTS",
    source: "BATTLEBOTS",
    title: "GLITCH — official match record",
    description: "The official BattleBots robot page preserves GLITCH's match history, including fights against Ghost Raptor, Hydra, Kraken, Rotator, Uppercut, Gruff, Retrograde, and later WCVII opponents.",
    date: "2021–2023",
    href: "https://battlebots.com/robot/glitch-2021/",
    tag: "FIGHT RESULTS",
  },
  {
    type: "DECAL",
    source: "UC BERKELEY COLLEGE OF ENGINEERING",
    title: "Engineering 98 — Insider's Guide to Berkeley Engineering",
    description: "The student-run Engineering DeCal I taught, introducing students to Berkeley Engineering through advice and experience from upper-division students.",
    date: "INSTRUCTOR · 2023",
    href: "https://e98.berkeley.edu/",
    tag: "DECAL WEBSITE",
  },
  {
    type: "BERKELEY",
    source: "E29 · MANUFACTURING & DESIGN COMMUNICATION",
    title: "E29 project / manufacturing archive",
    description: "Course context for E29, the manufacturing-and-design communication course at Berkeley: drawings, tolerancing, fabrication, prototyping, and the open-ended final project.",
    date: "BERKELEY",
    href: "https://asme.studentorg.berkeley.edu/student-resources/course-guide/",
    tag: "COURSE REFERENCE",
  },
  {
    type: "SCIENCE FAIR",
    source: "CALIFORNIA SCIENCE & ENGINEERING FAIR",
    title: "Watt's the Deal with Waterwheels?",
    description: "Gursimar Virk, Grade 8, Sanger Academy Charter School. A published CSEF project investigating how paddle geometry affects waterwheel performance.",
    date: "2018",
    href: "https://csef.usc.edu/History/2018/Projects/J0123.pdf",
    tag: "DIRECT PUBLIC RECORD",
  },
  {
    type: "FIRST",
    source: "FIRST",
    title: "FY22 Annual Impact Report",
    description: "Gursimar Virk appears in FIRST's public FY22 report. This belongs in the long-form archive as an early robotics/public-record marker.",
    date: "FY22",
    href: "https://www.firstinspires.org/hubfs/web/about/report/annual_report_2022.pdf?hsLang=en",
    tag: "PUBLIC RECORD",
  },

];

function FeatureCard({ item, number }: { item: MediaItem; number: string }) {
  return (
    <a
      className={styles.feature}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      style={item.image ? { backgroundImage: `linear-gradient(180deg,rgba(6,5,12,.02) 18%,rgba(6,5,12,.94) 100%),url("${legacyImage(item.image)}")` } : undefined}
    >
      <div className={styles.featureTop}>
        <span>{number}</span>
        <span>{item.tag}</span>
        <span>↗</span>
      </div>
      <div className={styles.featureCopy}>
        <p className={styles.source}>{item.source}</p>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className={styles.featureMeta}><span>{item.type}</span><span>{item.date}</span><span>OPEN ↗</span></div>
      </div>
    </a>
  );
}

function ArchiveCard({ item, index }: { item: MediaItem; index: number }) {
  return (
    <a className={styles.archiveCard} href={item.href} target="_blank" rel="noreferrer">
      <div className={styles.archiveIndex}>{String(index + 1).padStart(2, "0")}</div>
      <div>
        <div className={styles.meta}><span>{item.type}</span><span>{item.date}</span></div>
        <p className={styles.source}>{item.source}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <span className={styles.archiveArrow}>↗</span>
    </a>
  );
}

export default function MediaPage() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="/">GURSIMAR VIRK</a>
        <div className="nav-links">
          <a href="/#projects">Build</a>
          <a href="/#projects">Robotics</a>
          <a href="/#work">Experience</a>
          <a href="/#berkeley">Berkeley</a>
          <a className="nav-active" href="/media">Media</a>
          <a href="/#about">About</a>
          <ResumeModalTrigger className="nav-resume">Resume ↗</ResumeModalTrigger>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      <header className="subpage-hero page-width">
        <span className="section-label">07 · PUBLIC FOOTPRINT</span>
        <h1>Media.</h1>
        <p>The public trail behind the robots — interviews, creator videos, live fights, press, photographs, Berkeley records, and the competition history underneath it all.</p>
      </header>

      <section className="page-width">
        <div className={styles.sectionHead}><div><p className="eyebrow">01 · VIDEO</p><h2>WATCH ME / WATCH THE ROBOTS</h2></div><p>Start with the direct interview and creator video, then go to UFB's uploaded YouTube footage before the Twitch archive and original broadcasts.</p></div>
        <div className={styles.featureGrid}>
          {videos.map((item, i) => <FeatureCard item={item} number={String(i + 1).padStart(2, "0")} key={item.title} />)}
        </div>
      </section>

      <section className={`${styles.articles} page-width`}>
        <div className={styles.sectionHead}><div><p className="eyebrow">02 · ARTICLES</p><h2>ARTICLES</h2></div><p>Press and public records around the fights, the Berkeley robotics program, and the longer engineering story.</p></div>
        <div className={styles.archiveGrid}>
          {articles.map((item, i) => <ArchiveCard item={item} index={i} key={item.title} />)}
        </div>
      </section>

      <section className={`${styles.statsBand} page-width`}>
        <div><p className="eyebrow">03 · ROBOTICS STATS</p><h2>THE COMPETITION TRAIL</h2><p>Competitions, teams, mentoring, robots, and the fights that came out of the program.</p></div>
        <a href="/media/stats">OPEN THE STATS PAGE <span>↗</span></a>
      </section>

      <section className={`${styles.archive} page-width`}>
        <div className={styles.sectionHead}><div><p className="eyebrow">04 · BERKELEY / ARCHIVE</p><h2>THE LONG TAIL</h2></div><p>Older records, university coverage, outreach, and the engineering trail that predates the big robot-fight headlines.</p></div>
        <div className={styles.archiveGrid}>
          {archive.map((item, i) => <ArchiveCard item={item} index={i} key={item.title} />)}
        </div>
      </section>


    </main>
  );
}
