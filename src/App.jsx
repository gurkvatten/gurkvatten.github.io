import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilBild from './assets/johan-profil.jpeg';
import garagisteIcon from './assets/garagisteicon1.png';
import screenshotLiveRace from './assets/screenshot-liverace.png';
import screenshotTeamDashboard from './assets/screenshot-teamdashboard.png';
import screenshotTeamSelection from './assets/screenshot-teamselection.png';
import screenshotUpgrades from './assets/screenshot-upgrades.png';
import {
    FaEnvelope, FaGithub, FaLinkedin, FaSun, FaMoon,
    FaTimes, FaBars, FaCar, FaTrophy, FaChartLine,
    FaGamepad, FaApple,
} from 'react-icons/fa';

const GITHUB     = 'https://github.com/gurkvatten';
const LINKEDIN   = 'https://www.linkedin.com/in/johan-karlsson-871537223';
const EMAIL      = 'mailto:johanwilhelmkarlsson@gmail.com';
const TESTFLIGHT = 'https://testflight.apple.com/join/b9X5jhaj';

// ── Content ──────────────────────────────────────────────
const content = {
    sv: {
        nav: {
            home: 'Hem', skills: 'Färdigheter', timeline: 'Erfarenhet',
            news: 'Nyheter', project: 'Projekt',
            themeAria: 'Växla tema', langAria: 'Byt språk till engelska',
            langLabel: 'EN', menuAria: 'Öppna meny',
        },
        hero: {
            greeting: 'Hej, jag är',
            firstName: 'Johan', lastName: 'Karlsson',
            titleRole: 'App Utvecklare',
            available: 'Öppen för möjligheter',
            body: 'Jag är en apputvecklare specialiserad på Java och mobilutveckling i Swift och Kotlin. Jag har erfarenhet från fullstack-projekt och frontend med Flutter, och drivs av att skapa rena och funktionella lösningar.',
            ctaContact: 'Kontakta Mig', ctaGithub: 'GitHub', ctaLinkedin: 'LinkedIn',
        },
        skills: {
            sectionNum: '02', titleLead: 'Mina', titleHighlight: 'Färdigheter',
            body: 'Från mobil till webb – jag bygger i hela stacken.',
            cats: { mobile: 'Mobil', web: 'Webb', backend: 'Backend', tools: 'Verktyg' },
        },
        timeline: {
            sectionNum: '03', title: 'Erfarenhet & Utbildning',
            items: [
                { period: '2025 – Idag',   title: 'Yrkeshögskola',        subtitle: 'IT Högskolan – Javautvecklare',                       body: 'Just nu pluggar jag Java.',                                   type: 'education' },
                { period: '2024',          title: 'Frontend Utvecklare',  subtitle: 'Eventstaden',                                          body: 'Jobbade med frontendkomponenter i Flutter.',                  type: 'work' },
                { period: '2022 – 2024',   title: 'Yrkeshögskoleexamen', subtitle: 'Folkuniversitetet – Mobilapplikationsutvecklare',       body: 'Fokus på Swift, Kotlin och lite backend.',                   type: 'education' },
                { period: '2022',          title: 'Karriärstart',         subtitle: 'Startade karriären inom tech!',                         body: '',                                                           type: 'milestone' },
            ],
        },
        news: {
            sectionNum: '04', titleLead: 'Nyheter &', titleHighlight: 'vad jag gör nu',
            updated: 'Senast uppdaterad: Mars 2026',
            updates: [
                {date: 'Mar 2026', title: 'Javaverktyg och byggmiljöer klar',       body: 'Färdig med kursen Javaverktyg och byggmiljöer.' },
                { date: 'Jan 2026', title: 'Allmänt TestFlight-test på gång',       body: 'Min app är redo att släppas till allmänna TestFlight-testare. Nu handlar det om att samla in feedback och finslipa upplevelsen.' },
                { date: 'Jan 2026', title: 'Utveckling mot databaser avslutad',      body: 'Avslutade kursen Utveckling mot databaser och har byggt upp en stabil grund i databaser och SQL.' },
                { date: 'Nov 2025', title: 'Javautveckling klar',                    body: 'Jag har avslutat kursen Javautveckling och stärkts i allt från OOP till strukturerad problemlösning.' },
                { date: 'Okt 2025', title: 'Bygger Racing-manager i SwiftUI',        body: 'Jag implementerar ett system för biluppgraderingar och förarhantering. Fokus på mer interaktivt UI.' },
            ],
        },
        project: {
            sectionNum: '05', label: 'Utvalda Projekt',
            titleLead: 'Garagiste', titleHighlight: 'Racing Manager',
            intro: 'Har du vad som krävs för att leda ett stall till toppen? Ta rollen som Team Principal i detta strategiska managerspel. Du bestämmer taktiken, du bygger bilen, och du tar konsekvenserna.',
            ctaPrimary: 'Gå med i TestFlight', betaLabel: 'Beta v1.0', betaTip: 'Spelet är i aktiv beta-fas',
            features: [
                { icon: FaCar,        title: 'Intensiva Race',       description: 'Följ loppen varv för varv. Dina förare reagerar på omgivningen, gör vågade omkörningar och kämpar om varje position.' },
                { icon: FaChartLine,  title: 'Strategiska Beslut',   description: 'När börjar däcken ta slut? Är det dags för en undercut? Dina beslut från depån avgör om det blir vinst eller förlust.' },
                { icon: FaTrophy,     title: 'Bygg ditt arv',        description: 'Starta från botten och arbeta dig uppåt. Investera prispengar i bilen, anställ bättre förare och ta ditt stall till toppen.' },
                { icon: FaGamepad,    title: 'Oförutsägbart',        description: 'Precis som i verkligheten kan allt hända. Väderomslag, krascher och Safety Cars kan vända strategin.' },
            ],
            tags: ['Manager Game', 'Strategy', 'Racing', 'iOS Native'],
            screenshotsLead: 'En titt in i', screenshotsHighlight: 'depån',
            screenshots: [
                { title: 'Live Race',        description: 'Följ spänningen i realtid från depån',     src: screenshotLiveRace },
                { title: 'Team Dashboard',   description: 'Håll koll på stallets status och resultat', src: screenshotTeamDashboard },
                { title: 'Team Selection',   description: 'Välj förare och strategi inför helgen',     src: screenshotTeamSelection },
                { title: 'Upgrades',         description: 'Utveckla bilen och maximera prestanda',     src: screenshotUpgrades },
            ],
            betaTitle: 'Redo att testa?',
            betaBody: 'Jag söker testpiloter som vill forma spelets framtid. Ladda ner beta-versionen via TestFlight och ge din feedback direkt i appen.',
            betaLink: 'Gå till TestFlight inbjudan →',
        },
        footer: {
            role: 'Utvecklare & Designer',
            copyright: '© 2025 Johan Karlsson. Byggd med DaisyUI & Tailwind CSS.',
        },
    },
    en: {
        nav: {
            home: 'Home', skills: 'Skills', timeline: 'Experience',
            news: 'News', project: 'Project',
            themeAria: 'Toggle theme', langAria: 'Byt språk till svenska',
            langLabel: 'SV', menuAria: 'Open menu',
        },
        hero: {
            greeting: "Hi, I'm",
            firstName: 'Johan', lastName: 'Karlsson',
            titleRole: 'App Developer',
            available: 'Open to opportunities',
            body: "I'm an app developer specializing in Java and mobile development with Swift and Kotlin. I have experience in both fullstack projects and frontend work with Flutter, and I enjoy building clean, functional solutions.",
            ctaContact: 'Contact Me', ctaGithub: 'GitHub', ctaLinkedin: 'LinkedIn',
        },
        skills: {
            sectionNum: '02', titleLead: 'My', titleHighlight: 'Skills',
            body: 'From mobile to web — I build across the full stack.',
            cats: { mobile: 'Mobile', web: 'Web', backend: 'Backend', tools: 'Tools' },
        },
        timeline: {
            sectionNum: '03', title: 'Experience & Education',
            items: [
                { period: '2025 – Present', title: 'Vocational College',   subtitle: 'IT Högskolan – Java Developer',                   body: 'Currently studying Java.',                                      type: 'education' },
                { period: '2024',           title: 'Frontend Developer',   subtitle: 'Eventstaden',                                     body: 'Worked on frontend components in Flutter.',                     type: 'work' },
                { period: '2022 – 2024',    title: 'Vocational Degree',    subtitle: 'Folkuniversitetet – Mobile App Developer',        body: 'Focus on Swift, Kotlin, and some backend.',                    type: 'education' },
                { period: '2022',           title: 'Career Start',         subtitle: 'Started my career in tech!',                      body: '',                                                              type: 'milestone' },
            ],
        },
        news: {
            sectionNum: '04', titleLead: 'News &', titleHighlight: "what I'm working on",
            updated: 'Last updated: Mars 2026',
            updates: [
                {date: 'Mar 2026', title: 'Javaverktyg och byggmiljöer done',       body: 'Im done with the course Javaverktyg och byggmiljöer.' },
                { date: 'Jan 2026', title: 'Public TestFlight testing soon',       body: "My app is ready for a public TestFlight release. Now it's about collecting feedback and polishing the experience." },
                { date: 'Jan 2026', title: 'Database Development completed',        body: 'Finished the Database Development course and built a solid foundation in databases and SQL.' },
                { date: 'Nov 2025', title: 'Java development completed',            body: 'Completed the Java Development course and strengthened everything from OOP to structured problem solving.' },
                { date: 'Oct 2025', title: 'Building a racing manager in SwiftUI',  body: "Implementing a system for car upgrades and driver management, focusing on clearer and more interactive UI." },
            ],
        },
        project: {
            sectionNum: '05', label: 'Featured Project',
            titleLead: 'Garagiste', titleHighlight: 'Racing Manager',
            intro: 'Do you have what it takes to lead a team to the top? Take the role of Team Principal in this strategic manager game. You set the tactics, you build the car, and you live with the results.',
            ctaPrimary: 'Join TestFlight', betaLabel: 'Beta v1.0', betaTip: 'The game is in active beta',
            features: [
                { icon: FaCar,       title: 'Intense Races',          description: 'Follow races lap by lap. Your drivers react to the surroundings, make bold overtakes, and fight for every position.' },
                { icon: FaChartLine, title: 'Strategic Decisions',    description: 'When do the tires fade? Is it time for an undercut? Your pit wall calls decide wins and losses.' },
                { icon: FaTrophy,    title: 'Build Your Legacy',      description: 'Start from the bottom and rise up. Reinvest prize money, hire better drivers, and take your team to a championship.' },
                { icon: FaGamepad,   title: 'Unpredictable',          description: 'Just like real life, anything can happen. Weather swings, crashes, and safety cars can flip the strategy.' },
            ],
            tags: ['Manager Game', 'Strategy', 'Racing', 'iOS Native'],
            screenshotsLead: 'A peek into the', screenshotsHighlight: 'pit',
            screenshots: [
                { title: 'Live Race',       description: 'Follow the action live from the pit wall',      src: screenshotLiveRace },
                { title: 'Team Dashboard',  description: "Track your team's status and results",          src: screenshotTeamDashboard },
                { title: 'Team Selection',  description: 'Choose drivers and strategy for the weekend',   src: screenshotTeamSelection },
                { title: 'Upgrades',        description: 'Develop the car and maximize performance',      src: screenshotUpgrades },
            ],
            betaTitle: 'Ready to test?',
            betaBody: "I'm looking for beta testers who want to shape the game's future. Download the beta via TestFlight and send feedback directly in the app.",
            betaLink: 'Go to the TestFlight invite →',
        },
        footer: {
            role: 'Developer & Designer',
            copyright: '© 2025 Johan Karlsson. Built with DaisyUI & Tailwind CSS.',
        },
    },
};

