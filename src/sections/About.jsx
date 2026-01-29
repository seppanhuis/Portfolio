
export const About = () => {
    const skills = [
        { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML", "CSS"] },
        { category: "Backend", items: ["PHP", "Laravel", "MySQL", "API's"] },
        { category: "Tools", items: ["Git", "Figma", "VS Code"] },
    ];

    return (
        <section id="about" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Over <span className="text-primary">Mij</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Leer me beter kennen
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* About Text */}
                    <div className="space-y-6">
                        <div className="glass rounded-2xl p-8 space-y-4">
                            <h3 className="text-2xl font-semibold mb-4">Hallo! 👋</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Ik ben een gepassioneerde developer met een liefde voor het creëren van
                                elegante digitale ervaringen.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Mijn focus ligt op het bouwen van schaalbare, performante applicaties
                                die echte waarde toevoegen voor gebruikers. Ik ben altijd op zoek naar
                                nieuwe uitdagingen en leer graag nieuwe technologieën.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Wanneer ik niet aan het coderen ben, ben ik waarschijnlijk aan het sporten of aan het gamen met vrienden.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-primary mb-1">4+</div>
                                <div className="text-sm text-muted-foreground">Projecten</div>
                            </div>
                            <div className="glass rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-primary mb-1">
                                    {(() => {
                                        const startDate = new Date(2024, 8); // September 2024 (month is 0-indexed)
                                        const now = new Date();
                                        const diffInMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
                                        const years = Math.floor(diffInMonths / 12);
                                        return years < 1 ? "1+" : `${years}+`;
                                    })()}
                                </div>
                                <div className="text-sm text-muted-foreground">Jaar Ervaring</div>
                            </div>
                            {/* <div className="glass rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-primary mb-1">0</div>
                                <div className="text-sm text-muted-foreground">Klanten</div>
                            </div> */}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold mb-6">Skills & Technologieën</h3>
                        {skills.map((skillSet, index) => (
                            <div key={index} className="glass rounded-2xl p-6">
                                <h4 className="text-lg font-semibold mb-4 text-primary">
                                    {skillSet.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillSet.items.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
