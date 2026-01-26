import { useState, useEffect } from 'react';
import profilBild from './assets/johan-profil.jpeg';
import garagisteIcon from './assets/garagisteicon1.png';
import screenshotLiveRace from './assets/screenshot-liverace.png';
import screenshotTeamDashboard from './assets/screenshot-teamdashboard.png';
import screenshotTeamSelection from './assets/screenshot-teamselection.png';
import screenshotUpgrades from './assets/screenshot-upgrades.png';
import { FaEnvelope, FaGithub, FaLinkedin, FaSun, FaMoon, FaTimes, FaBars, FaCar, FaTrophy, FaChartLine, FaGamepad, FaApple } from "react-icons/fa";
// Landing page sections with iconography.

const content = {
    sv: {
        nav: {
            home: "Hem",
            skills: "Färdigheter",
            timeline: "Erfarenhet",
            news: "Nyheter",
            project: "Projekt",
            themeAria: "Växla tema",
            langAria: "Byt språk till engelska",
            langLabel: "EN",
            menuAria: "Öppna meny",
        },
        hero: {
            firstName: "Johan",
            lastName: "Karlsson",
            titleLead: "Hej jag är",
            titleRole: "Utvecklare",
            body: "Jag är en apputvecklare specialiserad på Java och mobilutveckling i Swift och Kotlin. Jag har erfarenhet från både fullstack-projekt och frontend-arbete med Flutter, och jag drivs av att skapa rena och funktionella lösningar.",
            ctaContact: "Kontakta Mig",
            ctaGithub: "GitHub",
            ctaLinkedin: "LinkedIn",
        },
        skills: {
            titleLead: "Mina",
            titleHighlight: "Färdigheter",
            body: "Jag använder gärna både design- och kodverktyg för att ta fram applikationer.",
        },
        timeline: {
            titleLead: "Erfarenhet &",
            titleHighlight: "Utbildning",
            items: [
                {
                    period: "2025 - Idag",
                    title: "Yrkeshögskola",
                    subtitle: "IT högskolan Javautvecklare",
                    body: "Just nu pluggar jag Java.",
                },
                {
                    period: "2024",
                    title: "Frontend utvecklare",
                    subtitle: "Eventstaden",
                    body: "Jobbade med frontendkomponenter i Flutter.",
                },
                {
                    period: "2022 - 2024",
                    title: "Yrkeshögskoleexamen",
                    subtitle: "Folkuniversitetet Mobilapplikationsutvecklare",
                    body: "Fokus på Swift, Kotlin och lite backend.",
                },
                {
                    period: "2022",
                    title: "Karriärstart",
                    subtitle: "Startade karriären inom tech!",
                },
            ],
        },
        news: {
            titleLead: "Nyheter &",
            titleHighlight: "vad jag gör nu",
            updated: "Senast uppdaterad: Januari 2026",
            updates: [
                {
                    date: "Jan 2026",
                    title: "Allmänt TestFlight-test på gång",
                    body: "Min app är redo att släppas till allmänna TestFlight-testare. Nu handlar det om att samla in feedback och finslipa upplevelsen.",
                },
                {
                    date: "Jan 2026",
                    title: "Utveckling mot databaser avslutad",
                    body: "Avslutade kursen Utveckling mot databaser och har byggt upp en stabil grund i databaser och SQL.",
                },
                {
                    date: "Nov 2025",
                    title: "Javautveckling klar",
                    body: "Jag har avslutat kursen Javautveckling och stärkts i allt från OOP till strukturerad problemlösning.",
                },
                {
                    date: "Okt 2025",
                    title: "Bygger Racing-manager i SwiftUI",
                    body: "Jag implementerar ett system för biluppgraderingar och förarhantering. Fokus ligger på att göra UI:t mer interaktivt och lättläst.",
                },
            ],
        },
        project: {
            titleLead: "Garagiste",
            titleHighlight: "F1 Manager",
            intro: "Har du vad som krävs för att leda ett stall till toppen? Ta rollen som Team Principal i detta strategiska managerspel. Du bestämmer taktiken, du bygger bilen, och du tar konsekvenserna.",
            ctaPrimary: "Gå med i TestFlight",
            betaLabel: "🚧 Beta v1.0",
            betaTip: "Spelet är i aktiv beta-fas",
            features: [
                {
                    title: "Intensiva Race",
                    description: "Följ loppen varv för varv. Dina förare reagerar på omgivningen, gör vågade omkörningar och kämpar om varje position.",
                },
                {
                    title: "Strategiska Beslut",
                    description: "När börjar däcken ta slut? Är det dags för en undercut? Dina beslut från depån avgör om det blir vinst eller förlust.",
                },
                {
                    title: "Bygg ditt arv",
                    description: "Starta från botten och arbeta dig uppåt. Investera prispengar i bilen, anställ bättre förare och ta ditt stall till mästerskapstiteln.",
                },
                {
                    title: "Oförutsägbart",
                    description: "Precis som i verkligheten kan allt hända. Väderomslag, krascher och Safety Cars kan vända upp och ner på strategin.",
                },
            ],
            tags: ["Manager Game", "Strategy", "Racing", "iOS Native"],
            screenshotsLead: "En titt in i",
            screenshotsHighlight: "depån",
            screenshots: [
                {
                    title: "Live Race",
                    description: "Följ spänningen i realtid från depån",
                    src: screenshotLiveRace,
                },
                {
                    title: "Team Dashboard",
                    description: "Håll koll på stallets status och resultat",
                    src: screenshotTeamDashboard,
                },
                {
                    title: "Team Selection",
                    description: "Välj förare och strategi inför helgen",
                    src: screenshotTeamSelection,
                },
                {
                    title: "Upgrades",
                    description: "Utveckla bilen och maximera prestanda",
                    src: screenshotUpgrades,
                },
            ],
            betaTitle: "Redo att testa?",
            betaBody: "Jag söker just nu testpiloter som vill vara med och forma spelets framtid. Ladda ner beta-versionen via TestFlight och ge din feedback direkt i appen.",
            betaLink: "Gå till TestFlight inbjudan →",
        },
        footer: {
            role: "Utvecklare & Designer",
            copyright: "© 2025 Johan Karlsson. Byggd med DaisyUI & Tailwind CSS.",
        },
    },
    en: {
        nav: {
            home: "Home",
            skills: "Skills",
            timeline: "Experience",
            news: "News",
            project: "Project",
            themeAria: "Toggle theme",
            langAria: "Byt språk till svenska",
            langLabel: "SV",
            menuAria: "Open menu",
        },
        hero: {
            firstName: "Johan",
            lastName: "Karlsson",
            titleLead: "Hi I'm",
            titleRole: "a Developer",
            body: "I'm an app developer specializing in Java and mobile development with Swift and Kotlin. I have experience in both fullstack projects and frontend work with Flutter, and I enjoy building clean, functional solutions.",
            ctaContact: "Contact Me",
            ctaGithub: "GitHub",
            ctaLinkedin: "LinkedIn",
        },
        skills: {
            titleLead: "My",
            titleHighlight: "Skills",
            body: "I enjoy using both design and coding tools to craft applications.",
        },
        timeline: {
            titleLead: "Experience &",
            titleHighlight: "Education",
            items: [
                {
                    period: "2025 - Present",
                    title: "Vocational College",
                    subtitle: "IT Högskolan Java Developer",
                    body: "Currently studying Java.",
                },
                {
                    period: "2024",
                    title: "Frontend Developer",
                    subtitle: "Eventstaden",
                    body: "Worked on frontend components in Flutter.",
                },
                {
                    period: "2022 - 2024",
                    title: "Vocational Degree",
                    subtitle: "Folkuniversitetet Mobile App Developer",
                    body: "Focus on Swift, Kotlin, and some backend.",
                },
                {
                    period: "2022",
                    title: "Career Start",
                    subtitle: "Started my career in tech!",
                },
            ],
        },
        news: {
            titleLead: "News &",
            titleHighlight: "what I'm working on",
            updated: "Last updated: January 2026",
            updates: [
                {
                    date: "Jan 2026",
                    title: "Public TestFlight testing soon",
                    body: "My app is ready for a public TestFlight release. Now it’s about collecting feedback and polishing the experience.",
                },
                {
                    date: "Jan 2026",
                    title: "Database Development completed",
                    body: "Finished the Database Development course and built a solid foundation in databases and SQL.",
                },
                {
                    date: "Nov 2025",
                    title: "Java development completed",
                    body: "Completed the Java Development course and strengthened everything from OOP to structured problem solving.",
                },
                {
                    date: "Oct 2025",
                    title: "Building a racing manager in SwiftUI",
                    body: "I'm implementing a system for car upgrades and driver management, focusing on clearer and more interactive UI.",
                },
            ],
        },
        project: {
            titleLead: "Garagiste",
            titleHighlight: "F1 Manager",
            intro: "Do you have what it takes to lead a team to the top? Take the role of Team Principal in this strategic manager game. You set the tactics, you build the car, and you live with the results.",
            ctaPrimary: "Join TestFlight",
            betaLabel: "🚧 Beta v1.0",
            betaTip: "The game is in active beta",
            features: [
                {
                    title: "Intense Races",
                    description: "Follow races lap by lap. Your drivers react to the surroundings, make bold overtakes, and fight for every position.",
                },
                {
                    title: "Strategic Decisions",
                    description: "When do the tires fade? Is it time for an undercut? Your pit wall calls decide wins and losses.",
                },
                {
                    title: "Build Your Legacy",
                    description: "Start from the bottom and rise up. Reinvest prize money, hire better drivers, and take your team to a championship.",
                },
                {
                    title: "Unpredictable",
                    description: "Just like real life, anything can happen. Weather swings, crashes, and safety cars can flip the strategy.",
                },
            ],
            tags: ["Manager Game", "Strategy", "Racing", "iOS Native"],
            screenshotsLead: "A peek into the",
            screenshotsHighlight: "pit",
            screenshots: [
                {
                    title: "Live Race",
                    description: "Follow the action live from the pit wall",
                    src: screenshotLiveRace,
                },
                {
                    title: "Team Dashboard",
                    description: "Track your team's status and results",
                    src: screenshotTeamDashboard,
                },
                {
                    title: "Team Selection",
                    description: "Choose drivers and strategy for the weekend",
                    src: screenshotTeamSelection,
                },
                {
                    title: "Upgrades",
                    description: "Develop the car and maximize performance",
                    src: screenshotUpgrades,
                },
            ],
            betaTitle: "Ready to test?",
            betaBody: "I'm looking for beta testers who want to shape the game's future. Download the beta via TestFlight and send feedback directly in the app.",
            betaLink: "Go to the TestFlight invite →",
        },
        footer: {
            role: "Developer & Designer",
            copyright: "© 2025 Johan Karlsson. Built with DaisyUI & Tailwind CSS.",
        },
    },
};

