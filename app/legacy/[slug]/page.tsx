import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyEmbed } from "../../components/legacy-embed";
import { legacyPages } from "../legacy-data";
import styles from "../legacy.module.css";

const gallery: Record<string,string[]> = {
  "15lb Robot":["1a739db5b66e7a72ddd145ae4ced166e.webp","5b500beba2060fac1329213b6d81ea2d.webp","64e8aeddf152c7c0f6ef86523968d7d7.webp","d2c02d2966cd48500d5198a9733b7bc4.webp"],
  "30lb Robot":["024d3371033a659dea795ef2ed7f08cf.webp","30e9ddb3e8263200eb82535af1cc109d.webp","43fe4185e9fe830a438c397ea7cd9f5d.webp","5677c453ac313db764187b8cd6062e0f.webp","6bba6027a1b9be3118985b911144e534.webp","e6b597c12aa25fe4e8b508a74b490720.webp","ef1064ebb6ada2d31cc5062d9f54954e.webp"],
  "Cars and Machines":["2ea1f7ee762bbaaa434b56d33143590f.webp","45e6ac408e1e9f42402510fde2280f16.webp","94e578495834318443d01ed35a10c4cd.webp","9ab0877f074aba8ce3731db3a6936262.webp","a0ad65cccb395275961bcbf88b8e791d.webp","b7e5a70686675297535fa60b2dea90bf.webp","b93b751f4450db4e21ed19e493095301.webp"],
  "Combat Box":["76e706e5b8a5d2856e048b6e3f51bf92.webp"],
  "Home":["027b9604ec0a299f5ae4b6edd26c88b4.webp","0916f5e28e0a1edb3590341eb6dd5c2c.webp","1659fbdfb81da2192bf57b0d637e7928.webp","2ea1f7ee762bbaaa434b56d33143590f.webp","60a566a5a4395445cc3d781dbab4e536.webp","67c15c7a7ba0b7e2a3252cb7c0b6c6e6.webp","b5edc2802fd22f5e3d828898fd11e6f4.webp","d40fc533c4af7350b0ce95a3627f0658.webp","dcb69b8d3505bf2fbe6ff659aff682b4.webp"],
  "Humanoids":["45a7332f8783b13b3d7e2b3f9a834515.webp","6e9f6dcd80b82da583f490dd1d4070ce.webp","a5ed269a2fa97a70ddce2992aafbb6ba.webp","ccacc1b06bfe5fd19878ae0b81668eef.webp","d7e1caeaa9364bdcbfaaac0de6823d57.webp"],
  "Kesier Wire Raceway":["1659fbdfb81da2192bf57b0d637e7928.webp","20eb40783fd13313e90a08f66c0b7635.webp","41c365e0a36cc9a7204ba52e8c68204d.webp","713775a98ac36c0a6367270a12a24c25.webp","905d19c6b95c8f9960e0badb2f55b7db.webp","a7c13c2d2bd19eb90e68383b5a985ac4.webp","bc03775b72c8ffa7a74c2e5812b33ebd.webp","c92efdb0945b9126f716935c8128d95b.webp"],
  "Robotic Arms":["07a3486b8df22099776ca84ff37c188e.webp","2ed803397858d570e590a832d3365844.webp","95b3ce2f73b8bec877e0fcc27428e9aa.webp","9a1205816b57cf9e2ea83a3a711fbc88.webp"],
  "Sorcererearth":["43b4d985e231b4b733e280187b11bbf6.webp","565694279feb70b9b1dbea28f4c7b27b.webp","db2753fbabdbfd3b14d70b3f9725bee3.webp"]
};

export function generateStaticParams(){ return Object.keys(legacyPages).map(function(slug){return {slug};}); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const page=legacyPages[slug];
  return {title:page ? page.title + " · Legacy Portfolio · Gursimar Virk" : "Legacy Portfolio · Gursimar Virk"};
}

function isHeading(text:string){ return text.length < 55 && !/[.!?]$/.test(text) && !/^Twitch Link:/.test(text) && !/^https?:/.test(text); }

export default async function LegacyPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const page=legacyPages[slug];
  if(!page) notFound();
  const images=page.imageFolder ? gallery[page.imageFolder] || [] : [];
  const other=Object.entries(legacyPages).filter(function(entry){return entry[0]!==slug;});
  return <main className={styles.page}>
    <nav className="nav">
      <a className="brand" href="/">GURSIMAR VIRK</a>
      <div className="nav-links"><a href="/#work">Work</a><a href="/#projects">Projects</a><a href="/media">Media</a><a href="/#berkeley">Berkeley</a><a href="/#about">About</a><a href="/legacy/home">Legacy Archive</a><a href="/#contact">Contact</a></div>
    </nav>
    <div className="page-width">
      <section className={styles.hero}>
        <a className={styles.back} href="/">← BACK TO PORTFOLIO</a>
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        {page.intro && <p className={styles.intro}>{page.intro}</p>}
      </section>
      <div className={styles.content}>
        <section className={styles.main}>
          <div className={styles.copy}>
            {page.blocks.map(function(block,i){ return isHeading(block) ? <h2 className={styles.heading} key={i}>{block}</h2> : <p key={i}>{block}</p>; })}
          </div>
          {page.links && page.links.length>0 && <div className={styles.links}>{page.links.map(function(link){return <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label || "Open source"} ↗</a>;})}</div>}
          {page.embeds && page.embeds.length>0 && <div className={styles.embeds}><div><p className="eyebrow">ORIGINAL EMBEDS</p><h2>Documents, presentations & media</h2><p className={styles.intro}>These are the actual Google Drive / Docs / Slides viewers from the exported site, rebuilt as responsive in-page embeds.</p></div>{page.embeds.map(function(embed){return <LegacyEmbed embed={embed} key={embed.src}/>;})}</div>}
          {images.length>0 && <div className={styles.gallery}><div style={{gridColumn:"1 / -1"}}><p className="eyebrow">ORIGINAL IMAGE ARCHIVE</p><h2>Recovered project photography</h2></div>{images.map(function(file){return <figure key={file}><img src={"/images/" + page.imageFolder + "/" + file} alt={page.title + " archive image"} loading="lazy"/></figure>;})}</div>}
          <div className={styles.note}><strong>Migration note.</strong> This page preserves the writing and embedded material from the original Google Sites export. The surrounding portfolio is the polished redesign; this archive exists so none of the original work disappears.</div>
        </section>
        <aside className={styles.side}>
          <h2>Legacy pages</h2>
          {other.map(function(entry){return <a href={"/legacy/" + entry[0]} key={entry[0]}>{entry[1].title} ↗</a>;})}
        </aside>
      </div>
    </div>
  </main>;
}