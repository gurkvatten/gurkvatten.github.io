import {
    FaCar, FaTrophy, FaChartLine, FaGamepad,
} from 'react-icons/fa';
import profilBild from '../assets/johan-profil.jpeg';
import garagisteIcon from '../assets/garagisteicon1.png';
import screenshotLiveRace from '../assets/screenshot-liverace.png';
import screenshotTeamDashboard from '../assets/screenshot-teamdashboard.png';
import screenshotTeamSelection from '../assets/screenshot-teamselection.png';
import screenshotUpgrades from '../assets/screenshot-upgrades.png';

export const GITHUB = 'https://github.com/gurkvatten';
export const LINKEDIN = 'https://www.linkedin.com/in/johan-karlsson-871537223';
export const EMAIL = 'mailto:johanwilhelmkarlsson@gmail.com';
export const APPSTORE = 'https://apps.apple.com/se/app/garagiste/id6743622569';
export const DREAMS_OF_SPEED = '/dos/';
export { profilBild, garagisteIcon };

export const content = {
    sv: {
        nav: { home: 'Hem', skills: 'Färdigheter', timeline: 'Erfarenhet', news: 'Nyheter', project: 'Projekt', nextProject: 'Nästa projekt', themeAria: 'Växla tema', langAria: 'Byt språk till engelska', langLabel: 'EN', menuAria: 'Öppna meny' },
        hero: { greeting: 'Hej, jag är', firstName: 'Johan', lastName: 'Karlsson', titleRole: 'App Utvecklare', available: 'Öppen för möjligheter', body: 'Jag är en apputvecklare specialiserad på Java och mobilutveckling i Swift och Kotlin. Jag har erfarenhet från fullstack-projekt och frontend med Flutter, och drivs av att skapa rena och funktionella lösningar.', ctaContact: 'Kontakta Mig', ctaGithub: 'GitHub', ctaLinkedin: 'LinkedIn' },
        skills: { sectionNum: '02', titleLead: 'Mina', titleHighlight: 'Färdigheter', body: 'Från mobil till webb – jag bygger i hela stacken.', cats: { mobile: 'Mobil', web: 'Webb', backend: 'Backend', tools: 'Verktyg' } },
        timeline: { sectionNum: '03', title: 'Erfarenhet & Utbildning', items: [
            { period: '2025 – Idag', title: 'Yrkeshögskola', subtitle: 'IT Högskolan – Javautvecklare', body: 'Just nu pluggar jag Java.', type: 'education' },
            { period: '2024', title: 'Frontend Utvecklare', subtitle: 'Eventstaden', body: 'Jobbade med frontendkomponenter i Flutter.', type: 'work' },
            { period: '2022 – 2024', title: 'Yrkeshögskoleexamen', subtitle: 'Folkuniversitetet – Mobilapplikationsutvecklare', body: 'Fokus på Swift, Kotlin och lite backend.', type: 'education' },
            { period: '2022', title: 'Karriärstart', subtitle: 'Startade karriären inom tech!', body: '', type: 'milestone' },
        ] },
        news: { sectionNum: '04', titleLead: 'Nyheter &', titleHighlight: 'vad jag gör nu', updated: 'Senast uppdaterad: Mars 2026', updates: [
            { date: 'Mar 2026', title: 'Javaverktyg och byggmiljöer klar', body: 'Färdig med kursen Javaverktyg och byggmiljöer.' },
            { date: 'Apr 2026', title: 'Garagiste finns nu i App Store!', body: 'Spelet är nu officiellt ute i App Store. Ladda ner och kör!' },
            { date: 'Jan 2026', title: 'Utveckling mot databaser avslutad', body: 'Avslutade kursen Utveckling mot databaser och har byggt upp en stabil grund i databaser och SQL.' },
            { date: 'Nov 2025', title: 'Javautveckling klar', body: 'Jag har avslutat kursen Javautveckling och stärkts i allt från OOP till strukturerad problemlösning.' },
            { date: 'Okt 2025', title: 'Bygger Racing-manager i SwiftUI', body: 'Jag implementerar ett system för biluppgraderingar och förarhantering. Fokus på mer interaktivt UI.' },
        ] },
        project: { sectionNum: '05', label: 'Utvalda Projekt', titleLead: 'Garagiste', titleHighlight: 'Racing Manager', intro: 'Har du vad som krävs för att leda ett stall till toppen? Ta rollen som Team Principal i detta strategiska managerspel. Du bestämmer taktiken, du bygger bilen, och du tar konsekvenserna.', ctaPrimary: 'Ladda ner på App Store', betaLabel: 'v1.0', betaTip: 'Nu ute i App Store', features: [
            { icon: FaCar, title: 'Intensiva Race', description: 'Följ loppen varv för varv. Dina förare reagerar på omgivningen, gör vågade omkörningar och kämpar om varje position.' },
            { icon: FaChartLine, title: 'Strategiska Beslut', description: 'När börjar däcken ta slut? Är det dags för en undercut? Dina beslut från depån avgör om det blir vinst eller förlust.' },
            { icon: FaTrophy, title: 'Bygg ditt arv', description: 'Starta från botten och arbeta dig uppåt. Investera prispengar i bilen, anställ bättre förare och ta ditt stall till toppen.' },
            { icon: FaGamepad, title: 'Oförutsägbart', description: 'Precis som i verkligheten kan allt hända. Väderomslag, krascher och Safety Cars kan vända strategin.' },
        ], tags: ['Manager Game', 'Strategy', 'Racing', 'iOS Native'], screenshotsLead: 'En titt in i', screenshotsHighlight: 'depån', screenshots: [
            { title: 'Live Race', description: 'Följ spänningen i realtid från depån', src: screenshotLiveRace },
            { title: 'Team Dashboard', description: 'Håll koll på stallets status och resultat', src: screenshotTeamDashboard },
            { title: 'Team Selection', description: 'Välj förare och strategi inför helgen', src: screenshotTeamSelection },
            { title: 'Upgrades', description: 'Utveckla bilen och maximera prestanda', src: screenshotUpgrades },
        ], betaTitle: 'Redo att köra?', betaBody: 'Garagiste finns nu i App Store. Ladda ner och ta ditt stall till toppen!', betaLink: 'Hämta Garagiste på App Store →' },
        footer: { role: 'Utvecklare & Designer', copyright: '© 2025 Johan Karlsson. Byggd med DaisyUI & Tailwind CSS.' },
    },
    en: {
        nav: { home: 'Home', skills: 'Skills', timeline: 'Experience', news: 'News', project: 'Project', nextProject: 'Next project', themeAria: 'Toggle theme', langAria: 'Byt språk till svenska', langLabel: 'SV', menuAria: 'Open menu' },
        hero: { greeting: "Hi, I'm", firstName: 'Johan', lastName: 'Karlsson', titleRole: 'App Developer', available: 'Open to opportunities', body: "I'm an app developer specializing in Java and mobile development with Swift and Kotlin. I have experience in both fullstack projects and frontend work with Flutter, and I enjoy building clean, functional solutions.", ctaContact: 'Contact Me', ctaGithub: 'GitHub', ctaLinkedin: 'LinkedIn' },
        skills: { sectionNum: '02', titleLead: 'My', titleHighlight: 'Skills', body: 'From mobile to web — I build across the full stack.', cats: { mobile: 'Mobile', web: 'Web', backend: 'Backend', tools: 'Tools' } },
        timeline: { sectionNum: '03', title: 'Experience & Education', items: [
            { period: '2025 – Present', title: 'Vocational College', subtitle: 'IT Högskolan – Java Developer', body: 'Currently studying Java.', type: 'education' },
            { period: '2024', title: 'Frontend Developer', subtitle: 'Eventstaden', body: 'Worked on frontend components in Flutter.', type: 'work' },
            { period: '2022 – 2024', title: 'Vocational Degree', subtitle: 'Folkuniversitetet – Mobile App Developer', body: 'Focus on Swift, Kotlin, and some backend.', type: 'education' },
            { period: '2022', title: 'Career Start', subtitle: 'Started my career in tech!', body: '', type: 'milestone' },
        ] },
        news: { sectionNum: '04', titleLead: 'News &', titleHighlight: "what I'm working on", updated: 'Last updated: Mars 2026', updates: [
            { date: 'Mar 2026', title: 'Javaverktyg och byggmiljöer done', body: 'Im done with the course Javaverktyg och byggmiljöer.' },
            { date: 'Apr 2026', title: 'Garagiste is now on the App Store!', body: 'The game is officially live on the App Store. Download it and race to the top!' },
            { date: 'Jan 2026', title: 'Database Development completed', body: 'Finished the Database Development course and built a solid foundation in databases and SQL.' },
            { date: 'Nov 2025', title: 'Java development completed', body: 'Completed the Java Development course and strengthened everything from OOP to structured problem solving.' },
            { date: 'Oct 2025', title: 'Building a racing manager in SwiftUI', body: 'Implementing a system for car upgrades and driver management, focusing on clearer and more interactive UI.' },
        ] },
        project: { sectionNum: '05', label: 'Featured Project', titleLead: 'Garagiste', titleHighlight: 'Racing Manager', intro: 'Do you have what it takes to lead a team to the top? Take the role of Team Principal in this strategic manager game. You set the tactics, you build the car, and you live with the results.', ctaPrimary: 'Download on App Store', betaLabel: 'v1.0', betaTip: 'Now live on the App Store', features: [
            { icon: FaCar, title: 'Intense Races', description: 'Follow races lap by lap. Your drivers react to the surroundings, make bold overtakes, and fight for every position.' },
            { icon: FaChartLine, title: 'Strategic Decisions', description: 'When do the tires fade? Is it time for an undercut? Your pit wall calls decide wins and losses.' },
            { icon: FaTrophy, title: 'Build Your Legacy', description: 'Start from the bottom and rise up. Reinvest prize money, hire better drivers, and take your team to a championship.' },
            { icon: FaGamepad, title: 'Unpredictable', description: 'Just like real life, anything can happen. Weather swings, crashes, and safety cars can flip the strategy.' },
        ], tags: ['Manager Game', 'Strategy', 'Racing', 'iOS Native'], screenshotsLead: 'A peek into the', screenshotsHighlight: 'pit', screenshots: [
            { title: 'Live Race', description: 'Follow the action live from the pit wall', src: screenshotLiveRace },
            { title: 'Team Dashboard', description: "Track your team's status and results", src: screenshotTeamDashboard },
            { title: 'Team Selection', description: 'Choose drivers and strategy for the weekend', src: screenshotTeamSelection },
            { title: 'Upgrades', description: 'Develop the car and maximize performance', src: screenshotUpgrades },
        ], betaTitle: 'Ready to race?', betaBody: 'Garagiste is now available on the App Store. Download it and lead your team to the championship!', betaLink: 'Get Garagiste on the App Store →' },
        footer: { role: 'Developer & Designer', copyright: '© 2025 Johan Karlsson. Built with DaisyUI & Tailwind CSS.' },
    },
};

export const skillsData = { mobile: ['Swift', 'SwiftUI', 'Kotlin', 'Flutter', 'iOS', 'Android'], web: ['React', 'Tailwind CSS', 'Node.js', 'HTML/CSS'], backend: ['Java', 'SQL', 'REST APIs'], tools: ['Docker', 'CI/CD', 'Git', 'Xcode', 'Android Studio'] };
export const catColors = {
    mobile: { pill: 'bg-primary/10 text-primary border border-primary/25', head: 'text-primary' },
    web: { pill: 'bg-secondary/10 text-secondary border border-secondary/25', head: 'text-secondary' },
    backend: { pill: 'bg-accent/10 text-accent border border-accent/25', head: 'text-accent' },
    tools: { pill: 'bg-base-content/5 text-base-content/55 border border-base-content/15', head: 'text-base-content/45' },
};
export const typeStyle = { education: 'bg-primary/10 text-primary border border-primary/30', work: 'bg-secondary/10 text-secondary border border-secondary/30', milestone: 'bg-accent/10 text-accent border border-accent/30' };
export const typeLabel = { sv: { education: 'Utbildning', work: 'Arbete', milestone: 'Milstolpe' }, en: { education: 'Education', work: 'Work', milestone: 'Milestone' } };
