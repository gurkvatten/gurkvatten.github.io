import { motion } from "framer-motion";
import { FaGithub, FaGamepad, FaTrophy, FaCar, FaChartLine, FaCode, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjektPage = () => {
    const features = [
        {
            icon: <FaCar className="text-4xl" />,
            title: "Realistisk Racing Simulation",
            description: "60 FPS animationer med smooth interpolation och realistiska omkörningsmekaniker. Varje race känns levande och dynamisk."
        },
        {
            icon: <FaTrophy className="text-4xl" />,
            title: "Kvalificering & Strategi",
            description: "Omfattande kvalificeringssystem som påverkar startgriden. Strategiska beslut om däck, bränsle och pit-stops avgör racen."
        },
        {
            icon: <FaChartLine className="text-4xl" />,
            title: "Team Management",
            description: "Hantera ditt team, anställ förare, och utveckla din bil med strategiska uppgraderingar. Varje beslut har konsekvenser."
        },
        {
            icon: <FaGamepad className="text-4xl" />,
            title: "Upgrade System",
            description: "Randomiserade upgrade-effekter skapar strategisk osäkerhet. Du vet inte exakt vad du får förrän efter köp - precis som i verkligheten!"
        }
    ];

    const techStack = [
        { name: "SwiftUI", color: "badge-primary" },
        { name: "Swift", color: "badge-secondary" },
        { name: "iOS Development", color: "badge-accent" },
        { name: "Game Design", color: "badge-info" },
        { name: "Animation", color: "badge-success" },
    ];

    const screenshots = [
        {
            title: "Race View",
            description: "Huvudvyn under race med realtidsuppdateringar",
            placeholder: "F1+Race+View"
        },
        {
            title: "Team Management",
            description: "Hantera ditt team och uppgraderingar",
            placeholder: "Team+Manager"
        },
        {
            title: "Qualifying",
            description: "Kvalificeringssystem med varvtider",
            placeholder: "Qualifying+System"
        }
    ];

    return (
        <div className="min-h-screen bg-base-100 pt-20">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-base-200 to-base-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <Link to="/" className="btn btn-ghost mb-8 gap-2">
                        <FaArrowLeft /> Tillbaka hem
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                                <FaCar className="text-3xl text-primary" />
                            </div>
                            <div>
                                <h1 className="text-5xl md:text-6xl font-bold">
                                    <span className="text-primary">Garagiste</span> F1 Manager
                                </h1>
                            </div>
                        </div>

                        <p className="text-xl text-base-content/70 mb-8 max-w-3xl">
                            Ett omfattande racing management-spel för iOS, byggt med SwiftUI. 
                            Hantera ditt eget F1-team, utveckla din bil, och kämpa dig till toppen av förarmästerskapet.
                            Inspirerat av klassikern Grand Prix Manager från Microprose.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {techStack.map((tech, i) => (
                                <span key={i} className={`badge ${tech.color} badge-lg`}>
                                    {tech.name}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/gurkvatten"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg gap-2"
                            >
                                <FaGithub /> Se på GitHub
                            </a>
                            <button className="btn btn-outline btn-lg">
                                🚧 Under utveckling
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-base-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Huvudfunktioner
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="card-body">
                                    <div className="text-primary mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="card-title text-2xl mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-base-content/70">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Screenshots Section */}
            <section className="py-20 bg-base-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Screenshots & Demo
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {screenshots.map((shot, i) => (
                            <motion.div
                                key={i}
                                className="card bg-base-100 shadow-xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <figure className="px-4 pt-4">
                                    <div className="rounded-xl overflow-hidden bg-base-300 aspect-[9/16]">
                                        <img
                                            src={`https://placehold.co/400x700/2b2b2b/ffffff?text=${shot.placeholder}`}
                                            alt={shot.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </figure>
                                <div className="card-body">
                                    <h3 className="card-title text-primary">{shot.title}</h3>
                                    <p className="text-sm text-base-content/70">{shot.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Video Demo Placeholder */}
                    <motion.div
                        className="card bg-base-100 shadow-xl max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-body">
                            <h3 className="card-title text-2xl mb-4">
                                <span className="text-primary">Video Demo</span>
                            </h3>
                            <div className="aspect-video bg-base-300 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <FaGamepad className="text-6xl text-primary/50 mx-auto mb-4" />
                                    <p className="text-base-content/50">Kommande demo-video</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technical Details Section */}
            <section className="py-20 bg-base-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Tekniska <span className="text-primary">Detaljer</span>
                    </motion.h2>

                    <div className="space-y-6">
                        <motion.div
                            className="card bg-base-200"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body">
                                <h3 className="card-title text-primary">
                                    <FaCode /> Arkitektur
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-base-content/80">
                                    <li>Season struct med teams och races</li>
                                    <li>GameManager class för spellogik</li>
                                    <li>LiveRaceSimulator för race-execution</li>
                                    <li>60 FPS rendering med smooth interpolation</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card bg-base-200"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body">
                                <h3 className="card-title text-primary">
                                    <FaChartLine /> Gameplay Mekaniker
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-base-content/80">
                                    <li>Kvalificeringssystem som körs före varje race</li>
                                    <li>Performance-baserad race income för ekonomisk balans</li>
                                    <li>Randomiserade upgrade-effekter för strategisk osäkerhet</li>
                                    <li>Realistiska omkörningsmekaniker</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card bg-base-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body">
                                <h3 className="card-title text-primary">
                                    🎨 Design
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-base-content/80">
                                    <li>Dark theme med custom background (#2b2b2b)</li>
                                    <li>SwiftUI för native iOS-känsla</li>
                                    <li>Fokus på läsbarhet och användarvänlighet</li>
                                    <li>Smooth animations för engagerande upplevelse</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Development Status */}
            <section className="py-20 bg-base-200">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            <span className="text-primary">Utvecklingsstatus</span>
                        </h2>
                        <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
                            Projektet är aktivt under utveckling. Jag fokuserar just nu på att förbättra
                            racing-simulationen och implementera fler strategiska element.
                        </p>
                        
                        <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-100">
                            <div className="stat">
                                <div className="stat-title">Status</div>
                                <div className="stat-value text-primary text-2xl">Aktiv</div>
                                <div className="stat-desc">Under utveckling sedan Aug 2025</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title">Plattform</div>
                                <div className="stat-value text-secondary text-2xl">iOS</div>
                                <div className="stat-desc">Native SwiftUI app</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title">Version</div>
                                <div className="stat-value text-accent text-2xl">Beta</div>
                                <div className="stat-desc">Tidig utvecklingsfas</div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link to="/" className="btn btn-primary btn-lg gap-2">
                                <FaArrowLeft /> Tillbaka till startsidan
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProjektPage;
