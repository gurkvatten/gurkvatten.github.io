import { useEffect, useState } from 'react';
import { FaBars, FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { content, EMAIL, GITHUB, LINKEDIN } from '../data/portfolio';

// eslint-disable-next-line react/prop-types
export default function Navbar({ lang, onToggleLang }) {
    const t = content[lang];
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'apex');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);
    useEffect(() => {
        const onScroll = () => { setScrolled(window.scrollY > 40); if (menuOpen) setMenuOpen(false); };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [menuOpen]);

    const toggleTheme = () => {
        const next = theme === 'apex' ? 'apex-light' : 'apex';
        setTheme(next);
        localStorage.setItem('theme', next);
    };
    const scrollTo = (id) => {
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
    };
    const navLinks = [
        { id: 'hero', label: t.nav.home }, { id: 'skills', label: t.nav.skills },
        { id: 'timeline', label: t.nav.timeline }, { id: 'news', label: t.nav.news }, { id: 'projekt', label: t.nav.project },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${scrolled ? 'bg-base-100/90 backdrop-blur-lg border-b border-base-300/50 shadow-lg shadow-black/20' : 'bg-transparent'}`}>
                <div className="max-w-6xl mx-auto px-5 h-full flex items-center justify-between">
                    <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
                        <span className="text-xl font-black tracking-tight text-primary group-hover:opacity-75 transition-opacity" style={{ fontFamily: "'Aldrich', sans-serif" }}>JK</span>
                        <span className="hidden sm:block text-xs text-base-content/35 font-semibold tracking-widest uppercase" style={{ fontFamily: "'Aldrich', sans-serif" }}>Portfolio</span>
                    </button>
                    <ul className="hidden md:flex items-center gap-0.5">
                        {navLinks.map(({ id, label }) => <li key={id}><button onClick={() => scrollTo(id)} className="px-3 py-1.5 text-sm font-medium text-base-content/55 hover:text-primary transition-colors duration-150 rounded-lg hover:bg-base-200/50">{label}</button></li>)}
                    </ul>
                    <div className="flex items-center gap-1">
                        <button onClick={toggleTheme} className="btn btn-ghost btn-sm btn-square" aria-label={t.nav.themeAria}>{theme === 'apex' ? <FaSun size={15} /> : <FaMoon size={15} />}</button>
                        <button onClick={onToggleLang} className="btn btn-ghost btn-sm font-bold text-xs tracking-widest" aria-label={t.nav.langAria}>{t.nav.langLabel}</button>
                        <button className="md:hidden btn btn-ghost btn-sm btn-square" onClick={() => setMenuOpen(true)} aria-label={t.nav.menuAria}><FaBars size={18} /></button>
                    </div>
                </div>
            </nav>
            {menuOpen && <div className="fixed inset-0 z-50 bg-base-100 flex flex-col p-6 md:hidden">
                <div className="flex items-center justify-between mb-10"><span className="text-2xl font-black text-primary" style={{ fontFamily: "'Aldrich', sans-serif" }}>JK</span><button onClick={() => setMenuOpen(false)} className="btn btn-ghost btn-square"><FaTimes size={20} /></button></div>
                <ul className="flex flex-col gap-1">{navLinks.map(({ id, label }) => <li key={id}><button onClick={() => scrollTo(id)} className="w-full text-left px-4 py-4 text-2xl font-bold text-base-content/75 hover:text-primary hover:bg-base-200/60 rounded-xl transition-colors duration-150">{label}</button></li>)}</ul>
                <div className="mt-auto flex items-center gap-2 pt-8 border-t border-base-300/50"><a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-square"><FaGithub size={20} /></a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-square"><FaLinkedin size={20} /></a><a href={EMAIL} className="btn btn-ghost btn-square"><FaEnvelope size={20} /></a></div>
            </div>}
        </>
    );
}
