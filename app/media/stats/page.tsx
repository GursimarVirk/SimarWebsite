import type { Metadata } from "next";
import styles from "./stats.module.css";

export const metadata: Metadata = {
  title:"Robot Competition Stats · Gursimar Virk",
  description:"Competition history, mentoring, robots, and public fight archives from Gursimar Virk's robotics work.",
};

const competitions=[
  {year:"2025",event:"UFB 3 · Stanford vs UC Berkeley",role:"PILOT / COMPETITOR",href:"https://www.twitch.tv/videos/2663272267?tt_content=vod&tt_medium=mobile_web_share",note:"October 3, 2025 · San Francisco. I competed on this card and was pulled for an interview. I did not compete at UFB 1 or UFB 2."},
  {year:"2026",event:"UFB 5 · Humanoids vs Vegas",role:"PILOT / COMPETITOR",href:"https://www.youtube.com/watch?v=VJqMPFNP4to",note:"January 6, 2026 · BattleBots Arena, Las Vegas. The event was documented by Linus Tech Tips; I was there competing."},
  {year:"2026",event:"UFB One-Year Anniversary",role:"PILOT / COMPETITOR",href:"https://www.youtube.com/results?search_query=Ultimate+Bots+UFB+one+year+anniversary+match",note:"Anniversary event footage search. I competed at the one-year anniversary event."},
  {year:"2026–2027",event:"UFB Season 2 · Pilot",role:"PILOT · BEING ADDED",href:"https://www.ultimatebots.com/",note:"I am being added as a Season 2 pilot; this is a forward-looking role, not a past competition result."},
  {year:"2026",event:"Berkeley Bot Bash",role:"FOUNDER / ORGANIZER",href:"https://www.youtube.com/results?search_query=Berkeley+Bot+Bash+2026+combat+robotics",note:"I started running Berkeley Bot Bash. This links to YouTube footage search; the public event record is also available through Robot Combat Events."},
  {year:"2026",event:"SCAR · Carnage at the Cube",role:"COMPETITOR",href:"https://www.youtube.com/results?search_query=SCAR+Carnage+at+the+Cube+2026+combat+robotics",note:"April 25–26, 2026 · Discovery Cube, Santa Ana. I competed here; Global Pounding is listed in the event's 12 lb division."},
  {year:"2025",event:"Sacramento combat-robotics competition",role:"COMPETITOR",href:"https://www.youtube.com/results?search_query=Sacramento+combat+robotics+Miller+family+competition",note:"A Sacramento competition hosted by the Miller family. This is a YouTube footage search, not a claim that a single consolidated event video has been verified."},
  {year:"2026",event:"Teams I mentored competing elsewhere",role:"MENTOR / PROGRAM LEAD",href:"https://combatrobotics.studentorg.berkeley.edu/",note:"My teams competed at additional events beyond the competitions listed here; the club program competed more broadly than my personal competition trail."},
];

const robots=[
  {name:"GLITCH",className:"250 LB · BATTLEBOTS",result:"I took the helm of GLITCH for a period, but did not make a substantial technical contribution to the heavyweight build.",record:"https://battlebots.com/robot/glitch-2021/",video:"https://www.youtube.com/results?search_query=Glitch+Combat+Robotics+at+Berkeley+BattleBots"},
  {name:"MALWARE",className:"30 LB · CRB",result:"Berkeley's 30 lb combat robot. MALWARE is the 30 lb machine.",record:"https://combatrobotics.studentorg.berkeley.edu/",video:"https://www.youtube.com/results?search_query=Malware+30lb+Combat+Robotics+Berkeley"},
  {name:"POUND TOWN",className:"15 LB · CRB",result:"A 15 lb combat robot I made as part of the Berkeley combat-robotics program.",record:"https://combatrobotics.studentorg.berkeley.edu/",video:"https://www.youtube.com/results?search_query=Pound+Town+15lb+Combat+Robotics+Berkeley"},
  {name:"GLOBAL POUNDING",className:"12 LB · CRB",result:"A 12 lb robot that competed at SCAR — Carnage at the Cube 2026.",record:"https://www.robotcombatevents.com/events/6695/competitions/7397",video:"https://www.youtube.com/results?search_query=Global+Pounding+combat+robot"},
];

const footage=[
  ["UFB uploaded videos on YouTube","UFB / YouTube video search","https://www.youtube.com/results?search_query=Ultimate+Bots+UFB+humanoid+robot+fights"],
  ["UFB 3 — Stanford vs Berkeley","Original UFB Twitch VOD","https://www.twitch.tv/videos/2663272267?tt_content=vod&tt_medium=mobile_web_share"],
  ["UFB 5 — Las Vegas","Linus Tech Tips","https://www.youtube.com/watch?v=VJqMPFNP4to"],
  ["UFB one-year anniversary match","YouTube footage search","https://www.youtube.com/results?search_query=Ultimate+Bots+UFB+one+year+anniversary+match"],
  ["Berkeley Bot Bash 2026","YouTube footage search","https://www.youtube.com/results?search_query=Berkeley+Bot+Bash+2026+combat+robotics"],
  ["SCAR — Carnage at the Cube 2026","YouTube footage search","https://www.youtube.com/results?search_query=SCAR+Carnage+at+the+Cube+2026+combat+robotics"],
  ["Sacramento combat-robotics competition","YouTube footage search · Miller family-hosted","https://www.youtube.com/results?search_query=Sacramento+combat+robotics+Miller+family+competition"],
];

