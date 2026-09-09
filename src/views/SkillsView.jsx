import { content, skillsData, catColors } from '../data/portfolio';

// eslint-disable-next-line react/prop-types
export default function SkillsView({ lang }) {
    const t = content[lang].skills;
    return <section id="skills" className="py-24 bg-base-200/30"><div className="max-w-6xl mx-auto px-5"><div className="mb-12"><span className="section-num">{t.sectionNum} / {t.titleLead}</span><h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.titleHighlight}</h2><p className="text-base-content/45 mt-3 text-lg">{t.body}</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{Object.entries(skillsData).map(([cat, skills]) => <div key={cat} className="bg-base-100 border border-base-300/50 rounded-2xl p-5"><h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${catColors[cat].head}`}>{t.cats[cat]}</h3><div className="flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className={`text-xs font-medium px-2.5 py-1 rounded-full ${catColors[cat].pill}`}>{skill}</span>)}</div></div>)}</div></div></section>;
}
