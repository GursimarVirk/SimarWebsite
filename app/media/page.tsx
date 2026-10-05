import type { Metadata } from "next";
import styles from "./media.module.css";
import { legacyImage } from "../legacy-image";

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
    type: "FIGHT ARCHIVE",
    source: "ULTIMATE BOTS",
    title: "UFB Fight Footage Archive",
    description: "The UFB fights were streamed live on Twitch and YouTube. This is the archive hub for the original streams, recovered VODs, clips, and individual fights; exact Gursimar appearances will be timestamped as the footage is recovered.",
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
    description: "A French-language AFP/syndicated UFB story from the Las Vegas event is part of the international press trail we found. The article itself still needs to be tied back to the exact paragraph/photo where Gursimar is named before this card is treated as a confirmed personal feature.",
    date: "JAN 2026",
    href: "https://lequotidien.lu/culture/magazine-etats-unis-quand-les-robots-montent-sur-le-ring/",
    tag: "NAME / PHOTO VERIFICATION IN PROGRESS",
  },
  {
    type: "PRESS",
    source: "BERKELEY × STANFORD",
    title: "Robot fight coverage",
    description: "The Berkeley–Stanford humanoid fight became part of the local robot-fighting press cycle. The event footage and coverage are being collected here as part of the UFB / Berkeley archive.",
    date: "2025",
    href: "https://www.linkedin.com/in/craigleephoto",
    tag: "EXAMINER PHOTO TRAIL",
  },
  {
    type: "PHOTOGRAPHY",
    source: "THE WASHINGTON POST",
    title: "Pictures of the Year 2025",
    description: "The Washington Post's annual photography collection includes robot-fighting imagery from the broader scene. The individual image and caption need to be matched to Gursimar before claiming a direct appearance.",
    date: "2025",
    href: "https://www.washingtonpost.com/nation/interactive/2025/pictures-of-the-year-2025/",
    tag: "PHOTO ARCHIVE",
  },
  {
    type: "PRESS",
    source: "THE NEW YORK TIMES",
    title: "Peak San Francisco robot fight",
    description: "NYT coverage of the San Francisco humanoid robot-fighting scene and the rise of UFB. Useful as a record of the scene Gursimar was participating in; personal appearance still needs image/name verification.",
    date: "SEP 19, 2025",
    href: "https://www.nytimes.com/2025/09/19/technology/san-francisco-robot-fight.html",
    tag: "MAJOR PRESS",
  },
  {
    type: "PRESS",
    source: "SAN FRANCISCO STANDARD",
    title: "The most San Francisco sport ever?",
    description: "Local coverage of underground robot boxing and the early UFB scene. The story belongs in the archive because it documents the Bay Area fight circuit around Gursimar's UFB work.",
    date: "AUG 10, 2025",
    href: "https://sfstandard.com/2025/08/10/robot-boxing-match-sf/",
    tag: "BAY AREA PRESS",
  },
  {
    type: "PRESS",
    source: "AFP / KUWAIT TIMES",
    title: "Humanoid robots go for knockout in high-tech Vegas fight night",
    description: "AFP reporting from the January 2026 Las Vegas UFB event, syndicated internationally. This is one of the strongest external records of the event surrounding UFB5.",
    date: "JAN 2026",
    href: "https://kuwaittimes.com/article/38267/technology/humanoid-robots-go-for-knockout-in-high-tech-vegas-fight-night/",
    image: "https://kuwaittimes.com/wp-content/uploads/2026/01/AFP__20260106__7M8H9Q3__v1__HighRes__UsRobots.jpg",
    tag: "INTERNATIONAL PRESS",
  },
  {
    type: "UNIVERSITY PRESS",
    source: "UC BERKELEY ME",
    title: "Combat Robotics competes on BattleBots",
    description: "Official Berkeley Mechanical Engineering coverage of CRB, GLITCH, the BattleBots build, and the student engineering culture behind the team. This is historical club coverage rather than a direct profile of Gursimar.",
    date: "2021–2022",
    href: "https://me.berkeley.edu/news/me-student-group-berkeley-combat-robotics-competes-on-battlebots/",
    tag: "BERKELEY ARCHIVE",
  },
];

