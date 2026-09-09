import { content, typeLabel, typeStyle } from '../data/portfolio';

// eslint-disable-next-line react/prop-types
export default function TimelineView({ lang }) {
    const t = content[lang].timeline;
    return <section id="timeline" className="py-24"><div className="max-w-6xl mx-auto px-5"><div className="mb-12"><span className="section-num">{t.sectionNum} /</span><h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.title}</h2></div><div className="space-y-4">{t.items.map((item, i) => <div key={i} className="grid md:grid-cols-[180px_1fr] gap-4 group"><div className="flex md:flex-col items-start gap-2 md:pt-1"><span className="text-sm font-mono font-semibold text-primary whitespace-nowrap">{item.period}</span><span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${typeStyle[item.type]}`}>{typeLabel[lang][item.type]}</span></div><div className="bg-base-200/50 border border-base-300/50 rounded-2xl p-5 group-hover:border-primary/25 transition-colors duration-200"><h3 className="text-lg font-bold mb-0.5">{item.title}</h3><p className="text-primary text-sm font-medium mb-2">{item.subtitle}</p>{item.body && <p className="text-base-content/45 text-sm leading-relaxed">{item.body}</p>}</div></div>)}</div></div></section>;
}
