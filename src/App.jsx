import profilBild from './assets/johan-profil.jpeg';

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
                            <a href="mailto:johanwilhelmkarlsson@gmail.com" className="btn btn-primary btn-lg">
                                Kontakta Mig
                            </a>
                            <a href="https://github.com/gurkvatten" target="_blank" className="btn btn-outline btn-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.25 1.838 1.25 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.468-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576c4.771-1.588 8.2-6.085 8.2-11.387c0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </a>
                            <a href="https://linkedin.com/in/dittnamn" target="_blank" className="btn btn-outline btn-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.532-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
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