const Navbar = ({ lang, onToggleLang }) => {
    const t = content[lang];
    const [theme, setTheme] = useState('carbonfate');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Restore persisted theme and mirror it on the document element.
        const savedTheme = localStorage.getItem('theme') || 'carbonfate';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Detect page scroll to toggle navbar background.
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [mobileMenuOpen]);

    const toggleTheme = () => {
        const newTheme = theme === 'carbonfate' ? 'delta' : 'carbonfate';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const scrollToSection = (sectionId) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'auto'
            });
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <nav className={`navbar fixed top-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-base-100/95 backdrop-blur-md shadow-lg' : 'bg-base-100/80 backdrop-blur-sm'
            }`}>
                <div className="container mx-auto px-4">
                    <div className="flex-1">
                        <button 
                            onClick={() => scrollToSection('hero')}
                            className="btn btn-ghost text-xl font-bold"
                        >
                            <span className="text-primary">JK</span>
                        </button>
                    </div>
                    
                    <div className="flex-none">
                        <div className="hidden md:flex items-center gap-3">
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <button onClick={() => scrollToSection('hero')}>
                                        {t.nav.home}
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollToSection('skills')}>
                                        {t.nav.skills}
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollToSection('timeline')}>
                                        {t.nav.timeline}
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollToSection('news')}>
                                        {t.nav.news}
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollToSection('projekt')} className="text-primary font-semibold">
                                        {t.nav.project}
                                    </button>
                                </li>
                            </ul>
                            <button
                                onClick={onToggleLang}
                                className="btn btn-ghost btn-sm uppercase"
                                aria-label={t.nav.langAria}
                            >
                                {t.nav.langLabel}
                            </button>
                            <button 
                                onClick={toggleTheme}
                                className="btn btn-ghost btn-circle"
                                aria-label={t.nav.themeAria}
                            >
                                {theme === 'carbonfate' ? (
                                    <FaMoon className="text-xl" />
                                ) : (
                                    <FaSun className="text-xl" />
                                )}
                            </button>
                        </div>

                        {/* Provide a compact toggle for small screens without repeating the desktop controls */}
                        <button 
                            onClick={toggleTheme}
                            className="btn btn-ghost btn-circle md:hidden"
                            aria-label={t.nav.themeAria}
                        >
                            {theme === 'carbonfate' ? (
                                <FaMoon className="text-xl" />
                            ) : (
                                <FaSun className="text-xl" />
                            )}
                        </button>

                        <button
                            onClick={onToggleLang}
                            className="btn btn-ghost btn-sm uppercase ml-2 md:hidden"
                            aria-label={t.nav.langAria}
                        >
                            {t.nav.langLabel}
                        </button>

                        {/* Open/close the overlay menu on mobile */}
                        <button 
                            onClick={toggleMobileMenu}
                            className="btn btn-ghost btn-circle ml-2 md:hidden"
                            aria-label={t.nav.menuAria}
                        >
                            {mobileMenuOpen ? (
                                <FaTimes className="text-xl" />
                            ) : (
                                <FaBars className="text-xl" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-base-100 z-40 md:hidden pt-20"
                >
                    <div className="container mx-auto px-4 py-8">
                        <ul className="menu menu-lg w-full">
                            <li>
                                <button 
                                    onClick={() => scrollToSection('hero')}
                                    className="text-lg py-4"
                                >
                                    {t.nav.home}
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('skills')}
                                    className="text-lg py-4"
                                >
                                    {t.nav.skills}
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('timeline')}
                                    className="text-lg py-4"
                                >
                                    {t.nav.timeline}
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('news')}
                                    className="text-lg py-4"
                                >
                                    {t.nav.news}
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('projekt')}
                                    className="text-primary font-semibold text-lg py-4"
                                >
                                    {t.nav.project}
                                </button>
                            </li>
                        </ul>

                        {/* Surface the same contact shortcuts that appear on desktop */}
                        <div className="divider"></div>
                        <div className="flex justify-center gap-4 mt-8">
                            <a
                                href="mailto:johanwilhelmkarlsson@gmail.com"
                                className="btn btn-circle btn-outline btn-lg"
                                aria-label="Email"
                            >
                                <FaEnvelope className="text-xl" />
                            </a>
                            <a
                                href="https://github.com/gurkvatten"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-outline btn-lg"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/johan-karlsson-871537223"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-outline btn-lg"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

