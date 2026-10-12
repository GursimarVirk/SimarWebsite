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
  {year:"2026",event:"Berkeley Bot Bash",role:"FOUNDER / ORGANIZER",href:"https://www.youtube.com/results?search_query=Berkeley+Bot+Bash+2026+combat+robotics",note:"I started the first Berkeley Bot Bash and began the tradition. With the help of my team, we launched the event; it has since been passed on and continues as a team tradition. The link opens a targeted YouTube footage search."},
  {year:"2026",event:"SCAR · Carnage at the Cube",role:"COMPETITOR",href:"https://www.youtube.com/results?search_query=SCAR+Carnage+at+the+Cube+2026+combat+robotics",note:"April 25–26, 2026 · Discovery Cube, Santa Ana. I competed here; Global Pounding is listed in the event's 12 lb division."},
  {year:"2025",event:"Sacramento combat-robotics competition",role:"COMPETITOR",href:"https://www.youtube.com/results?search_query=Sacramento+combat+robotics+Miller+family+competition",note:"A Sacramento competition hosted by the Miller family. This is a YouTube footage search, not a claim that a single consolidated event video has been verified."},
  {year:"2026",event:"Teams I mentored competing elsewhere",role:"MENTOR / PROGRAM LEAD",href:"https://combatrobotics.studentorg.berkeley.edu/",note:"My teams competed at additional events beyond the competitions listed here; the club program competed more broadly than my personal competition trail."},
];