export default function StatsPage(){
  return <main>
    <nav className="nav"><a className="brand" href="/">GURSIMAR VIRK</a><div className="nav-links"><a href="/#work">Work</a><a href="/#projects">Projects</a><a className="nav-active" href="/media">Media</a><a href="/#berkeley">Berkeley</a><a href="/#about">About</a><a href="/#contact">Contact</a></div></nav>

    <section className={`${styles.hero} page-width`}><p className="eyebrow">MEDIA · ROBOTICS STATS</p><h1>THE<br/><em>COMPETITION</em><br/>TRAIL</h1><p>Not just the robots I built — the competitions, teams, students, and fights around them.</p></section>

    <section className={`${styles.numbers} page-width`}>
      <a href="#competitions"><strong>3</strong><span>PAST UFB EVENTS · 3, 5 & ANNIVERSARY</span></a>
      <a href="#mentoring"><strong>26+</strong><span>TEAMS / PROJECT GROUPS MENTORED</span></a>
      <a href="#robots"><strong>20+</strong><span>CRB PROJECTS / ROBOTS IN THE PROGRAM</span></a>
      <a href="#sources"><strong>~120</strong><span>STUDENTS DURING MY PRESIDENCY</span></a>
    </section>

    <section id="competitions" className={`${styles.section} page-width`}>
      <div className={styles.heading}><div><p className="eyebrow">01 · COMPETITIONS</p><h2>WHERE I SHOWED UP</h2></div><p>I competed at UFB 3, UFB 5, and the one-year anniversary; I did not compete at UFB 1 or UFB 2. I am also being added as a Season 2 pilot. Outside UFB, I started running Berkeley Bot Bash and competed at Carnage at the Cube and a Sacramento event hosted by the Miller family.</p></div>
      <div className={styles.rows}>{competitions.map(c=><a href={c.href} target="_blank" rel="noreferrer" className={styles.row} key={c.event}><span>{c.year}</span><div><h3>{c.event}</h3><p>{c.note}</p></div><b>{c.role}</b><i>↗</i></a>)}</div>
    </section>

    <section id="robots" className={`${styles.section} page-width`}>
      <div className={styles.heading}><div><p className="eyebrow">02 · ROBOTS</p><h2>FOLLOW THE BOTS</h2></div><p>GLITCH, MALWARE, POUND TOWN, and GLOBAL POUNDING each have a different story. I took over GLITCH for a period but did not make a substantial technical contribution to its heavyweight build; MALWARE is 30 lb, POUND TOWN is 15 lb, and GLOBAL POUNDING is 12 lb.</p></div>
      <div className={styles.robotGrid}>{robots.map(r=><article className={styles.robot} key={r.name}><p className="eyebrow">{r.className}</p><h3>{r.name}</h3><p>{r.result}</p><div><a href={r.record} target="_blank" rel="noreferrer">RECORD ↗</a><a href={r.video} target="_blank" rel="noreferrer">FIGHTS / VIDEO ↗</a></div></article>)}</div>
    </section>

    <section className={`${styles.footage} page-width`}><div className={styles.heading}><div><p className="eyebrow">03 · FOOTAGE</p><h2>WATCH THE MACHINES</h2></div><p>Uploaded YouTube footage is prioritized, followed by the UFB 3 Twitch VOD and the UFB5 creator video. For Berkeley Bot Bash, Carnage at the Cube 2026, the Sacramento competition, and the anniversary match, links open targeted YouTube searches where I could not verify one exact upload.</p></div><div className={styles.footageList}>{footage.map(([title,source,href],i)=><a href={href} target="_blank" rel="noreferrer" key={href}><span>{String(i+1).padStart(2,"0")}</span><div><strong>{title}</strong><small>{source}</small></div><b>↗</b></a>)}</div></section>

    <section id="mentoring" className={`${styles.mentoring} page-width`}><div><p className="eyebrow">04 · MENTORSHIP</p><h2>BUILDING THE NEXT TEAMS</h2><p>At the time I was president, the program had roughly 120 students. CRB's model is hands-on: newer members start with smaller machines, learn the complete build cycle, and move toward more complex robots. I have carried that mentorship into work as well, training technicians in integration, troubleshooting, repairs, and repeatable fleet operations.</p></div><div className={styles.bigStat}><strong>~120</strong><span>STUDENTS IN THE PROGRAM DURING MY PRESIDENCY</span><a href="https://combatrobotics.studentorg.berkeley.edu/" target="_blank" rel="noreferrer">CURRENT CRB WEBSITE ↗</a><a href="https://www.instagram.com/glitch.battlebots/" target="_blank" rel="noreferrer">CRB / GLITCH INSTAGRAM ↗</a></div></section>

    <section id="sources" className={`${styles.note} page-width`}><p className="eyebrow">05 · SOURCE TRAIL</p><p>The roughly 120-student figure reflects the size of the program during my presidency. The competition list separates my own appearances from events attended by the wider teams. Where a direct upload was not findable, the footage link opens a targeted YouTube search rather than pretending an exact video has been verified.</p><div className={styles.sourceLinks}><a href="https://combatrobotics.studentorg.berkeley.edu/" target="_blank" rel="noreferrer">CRB WEBSITE ↗</a><a href="https://www.instagram.com/glitch.battlebots/" target="_blank" rel="noreferrer">CRB / GLITCH INSTAGRAM ↗</a><a href="https://battlebots.com/robot/glitch-2021/" target="_blank" rel="noreferrer">BATTLEBOTS / GLITCH ↗</a><a href="https://www.robotcombatevents.com/events/7353" target="_blank" rel="noreferrer">BERKELEY BOT BASH ↗</a></div></section>
  </main>;
}