// Hero section introduces Johan with animated avatar, headline, and CTAs.
const HeroSection = ({ lang }) => {
    const t = content[lang];
    return (
        <section id="hero" className="py-32 md:py-40 w-full flex-grow mt-16">
            <div className="container mx-auto px-4">
                <div 
                    className="max-w-3xl mx-auto text-center"
                >
                <div 
                    className="avatar mb-6"
                >
                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-xl">
                        <img src={profilBild} alt="Johan Karlsson Profilbild" />
                    </div>
                </div>

                <span 
                    className="text-3xl font-bold mb-8 block"
                >
                    <span className="text-primary">{t.hero.firstName}</span> {t.hero.lastName}
                </span>

                <h1 
                    className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
                >
                    <span className="text-primary">{t.hero.titleLead}</span> {t.hero.titleRole}
                </h1>

                <p 
                    className="text-base-content/70 text-xl mb-12 max-w-2xl mx-auto"
                >
                    {t.hero.body}
                </p>

                <div 
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <a
                        href="mailto:johanwilhelmkarlsson@gmail.com"
                        className="btn btn-outline btn-lg flex items-center gap-3 transition duration-300 ease-in-out hover:bg-base-300 hover:text-primary"
                    >
                        <FaEnvelope className="text-xl" />
                        {t.hero.ctaContact}
                    </a>
                    <a
                        href="https://github.com/gurkvatten"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-lg flex items-center gap-3 transition duration-300 ease-in-out hover:bg-base-300 hover:text-primary"
                    >
                        <FaGithub className="text-xl" />
                        {t.hero.ctaGithub}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/johan-karlsson-871537223"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-lg flex items-center gap-3 transition duration-300 ease-in-out hover:bg-base-300 hover:text-primary"
                    >
                        <FaLinkedin className="text-xl" />
                        {t.hero.ctaLinkedin}
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
};

// Skills section renders a dynamic word cloud of core competencies.
const SkillsSection = ({ lang }) => {
    const t = content[lang];
    const wordCloud = [
        { name: "Swift", size: 2.1, color: "var(--color-secondary)" },
        { name: "Java", size: 2.0, color: "var(--color-secondary)" },
        { name: "Kotlin", size: 1.9, color: "var(--color-secondary)" },
        { name: "React", size: 1.6, color: "var(--color-secondary)" },
        { name: "Tailwind CSS", size: 1.5, color: "var(--color-secondary)" },
        { name: "Node.js", size: 1.4, color: "var(--color-secondary)" },
        { name: "Flutter", size: 1.3, color: "var(--color-secondary)" },
        { name: "CI/CD", size: 1.1, color: "var(--color-secondary)" },
        { name: "SQL", size: 1.2, color: "var(--color-secondary)" },
        { name: "Docker", size: 1.05, color: "var(--color-secondary)" },
    ];

    return (
        <section id="skills" className="py-16 bg-base-200 w-full">
            <div className="container mx-auto px-4">
                <h2 
                    className="text-4xl font-bold text-center mb-12"
                >
                    {t.skills.titleLead} <span className="text-primary">{t.skills.titleHighlight}</span>
                </h2>

                <div
                    className="word-cloud mx-auto grid max-w-4xl gap-4 lg:gap-6 justify-center"
                >
                    {wordCloud.map((skill, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center justify-center font-semibold transition-transform duration-500"
                            style={{ fontSize: `${skill.size}rem`, color: skill.color }}
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
                <p className="text-center text-base-content/70 mt-8 max-w-3xl mx-auto">
                    {t.skills.body}
                </p>
            </div>
        </section>
    );
};

// Timeline section captures education and experience milestones.
const TimelineSection = ({ lang }) => {
    const t = content[lang];
    return (
        <section id="timeline" className="py-24 bg-base-100 w-full">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 
                    className="text-4xl font-bold text-center mb-16"
                >
                    {t.timeline.titleLead} <span className="text-primary">{t.timeline.titleHighlight}</span> 🧑‍💻
                </h2>

                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858l-3.29 3.29-1.395-1.395a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd"/></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic text-sm">{t.timeline.items[0].period}</time>
                            <div className="text-2xl font-black text-primary">{t.timeline.items[0].title}</div>
                            <h4 className="text-lg font-semibold">{t.timeline.items[0].subtitle}</h4>
                            <p className="text-base-content/80 mt-1">{t.timeline.items[0].body}</p>
                        </div>
                        <hr className="bg-primary" style={{ width: '8px' }}/>
                    </li>

                    <li>
                        <hr className="bg-primary" style={{ width: '8px' }}/>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-secondary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858l-3.29 3.29-1.395-1.395a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd"/></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic text-sm">{t.timeline.items[1].period}</time>
                            <div className="text-2xl font-black text-secondary">{t.timeline.items[1].title}</div>
                            <h4 className="text-lg font-semibold">{t.timeline.items[1].subtitle}</h4>
                            <p className="text-base-content/80 mt-1">{t.timeline.items[1].body}</p>
                        </div>
                        <hr className="bg-secondary" style={{ width: '8px' }}/>
                    </li>

                    <li>
                        <hr className="bg-secondary" style={{ width: '8px' }}/>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-accent"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858l-3.29 3.29-1.395-1.395a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd"/></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-40">
                            <time className="font-mono italic text-sm">{t.timeline.items[2].period}</time>
                            <div className="text-2xl font-black text-accent">{t.timeline.items[2].title}</div>
                            <h4 className="text-lg font-semibold">{t.timeline.items[2].subtitle}</h4>
                            <p className="text-base-content/80 mt-1">{t.timeline.items[2].body}</p>
                        </div>
                        <hr className="bg-accent" style={{ width: '8px' }}/>
                    </li>

                    <li>
                        <hr className="bg-accent" style={{ width: '8px' }}/>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-neutral"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858l-3.29 3.29-1.395-1.395a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd"/></svg>
                        </div>
                        <div className="timeline-end mb-40">
                            <time className="font-mono italic text-sm">{t.timeline.items[3].period}</time>
                            <div className="text-2xl font-black text-primary">{t.timeline.items[3].title}</div>
                            <h4 className="text-lg font-semibold">{t.timeline.items[3].subtitle}</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

// News section surfaces recent updates in projects and learning.
const NewsSection = ({ lang }) => {
    const t = content[lang];
    const updates = t.news.updates;

    return (
        <section id="news" className="py-24 bg-base-200 w-full">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 
                    className="text-4xl font-bold text-center mb-12"
                >
                    {t.news.titleLead} <span className="text-primary">{t.news.titleHighlight}</span> 📝
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {updates.map((post, i) => (
                        <div
                            key={i}
                            className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="card-body">
                                <time className="text-sm text-base-content/60">{post.date}</time>
                                <h3 className="text-2xl font-semibold mt-2 text-primary">
                                    {post.title}
                                </h3>
                                <p className="text-base-content/70 mt-3 leading-relaxed">
                                    {post.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-12 text-base-content/60 italic">
                    {t.news.updated}
                </p>
            </div>
        </section>
    );
};

// Projekt section shares the racing manager concept with CTAs and visuals.
const ProjektSection = ({ lang }) => {
    const t = content[lang];
    // Highlight the gameplay focus before drilling into technical details.
    const features = [
        {
            icon: <FaCar className="text-4xl" />,
            title: t.project.features[0].title,
            description: t.project.features[0].description
        },
        {
            icon: <FaChartLine className="text-4xl" />,
            title: t.project.features[1].title,
            description: t.project.features[1].description
        },
        {
            icon: <FaTrophy className="text-4xl" />,
            title: t.project.features[2].title,
            description: t.project.features[2].description
        },
        {
            icon: <FaGamepad className="text-4xl" />,
            title: t.project.features[3].title,
            description: t.project.features[3].description
        }
    ];

    // Tag badges hint at the game's genre and tone.
    const tags = [
        { name: t.project.tags[0], color: "badge-primary" },
        { name: t.project.tags[1], color: "badge-secondary" },
        { name: t.project.tags[2], color: "badge-accent" },
        { name: t.project.tags[3], color: "badge-ghost" },
    ];

    const screenshots = t.project.screenshots;

    return (
        <section id="projekt" className="py-24 bg-base-100 w-full">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Projekt hero block sells the experience, badges, and CTA trio. */}
                <div
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-28 h-28 flex items-center justify-center">
                            <img
                                src={garagisteIcon}
                                alt="Garagiste F1 Manager"
                                className="w-24 h-24 object-contain rounded-[22%]"
                            />
                        </div>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        {t.project.titleLead} <span className="text-primary">{t.project.titleHighlight}</span>
                    </h2>

                    <p className="text-xl text-base-content/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                        {t.project.intro}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center mb-10">
                        {tags.map((tag, i) => (
                            <span key={i} className={`badge ${tag.color} badge-lg`}>
                                {tag.name}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {/* Primary CTA invites TestFlight beta testers. */}
                        <a
                            href="https://testflight.apple.com/join/b9X5jhaj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg gap-3 shadow-lg hover:scale-105 transition-transform"
                        >
                            <FaApple className="text-2xl" />
                            {t.project.ctaPrimary}
                        </a>
                        <div className="tooltip" data-tip={t.project.betaTip}>
                            <button className="btn btn-outline btn-lg cursor-default">
                                {t.project.betaLabel}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Feature cards break down the gameplay hooks. */}
                <div
                    className="mb-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="card bg-base-200 border border-base-300 hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="card-body flex-row gap-6 items-start">
                                    <div className="text-primary mt-1">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="card-title text-xl mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-base-content/70 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mockup gallery gives a peek at UI states and atmosphere. */}
                <div
                >
                    <h3 className="text-3xl font-bold text-center mb-12">
                        {t.project.screenshotsLead} <span className="text-primary">{t.project.screenshotsHighlight}</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {screenshots.map((shot, i) => (
                            <div
                                key={i}
                                className="group"
                            >
                                <div className="mockup-phone border-primary">
                                    <div className="camera"></div>
                                    <div className="display">
                                        <div className="artboard artboard-demo phone-1 bg-base-300 relative overflow-hidden">
                                            <img
                                                src={shot.src}
                                                alt={shot.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                                                <p className="text-white font-bold text-center">{shot.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center mt-6 text-base-content/60 text-sm font-medium">
                                    {shot.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Appeal to beta testers with an explicit invitation to join. */}
                <div
                    className="mt-24 text-center max-w-2xl mx-auto"
                >
                    <div className="bg-base-200 p-8 rounded-3xl shadow-inner">
                        <h4 className="text-2xl font-bold mb-4">{t.project.betaTitle}</h4>
                        <p className="text-base-content/70 mb-6">
                            {t.project.betaBody}
                        </p>
                        <a
                            href="https://testflight.apple.com/join/b9X5jhaj"
                            className="link link-primary font-bold text-lg hover:text-primary-focus"
                        >
                            {t.project.betaLink}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer delivers contact links and copyright notice.
const AppFooter = ({ lang }) => {
    const t = content[lang];
    return (
        <footer className="footer footer-center p-10 bg-base-100 text-base-content mt-auto border-t border-base-300">
            <aside>
                <p className="font-bold text-lg">
                    <span className="text-primary">Johan</span> Karlsson
                </p>
                <p className="text-base-content/70">{t.footer.role}</p>
            </aside>
        <nav>
            <div className="grid grid-flow-col gap-4">
                <a 
                    href="https://github.com/gurkvatten"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle"
                    aria-label="GitHub"
                >
                    <FaGithub className="text-2xl" />
                </a>
                <a 
                    href="https://www.linkedin.com/in/johan-karlsson-871537223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-circle"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="text-2xl" />
                </a>
                <a 
                    href="mailto:johanwilhelmkarlsson@gmail.com"
                    className="btn btn-ghost btn-circle"
                    aria-label="Email"
                >
                    <FaEnvelope className="text-2xl" />
                </a>
            </div>
        </nav>
            <aside>
                <p className="text-sm text-base-content/60">
                    {t.footer.copyright}
                </p>
            </aside>
        </footer>
    );
};

// App assembles every section into a single scrollable experience.
const App = () => {
    const [lang, setLang] = useState(() => {
        if (typeof window === 'undefined') return 'sv';
        return localStorage.getItem('lang') || 'sv';
    });

    const toggleLang = () => {
        const nextLang = lang === 'sv' ? 'en' : 'sv';
        setLang(nextLang);
        localStorage.setItem('lang', nextLang);
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const offset = Math.min(window.scrollY * 0.03, 24);
                document.documentElement.style.setProperty('--parallax-shift', `${offset}px`);
                ticking = false;
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-transparent flex flex-col">
            <Navbar lang={lang} onToggleLang={toggleLang} />
            <HeroSection lang={lang} />
            <SkillsSection lang={lang} />
            <TimelineSection lang={lang} />
            <NewsSection lang={lang} />
            <ProjektSection lang={lang} />
            <AppFooter lang={lang} />
        </div>
    );
};

export default App;