const robots=[
  {name:"MALWARE",className:"30 LB · CRB · SCAR ELO RECORD",result:"Published SCAR Elo history: 1 win–4 losses across 5 tracked fights. Carnage at the Cube 2026: 7th place (1–2); Maker Faire Orange County 2025: 9th place (0–2).",record:"https://elo.socalattackrobots.com/class/30lb/robot/malware",video:"https://www.robotcombatevents.com/events/6695/competitions/7398"},
  {name:"POUND TOWN",className:"15 LB · CRB",result:"15 lb robot. I could not locate a reliable public fight-history or competition-results page for this exact robot name, so I’m not assigning it an invented win–loss record. The links open the club source and a targeted event-record search.",record:"https://combatrobotics.studentorg.berkeley.edu/",video:"https://www.robotcombatevents.com/search?query=Pound%20Town"},
  {name:"GLOBAL POUNDING",className:"12 LB · CRB · CARNAGE AT THE CUBE 2026",result:"Placed 9th in the 12 lb Hobbyweight division at Carnage at the Cube, April 25–26, 2026. I found the event placement, but not a separate SCAR Elo fight-history page for this robot.",record:"https://www.robotcombatevents.com/events/6695/competitions/7397",video:"https://www.youtube.com/results?search_query=Global+Pounding+combat+robot"},
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
      <a href="#robots"><strong>1–4</strong><span>MALWARE · TRACKED SCAR RECORD</span></a>
      <a href="#robots"><strong>7TH</strong><span>MALWARE · CARNAGE AT THE CUBE 2026</span></a>
      <a href="#robots"><strong>9TH</strong><span>GLOBAL POUNDING · CARNAGE AT THE CUBE 2026</span></a>
      <a href="#robots"><strong>15 LB</strong><span>POUND TOWN · PUBLIC RECORD NOT FOUND</span></a>
    </section>

    <section id="competitions" className={`${styles.section} page-width`}>
      <div className={styles.heading}><div><p className="eyebrow">01 · COMPETITIONS</p><h2>WHERE I SHOWED UP</h2></div><p>I competed at UFB 3, UFB 5, and the one-year anniversary; I did not compete at UFB 1 or UFB 2. I am also being added as a Season 2 pilot. Outside UFB, I started running Berkeley Bot Bash and competed at Carnage at the Cube and a Sacramento event hosted by the Miller family.</p></div>
      <div className={styles.rows}>{competitions.map(c=><a href={c.href} target="_blank" rel="noreferrer" className={styles.row} key={c.event}><span>{c.year}</span><div><h3>{c.event}</h3><p>{c.note}</p></div><b>{c.role}</b><i>↗</i></a>)}</div>
    </section>

    <section id="robots" className={`${styles.section} page-width`}>
      <div className={styles.heading}><div><p className="eyebrow">02 · ROBOTS</p><h2>FOLLOW THE BOTS</h2></div><p>GLITCH, MALWARE, POUND TOWN, and GLOBAL POUNDING each have a different story. I took over GLITCH for a period but did not make a substantial technical contribution to its heavyweight build; MALWARE is 30 lb, POUND TOWN is 15 lb, and GLOBAL POUNDING is 12 lb.</p></div>
      <div className={styles.robotGrid}>{robots.map(r=><article className={styles.robot} key={r.name}><p className="eyebrow">{r.className}</p><h3>{r.name}</h3><p>{r.result}</p><div><a href={r.record} target="_blank" rel="noreferrer">RECORD ↗</a><a href={r.video} target="_blank" rel="noreferrer">FIGHTS / VIDEO ↗</a></div></article>)}</div>
    </section>

    <section id="battlebots-record" className={`${styles.section} page-width`}>
      <div className={styles.heading}><div><p className="eyebrow">03 · VERIFIED RESULTS</p><h2>COMPETITION RESULTS & RECORDS</h2></div><p>This section is about MALWARE, POUND TOWN, and GLOBAL POUNDING—not GLITCH. Published results are linked directly where found; an unavailable public record is labeled as unavailable rather than guessed.</p></div>
      <div className={styles.robotGrid}>
        <article className={styles.robot}><p className="eyebrow">MALWARE · SCAR ELO</p><h3>1–4</h3><p>5 tracked fights across two SCAR events. Carnage at the Cube 2026: 1–2, 7th place. Maker Faire Orange County 2025: 0–2, 9th place.</p><div><a href="https://elo.socalattackrobots.com/class/30lb/robot/malware" target="_blank" rel="noreferrer">FIGHT-BY-FIGHT HISTORY ↗</a><a href="https://www.robotcombatevents.com/events/6695/competitions/7398" target="_blank" rel="noreferrer">CARNAGE EVENT RESULTS ↗</a></div></article>
        <article className={styles.robot}><p className="eyebrow">GLOBAL POUNDING · 12 LB</p><h3>9TH</h3><p>Placed 9th in the 12 lb Hobbyweight division at Carnage at the Cube, April 25–26, 2026. I found the official event listing and placement, but not a separate published cumulative win–loss record.</p><div><a href="https://www.robotcombatevents.com/events/6695/competitions/7397" target="_blank" rel="noreferrer">OFFICIAL EVENT / PLACEMENT ↗</a><a href="https://www.youtube.com/results?search_query=Global+Pounding+combat+robot" target="_blank" rel="noreferrer">FIGHT FOOTAGE SEARCH ↗</a></div></article>
        <article className={styles.robot}><p className="eyebrow">POUND TOWN · 15 LB</p><h3>NOT VERIFIED</h3><p>I could not locate a reliable public event listing or stats page for Pound Town under that exact name. This does not mean it has no fights; it means I cannot responsibly state a record without a source.</p><div><a href="https://combatrobotics.studentorg.berkeley.edu/" target="_blank" rel="noreferrer">CRB OFFICIAL SITE ↗</a><a href="https://www.robotcombatevents.com/" target="_blank" rel="noreferrer">SEARCH ROBOT COMBAT EVENTS ↗</a></div></article>
      </div>
      <p className={styles.sourceNote}>MALWARE’s SCAR Elo page lists the opponents and results for each tracked fight. SCAR Elo tracks SCAR events; it should not be presented as a complete lifetime record across every competition. GLOBAL POUNDING’s placement is from the official Robot Combat Events event listing. POUND TOWN remains unverified in public records found so far.</p>
    </section>

    <section className={`${styles.footage} page-width`}><div className={styles.heading}><div><p className="eyebrow">04 · FOOTAGE</p><h2>WATCH THE MACHINES</h2></div><p>Uploaded YouTube footage is prioritized, followed by the UFB 3 Twitch VOD and the UFB5 creator video. For Berkeley Bot Bash, Carnage at the Cube 2026, the Sacramento competition, and the anniversary match, links open targeted YouTube searches where I could not verify one exact upload.</p></div><div className={styles.footageList}>{footage.map(([title,source,href],i)=><a href={href} target="_blank" rel="noreferrer" key={href}><span>{String(i+1).padStart(2,"0")}</span><div><strong>{title}</strong><small>{source}</small></div><b>↗</b></a>)}</div></section>

    <section id="mentoring" className={`${styles.mentoring} page-width`}><div><p className="eyebrow">05 · MENTORSHIP</p><h2>BUILDING THE NEXT TEAMS</h2><p>At the time I was president, the program had roughly 120 students. CRB's model is hands-on: newer members start with smaller machines, learn the complete build cycle, and move toward more complex robots. I have carried that mentorship into work as well, training technicians in integration, troubleshooting, repairs, and repeatable fleet operations.</p></div><div className={styles.bigStat}><strong>~120</strong><span>STUDENTS IN THE PROGRAM DURING MY PRESIDENCY</span><a href="https://combatrobotics.studentorg.berkeley.edu/" target="_blank" rel="noreferrer">CURRENT CRB WEBSITE ↗</a><a href="https://www.instagram.com/glitch.battlebots/" target="_blank" rel="noreferrer">CRB / GLITCH INSTAGRAM ↗</a></div></section>

    <section id="sources" className={`${styles.note} page-width`}><p className="eyebrow">06 · SOURCE TRAIL</p><p>The roughly 120-student figure reflects the size of the program during my presidency. The competition list separates my own appearances from events attended by the wider teams. Where a direct upload was not findable, the footage link opens a targeted YouTube search rather than pretending an exact video has been verified.</p><div className={styles.sourceLinks}><a href="https://combatrobotics.studentorg.berkeley.edu/" target="_blank" rel="noreferrer">CRB WEBSITE ↗</a><a href="https://www.instagram.com/glitch.battlebots/" target="_blank" rel="noreferrer">CRB / GLITCH INSTAGRAM ↗</a><a href="https://battlebots.com/robot/glitch-2021/" target="_blank" rel="noreferrer">BATTLEBOTS / GLITCH ↗</a><a href="https://www.robotcombatevents.com/events/7353" target="_blank" rel="noreferrer">BERKELEY BOT BASH ↗</a></div></section>
  </main>;
}