const archive: MediaItem[] = [
  {
    type: "OUTREACH",
    source: "TECHWOMEN × UC BERKELEY",
    title: "Robotics Demo Expert",
    description: "TechWomen 2025 orientation materials publicly identify Gursimar among the networking guests and robotics demo experts at the CITRIS / Banatao Institute / UC Berkeley event. The organizer also said more photos and videos were coming.",
    date: "2025",
    href: "https://www.linkedin.com/in/gursimarvirk",
    tag: "PHOTO / VIDEO LEAD",
  },
  {
    type: "COMPETITION RECORD",
    source: "ROBOT COMBAT EVENTS",
    title: "Berkeley Bot Bash",
    description: "Public competition records for Berkeley's student-run combat robotics event, including divisions, schedules, and competing robots. The separate stats page turns this event archive into a cleaner record of Gursimar's competition footprint.",
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
    type: "BATTLEBOTS",
    source: "UC BERKELEY CROWDFUND",
    title: "Support CRB on BattleBots",
    description: "Berkeley's archived campaign documents the BattleBots program, GLITCH, the team's regional robots, and the student-built competition pipeline.",
    date: "ARCHIVE",
    href: "https://crowdfund.berkeley.edu/project/38869",
    tag: "BERKELEY RECORD",
  },
  {
    type: "BERKELEY",
    source: "E29 · MANUFACTURING & DESIGN COMMUNICATION",
    title: "E29 project / manufacturing archive",
    description: "The Berkeley E29 work belongs here as the manufacturing-and-design side of the story: drawings, tolerancing, fabrication, prototyping, and the open-ended final project. The original personal project site is not currently indexed, so this card points to the Berkeley course reference until that project URL is restored.",
    date: "BERKELEY",
    href: "https://asme.studentorg.berkeley.edu/student-resources/course-guide/",
    tag: "PROJECT SITE TO RESTORE",
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
          <a href="https://sites.google.com/view/gvirk/resume" target="_blank" rel="noreferrer" className="nav-resume">Resume ↗</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      <section className={`${styles.pageHero} page-width`}>
        <div>
          <p className="eyebrow">07 · PUBLIC FOOTPRINT</p>
          <h1>MEDIA</h1>
          <p className={styles.lede}>
            The public trail behind the robots — interviews, creator videos, live fights,
            press, photographs, Berkeley records, and the competition history underneath it all.
          </p>
        </div>
        <div className={styles.heroStats}>
          <div><strong>01</strong><span>DIRECT INTERVIEW</span></div>
          <div><strong>02+</strong><span>MAJOR VIDEO LEADS</span></div>
          <div><strong>10+</strong><span>PRESS / ARCHIVE SOURCES</span></div>
          <a href="/media/stats"><strong>→</strong><span>ROBOTICS STATS</span></a>
        </div>
      </section>

      <section className="page-width">
        <div className={styles.sectionHead}><div><p className="eyebrow">01 · VIDEO</p><h2>WATCH ME / WATCH THE ROBOTS</h2></div><p>Start with the two pieces that put Gursimar's voice and UFB work on camera, then dive into the original fight archive.</p></div>
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

      <section className={`${styles.note} page-width`}>
        <p className="eyebrow">VERIFICATION NOTE</p>
        <div>
          <h2>I'm keeping the archive honest.</h2>
          <p>Some links document the scene or the organizations Gursimar worked with; others directly feature her. Cards marked as verification leads are intentionally described that way until the exact name, photograph, or timestamp is matched. The next pass is to recover the original UFB Twitch VODs, YouTube fight uploads, Berkeley × Stanford footage, the French-language article reference, and the original E29 project URL.</p>
        </div>
      </section>

      <footer className="footer page-width">
        <div><p className="eyebrow">BACK TO THE WORK</p><h2>Build something.</h2></div>
        <div className="footer-links"><a href="/">Home ↗</a><a href="/media/stats">Robot Stats ↗</a><a href="/#contact">Contact ↗</a></div>
        <p className="copyright">© 2026 Gursimar Virk · Built for robots, not just résumés.</p>
      </footer>
    </main>
  );
}