// ── Skills data ───────────────────────────────────────────
const skillsData = {
    mobile:  ['Swift', 'SwiftUI', 'Kotlin', 'Flutter', 'iOS', 'Android'],
    web:     ['React', 'Tailwind CSS', 'Node.js', 'HTML/CSS'],
    backend: ['Java', 'SQL', 'REST APIs'],
    tools:   ['Docker', 'CI/CD', 'Git', 'Xcode', 'Android Studio'],
};

const catColors = {
    mobile:  { pill: 'bg-primary/10 text-primary border border-primary/25',              head: 'text-primary' },
    web:     { pill: 'bg-secondary/10 text-secondary border border-secondary/25',         head: 'text-secondary' },
    backend: { pill: 'bg-accent/10 text-accent border border-accent/25',                  head: 'text-accent' },
    tools:   { pill: 'bg-base-content/5 text-base-content/55 border border-base-content/15', head: 'text-base-content/45' },
};

const typeStyle = {
    education: 'bg-primary/10 text-primary border border-primary/30',
    work:      'bg-secondary/10 text-secondary border border-secondary/30',
    milestone: 'bg-accent/10 text-accent border border-accent/30',
};

const typeLabel = {
    sv: { education: 'Utbildning', work: 'Arbete',     milestone: 'Milstolpe' },
    en: { education: 'Education',  work: 'Work',       milestone: 'Milestone' },
};

