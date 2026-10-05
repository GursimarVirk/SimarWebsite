import type { Metadata } from "next";
import styles from "./stats.module.css";

export const metadata: Metadata = {
  title:"Robot Competition Stats · Gursimar Virk",
  description:"Competition history, mentoring, robots, and public fight archives from Gursimar Virk's robotics work.",
};

const competitions=[
  {year:"2025",event:"UFB 1 · Automata",role:"PILOT / INTEGRATION",href:"https://www.youtube.com/watch?v=5qLi2gIFSko",note:"July 5, 2025 · Frontier Tower, San Francisco. Official UFB event record / film."},
  {year:"2025",event:"UFB 2 · Cyberpunk Alley",role:"PILOT / INTEGRATION",href:"https://www.twitch.tv/ufb0ts",note:"August 8, 2025 · Frontier Tower, San Francisco. Preserved in the official UFB broadcast archive."},
  {year:"2025",event:"UFB 3 · Stanford vs UC Berkeley",role:"PILOT / TEAM",href:"https://www.twitch.tv/videos/2663272267?tt_content=vod&tt_medium=mobile_web_share",note:"October 3, 2025 · Frontier Tower, San Francisco. Berkeley vs Stanford card; the old portfolio preserved the official UFB VOD."},
  {year:"2025",event:"UFB 4 · Venice LA Spectacle",role:"PILOT / INTEGRATION",href:"https://www.twitch.tv/ufb0ts",note:"October 17, 2025 · Venice Beach, Los Angeles. Preserved in the official UFB channel archive."},
  {year:"2026",event:"UFB 5 · Humanoids vs Vegas",role:"PILOT / TEAM",href:"https://www.youtube.com/watch?v=VJqMPFNP4to",note:"January 6, 2026 · BattleBots Arena, Las Vegas. Linus Tech Tips documented the event."},
  {year:"2026",event:"Berkeley Bot Bash",role:"CRB ORGANIZER / MENTOR",href:"https://www.robotcombatevents.com/events/7353",note:"Berkeley student-run combat robotics competition with a public event record."},
];

const robots=[
  {name:"GLITCH",className:"BATTLEBOTS",result:"Berkeley's flagship 250 lb BattleBots robot",record:"https://battlebots.com/robot/glitch-2021/",video:"https://www.youtube.com/results?search_query=Glitch+Combat+Robotics+at+Berkeley+BattleBots"},
  {name:"MALWARE",className:"CRB",result:"15 / 30 lb Berkeley combat-robot program",record:"https://combatrobotics.studentorg.berkeley.edu/",video:"https://www.youtube.com/results?search_query=Malware+Combat+Robotics+Berkeley"},
  {name:"30 LB PROGRAM",className:"CRB",result:"Design, machining, heat treatment, wiring, testing, and competition builds",record:"https://combatrobotics.studentorg.berkeley.edu/",video:"https://www.youtube.com/results?search_query=Combat+Robotics+at+Berkeley+30+lb+robot"},
  {name:"15 LB PROGRAM",className:"CRB",result:"Two competition-ready builds plus mentored student development",record:"https://combatrobotics.studentorg.berkeley.edu/",video:"https://www.youtube.com/results?search_query=Combat+Robotics+at+Berkeley+15+lb+robot"},
];

const footage=[
  ["UFB 1 — San Francisco, July 5 2025","Official UFB YouTube","https://www.youtube.com/watch?v=5qLi2gIFSko"],
  ["UFB 1 — full event archive","Official UFB YouTube","https://www.youtube.com/watch?v=l0UuS83-jaE"],
  ["UFB 3 — Berkeley vs Stanford VOD","Original UFB Twitch VOD","https://www.twitch.tv/videos/2663272267?tt_content=vod&tt_medium=mobile_web_share"],
  ["UFB — original preserved clip","Original UFB Twitch clip","https://www.twitch.tv/ufb0ts/clip/SavoryHelpfulLeopardBrokeBack-BqkU3nvMaIOeVJJ8?tt_content=clip&tt_medium=mobile_web_share"],
  ["UFB5 — Las Vegas","Linus Tech Tips","https://www.youtube.com/watch?v=VJqMPFNP4to"],
  ["Original UFB broadcast channel","UFB Twitch","https://www.twitch.tv/ufb0ts"],
  ["UFB competition archive","Ultimate Bots","https://www.ultimatebots.com/"],
];

