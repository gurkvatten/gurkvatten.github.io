import { useEffect, useState } from 'react';
import AppFooter from './components/AppFooter';
import Navbar from './components/Navbar';
import HeroView from './views/HeroView';
import NewsView from './views/NewsView';
import ProjectView from './views/ProjectView';
import SkillsView from './views/SkillsView';
import TimelineView from './views/TimelineView';

export default function App() {
    const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'sv');

    const toggleLang = () => {
        const next = lang === 'sv' ? 'en' : 'sv';
        setLang(next);
        localStorage.setItem('lang', next);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'apex';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar lang={lang} onToggleLang={toggleLang} />
            <main className="flex-1">
                <HeroView lang={lang} />
                <SkillsView lang={lang} />
                <TimelineView lang={lang} />
                <NewsView lang={lang} />
                <ProjectView lang={lang} />
            </main>
            <AppFooter lang={lang} />
        </div>
    );
}
