import profilBild from './assets/johan-profil.jpeg';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";


const App = () => {
    return (
        <div className="min-h-screen bg-base-100 flex flex-col">

            {/* 1. OM MIG / HERO SEKTION */}
            <section className="py-24 md:py-32 w-full flex-grow">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">

                        {/* 1.1 PROFILBILD */}
                        <div className="avatar mb-6">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-xl">
                                {/* Använder nu den statiska URL:en */}
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
                                className="btn btn-outline btn-lg flex items-center gap-2"
                            >
                                <FaEnvelope className="text-xl" />
                                Kontakta Mig
                            </a>

                            <a
                                href="https://github.com/gurkvatten"
                                target="_blank"
                                className="btn btn-outline btn-lg flex items-center gap-2"
                            >
                                <FaGithub className="text-xl" />
                                GitHub
                            </a>

                            <a
                                href="www.linkedin.com/in/johan-karlsson-871537223"
                                target="_blank"
                                className="btn btn-outline btn-lg flex items-center gap-2"
                            >
                                <FaLinkedin className="text-xl" />
                                LinkedIn
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- */}
            {/* 2. FÄRDIGHETER SEKTION */}
            {/* --- */}
            <section className="py-16 bg-base-200 w-full">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Mina <span className="text-primary">Färdigheter</span>
                    </h2>

                    <div className="space-y-6">
                        {/* FÄRDIGHETER */}
                        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end">
                            <span className="text-xl font-semibold mb-2 sm:mb-0">Swift</span>
                            <span className="font-bold text-lg text-accent">80%</span>
                        </div>
                        <progress className="progress progress-primary w-full h-4" value="80" max="100"></progress>
                        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end pt-4">
                            <span className="text-xl font-semibold mb-2 sm:mb-0">Java</span>
                            <span className="font-bold text-lg text-accent">80%</span>
                        </div>
                        <progress className="progress progress-primary w-full h-4" value="80" max="100"></progress>
                        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end pt-4">
                            <span className="text-xl font-semibold mb-2 sm:mb-0">Kotlin</span>
                            <span className="font-bold text-lg text-accent">70%</span>
                        </div>
                        <progress className="progress progress-primary w-full h-4" value="70" max="100"></progress>
                        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end pt-4">
                            <span className="text-xl font-semibold mb-2 sm:mb-0">Backend (t.ex. Node.js/Python)</span>
                            <span className="font-bold text-lg text-accent">65%</span>
                        </div>
                        <progress className="progress progress-primary w-full h-4" value="65" max="100"></progress>
                    </div>
                </div>
            </section>

            {/* --- */}
            {/* 3. ARBETSLIVSERFARENHET & UTBILDNING */}
            {/* --- */}
            <section className="py-24 bg-base-100 w-full">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Erfarenhet & <span className="text-primary">Utbildning</span> 🧑‍💻
                    </h2>

                    {/* DaisyUI Timeline */}
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

                        {/* Post 1: Senaste Jobbet */}
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
                            <hr className="bg-primary"/>
                        </li>

                        {/* Post 2: Tidigare Jobb */}
                        <li>
                            <hr className="bg-primary"/>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-secondary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858l-3.29 3.29-1.395-1.395a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd"/></svg>
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono italic text-sm">2024</time>
                                <div className="text-2xl font-black text-secondary">Frontend utvecklare</div>
                                <h4 className="text-lg font-semibold">Eventstaden</h4>
                                <p className="text-base-content/80 mt-1">Jobbade med frontendkomponenter i Flutter.</p>
                            </div>
                            <hr className="bg-secondary"/>
                        </li>

                        {/* Post 3: Utbildning */}
                        <li>
                            <hr className="bg-secondary"/>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-accent"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858l-3.29 3.29-1.395-1.395a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd"/></svg>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <time className="font-mono italic text-sm">2022 - 2024</time>
                                <div className="text-2xl font-black text-accent">Yrkeshögskoleexamen</div>
                                <h4 className="text-lg font-semibold">Folkuniversitetet Mobilapplikationsutvecklare</h4>
                                <p className="text-base-content/80 mt-1">Fokus på Swift, Kotlin och lite backend.</p>
                            </div>
                            <hr className="bg-accent"/>
                        </li>

                        {/* Sista Post: Startpunkt */}
                        <li>
                            <hr className="bg-accent"/>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-neutral"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.858l-3.29 3.29-1.395-1.395a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" clipRule="evenodd"/></svg>
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono italic text-sm">2022</time>
                                <div className="text-2xl font-black text-primary">Karriärstart</div>
                                <h4 className="text-lg font-semibold">Startade karriären inom tech!</h4>
                            </div>
                        </li>
                    </ul>

                </div>
            </section>

            {/* --- */}
            {/* 4. PROJEKT SEKTION - Uppdaterad för mobilfokus */}
            {/* --- */}
            <section className="py-24 bg-base-200 w-full">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Nyheter & <span className="text-primary">vad jag gör nu</span> 📝
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
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
                                body: "Jag har börjat en utbildning i Java och ser fram emot att lära mig mer",
                            },
                            {
                                date: "Aug 2025",
                                title: "Nytt personligt projekt!",
                                body: "Startade utvecklingen av mitt egna Racing-managementspel, inspirerat av klassikern Grand Prix Manager av Microprose.",
                            },
                        ].map((post, i) => (
                            <div
                                key={i}
                                className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                        Senast uppdaterad: Oktober 2025
                    </p>
                </div>
            </section>


            <section className="py-24 bg-base-200 w-full">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Utvalda <span className="text-primary">Projekt</span> 💼
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Projekt 1 Card: iOS App (Swift) */}
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <figure>
                                {/* Platshållare för iOS app-skärm */}
                                <img src="https://placehold.co/400x250/F8D76D/333333?text=Swift+iOS+App" alt="iOS App Projektbild" className="w-full h-auto"/>
                            </figure>
                            <div className="card-body p-6">
                                <h3 className="card-title text-2xl">
                                    iOS ToDo App
                                    <div className="badge badge-primary">Swift</div>
                                </h3>
                                <p className="text-base-content/70">En native ToDo-app för iOS utvecklad med Swift och SwiftUI, med fokus på Core Data-lagring.</p>
                                <div className="card-actions justify-end mt-4">
                                    <a href="#" target="_blank" className="btn btn-sm btn-outline">Se Live</a>
                                    <a href="#" target="_blank" className="btn btn-sm btn-primary">GitHub</a>
                                </div>
                            </div>
                        </div>

                        {/* Projekt 2 Card: Android App (Kotlin) */}
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <figure>
                                {/* Platshållare för Android app-skärm */}
                                <img src="https://placehold.co/400x250/00C49F/ffffff?text=Kotlin+Android+App" alt="Android App Projektbild" className="w-full h-auto"/>
                            </figure>
                            <div className="card-body p-6">
                                <h3 className="card-title text-2xl">
                                    Väderprognos-app
                                    <div className="badge badge-secondary">Kotlin</div>
                                </h3>
                                <p className="text-base-content/70">En Android-app byggd i Kotlin med Jetpack Compose för UI, som använder OpenWeather API.</p>
                                <div className="card-actions justify-end mt-4">
                                    <a href="#" target="_blank" className="btn btn-sm btn-outline">Se Live</a>
                                    <a href="#" target="_blank" className="btn btn-sm btn-primary">GitHub</a>
                                </div>
                            </div>
                        </div>


                        {/* Projekt 3 Card: Fullstack (Java Backend) */}
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <figure>
                                {/* Platshållare för Backend/Java-tema */}
                                <img src="https://placehold.co/400x250/FF8A8A/ffffff?text=Java+API" alt="Java API Projektbild" className="w-full h-auto"/>
                            </figure>
                            <div className="card-body p-6">
                                <h3 className="card-title text-2xl">
                                    RESTful API Tjänst
                                    <div className="badge badge-accent">Java</div>
                                </h3>
                                <p className="text-base-content/70">En robust backend-tjänst skapad med Java och Spring Boot för att hantera användardata och autentisering.</p>
                                <div className="card-actions justify-end mt-4">
                                    <a href="#" target="_blank" className="btn btn-sm btn-outline">Se Live</a>
                                    <a href="#" target="_blank" className="btn btn-sm btn-primary">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- */}
            {/* 5. FOOTER */}
            {/* --- */}
            <footer className="footer footer-center p-4 bg-base-100 text-base-content mt-auto">
                <aside>
                    <p>© 2025 Johan Karlsson. Byggd med DaisyUI & Tailwind CSS.</p>
                </aside>
            </footer>

        </div>
    );
};

export default App;
