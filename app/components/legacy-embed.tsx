import type { LegacyEmbed as LegacyEmbedData } from "../legacy/legacy-data";

export function LegacyEmbed({ embed }: { embed: LegacyEmbedData }) {
  return (
    <article style={{border:"1px solid rgba(255,255,255,.12)",borderRadius:18,overflow:"hidden",background:"rgba(255,255,255,.035)",boxShadow:"0 18px 60px rgba(0,0,0,.22)"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,padding:"14px 18px",borderBottom:"1px solid rgba(255,255,255,.09)"}}>
        <div>
          <span className="section-label">{embed.kind === "slides" ? "PRESENTATION" : embed.kind === "doc" ? "DOCUMENT" : "MEDIA"}</span>
          <h3 style={{margin:"5px 0 0",fontSize:"1rem"}}>{embed.title}</h3>
        </div>
        <a href={embed.open} target="_blank" rel="noreferrer" style={{fontSize:".72rem",letterSpacing:".12em",fontWeight:700,whiteSpace:"nowrap"}}>OPEN FULL VIEW ↗</a>
      </div>
      <div style={{position:"relative",width:"100%",aspectRatio:embed.kind === "doc" ? "16 / 10" : "16 / 9",background:"#0b0a12"}}>
        <iframe src={embed.src} title={embed.title} loading="lazy" allow="autoplay; fullscreen" style={{position:"absolute",inset:0,width:"100%",height:"100%",border:0}} />
      </div>
    </article>
  );
}