export default function StatsPage(){
  return <main>
    <nav className="nav"><a className="brand" href="/">GURSIMAR VIRK</a><div className="nav-links"><a href="/#work">Work</a><a href="/#projects">Projects</a><a className="nav-active" href="/media">Media</a><a href="/#berkeley">Berkeley</a><a href="/#about">About</a><a href="/#contact">Contact</a></div></nav>

    <section className={`${styles.hero} page-width`}><p className="eyebrow">MEDIA · ROBOTICS STATS</p><h1>THE<br/><em>COMPETITION</em><br/>TRAIL</h1><p>Not just the robots I built — the competitions, teams, students, and fights around them.</p></section>

    <section className={`${styles.numbers} page-width`}>
      <a href="#competitions"><strong>3+</strong><span>UFB EVENTS / APPEARANCES</span></a>
      <a href="#mentoring"><strong>26+</strong><span>TEAMS / PROJECT GROUPS MENTORED</span></a>
      <a href="#robots"><strong>20+</strong><span>CRB PROJECTS / ROBOTS IN THE PROGRAM</span></a>
      <a href="#sources"><strong>120+</strong><span>MEMBERS IN THE CRB PROGRAM</span></a>
    </section>

    <section id="competitions" className={`${styles.section} page-width`}>
      <div className={styles.heading}><div><p className="eyebrow">01 · COMPETITIONS</p><h2>WHERE I SHOWED UP</h2></div><p>Roles range from piloting and system integration to organizing, mentoring, repairing, and keeping the robots alive between fights.</p></div>
      <div className={styles.rows}>{competitions.map(c=><a href={c.href} target="_blank" rel="noreferrer" className={styles.row} key={c.event}><span>{c.year}</span><div><h3>{c.event}</h3><p>{c.note}</p></div><b>{c.role}</b><i>↗</i></a>)}</div>
    </section>

    <section id="robots" className={`${styles.section} page-width`}>
      <div className={styles.heading}><div><p className="eyebrow">02 · ROBOTS</p><h2>FOLLOW THE BOTS</h2></div><p>Each machine has a trail: club records, competition results, repair history, and public footage.</p></div>
      <div className={styles.robotGrid}>{robots.map(r=><article className={styles.robot} key={r.name}><p className="eyebrow">{r.className}</p><h3>{r.name}</h3><p>{r.result}</p><div><a href={r.record} target="_blank" rel="noreferrer">RECORD ↗</a><a href={r.video} target="_blank" rel="noreferrer">FIGHTS / VIDEO ↗</a></div></article>)}</div>
    </section>

    <section className={`${styles.footage} page-width`}><div className={styles.heading}><div><p className="eyebrow">03 · FOOTAGE</p><h2>WATCH THE MACHINES</h2></div><p>The old portfolio's original UFB clip/VOD links are preserved here alongside the official event films and the current competition archive.</p></div><div className={styles.footageList}>{footage.map(([title,source,href],i)=><a href={href} target="_blank" rel="noreferrer" key={href}><span>{String(i+1).padStart(2,"0")}</span><div><strong>{title}</strong><small>{source}</small></div><b>↗</b></a>)}</div></section>

    <section id="mentoring" className={`${styles.mentoring} page-width`}><div><p className="eyebrow">04 · MENTORSHIP</p><h2>BUILDING THE NEXT TEAMS</h2><p>CRB's model is hands-on: newer members start with smaller machines, learn the complete build cycle, and move toward more complex robots. My leadership work included design reviews, fabrication, testing, competition preparation, repairs, shop training, and event logistics.</p></div><div className={styles.bigStat}><strong>26+</strong><span>MENTORED TEAMS / PROJECT GROUPS</span><a href="https://combatrobotics.studentorg.berkeley.edu/" target="_blank" rel="noreferrer">SEE CRB PROGRAM ↗</a></div></section>

    <section id="sources" className={`${styles.note} page-width`}><p className="eyebrow">05 · SOURCE TRAIL</p><p>The aggregate figures are based on the public CRB record plus the portfolio's documented leadership history. I am deliberately not inventing a team-by-team ledger where a public result or fight link has not been recovered yet. The next layer of this page can become that ledger as individual teams and VODs are matched.</p><div className={styles.sourceLinks}><a href="https://combatrobotics.studentorg.berkeley.edu/" target="_blank" rel="noreferrer">CRB ↗</a><a href="https://battlebots.com/robot/glitch-2021/" target="_blank" rel="noreferrer">BATTLEBOTS / GLITCH ↗</a><a href="https://www.robotcombatevents.com/events/7353" target="_blank" rel="noreferrer">BERKELEY BOT BASH ↗</a></div></section>
  </main>;
}
