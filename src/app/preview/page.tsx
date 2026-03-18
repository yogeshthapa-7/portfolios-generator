"use client";

import { usePortfolio } from "../context/PortfolioContext";
import { PortfolioData } from "../../lib/types";

import { Github, Linkedin, Twitter, Globe, Mail, MapPin, ExternalLink, Download, ChevronLeft, Palette } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

type TemplateKey = NonNullable<PortfolioData["template"]>

export default function Preview() {
    const { data } = usePortfolio();

    const selectedTemplate = (data.template || data.theme || 'brutalist') as TemplateKey;

    const exportHTML = () => {
        const html = document.documentElement.outerHTML;
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'portfolio.html';
        a.click();
    };

    const templates = {
        brutalist: (
            <div className="min-h-screen bg-[#0a0a0a] text-white">
                {/* Noise overlay */}
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

                <div className="relative z-10">
                    {/* Header */}
                    <header className="border-b-[12px] border-yellow-400 py-32 px-8 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12 pointer-events-none">
                            <span className="text-[20rem] font-black tracking-tighter mix-blend-overlay">PORTFOLIO</span>
                        </div>
                        <div className="max-w-6xl mx-auto relative z-10">
                            <div className="inline-block bg-yellow-400 text-black px-6 py-2 mb-8 font-bold text-xl uppercase tracking-widest border-4 border-white shadow-[8px_8px_0_0_#FFF] animate-[slideDown_0.4s_ease-out]">
                                SOFTWARE ENGINEER / CREATIVE
                            </div>
                            <h1 className="text-8xl md:text-[8rem] leading-none font-black mb-6 uppercase tracking-tighter animate-[slideDown_0.6s_ease-out] hover:text-transparent hover:text-stroke-2 transition-all duration-300" style={{ fontFamily: 'Arial Black, sans-serif', WebkitTextStroke: '3px white' }}>
                                {data.name || "Your Name"}
                            </h1>
                            <p className="text-4xl md:text-6xl text-transparent font-black mb-12 animate-[slideDown_0.8s_ease-out]" style={{ fontFamily: 'Arial Black, sans-serif', WebkitTextStroke: '2px #facc15' }}>
                                {data.role || "Your Role"}
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-8 text-xl font-bold mb-12 animate-[slideDown_1s_ease-out]">
                                {data.email && (
                                    <a href={`mailto:${data.email}`} className="flex items-center gap-3 bg-white text-black px-6 py-3 border-4 border-transparent hover:border-yellow-400 hover:bg-black hover:text-yellow-400 transition-all shadow-[6px_6px_0_0_#facc15]">
                                        <Mail className="w-6 h-6" /> {data.email}
                                    </a>
                                )}
                                {data.location && (
                                    <span className="flex items-center gap-3 bg-white text-black px-6 py-3 border-4 border-transparent shadow-[6px_6px_0_0_#facc15]">
                                        <MapPin className="w-6 h-6" /> {data.location}
                                    </span>
                                )}
                            </div>

                            <div className="flex gap-6 animate-[slideDown_1.2s_ease-out]">
                                {[
                                    { icon: Github, link: data.social.github },
                                    { icon: Linkedin, link: data.social.linkedin },
                                    { icon: Twitter, link: data.social.twitter },
                                    { icon: Globe, link: data.social.website }
                                ].map((social, idx) => social.link && (
                                    <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black p-5 border-4 border-black hover:bg-black hover:text-yellow-400 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-[8px_8px_0_0_#FFF]">
                                        <social.icon className="w-8 h-8" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </header>

                    <main className="max-w-6xl mx-auto px-8 py-20">
                        {/* About */}
                        {data.bio && (
                            <section className="mb-24 animate-[fadeIn_1s_ease-out]">
                                <div className="border-l-8 border-yellow-400 pl-8 mb-8">
                                    <h2 className="text-5xl font-black uppercase tracking-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>About</h2>
                                </div>
                                <p className="text-2xl text-gray-300 leading-relaxed font-light" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                                    {data.bio}
                                </p>
                            </section>
                        )}

                        {/* Skills */}
                        {data.skills.length > 0 && (
                            <section className="mb-24 animate-[fadeIn_1.2s_ease-out]">
                                <div className="border-l-8 border-red-500 pl-8 mb-8">
                                    <h2 className="text-5xl font-black uppercase tracking-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>Skills</h2>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {data.skills.map((skill, idx) => (
                                        <span 
                                            key={skill} 
                                            className="bg-red-500/20 border-2 border-red-500 text-red-400 px-6 py-3 text-xl font-bold uppercase animate-[scaleIn_0.3s_ease-out]"
                                            style={{ animationDelay: `${idx * 0.05}s` }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Projects */}
                        {data.projects.length > 0 && (
                            <section className="mb-24 animate-[fadeIn_1.4s_ease-out]">
                                <div className="border-l-8 border-blue-500 pl-8 mb-8">
                                    <h2 className="text-5xl font-black uppercase tracking-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>Projects</h2>
                                </div>
                                <div className="space-y-12">
                                    {data.projects.map((project, idx) => (
                                        <div 
                                            key={project.id} 
                                            className="bg-black border-[6px] border-white p-10 hover:border-blue-500 transition-all duration-300 group shadow-[12px_12px_0_0_#FFF] hover:shadow-[12px_12px_0_0_#3b82f6] hover:-translate-y-2 hover:-translate-x-2 animate-[slideUp_0.6s_ease-out]"
                                            style={{ animationDelay: `${idx * 0.1}s` }}
                                        >
                                            <h3 className="text-5xl font-black mb-6 text-white group-hover:text-blue-400 transition-colors uppercase tracking-tighter" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                                                {project.title}
                                            </h3>
                                            <p className="text-2xl text-gray-300 mb-8 leading-relaxed font-bold border-l-8 border-blue-500 pl-6" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-4 mb-10">
                                                {project.tech.map(tech => (
                                                    <Badge key={tech} className="bg-white text-black border-4 border-black px-6 py-2 text-lg font-black uppercase tracking-wider shadow-[4px_4px_0_0_#3b82f6]">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex gap-6">
                                                {project.link && (
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-blue-500 text-white px-8 py-4 text-xl font-black uppercase tracking-widest border-4 border-blue-500 hover:bg-black hover:text-blue-500 transition-colors shadow-[6px_6px_0_0_#FFF]">
                                                        <ExternalLink className="w-6 h-6" /> View Live
                                                    </a>
                                                )}
                                                {project.github && (
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white text-black px-8 py-4 text-xl font-black uppercase tracking-widest border-4 border-white hover:bg-black hover:text-white transition-colors shadow-[6px_6px_0_0_#3b82f6]">
                                                        <Github className="w-6 h-6" /> Source
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Experience */}
                        {data.experience.length > 0 && (
                            <section className="animate-[fadeIn_1.6s_ease-out]">
                                <div className="border-l-[12px] border-purple-500 pl-8 mb-12">
                                    <h2 className="text-7xl font-black uppercase tracking-tighter" style={{ fontFamily: 'Arial Black, sans-serif' }}>Experience</h2>
                                </div>
                                <div className="space-y-12">
                                    {data.experience.map((exp, idx) => (
                                        <div 
                                            key={exp.id} 
                                            className="bg-black border-[6px] border-white p-10 hover:border-purple-500 transition-all duration-300 group shadow-[12px_12px_0_0_#FFF] hover:shadow-[12px_12px_0_0_#a855f7] hover:-translate-y-2 hover:-translate-x-2 animate-[slideUp_0.6s_ease-out]"
                                            style={{ animationDelay: `${idx * 0.1}s` }}
                                        >
                                            <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
                                                <div>
                                                    <h3 className="text-4xl font-black mb-3 text-white group-hover:text-purple-400 transition-colors uppercase tracking-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                                                        {exp.position}
                                                    </h3>
                                                    <p className="text-2xl text-purple-400 font-black uppercase tracking-widest">{exp.company}</p>
                                                </div>
                                                <span className="text-white font-black text-lg bg-purple-500 px-6 py-3 border-4 border-purple-500 shadow-[6px_6px_0_0_#FFF] uppercase tracking-wider">
                                                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                                                </span>
                                            </div>
                                            <p className="text-2xl text-gray-300 mb-8 leading-relaxed font-bold border-l-8 border-purple-500 pl-6" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                                                {exp.description}
                                            </p>
                                            {exp.achievements.length > 0 && (
                                                <ul className="space-y-4 bg-white/5 p-8 border-4 border-white/20 group-hover:border-purple-500/30 transition-colors">
                                                    {exp.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start gap-6 text-gray-300">
                                                            <span className="text-purple-500 font-black text-3xl leading-none">→</span>
                                                            <span className="text-xl font-bold leading-relaxed">{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </main>

                    <footer className="border-t-4 border-yellow-400 py-12 px-8 mt-20">
                        <div className="max-w-6xl mx-auto text-center">
                            <p className="text-gray-500 text-lg">
                                Built with passion {new Date().getFullYear()}
                            </p>
                        </div>
                    </footer>
                </div>

                <style jsx>{`
                    @keyframes slideDown {
                        from { opacity: 0; transform: translateY(-30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes slideUp {
                        from { opacity: 0; transform: translateY(30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes scaleIn {
                        from { opacity: 0; transform: scale(0.8); }
                        to { opacity: 1; transform: scale(1); }
                    }
                `}</style>
            </div>
        ),
        minimal: (
            <div className="min-h-screen bg-white text-gray-900">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    {/* Header */}
                    <header className="mb-32 animate-[fadeIn_0.8s_ease-out]">
                        <h1 className="text-7xl font-light mb-4 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {data.name || "Your Name"}
                        </h1>
                        <p className="text-2xl text-gray-600 mb-8 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {data.role || "Your Role"}
                        </p>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                            {data.email && <a href={`mailto:${data.email}`} className="hover:text-gray-900 transition-colors">{data.email}</a>}
                            {data.location && <span>{data.location}</span>}
                        </div>

                        <div className="flex gap-4">
                            {data.social.github && (
                                <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {data.social.linkedin && (
                                <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                            {data.social.twitter && (
                                <a href={data.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            )}
                            {data.social.website && (
                                <a href={data.social.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                                    <Globe className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </header>

                    {/* About */}
                    {data.bio && (
                        <section className="mb-24 animate-[fadeIn_1s_ease-out]">
                            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-medium">About</h2>
                            <p className="text-xl text-gray-700 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {data.bio}
                            </p>
                        </section>
                    )}

                    {/* Skills */}
                    {data.skills.length > 0 && (
                        <section className="mb-24 animate-[fadeIn_1.2s_ease-out]">
                            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-medium">Expertise</h2>
                            <div className="flex flex-wrap gap-3">
                                {data.skills.map(skill => (
                                    <span key={skill} className="text-gray-700 border border-gray-300 px-4 py-2 text-sm font-light">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Projects */}
                    {data.projects.length > 0 && (
                        <section className="mb-24 animate-[fadeIn_1.4s_ease-out]">
                            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-medium">Selected Work</h2>
                            <div className="space-y-12">
                                {data.projects.map(project => (
                                    <div key={project.id} className="border-b border-gray-200 pb-12 last:border-0">
                                        <h3 className="text-2xl font-light mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map(tech => (
                                                <span key={tech} className="text-xs text-gray-500 bg-gray-100 px-3 py-1">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-4 text-sm">
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors underline">
                                                    View Project
                                                </a>
                                            )}
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors underline">
                                                    Source
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Experience */}
                    {data.experience.length > 0 && (
                        <section className="animate-[fadeIn_1.6s_ease-out]">
                            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8 font-medium">Experience</h2>
                            <div className="space-y-12">
                                {data.experience.map(exp => (
                                    <div key={exp.id} className="border-b border-gray-200 pb-12 last:border-0">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h3 className="text-xl font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
                                                    {exp.position}
                                                </h3>
                                                <p className="text-gray-600">{exp.company}</p>
                                            </div>
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">
                                                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>
                                        {exp.achievements.length > 0 && (
                                            <ul className="space-y-2 text-gray-600 text-sm">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="text-gray-400">•</span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <style jsx>{`
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                `}</style>
            </div>
        ),
        glassmorphic: (
            <div className="min-h-screen bg-[#0f0c29] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-[#0f0c29] to-purple-900 text-white relative overflow-hidden">
                {/* Advanced Animated Environment */}
                <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
                <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
                    <header className="mb-32 animate-[slideUp_1s_ease-out]">
                        <div className="backdrop-blur-3xl bg-white/[0.02] p-16 rounded-[3rem] border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-indigo-200 to-fuchsia-200 bg-clip-text text-transparent relative z-10" style={{ letterSpacing: '-0.03em' }}>
                                {data.name || "Your Name"}
                            </h1>
                            <p className="text-3xl font-light text-indigo-200/80 mb-10 relative z-10">
                                {data.role || "Your Role"}
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-8 text-indigo-100/60 mb-10 relative z-10">
                                {data.email && (
                                    <a href={`mailto:${data.email}`} className="flex items-center gap-3 hover:text-white transition-all duration-300">
                                        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md">
                                            <Mail className="w-5 h-5" /> 
                                        </div>
                                        {data.email}
                                    </a>
                                )}
                                {data.location && (
                                    <span className="flex items-center gap-3">
                                        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md">
                                            <MapPin className="w-5 h-5" /> 
                                        </div>
                                        {data.location}
                                    </span>
                                )}
                            </div>

                            <div className="flex gap-5 relative z-10">
                                {[
                                    { icon: Github, link: data.social.github },
                                    { icon: Linkedin, link: data.social.linkedin },
                                    { icon: Twitter, link: data.social.twitter },
                                    { icon: Globe, link: data.social.website }
                                ].map((social, idx) => social.link && (
                                    <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="backdrop-blur-2xl bg-white/[0.03] p-5 rounded-2xl hover:bg-white/[0.1] hover:-translate-y-2 transition-all duration-500 border border-white/[0.05] hover:border-white/[0.2] shadow-xl hover:shadow-fuchsia-500/20 group/icon">
                                        <social.icon className="w-6 h-6 text-indigo-200/70 group-hover/icon:text-white transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </header>

                    {data.bio && (
                        <section className="mb-24 animate-[slideUp_1s_ease-out_0.2s_both]">
                            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-indigo-300/50 mb-8 ml-4">About Me</h2>
                            <div className="backdrop-blur-3xl bg-white/[0.02] p-12 rounded-[2.5rem] border border-white/[0.05] hover:border-white/[0.1] transition-colors duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                                <p className="text-2xl text-white/80 leading-relaxed font-light">
                                    {data.bio}
                                </p>
                            </div>
                        </section>
                    )}

                    {data.skills.length > 0 && (
                        <section className="mb-24 animate-[slideUp_1s_ease-out_0.3s_both]">
                            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-indigo-300/50 mb-8 ml-4">Expertise</h2>
                            <div className="backdrop-blur-3xl bg-white/[0.02] p-12 rounded-[2.5rem] border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                                <div className="flex flex-wrap gap-4">
                                    {data.skills.map(skill => (
                                        <span key={skill} className="backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] text-indigo-50 px-6 py-3 rounded-2xl text-sm font-medium hover:scale-105 hover:bg-white/[0.15] transition-all duration-300 shadow-lg cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {data.projects.length > 0 && (
                        <section className="mb-24 animate-[slideUp_1s_ease-out_0.4s_both]">
                            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-indigo-300/50 mb-8 ml-4">Featured Work</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {data.projects.map((project, idx) => (
                                    <div key={project.id} className="backdrop-blur-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-10 rounded-[2.5rem] border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:-translate-y-4 hover:shadow-[0_20px_40px_-10px_rgba(147,51,234,0.3)] transition-all duration-500 group relative overflow-hidden text-left" style={{ animationDelay: `${idx * 0.1}s` }}>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full filter blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent group-hover:to-white transition-all">
                                            {project.title}
                                        </h3>
                                        <p className="text-indigo-100/60 mb-8 leading-relaxed font-light text-lg">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-3 mb-10">
                                            {project.tech.map(tech => (
                                                <Badge key={tech} className="bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 px-4 py-1.5 rounded-xl font-medium backdrop-blur-md">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex gap-6 mt-auto">
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors border-b border-white/0 hover:border-white/50 pb-1">
                                                    <ExternalLink className="w-4 h-4" /> Live Preview
                                                </a>
                                            )}
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors border-b border-white/0 hover:border-white/50 pb-1">
                                                    <Github className="w-4 h-4" /> Source
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.experience.length > 0 && (
                        <section className="animate-[slideUp_1s_ease-out_0.5s_both]">
                            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-indigo-300/50 mb-8 ml-4">Professional Experience</h2>
                            <div className="space-y-8">
                                {data.experience.map((exp, idx) => (
                                    <div key={exp.id} className="backdrop-blur-3xl bg-white/[0.02] p-10 rounded-[2.5rem] border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:-translate-x-2 hover:border-white/[0.1] transition-all duration-500 group relative overflow-hidden">
                                        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-fuchsia-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2 text-white/90 group-hover:text-white transition-colors">
                                                    {exp.position}
                                                </h3>
                                                <p className="text-xl text-indigo-300/80 font-light">{exp.company}</p>
                                            </div>
                                            <span className="text-sm text-indigo-200/60 backdrop-blur-2xl bg-white/[0.03] border border-white/[0.05] px-5 py-2.5 rounded-2xl font-medium tracking-wide">
                                                {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                                            </span>
                                        </div>
                                        {exp.description && (
                                            <p className="text-indigo-50/70 mb-8 leading-relaxed font-light text-lg">
                                                {exp.description}
                                            </p>
                                        )}
                                        {exp.achievements.length > 0 && (
                                            <ul className="space-y-4">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-4 text-indigo-100/80 font-light">
                                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-fuchsia-400 flex-shrink-0 shadow-[0_0_10px_rgba(232,121,249,0.8)]"></div>
                                                        <span className="leading-relaxed">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <style jsx>{`
                    @keyframes blob {
                        0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
                        33% { transform: translate(30px, -50px) scale(1.1) rotate(120deg); }
                        66% { transform: translate(-20px, 20px) scale(0.9) rotate(240deg); }
                    }
                    @keyframes slideUp {
                        from { opacity: 0; transform: translateY(40px); filter: blur(10px); }
                        to { opacity: 1; transform: translateY(0); filter: blur(0); }
                    }
                    .animate-blob { animation: blob 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
                    .animation-delay-2000 { animation-delay: 2s; }
                    .animation-delay-4000 { animation-delay: 4s; }
                `}</style>
            </div>
        ),
        neon: (
            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                {/* Neon Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                
                {/* Glowing Orbs */}
                <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-[120px] opacity-30 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500 rounded-full filter blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
                    {/* Header */}
                    <header className="mb-24 animate-[neonFlicker_2s_ease-in-out_infinite]">
                        <h1 className="text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600" style={{ 
                            fontFamily: 'Orbitron, monospace',
                            textShadow: '0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(255,0,255,0.3)'
                        }}>
                            {data.name || "YOUR NAME"}
                        </h1>
                        <p className="text-3xl text-cyan-400 mb-8 font-mono tracking-wider" style={{
                            textShadow: '0 0 10px rgba(0,255,255,0.8)'
                        }}>
                            [ {data.role || "YOUR ROLE"} ]
                        </p>
                        
                        <div className="flex items-center gap-8 text-sm text-gray-400 mb-8 font-mono">
                            {data.email && (
                                <a href={`mailto:${data.email}`} className="hover:text-cyan-400 transition-all hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
                                    <Mail className="inline w-4 h-4 mr-2" /> {data.email}
                                </a>
                            )}
                            {data.location && (
                                <span className="text-pink-400">
                                    <MapPin className="inline w-4 h-4 mr-2" /> {data.location}
                                </span>
                            )}
                        </div>

                        <div className="flex gap-4">
                            {data.social.github && (
                                <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="bg-cyan-500/10 border-2 border-cyan-500 p-4 hover:bg-cyan-500/20 transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                                    <Github className="w-6 h-6 text-cyan-400" />
                                </a>
                            )}
                            {data.social.linkedin && (
                                <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-pink-500/10 border-2 border-pink-500 p-4 hover:bg-pink-500/20 transition-all hover:shadow-[0_0_20px_rgba(255,0,255,0.5)]">
                                    <Linkedin className="w-6 h-6 text-pink-400" />
                                </a>
                            )}
                            {data.social.twitter && (
                                <a href={data.social.twitter} target="_blank" rel="noopener noreferrer" className="bg-cyan-500/10 border-2 border-cyan-500 p-4 hover:bg-cyan-500/20 transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                                    <Twitter className="w-6 h-6 text-cyan-400" />
                                </a>
                            )}
                            {data.social.website && (
                                <a href={data.social.website} target="_blank" rel="noopener noreferrer" className="bg-pink-500/10 border-2 border-pink-500 p-4 hover:bg-pink-500/20 transition-all hover:shadow-[0_0_20px_rgba(255,0,255,0.5)]">
                                    <Globe className="w-6 h-6 text-pink-400" />
                                </a>
                            )}
                        </div>
                    </header>

                    {/* About */}
                    {data.bio && (
                        <section className="mb-20 border-l-4 border-cyan-400 pl-8" style={{
                            boxShadow: '-5px 0 20px rgba(0,255,255,0.3)'
                        }}>
                            <h2 className="text-3xl font-black mb-6 text-cyan-400 font-mono tracking-wider">[ ABOUT ]</h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                {data.bio}
                            </p>
                        </section>
                    )}

                    {/* Skills */}
                    {data.skills.length > 0 && (
                        <section className="mb-20 border-l-4 border-pink-400 pl-8" style={{
                            boxShadow: '-5px 0 20px rgba(255,0,255,0.3)'
                        }}>
                            <h2 className="text-3xl font-black mb-8 text-pink-400 font-mono tracking-wider">[ SKILLS ]</h2>
                            <div className="flex flex-wrap gap-4">
                                {data.skills.map(skill => (
                                    <span 
                                        key={skill} 
                                        className="bg-pink-500/10 border-2 border-pink-500 text-pink-400 px-6 py-3 text-sm font-mono uppercase tracking-wider hover:bg-pink-500/20 transition-all"
                                        style={{
                                            boxShadow: '0 0 15px rgba(255,0,255,0.3)'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Projects */}
                    {data.projects.length > 0 && (
                        <section className="mb-20 border-l-4 border-cyan-400 pl-8" style={{
                            boxShadow: '-5px 0 20px rgba(0,255,255,0.3)'
                        }}>
                            <h2 className="text-3xl font-black mb-8 text-cyan-400 font-mono tracking-wider">[ PROJECTS ]</h2>
                            <div className="space-y-8">
                                {data.projects.map(project => (
                                    <div 
                                        key={project.id} 
                                        className="border-2 border-cyan-500/30 p-8 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all group"
                                        style={{
                                            boxShadow: '0 0 20px rgba(0,255,255,0.1)'
                                        }}
                                    >
                                        <h3 className="text-2xl font-black mb-4 text-white group-hover:text-cyan-400 transition-colors font-mono uppercase">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-3 mb-6">
                                            {project.tech.map(tech => (
                                                <Badge key={tech} className="bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 px-3 py-1 font-mono text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex gap-6">
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm">
                                                    <ExternalLink className="w-4 h-4" /> LIVE SITE
                                                </a>
                                            )}
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-mono text-sm">
                                                    <Github className="w-4 h-4" /> SOURCE
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Experience */}
                    {data.experience.length > 0 && (
                        <section className="border-l-4 border-pink-400 pl-8" style={{
                            boxShadow: '-5px 0 20px rgba(255,0,255,0.3)'
                        }}>
                            <h2 className="text-3xl font-black mb-8 text-pink-400 font-mono tracking-wider">[ EXPERIENCE ]</h2>
                            <div className="space-y-8">
                                {data.experience.map(exp => (
                                    <div 
                                        key={exp.id} 
                                        className="border-2 border-pink-500/30 p-8 hover:border-pink-500 hover:bg-pink-500/5 transition-all group"
                                        style={{
                                            boxShadow: '0 0 20px rgba(255,0,255,0.1)'
                                        }}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-black mb-2 text-white group-hover:text-pink-400 transition-colors font-mono uppercase">
                                                    {exp.position}
                                                </h3>
                                                <p className="text-xl text-gray-400">{exp.company}</p>
                                            </div>
                                            <span className="text-xs text-cyan-400 border border-cyan-500 px-4 py-2 font-mono">
                                                {exp.startDate} → {exp.current ? 'NOW' : exp.endDate}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            {exp.description}
                                        </p>
                                        {exp.achievements.length > 0 && (
                                            <ul className="space-y-3">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-4 text-gray-300">
                                                        <span className="text-pink-400 font-mono text-xl">›</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <style jsx>{`
                    @keyframes neonFlicker {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.95; }
                    }
                `}</style>
            </div>
        ),
        editorial: (
            <div className="min-h-screen bg-[#0f0f0f] text-white">
                <div className="max-w-5xl mx-auto px-10 py-20">
                    <header className="border-b border-white/20 pb-12 mb-16">
                        <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Editorial Portfolio</p>
                        <h1 className="text-6xl font-semibold mt-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {data.name || "Your Name"}
                        </h1>
                        <p className="text-xl text-gray-300 mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {data.role || "Your Role"}
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm text-gray-400 mt-8">
                            {data.email && <span>{data.email}</span>}
                            {data.location && <span>{data.location}</span>}
                        </div>
                    </header>

                    {data.bio && (
                        <section className="mb-14">
                            <h2 className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-4">About</h2>
                            <p className="text-lg text-gray-300 leading-relaxed">{data.bio}</p>
                        </section>
                    )}

                    {data.skills.length > 0 && (
                        <section className="mb-14">
                            <h2 className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-4">Expertise</h2>
                            <div className="flex flex-wrap gap-3">
                                {data.skills.map(skill => (
                                    <span key={skill} className="border border-white/20 px-4 py-2 text-sm text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.projects.length > 0 && (
                        <section className="mb-14">
                            <h2 className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-6">Selected Work</h2>
                            <div className="space-y-8">
                                {data.projects.map(project => (
                                    <div key={project.id} className="border border-white/10 p-6">
                                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                                        <p className="text-gray-400 mt-2">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tech.map(tech => (
                                                <span key={tech} className="text-xs text-amber-200 bg-amber-500/10 px-3 py-1">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.experience.length > 0 && (
                        <section>
                            <h2 className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-6">Experience</h2>
                            <div className="space-y-6">
                                {data.experience.map(exp => (
                                    <div key={exp.id} className="border border-white/10 p-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-semibold">{exp.position}</h3>
                                                <p className="text-gray-400">{exp.company}</p>
                                            </div>
                                            <span className="text-xs text-gray-400">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                        </div>
                                        <p className="text-gray-400 mt-3">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        ),
        aurora: (
            <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-950 to-indigo-950 text-white">
                <div className="max-w-6xl mx-auto px-8 py-20">
                    <header className="mb-16">
                        <h1 className="text-6xl font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>
                            {data.name || "Your Name"}
                        </h1>
                        <p className="text-xl text-emerald-200 mt-4">{data.role || "Your Role"}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-300 mt-6">
                            {data.email && <span>{data.email}</span>}
                            {data.location && <span>{data.location}</span>}
                        </div>
                    </header>

                    {data.bio && (
                        <section className="mb-12 bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h2 className="text-lg font-semibold text-emerald-200 mb-4">About</h2>
                            <p className="text-slate-200 leading-relaxed">{data.bio}</p>
                        </section>
                    )}

                    {data.skills.length > 0 && (
                        <section className="mb-12">
                            <h2 className="text-lg font-semibold text-emerald-200 mb-4">Skills</h2>
                            <div className="flex flex-wrap gap-3">
                                {data.skills.map(skill => (
                                    <span key={skill} className="bg-emerald-500/15 border border-emerald-400/30 px-4 py-2 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.projects.length > 0 && (
                        <section className="mb-12">
                            <h2 className="text-lg font-semibold text-emerald-200 mb-6">Projects</h2>
                            <div className="grid gap-6">
                                {data.projects.map(project => (
                                    <div key={project.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 group">
                                        <h3 className="text-2xl font-semibold group-hover:text-emerald-400 transition-colors cursor-default">{project.title}</h3>
                                        <p className="text-slate-300 mt-2">{project.description}</p>
                                        {project.tech.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {project.tech.map(tech => (
                                                    <span key={tech} className="bg-slate-800/50 text-emerald-200 border border-emerald-500/20 px-3 py-1 rounded-full text-xs">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <div className="flex gap-4 mt-4">
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                                                    <ExternalLink className="w-4 h-4" /> Live
                                                </a>
                                            )}
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                                                    <Github className="w-4 h-4" /> Repo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.experience.length > 0 && (
                        <section>
                            <h2 className="text-lg font-semibold text-emerald-200 mb-6">Experience</h2>
                            <div className="space-y-6">
                                {data.experience.map(exp => (
                                    <div key={exp.id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-semibold">{exp.position}</h3>
                                                <p className="text-slate-300">{exp.company}</p>
                                            </div>
                                            <span className="text-xs text-slate-400">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                        </div>
                                        {exp.description && (
                                            <p className="text-slate-300 mt-4 leading-relaxed">{exp.description}</p>
                                        )}
                                        {exp.achievements.length > 0 && (
                                            <ul className="mt-4 space-y-2">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-300">
                                                        <span className="text-emerald-400 mt-1 flex-shrink-0">▹</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        ),
        mono: (
            <div className="min-h-screen bg-zinc-950 text-zinc-100">
                <div className="max-w-5xl mx-auto px-8 py-20">
                    <header className="mb-16 border-b border-zinc-800 pb-10">
                        <h1 className="text-5xl font-semibold" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
                            {data.name || "Your Name"}
                        </h1>
                        <p className="text-zinc-400 mt-4">{data.role || "Your Role"}</p>
                    </header>

                    {data.bio && (
                        <section className="mb-10">
                            <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">About</h2>
                            <p className="text-zinc-300 leading-relaxed">{data.bio}</p>
                        </section>
                    )}

                    {data.skills.length > 0 && (
                        <section className="mb-10">
                            <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {data.skills.map(skill => (
                                    <span key={skill} className="border border-zinc-700 px-3 py-1 text-xs">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.projects.length > 0 && (
                        <section className="mb-10">
                            <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6">Projects</h2>
                            <div className="space-y-6">
                                {data.projects.map(project => (
                                    <div key={project.id} className="border border-zinc-800 p-5">
                                        <h3 className="text-lg font-medium">{project.title}</h3>
                                        <p className="text-zinc-400 mt-2">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.experience.length > 0 && (
                        <section>
                            <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6">Experience</h2>
                            <div className="space-y-4">
                                {data.experience.map(exp => (
                                    <div key={exp.id} className="border border-zinc-800 p-5">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-lg font-medium">{exp.position}</h3>
                                                <p className="text-zinc-400">{exp.company}</p>
                                            </div>
                                            <span className="text-xs text-zinc-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        ),
        sunset: (
            <div className="min-h-screen bg-gradient-to-br from-orange-100 via-rose-50 to-amber-100 text-rose-900">
                <div className="max-w-5xl mx-auto px-8 py-20">
                    <header className="mb-14">
                        <h1 className="text-6xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {data.name || "Your Name"}
                        </h1>
                        <p className="text-xl text-rose-700 mt-3">{data.role || "Your Role"}</p>
                    </header>

                    {data.bio && (
                        <section className="mb-12 bg-white/70 rounded-2xl p-8 shadow-md">
                            <h2 className="text-lg font-semibold text-rose-700 mb-4">About</h2>
                            <p className="text-rose-800 leading-relaxed">{data.bio}</p>
                        </section>
                    )}

                    {data.projects.length > 0 && (
                        <section className="mb-12">
                            <h2 className="text-lg font-semibold text-rose-700 mb-6">Projects</h2>
                            <div className="grid gap-6">
                                {data.projects.map(project => (
                                    <div key={project.id} className="bg-white/80 rounded-2xl p-6 shadow-sm">
                                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                                        <p className="text-rose-700 mt-2">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.experience.length > 0 && (
                        <section>
                            <h2 className="text-lg font-semibold text-rose-700 mb-6">Experience</h2>
                            <div className="space-y-6">
                                {data.experience.map(exp => (
                                    <div key={exp.id} className="bg-white/80 rounded-2xl p-6 shadow-sm">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-xl font-semibold">{exp.position}</h3>
                                                <p className="text-rose-700">{exp.company}</p>
                                            </div>
                                            <span className="text-xs text-rose-600">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        ),
        clay: (
            <div className="min-h-screen bg-[#f4ede6] text-[#3d2f2a]">
                <div className="max-w-5xl mx-auto px-8 py-20">
                    <header className="mb-14">
                        <p className="text-sm uppercase tracking-[0.3em] text-[#8b6f63]">Portfolio</p>
                        <h1 className="text-5xl font-semibold mt-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            {data.name || "Your Name"}
                        </h1>
                        <p className="text-lg text-[#8b6f63] mt-2">{data.role || "Your Role"}</p>
                    </header>

                    {data.bio && (
                        <section className="mb-10 bg-white/70 border border-[#e4d6cd] rounded-3xl p-8">
                            <h2 className="text-lg font-semibold text-[#8b6f63] mb-3">About</h2>
                            <p className="leading-relaxed">{data.bio}</p>
                        </section>
                    )}

                    {data.skills.length > 0 && (
                        <section className="mb-10">
                            <h2 className="text-lg font-semibold text-[#8b6f63] mb-3">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {data.skills.map(skill => (
                                    <span key={skill} className="bg-white/80 border border-[#e4d6cd] px-3 py-2 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.experience.length > 0 && (
                        <section>
                            <h2 className="text-lg font-semibold text-[#8b6f63] mb-4">Experience</h2>
                            <div className="space-y-5">
                                {data.experience.map(exp => (
                                    <div key={exp.id} className="bg-white/80 border border-[#e4d6cd] rounded-3xl p-6">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-xl font-semibold">{exp.position}</h3>
                                                <p className="text-[#8b6f63]">{exp.company}</p>
                                            </div>
                                            <span className="text-xs text-[#8b6f63]">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        ),
        blueprint: (
            <div className="min-h-screen bg-[#061428] text-blue-100">
                <div className="max-w-6xl mx-auto px-8 py-20">
                    <header className="mb-16 border-b border-blue-400/30 pb-10">
                        <p className="text-xs uppercase tracking-[0.4em] text-blue-300">Blueprint Portfolio</p>
                        <h1 className="text-5xl font-semibold mt-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            {data.name || "Your Name"}
                        </h1>
                        <p className="text-lg text-blue-300 mt-2">{data.role || "Your Role"}</p>
                    </header>

                    {data.projects.length > 0 && (
                        <section className="mb-12">
                            <h2 className="text-lg font-semibold text-blue-200 mb-4">Projects</h2>
                            <div className="grid gap-6">
                                {data.projects.map(project => (
                                    <div key={project.id} className="border border-blue-400/20 bg-blue-900/30 p-6">
                                        <h3 className="text-xl font-semibold">{project.title}</h3>
                                        <p className="text-blue-200 mt-2">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.experience.length > 0 && (
                        <section>
                            <h2 className="text-lg font-semibold text-blue-200 mb-4">Experience</h2>
                            <div className="space-y-6">
                                {data.experience.map(exp => (
                                    <div key={exp.id} className="border border-blue-400/20 bg-blue-900/30 p-6">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-xl font-semibold">{exp.position}</h3>
                                                <p className="text-blue-300">{exp.company}</p>
                                            </div>
                                            <span className="text-xs text-blue-300">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        )
    };

    return (
        <div className="relative">
            {/* Render Selected Template */}
            {templates[selectedTemplate]}
        </div>
    );
}