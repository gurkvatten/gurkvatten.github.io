import profilBild from '../src/assets/johan-profil.jpeg';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";





const HeroSection = () => (
    <section className="py-24 md:py-32 w-full flex-grow ">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <div className="avatar mb-6">
                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-xl">
                        <img src={profilBild} alt="Johan Karlsson Profilbild" />
                    </div>
                </div>

                <span className="text-3xl font-bold mb-8 block">
                    <span className="text-primary">Johan</span> Karlsson
                </span>

                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                    <span className="text-primary">Hej jag är</span> Utvecklare
                </h1>

                <p className="text-base-content/70 text-xl mb-12 max-w-2xl mx-auto">
                    Jag är en apputvecklare specialiserad på Java och mobilutveckling i Swift och Kotlin. Jag har erfarenhet från både fullstack-projekt och frontend-arbete med Flutter, och jag drivs av att skapa rena och funktionella lösningar.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <a
                        href="mailto:johanwilhelmkarlsson@gmail.com"
                        target="_blank"
                        className="btn btn-outline btn-lg flex items-center gap-3 transition duration-300 ease-in-out hover:bg-base-300 hover:text-primary"
                    >
                        <FaEnvelope className="text-xl" />
                        Kontakta Mig
                    </a>
                    <a
                        href="https://github.com/gurkvatten"
                        target="_blank"
                        className="btn btn-outline btn-lg flex items-center gap-3 transition duration-300 ease-in-out hover:bg-base-300 hover:text-primary"
                    >
                        <FaGithub className="text-xl" />
                        GitHub
                    </a>
                    <a
                        href="www.linkedin.com/in/johan-karlsson-871537223"
                        target="_blank"
                        className="btn btn-outline btn-lg flex items-center gap-3 transition duration-300 ease-in-out hover:bg-base-300 hover:text-primary"
                    >
                        <FaLinkedin className="text-xl" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </section>
);


// --- 2. KOMPONENT: Färdigheter ---
const SkillsSection = () => {
    const skills = [
        { name: "Swift", value: 80, color: "progress-primary" },
        { name: "Java", value: 80, color: "progress-secondary" },
        { name: "Kotlin", value: 70, color: "progress-accent" },
        { name: "Backend (t.ex. Node.js/Python)", value: 65, color: "progress-warning" },
    ];

    return (
        <section className="py-16 bg-base-200 w-full">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Mina <span className="text-primary">Färdigheter</span>
                </h2>

                <div className="space-y-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="pt-4 first:pt-0">
                            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end">
                                <span className="text-xl font-semibold mb-2 sm:mb-0">{skill.name}</span>
                                <span className="font-bold text-lg text-accent">{skill.value}%</span>
                            </div>
                            <progress
                                className={`progress ${skill.color} w-full h-6`}
                                value={skill.value}
                                max="100"
                            ></progress>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- 3. KOMPONENT: Tidslinje (Erfarenhet & Utbildning) ---
const TimelineSection = () => (
    <section className="py-24 bg-base-100 w-full">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-16">
                Erfarenhet & <span className="text-primary">Utbildning</span>
            </h2>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {/* Post 1: Senaste Utbildning */}
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
                    {/* Ändring här: Lagt till style för höjd/tjocklek */}
                    <hr className="bg-primary" style={{ width: '8px' }}/>
                </li>

                {/* Post 2: Tidigare Jobb */}
                <li>
                    {/* Ändring här: Lagt till style för höjd/tjocklek */}
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
                    {/* Ändring här: Lagt till style för höjd/tjocklek */}
                    <hr className="bg-secondary" style={{ width: '8px' }}/>
                </li>

                {/* Post 3: Utbildning */}
                <li>
                    {/* Ändring här: Lagt till style för höjd/tjocklek */}
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
                    {/* Ändring här: Lagt till style för höjd/tjocklek */}
                    <hr className="bg-accent" style={{ width: '8px' }}/>
                </li>

                {/* Sista Post: Startpunkt */}
                <li>
                    {/* Ändring här: Lagt till style för höjd/tjocklek */}
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

// --- 4. KOMPONENT: Nyheter & Uppdateringar ---
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
        <section className="py-24 bg-base-200 w-full">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Nyheter & <span className="text-primary">vad jag gör nu</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {updates.map((post, i) => (
                        <motion.div
                            key={i}
                            className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0.4, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
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


// --- 5. KOMPONENT: Projektkatalog ---
const ProjectsSection = () => {
    const projects = [
        {
            title: "iOS ToDo App",
            badge: "Swift",
            description: "En native ToDo-app för iOS utvecklad med Swift och SwiftUI, med fokus på Core Data-lagring.",
            imageText: "Swift+iOS+App",
            imageBg: "F8D76D",
            imageTextCol: "333333",
        },
        {
            title: "Väderprognos-app",
            badge: "Kotlin",
            description: "En Android-app byggd i Kotlin med Jetpack Compose för UI, som använder OpenWeather API.",
            imageText: "Kotlin+Android+App",
            imageBg: "00C49F",
            imageTextCol: "ffffff",
        },
        {
            title: "RESTful API Tjänst",
            badge: "Java",
            description: "En robust backend-tjänst skapad med Java och Spring Boot för att hantera användardata och autentisering.",
            imageText: "Java+API",
            imageBg: "FF8A8A",
            imageTextCol: "ffffff",
        },
    ];

    return (
        <section className="py-24 bg-base-200 w-full">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Utvalda <span className="text-primary">Projekt</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((p, i) => (
                        <div key={i} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <figure>
                                <img
                                    src={`https://placehold.co/400x250/${p.imageBg}/${p.imageTextCol}?text=${p.imageText}`}
                                    alt={`${p.title} Projektbild`}
                                    className="w-full h-auto"
                                />
                            </figure>
                            <div className="card-body p-6">
                                <h3 className="card-title text-2xl">
                                    {p.title}
                                    <div className={`badge badge-${i === 0 ? 'primary' : i === 1 ? 'secondary' : 'accent'}`}>{p.badge}</div>
                                </h3>
                                <p className="text-base-content/70">{p.description}</p>
                                <div className="card-actions justify-end mt-4">
                                    <a href="#" target="_blank" className="btn btn-sm btn-outline">Se Live</a>
                                    <a href="#" target="_blank" className="btn btn-sm btn-primary">GitHub</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- 6. KOMPONENT: Sidfot ---
const AppFooter = () => (
    <footer className="footer footer-center p-4 bg-base-100 text-base-content mt-auto border-t border-base-300">
        <aside>
            <p>© 2025 Johan Karlsson. Byggd med DaisyUI & Tailwind CSS.</p>
        </aside>
    </footer>
);


// --- HUVUDKOMPONENT: App (Sätter ihop alla delar) ---
const App = () => {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col">
            <HeroSection />
            <SkillsSection />
            <TimelineSection />
            <NewsSection />
            <ProjectsSection />
            <AppFooter />
        </div>
    );
};

export default App;
