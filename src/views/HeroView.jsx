import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import GradientBackground from '../components/GradientBackground';
import { content, EMAIL, GITHUB, LINKEDIN, profilBild } from '../data/portfolio';

// eslint-disable-next-line react/prop-types
export default function HeroView({ lang }) {
    const t = content[lang].hero;
    return <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.12]" aria-hidden="true"><GradientBackground /></div>
        <div className="max-w-6xl mx-auto px-5 w-full pt-20 pb-16"><div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div><div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold mb-8 tracking-wide"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{t.available}</div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-base-content/35 mb-3">01 / {t.greeting}</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6"><span className="block">{t.firstName}</span><span className="block text-primary">{t.lastName}</span></h1>
                <p className="text-xl md:text-2xl font-semibold text-base-content/40 mb-5 tracking-wide">{t.titleRole}</p><p className="text-base-content/55 leading-relaxed mb-10 max-w-lg text-[0.95rem]">{t.body}</p>
                <div className="flex flex-wrap gap-3"><a href={EMAIL} className="btn btn-primary gap-2"><FaEnvelope size={13} /> {t.ctaContact}</a><a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn btn-outline gap-2"><FaGithub size={13} /> {t.ctaGithub}</a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-outline gap-2"><FaLinkedin size={13} /> {t.ctaLinkedin}</a></div>
            </div>
            <div className="flex justify-center md:justify-end order-first md:order-last"><div className="relative"><div className="absolute -inset-6 rounded-3xl opacity-15 blur-2xl" style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 65%)' }} /><div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-base-300/60"><img src={profilBild} alt="Johan Karlsson" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" /></div></div></div>
        </div></div>
    </section>;
}
