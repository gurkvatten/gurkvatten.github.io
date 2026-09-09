import { content } from '../data/portfolio';

// eslint-disable-next-line react/prop-types
export default function NewsView({ lang }) {
    const t = content[lang].news;
    return <section id="news" className="py-24 bg-base-200/30"><div className="max-w-6xl mx-auto px-5"><div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"><div><span className="section-num">{t.sectionNum} /</span><h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.titleLead} <span className="text-primary">{t.titleHighlight}</span></h2></div><p className="text-base-content/25 text-xs font-mono shrink-0">{t.updated}</p></div><div className="grid sm:grid-cols-2 gap-4">{t.updates.map((item, i) => <div key={i} className="bg-base-100 border border-base-300/50 rounded-2xl p-5 hover:border-primary/25 transition-colors duration-200"><div className="flex items-start justify-between gap-4 mb-3"><h3 className="font-bold text-base leading-snug">{item.title}</h3><span className="shrink-0 text-xs font-mono text-primary bg-primary/8 px-2 py-0.5 rounded-full border border-primary/20">{item.date}</span></div><p className="text-base-content/45 text-sm leading-relaxed">{item.body}</p></div>)}</div></div></section>;
}
