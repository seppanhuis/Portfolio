
export const Projects = () => {
    const projects = [
        {
            title: "Pokemon team manager",
            description: "Voor een schoolopdracht heb ik een applicatie gebouwd waarmee gebruikers hun eigen Pokémon-teams kunnen samenstellen en beheren.",
            tech: ["React", "JavaScript", "CSS", "HTML", "API", "Git"],
            image: "⚡",
            link: "https://seppanhuis.github.io/",
            github: "https://github.com/seppanhuis/seppanhuis.github.io",
            hosted: true
        },
        {
            title: "Simple Todo App",
            description: "Voor een schoolopdracht heb ik een simple todo app gebouwd waarmee gebruikers hun taken kunnen beheren en in catogorien kunnen verdelen.",
            tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Git"],
            image: "📝",
            link: "#",
            github: "https://github.com/seppanhuis/FW-ToDo",
            hosted: false
        },
        {
            title: "Smile Pro tandarts website",
            description: "Voor een schoolproject heb ik een website gebouwd voor een fictieve tandartspraktijk genaamd Smile Pro. Het gaat voorval om de crud functionalteit en ik heb het medewerker gedeelte gebouwd.",
            tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Git", "Teams"],
            image: "🦷",
            link: "#",
            github: "https://github.com/seppanhuis/Smilepro",
            hosted: false
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 bg-surface">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Mijn <span className="text-primary">Projecten</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Een selectie van projecten waar ik aan heb gewerkt
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                        >
                            {/* Project Icon/Image */}
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-4">
                                {project.image}
                            </div>

                            {/* Project Info */}
                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 pt-4 border-t border-border">
                                {project.hosted ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                    >
                                        View Live
                                    </a>
                                ) : (
                                    <div
                                        className="flex-1 text-center py-2 bg-secondary text-muted-foreground rounded-lg text-sm font-medium cursor-not-allowed"
                                    >
                                        Not Hosted
                                    </div>
                                )}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center py-2 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/seppaintpanhuis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 glass rounded-full font-medium hover:bg-muted transition-colors"
                    >
                        Bekijk meer op GitHub
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
