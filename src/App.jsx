import { useState, useEffect } from 'react';
import profilBild from './assets/johan-profil.jpeg';
import { FaEnvelope, FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

// --- NAVBAR KOMPONENT ---
const Navbar = () => {
    const [theme, setTheme] = useState('carbonfate');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Ladda tema från localStorage
        const savedTheme = localStorage.getItem('theme') || 'carbonfate';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Scroll listener för navbar-effekt
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'carbonfate' ? 'delta' : 'carbonfate';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className={`navbar fixed top-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-base-100/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
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
                    <ul className="menu menu-horizontal px-1 hidden md:flex">
                        <li>
                            <button onClick={() => scrollToSection('hero')}>
                                Hem
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('skills')}>
                                Färdigheter
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('timeline')}>
                                Erfarenhet
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('news')}>
                                Nyheter
                            </button>
                        </li>
                        <li>
                            <a href="/projekt" className="text-primary font-semibold">
                                Projekt
                            </a>
                        </li>
                    </ul>

                    {/* Dark Mode Toggle */}
                    <button 
                        onClick={toggleTheme}
                        className="btn btn-ghost btn-circle ml-2"
                        aria-label="Växla tema"
                    >
                        {theme === 'carbonfate' ? (
                            <FaMoon className="text-xl" />
                        ) : (
                            <FaSun className="text-xl" />
                        )}
                    </button>

                    {/* Mobile Menu */}
                    <div className="dropdown dropdown-end md:hidden ml-2">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button onClick={() => scrollToSection('hero')}>Hem</button></li>
                            <li><button onClick={() => scrollToSection('skills')}>Färdigheter</button></li>
                            <li><button onClick={() => scrollToSection('timeline')}>Erfarenhet</button></li>
                            <li><button onClick={() => scrollToSection('news')}>Nyheter</button></li>
                            <li><a href="/projekt" className="text-primary font-semibold">Projekt</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// --- HERO SECTION ---
const HeroSection = () => (
    <section id="hero" className="py-32 md:py-40 w-full flex-grow mt-16">
        <div className="container mx-auto px-4">
            <motion.div 
                className="max-w-3xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div 
                    className="avatar mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-xl">
                        <img src={profilBild} alt="Johan Karlsson Profilbild" />
                    </div>
                </motion.div>

                <motion.span 
                    className="text-3xl font-bold mb-8 block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <span className="text-primary">Johan</span> Karlsson
                </motion.span>

                <motion.h1 
                    className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="text-primary">Hej jag är</span> Utvecklare
                </motion.h1>

                <motion.p 
                    className="text-base-content/70 text-xl mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Jag är en apputvecklare specialiserad på Java och mobilutveckling i Swift och Kotlin. Jag har erfarenhet från både fullstack-projekt och frontend-arbete med Flutter, och jag drivs av att skapa rena och funktionella lösningar.
                </motion.p>

                <motion.div 
                    className="flex flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <a
                        href="mailto:johanwilhelmkarlsson@gmail.com"
                        className="btn btn-outline btn-lg flex items-center gap-3 transition duration-300 ease-in-out hover:bg-base-300 hover:text-primary"
                    >
                        <FaEnvelope className="text-xl" />
                        Kontakta Mig
                    </a>
                    <a
                        href="https://github.com/gurkvatten"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-lg flex items-center gap-3 transition duration-300 ease-in-out hover:bg-base-300 hover:text-primary"
                    >
                        <FaGithub className="text-xl" />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/johan-karlsson-871537223"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-lg flex items-center gap-3 transition duration-300 ease-in-out hover:bg-base-300 hover:text-primary"
                    >
                        <FaLinkedin className="text-xl" />
                        LinkedIn
                    </a>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

// --- SKILLS SECTION ---
const SkillsSection = () => {
    const skills = [
        { name: "Swift", value: 80, color: "progress-primary" },
        { name: "Java", value: 80, color: "progress-secondary" },
        { name: "Kotlin", value: 70, color: "progress-accent" },
        { name: "Backend (t.ex. Node.js/Python)", value: 65, color: "progress-warning" },
    ];

    return (
        <section id="skills" className="py-16 bg-base-200 w-full">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Mina <span className="text-primary">Färdigheter</span>
                </motion.h2>

                <div className="space-y-6">
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index} 
                            className="pt-4 first:pt-0"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end">
                                <span className="text-xl font-semibold mb-2 sm:mb-0">{skill.name}</span>
                                <span className="font-bold text-lg text-accent">{skill.value}%</span>
                            </div>
                            <progress
                                className={`progress ${skill.color} w-full h-6`}
                                value={skill.value}
                                max="100"
                            ></progress>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- TIMELINE SECTION ---
const TimelineSection = () => (
    <section id="timeline" className="py-24 bg-base-100 w-full">
        <div className="container mx-auto px-4 max-w-4xl">
            <motion.h2 
                className="text-4xl font-bold text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Erfarenhet & <span className="text-primary">Utbildning</span> 🧑‍💻
            </motion.h2>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858l-3.29 3.29-1.395-1.395a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd"/></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic text-sm">2025 - Idag</time>
                        <div className="text-2xl font-black text-primary">Yrkeshögskola</div>
                        <h4 className="text-lg font-semibold">IT högskolan Javautvecklare</h4>
                        <p className="text-base-content/80 mt-1">Just nu pluggar jag Java.</p>
                    </div>
                    <hr className="bg-primary" style={{ width: '8px' }}/>
                </li>

                <li>
                    <hr className="bg-primary" style={{ width: '8px' }}/>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-secondary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858l-3.29 3.29-1.395-1.395a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd"/></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic text-sm">2024</time>
                        <div className="text-2xl font-black text-secondary">Frontend utvecklare</div>
                        <h4 className="text-lg font-semibold">Eventstaden</h4>
                        <p className="text-base-content/80 mt-1">Jobbade med frontendkomponenter i Flutter.</p>
                    </div>
                    <hr className="bg-secondary" style={{ width: '8px' }}/>
                </li>

                <li>
                    <hr className="bg-secondary" style={{ width: '8px' }}/>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-accent"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858l-3.29 3.29-1.395-1.395a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd"/></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-40">
                        <time className="font-mono italic text-sm">2022 - 2024</time>
                        <div className="text-2xl font-black text-accent">Yrkeshögskoleexamen</div>
                        <h4 className="text-lg font-semibold">Folkuniversitetet Mobilapplikationsutvecklare</h4>
                        <p className="text-base-content/80 mt-1">Fokus på Swift, Kotlin och lite backend.</p>
                    </div>
                    <hr className="bg-accent" style={{ width: '8px' }}/>
                </li>

                <li>
                    <hr className="bg-accent" style={{ width: '8px' }}/>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-neutral"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858l-3.29 3.29-1.395-1.395a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd"/></svg>
                    </div>
                    <div className="timeline-end mb-40">
                        <time className="font-mono italic text-sm">2022</time>
                        <div className="text-2xl font-black text-primary">Karriärstart</div>
                        <h4 className="text-lg font-semibold">Startade karriären inom tech!</h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>
);

// --- NEWS SECTION ---
const NewsSection = () => {
    const updates = [
        {
            date: "Okt 2025",
            title: "Bygger Racing-manager i SwiftUI",
            body: "Jag har börjat implementera ett system för biluppgraderingar och förarhantering. Fokus ligger på att göra UI:t mer interaktivt och lättläst.",
        },
        {
            date: "Sep 2025",
            title: "Experimenterar med SwiftUI-animeringar",
            body: "Just nu testar jag hur bilarnas rörelser kan animeras på banan. Det är klurigt men väldigt roligt!",
        },
        {
            date: "Sep 2025",
            title: "Påbörjade en ny utbildning",
            body: "Jag har börjat en utbildning i Java och ser fram emot att lära mig mer.",
        },
        {
            date: "Aug 2025",
            title: "Nytt personligt projekt!",
            body: "Startade utvecklingen av mitt egna Racing-managementspel, inspirerat av klassikern Grand Prix Manager av Microprose.",
        },
    ];

    return (
        <section id="news" className="py-24 bg-base-200 w-full">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Nyheter & <span className="text-primary">vad jag gör nu</span> 📝
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {updates.map((post, i) => (
                        <motion.div
                            key={i}
                            className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0.4, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
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
                        </motion.div>
                    ))}
                </div>

                <p className="text-center mt-12 text-base-content/60 italic">
                    Senast uppdaterad: Oktober 2025
                </p>
            </div>
        </section>
    );
};

// --- FOOTER ---
const AppFooter = () => (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content mt-auto border-t border-base-300">
        <aside>
            <p className="font-bold text-lg">
                <span className="text-primary">Johan</span> Karlsson
            </p>
            <p className="text-base-content/70">Utvecklare & Designer</p>
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
                © 2025 Johan Karlsson. Byggd med DaisyUI & Tailwind CSS.
            </p>
        </aside>
    </footer>
);

// --- MAIN APP ---
const App = () => {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col">
            <Navbar />
            <HeroSection />
            <SkillsSection />
            <TimelineSection />
            <NewsSection />
            <AppFooter />
        </div>
    );
};

export default App;
