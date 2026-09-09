import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { content, EMAIL, GITHUB, LINKEDIN } from '../data/portfolio';

// eslint-disable-next-line react/prop-types
export default function AppFooter({ lang }) {
    const t = content[lang].footer;
    return (
        <footer className="border-t border-base-300/40 py-10">
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <div>
                        <p className="text-lg font-black tracking-tight"><span className="text-primary">Johan</span> Karlsson</p>
                        <p className="text-base-content/35 text-sm">{t.role}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm btn-square" aria-label="GitHub"><FaGithub size={17} /></a>
                        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm btn-square" aria-label="LinkedIn"><FaLinkedin size={17} /></a>
                        <a href={EMAIL} className="btn btn-ghost btn-sm btn-square" aria-label="Email"><FaEnvelope size={17} /></a>
                    </div>
                    <p className="text-base-content/20 text-xs">{t.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
