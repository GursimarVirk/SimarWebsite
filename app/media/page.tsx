import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media · Gursimar Virk",
  description: "Press, video, photography, interviews, competition records, and public engineering footprint.",
};

const mediaItems = [
  {
    type: "VIDEO",
    source: "LINUS TECH TIPS",
    title: "I Joined Robot Fight Club",
    description: "UFB5 in the BattleBots Arena in Las Vegas, featuring humanoid robot combat, creator pilots, and the event that put UFB in front of a huge tech audience.",
    date: "JAN 12, 2026",
    href: "https://www.youtube.com/watch?v=VJqMPFNP4to",
    image: "https://i.ytimg.com/vi/VJqMPFNP4to/maxresdefault.jpg",
    imagePosition: "center",
  },
  {
    type: "PRESS",
    source: "THE NEW YORK TIMES",
    title: "Peak San Francisco robot fight",
    description: "Coverage of the San Francisco humanoid robot-fighting scene and the rise of UFB.",
    date: "SEP 19, 2025",
    href: "https://www.nytimes.com/2025/09/19/technology/san-francisco-robot-fight.html",
    image: "https://static01.nyt.com/images/2025/09/19/business/19robot-fight/19robot-fight-superJumbo.jpg",
    imagePosition: "center",
  },
  {
    type: "PRESS",
    source: "SAN FRANCISCO STANDARD",
    title: "The most San Francisco sport ever?",
    description: "Robot boxing coverage from the UFB scene. The Standard photographed the humanoid fights and the people around the cage.",
    date: "AUG 10, 2025",
    href: "https://sfstandard.com/2025/08/10/robot-boxing-match-sf/",
    image: "https://assets.sfstandard.com/image/994911177489/image_6ba0f4n47l18d6ufiokqu7pj3n/-S3840x2871-FWEBP",
    imagePosition: "center",
  },
  {
    type: "PHOTOGRAPHY",
    source: "WASHINGTON POST",
    title: "Pictures of the Year 2025",
    description: "A UFB photograph appears in the Washington Post's annual Pictures of the Year collection.",
    date: "2025",
    href: "https://www.washingtonpost.com/nation/interactive/2025/pictures-of-the-year-2025/",
    image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/interactive/2025/pictures-of-the-year/assets/images/67.jpg&w=1200",
    imagePosition: "center",
  },
  {
    type: "PRESS",
    source: "AFP / INTERNATIONAL PRESS",
    title: "Humanoid robots go for knockout in Vegas",
    description: "AFP coverage from the January 2026 Las Vegas UFB event, syndicated internationally in outlets including French-language press.",
    date: "JAN 2026",
    href: "https://kuwaittimes.com/article/38267/technology/humanoid-robots-go-for-knockout-in-high-tech-vegas-fight-night/",
    image: "https://kuwaittimes.com/wp-content/uploads/2026/01/AFP__20260106__7M8H9Q3__v1__HighRes__UsRobots.jpg",
    imagePosition: "center",
  },
  {
    type: "PODCAST",
    source: "JOBTOPIA WITH TONY MOORE",
    title: "Robo Fight Club — Episode #297",
    description: "A 27-minute interview with Gursimar Virk about Combat Robotics at Berkeley, GLITCH, MALWARE, robot repair, competition engineering, sponsorship, and student robotics.",
    date: "NOV 18, 2025",
    href: "https://podscan.fm/podcasts/jobtopia-with-tony-moore/episodes/robo-fight-club-ucb-berkeleys-glitch-and-malware-with-gursimar-virk-club-co-president-episode-297",
    image: "https://pbcdn1.podbean.com/imglogo/image-logo/7944866/job_Topia_the_futureadwtr.png",
    imagePosition: "center",
  },
  {
    type: "OUTREACH",
    source: "TECHWOMEN / BERKELEY",
    title: "Robotics Demo Expert",
    description: "TechWomen 2025 orientation materials publicly identify Gursimar among the networking guests and robotics demo experts at the Berkeley event.",
    date: "2025",
    href: "https://www.linkedin.com/in/gursimarvirk",
    image: "",
  },
  {
    type: "SCIENCE FAIR",
    source: "CALIFORNIA SCIENCE & ENGINEERING FAIR",
    title: "Watt's the Deal with Waterwheels?",
    description: "A Grade 8 engineering/science-fair project investigating how paddle geometry affects waterwheel power. Public CSEF records identify Gursimar Virk as the project author.",
    date: "2018",
    href: "https://csef.usc.edu/History/2018/Projects/J0123.pdf",
    image: "",
  },
  {
    type: "ROBOTICS RECORD",
    source: "ROBOT COMBAT EVENTS",
    title: "Berkeley Bot Bash",
    description: "Public competition record for Combat Robotics at Berkeley's Berkeley Bot Bash, including divisions, competitors, and event statistics.",
    date: "MAY 2, 2026",
    href: "https://www.robotcombatevents.com/events/7353",
    image: "",
  },
  {
    type: "ROBOTICS",
    source: "COMBAT ROBOTICS AT BERKELEY",
    title: "Club + Competition Archive",
    description: "The public CRB record documents GLITCH, Berkeley Bot Bash, BattleBots participation, weight classes, and the club's competition program.",
    date: "ARCHIVE",
    href: "https://combatrobotics.studentorg.berkeley.edu/",
    image: "",
  },
  {
    type: "FIRST",
    source: "FIRST",
    title: "FIRST Alumni Record",
    description: "Gursimar Virk appears in FIRST's FY22 Annual Impact Report with the FIRST Alumni designation.",
    date: "FY22",
    href: "https://www.firstinspires.org/hubfs/web/about/report/annual_report_2022.pdf?hsLang=en",
    image: "",
  },
];

