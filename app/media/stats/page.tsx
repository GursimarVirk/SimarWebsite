import type { Metadata } from "next";
import styles from "./stats.module.css";
import styles from "./stats.module.css";

export const metadata: Metadata = {
  title: "Robot Competition Stats · Gursimar Virk",
  description: "Competition history, mentoring, robots, and fight archives from Gursimar Virk's combat robotics work at Berkeley.",
};

const competitions = [
  { year: "2025", event: "Berkeley / Stanford UFB", role: "Pilot · Team Lead", href: "https://ufb.gg/", note: "Humanoid robot fight night; live UFB broadcast archive." },
  { year: "2025", event: "UFB Bay Area events", role: "Pilot · Integration", href: "https://ufb.gg/", note: "Early UFB circuit; individual VODs are being recovered from the original broadcasts." },
  { year: "2026", event: "UFB5 — Las Vegas", role: "Pilot · Team Lead", href: "https://www.youtube.com/watch?v=VJqMPFNP4to", note: "BattleBots Arena; the event is documented by LTT and international press." },
  { year: "2026", event: "Berkeley Bot Bash", role: "CRB organizer / mentor", href: "https://www.robotcombatevents.com/events/7353", note: "Public RCE record with 3 lb and 1 lb competition data." },
];

const robotArchives = [
  { name: "GLITCH", className: "250 lb", result: "BattleBots World Championship + Champions", href: "https://battlebots.com/robot/glitch-2021/", video: "https://www.youtube.com/results?search_query=Glitch+Combat+Robotics+at+Berkeley+BattleBots" },
  { name: "MALWARE", className: "15 / 30 lb program", result: "CRB flagship regional platform", href: "https://combatrobotics.studentorg.berkeley.edu/", video: "https://www.youtube.com/results?search_query=Malware+Combat+Robotics+Berkeley" },
  { name: "Berkeley Bot Bash teams", className: "1–3 lb", result: "Termly Berkeley competition", href: "https://www.robotcombatevents.com/events/7353", video: "https://www.youtube.com/results?search_query=Berkeley+Bot+Bash+combat+robotics" },
];

export default function StatsPage() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="/">GURSIMAR VIRK</a>
        <div className="nav-links">
          <a href="/#work">Work</a><a href="/#selected-work">Robotics</a><a className="nav-active" href="/media">Media</a>
          <a href="/#berkeley">Berkeley</a><a href="/#about">About</a><a href="/#contact">Contact</a>
        </div>
      </nav>

      <section className={`${styles.hero} page-width`}>
        <p className="eyebrow">MEDIA · ROBOTICS STATS</p>
        <h1>THE<br/><em>COMPETITION</em><br/>TRAIL</h1>
        <p>Not just the robots I built — the competitions, teams, students, and fights around them.</p>
      </section>

      <section className={`${styles.numbers} page-width`}>
        <div><strong>120+</strong><span>CRB MEMBERS IN THE PROGRAM</span></div>
        <div><strong>26+</strong><span>TEAMS / PROJECT GROUPS MENTORED</span></div>
        <div><strong>20+</strong><span>UNIQUE ROBOTS BUILT BY CRB</span></div>
        <div><strong>5+</strong><span>COMPETITIONS IN THE CLUB ARCHIVE</span></div>
      </section>

      <section className={`${styles.section} page-width`}>
        <div className={styles.heading}><p className="eyebrow">01 · COMPETITIONS</p><h2>WHERE I SHOWED UP</h2><p>Competition roles vary from piloting and system integration to organizing the event, mentoring teams, and keeping robots alive between fights.</p></div>
        <div className={styles.rows}>
          {competitions.map((c) => <a href={c.href} target="_blank" rel="noreferrer" className={styles.row} key={c.event}><span>{c.year}</span><div><h3>{c.event}</h3><p>{c.note}</p></div><b>{c.role}</b><i>↗</i></a>)}
        </div>
      </section>

      <section className={`${styles.section} page-width`}>
        <div className={styles.heading}><p className="eyebrow">02 · ROBOTS + FIGHTS</p><h2>FOLLOW THE BOTS</h2><p>Every robot has a trail: competition records, match results, footage, repairs, and the people who built it.</p></div>
        <div className={styles.robotGrid}>
          {robotArchives.map((r) => <article className={styles.robot} key={r.name}><p className="eyebrow">{r.className}</p><h3>{r.name}</h3><p>{r.result}</p><div><a href={r.href} target="_blank" rel="noreferrer">RECORD ↗</a><a href={r.video} target="_blank" rel="noreferrer">FIGHTS / VIDEO ↗</a></div></article>)}
        </div>
      </section>

      <section className={`${styles.mentoring} page-width`}>
        <div><p className="eyebrow">03 · MENTORSHIP</p><h2>BUILDING THE NEXT TEAMS</h2><p>CRB's model is deliberately broad: new members start with small robots, learn the full build cycle, and move toward larger, more complex machines. Gursimar's leadership work included mentoring teams through design, fabrication, testing, competition preparation, repairs, and event logistics.</p></div>
        <div className={styles.bigStat}><strong>26+</strong><span>MENTORED TEAM / PROJECT GROUPS</span><a href="https://combatrobotics.studentorg.berkeley.edu/" target="_blank" rel="noreferrer">SEE CRB PROGRAM ↗</a></div>
      </section>

      <section className={`${styles.note} page-width`}>
        <p className="eyebrow">DATA NOTE</p>
        <p>The 120+, 26+, 20+, and 5+ figures combine the club-scale public record with Gursimar's reported mentoring history. The next research pass will replace the aggregate 26+ line with a named team-by-team ledger, competition result, and direct fight/VOD link wherever those public recordings can be recovered.</p>
      </section>
    </main>
  );
}
