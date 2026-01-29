
export const Experience = () => {
    const experiences = [
        {
            period: "2024 - Heden",
            role: "Student Software Development",
            company: "MBO Utrecht",
            description: "Leidde de ontwikkeling van een enterprise SaaS platform met 10.000+ gebruikers. Implementeerde microservices architectuur en optimaliseerde database performance met 60%.",
            skills: ["React", "Laravel", "MySQL", "PHP", "JS", "HTML", "CSS", "Git"]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Mijn <span className="text-primary">Ervaring</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Mijn professionele reis door de jaren heen
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div 
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Content Card */}
                                <div className="flex-1">
                                    <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                                        {/* Period Badge */}
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                            </svg>
                                            {exp.period}
                                        </div>

                                        {/* Role & Company */}
                                        <h3 className="text-xl font-semibold mb-1">
                                            {exp.role}
                                        </h3>
                                        <p className="text-primary font-medium mb-4">
                                            {exp.company}
                                        </p>

                                        {/* Description */}
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="hidden md:flex items-center justify-center">
                                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"></div>
                                </div>

                                {/* Empty Space for Alternating Layout */}
                                <div className="hidden md:block flex-1"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Download CV Button */}
                <div className="text-center mt-16">
                    <a 
                        href="#" 
                        className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}