function MediaCard({ item, index }: { item: (typeof mediaItems)[number]; index: number }) {
  return (
    <a
      className={`media-card ${item.image ? "has-image" : "no-image"}`}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      style={item.image ? { backgroundImage: `linear-gradient(180deg, rgba(5,4,12,.05) 20%, rgba(5,4,12,.92) 100%), url("${item.image}")` } : undefined}
    >
      <div className="media-card-visual">
        <span className="media-card-index">{String(index + 1).padStart(2, "0")}</span>
        {!item.image && <span className="media-card-mark">{item.type}</span>}
        <span className="media-card-arrow">↗</span>
      </div>
      <div className="media-card-copy">
        <div className="media-card-meta"><span>{item.type}</span><span>{item.date}</span></div>
        <p className="media-card-source">{item.source}</p>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <span className="media-card-open">OPEN SOURCE ↗</span>
      </div>
    </a>
  );
}

export default function MediaPage() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="/">GURSIMAR VIRK</a>
        <div className="nav-links">
          <a href="/#build">Build</a>
          <a href="/#selected-work">Robotics</a>
          <a href="/#work">Experience</a>
          <a href="/#berkeley">Berkeley</a>
          <a className="nav-active" href="/media">Media</a>
          <a href="/#about">About</a>
          <a href={`/resume`} className="nav-resume">Resume ↗</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      <section className="media-page-hero page-width">
        <div>
          <p className="eyebrow">07 · PUBLIC FOOTPRINT</p>
          <h1>MEDIA</h1>
          <p className="media-page-lede">
            Robots, competitions, interviews, photographs, and the occasional newspaper.
            This is the public trail behind the work.
          </p>
        </div>
        <div className="media-page-aside">
          <span>PRESS</span>
          <span>VIDEO</span>
          <span>PHOTOGRAPHY</span>
          <span>INTERVIEWS</span>
          <span>COMPETITION RECORDS</span>
          <span>ARCHIVE</span>
        </div>
      </section>

      <section className="page-width media-grid-page">
        {mediaItems.map((item, index) => <MediaCard item={item} index={index} key={item.title} />)}
      </section>

      <section className="page-width media-note">
        <p className="eyebrow">ARCHIVE NOTE</p>
        <h2>This page will keep growing.</h2>
        <p>
          I&apos;m collecting older Berkeley publications, event footage, yearbook material,
          livestreams, and other public records separately so the media archive stays useful
          instead of becoming a wall of random links.
        </p>
      </section>

      <footer className="footer page-width">
        <div><p className="eyebrow">BACK TO THE WORK</p><h2>Build something.</h2></div>
        <div className="footer-links">
          <a href="/">Home ↗</a>
          <a href="/#projects">Projects ↗</a>
          <a href="/#contact">Contact ↗</a>
        </div>
        <p className="copyright">© 2026 Gursimar Virk · Built for robots, not just résumés.</p>
      </footer>
    </main>
  );
}