// ── Navbar ────────────────────────────────────────────────
// eslint-disable-next-line react/prop-types
const Navbar = ({ lang, onToggleLang }) => {
    const t = content[lang];
    const [theme, setTheme]       = useState(() => localStorage.getItem('theme') || 'apex');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            if (menuOpen) setMenuOpen(false);
        };
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
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const navLinks = [
        { id: 'hero',     label: t.nav.home },
        { id: 'skills',   label: t.nav.skills },
        { id: 'timeline', label: t.nav.timeline },
        { id: 'news',     label: t.nav.news },
        { id: 'projekt',  label: t.nav.project },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
                scrolled
                    ? 'bg-base-100/90 backdrop-blur-lg border-b border-base-300/50 shadow-lg shadow-black/20'
                    : 'bg-transparent'
            }`}>
                <div className="max-w-6xl mx-auto px-5 h-full flex items-center justify-between">

                    {/* Logo */}
                    <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
                        <span className="text-xl font-black tracking-tight text-primary group-hover:opacity-75 transition-opacity" style={{ fontFamily: "'Aldrich', sans-serif" }}>JK</span>
                        <span className="hidden sm:block text-xs text-base-content/35 font-semibold tracking-widest uppercase" style={{ fontFamily: "'Aldrich', sans-serif" }}>Portfolio</span>
                    </button>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-0.5">
                        {navLinks.map(({ id, label }) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollTo(id)}
                                    className="px-3 py-1.5 text-sm font-medium text-base-content/55 hover:text-primary transition-colors duration-150 rounded-lg hover:bg-base-200/50"
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Controls */}
                    <div className="flex items-center gap-1">
                        <button onClick={toggleTheme} className="btn btn-ghost btn-sm btn-square" aria-label={t.nav.themeAria}>
                            {theme === 'apex' ? <FaSun size={15} /> : <FaMoon size={15} />}
                        </button>
                        <button onClick={onToggleLang} className="btn btn-ghost btn-sm font-bold text-xs tracking-widest" aria-label={t.nav.langAria}>
                            {t.nav.langLabel}
                        </button>
                        <button className="md:hidden btn btn-ghost btn-sm btn-square" onClick={() => setMenuOpen(true)} aria-label={t.nav.menuAria}>
                            <FaBars size={18} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile fullscreen overlay */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-base-100 flex flex-col p-6 md:hidden">
                    <div className="flex items-center justify-between mb-10">
                        <span className="text-2xl font-black text-primary" style={{ fontFamily: "'Aldrich', sans-serif" }}>JK</span>
                        <button onClick={() => setMenuOpen(false)} className="btn btn-ghost btn-square">
                            <FaTimes size={20} />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-1">
                        {navLinks.map(({ id, label }) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollTo(id)}
                                    className="w-full text-left px-4 py-4 text-2xl font-bold text-base-content/75 hover:text-primary hover:bg-base-200/60 rounded-xl transition-colors duration-150"
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto flex items-center gap-2 pt-8 border-t border-base-300/50">
                        <a href={GITHUB}   target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-square"><FaGithub size={20} /></a>
                        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-square"><FaLinkedin size={20} /></a>
                        <a href={EMAIL}    className="btn btn-ghost btn-square"><FaEnvelope size={20} /></a>
                    </div>
                </div>
            )}
        </>
    );
};

// ── Gradient Background ───────────────────────────────────
function GradientBackground({ className = '', style = {}, transition, ...props }) {
    const t = transition ?? { duration: 6, ease: 'easeInOut', repeat: Infinity };
    return (
        <motion.div
            className={`size-full ${className}`}
            style={{
                background: 'linear-gradient(135deg, oklch(55% 0.32 305), oklch(45% 0.20 260), oklch(65% 0.28 230), oklch(55% 0.32 305))',
                backgroundSize: '400% 400%',
                ...style,
            }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={t}
            {...props}
        />
    );
}

// ── Hero ──────────────────────────────────────────────────
const HeroSection = ({ lang }) => {
    const t = content[lang].hero;
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.12]" aria-hidden="true">
                <GradientBackground />
            </div>

            <div className="max-w-6xl mx-auto px-5 w-full pt-20 pb-16">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text */}
                    <div>
                        {/* Available badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold mb-8 tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {t.available}
                        </div>

                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-base-content/35 mb-3">
                            01 / {t.greeting}
                        </p>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6">
                            <span className="block">{t.firstName}</span>
                            <span className="block text-primary">{t.lastName}</span>
                        </h1>

                        <p className="text-xl md:text-2xl font-semibold text-base-content/40 mb-5 tracking-wide">
                            {t.titleRole}
                        </p>

                        <p className="text-base-content/55 leading-relaxed mb-10 max-w-lg text-[0.95rem]">
                            {t.body}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a href={EMAIL} className="btn btn-primary gap-2">
                                <FaEnvelope size={13} /> {t.ctaContact}
                            </a>
                            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn btn-outline gap-2">
                                <FaGithub size={13} /> {t.ctaGithub}
                            </a>
                            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-outline gap-2">
                                <FaLinkedin size={13} /> {t.ctaLinkedin}
                            </a>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="flex justify-center md:justify-end order-first md:order-last">
                        <div className="relative">
                            <div className="absolute -inset-6 rounded-3xl opacity-15 blur-2xl"
                                style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 65%)' }} />
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-base-300/60">
                                <img
                                    src={profilBild}
                                    alt="Johan Karlsson"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ── Skills ────────────────────────────────────────────────
const SkillsSection = ({ lang }) => {
    const t = content[lang].skills;
    return (
        <section id="skills" className="py-24 bg-base-200/30">
            <div className="max-w-6xl mx-auto px-5">
                <div className="mb-12">
                    <span className="section-num">{t.sectionNum} / {t.titleLead}</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.titleHighlight}</h2>
                    <p className="text-base-content/45 mt-3 text-lg">{t.body}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(skillsData).map(([cat, skills]) => (
                        <div key={cat} className="bg-base-100 border border-base-300/50 rounded-2xl p-5">
                            <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${catColors[cat].head}`}>
                                {t.cats[cat]}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => (
                                    <span key={skill} className={`text-xs font-medium px-2.5 py-1 rounded-full ${catColors[cat].pill}`}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ── Timeline ──────────────────────────────────────────────
const TimelineSection = ({ lang }) => {
    const t = content[lang].timeline;
    return (
        <section id="timeline" className="py-24">
            <div className="max-w-6xl mx-auto px-5">
                <div className="mb-12">
                    <span className="section-num">{t.sectionNum} /</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.title}</h2>
                </div>

                <div className="space-y-4">
                    {t.items.map((item, i) => (
                        <div key={i} className="grid md:grid-cols-[180px_1fr] gap-4 group">
                            {/* Date + type badge */}
                            <div className="flex md:flex-col items-start gap-2 md:pt-1">
                                <span className="text-sm font-mono font-semibold text-primary whitespace-nowrap">{item.period}</span>
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${typeStyle[item.type]}`}>
                                    {typeLabel[lang][item.type]}
                                </span>
                            </div>
                            {/* Card */}
                            <div className="bg-base-200/50 border border-base-300/50 rounded-2xl p-5 group-hover:border-primary/25 transition-colors duration-200">
                                <h3 className="text-lg font-bold mb-0.5">{item.title}</h3>
                                <p className="text-primary text-sm font-medium mb-2">{item.subtitle}</p>
                                {item.body && (
                                    <p className="text-base-content/45 text-sm leading-relaxed">{item.body}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ── News ──────────────────────────────────────────────────
const NewsSection = ({ lang }) => {
    const t = content[lang].news;
    return (
        <section id="news" className="py-24 bg-base-200/30">
            <div className="max-w-6xl mx-auto px-5">
                <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                    <div>
                        <span className="section-num">{t.sectionNum} /</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                            {t.titleLead} <span className="text-primary">{t.titleHighlight}</span>
                        </h2>
                    </div>
                    <p className="text-base-content/25 text-xs font-mono shrink-0">{t.updated}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {t.updates.map((item, i) => (
                        <div key={i} className="bg-base-100 border border-base-300/50 rounded-2xl p-5 hover:border-primary/25 transition-colors duration-200">
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <h3 className="font-bold text-base leading-snug">{item.title}</h3>
                                <span className="shrink-0 text-xs font-mono text-primary bg-primary/8 px-2 py-0.5 rounded-full border border-primary/20">
                                    {item.date}
                                </span>
                            </div>
                            <p className="text-base-content/45 text-sm leading-relaxed">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ── Project ───────────────────────────────────────────────
const ProjektSection = ({ lang }) => {
    const p = content[lang].project;
    return (
        <section id="projekt" className="py-24">
            <div className="max-w-6xl mx-auto px-5">
                <div className="mb-12">
                    <span className="section-num">{p.sectionNum} / {p.label}</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                        {p.titleLead} <span className="text-primary">{p.titleHighlight}</span>
                    </h2>
                </div>

                {/* Main project card */}
                <div className="rounded-3xl overflow-hidden border border-base-300/50 bg-base-200/30">
                    {/* Red accent top bar */}
                    <div className="h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent" />

                    <div className="p-6 md:p-10">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row gap-6 mb-10">
                            {/* App icon */}
                            <div className="relative flex-shrink-0">
                                <div className="absolute -inset-3 rounded-2xl opacity-20 blur-xl"
                                    style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }} />
                                <img
                                    src={garagisteIcon}
                                    alt="Garagiste Racing Manager"
                                    className="relative w-24 h-24 rounded-2xl shadow-2xl"
                                />
                            </div>
                            {/* Info */}
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <h3 className="text-2xl font-black">{p.titleLead} {p.titleHighlight}</h3>
                                    <span className="badge badge-primary text-xs font-bold">{p.betaLabel}</span>
                                </div>
                                <p className="text-base-content/55 leading-relaxed mb-4 max-w-2xl text-sm">{p.intro}</p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {p.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-base-300/60 text-base-content/50 border border-base-content/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={TESTFLIGHT} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm gap-2">
                                    <FaApple size={13} /> {p.ctaPrimary}
                                </a>
                            </div>
                        </div>

                        {/* Feature grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
                            {p.features.map((f, i) => (
                                <div key={i} className="bg-base-100/50 border border-base-300/40 rounded-2xl p-4">
                                    <f.icon className="text-primary text-xl mb-3" />
                                    <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                                    <p className="text-base-content/40 text-xs leading-relaxed">{f.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Screenshots */}
                        <div>
                            <h3 className="text-sm font-bold text-base-content/45 mb-6 uppercase tracking-widest">
                                {p.screenshotsLead} <span className="text-primary">{p.screenshotsHighlight}</span>
                            </h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {p.screenshots.map((shot, i) => (
                                    <div key={i} className="flex flex-col items-center gap-3">
                                        <div className="mockup-phone border-base-300/60 scale-90 origin-top">
                                            <div className="camera"></div>
                                            <div className="display">
                                                <div className="artboard artboard-demo phone-1 bg-base-300 overflow-hidden">
                                                    <img src={shot.src} alt={shot.title} className="w-full h-full object-cover" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-bold text-base-content/55">{shot.title}</p>
                                            <p className="text-xs text-base-content/30 mt-0.5">{shot.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Beta CTA */}
                        <div className="mt-10 text-center bg-base-100/40 border border-primary/15 rounded-2xl p-6">
                            <h4 className="text-xl font-bold mb-2">{p.betaTitle}</h4>
                            <p className="text-base-content/45 text-sm mb-4 max-w-md mx-auto leading-relaxed">{p.betaBody}</p>
                            <a href={TESTFLIGHT} target="_blank" rel="noopener noreferrer"
                                className="text-primary font-bold text-sm hover:opacity-70 transition-opacity duration-150">
                                {p.betaLink}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ── Footer ────────────────────────────────────────────────
const AppFooter = ({ lang }) => {
    const t = content[lang].footer;
    return (
        <footer className="border-t border-base-300/40 py-10">
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <div>
                        <p className="text-lg font-black tracking-tight">
                            <span className="text-primary">Johan</span> Karlsson
                        </p>
                        <p className="text-base-content/35 text-sm">{t.role}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <a href={GITHUB}   target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm btn-square" aria-label="GitHub"><FaGithub size={17} /></a>
                        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm btn-square" aria-label="LinkedIn"><FaLinkedin size={17} /></a>
                        <a href={EMAIL}    className="btn btn-ghost btn-sm btn-square" aria-label="Email"><FaEnvelope size={17} /></a>
                    </div>
                    <p className="text-base-content/20 text-xs">{t.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

// ── App ───────────────────────────────────────────────────
const App = () => {
    const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'sv');

    const toggleLang = () => {
        const next = lang === 'sv' ? 'en' : 'sv';
        setLang(next);
        localStorage.setItem('lang', next);
    };

    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'apex';
        document.documentElement.setAttribute('data-theme', saved);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar lang={lang} onToggleLang={toggleLang} />
            <main className="flex-1">
                <HeroSection lang={lang} />
                <SkillsSection lang={lang} />
                <TimelineSection lang={lang} />
                <NewsSection lang={lang} />
                <ProjektSection lang={lang} />
            </main>
            <AppFooter lang={lang} />
        </div>
    );
};

export default App;
