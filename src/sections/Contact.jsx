
export const Contact = () => {
    const contactMethods = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
            ),
            title: "Email",
            value: "339946@student.mboutrecht.nl",
            link: "mailto:339946@student.mboutrecht.nl"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
            ),
            title: "Telefoon",
            value: "+31 6 27031709",
            link: "tel:+31627031709"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
            ),
            title: "Locatie",
            value: "Utrecht, Nederland",
            link: "#"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            title: "LinkedIn",
            value: "linkedin.com/in/sep-in-t-panhuis-34a260392/",
            link: "https://www.linkedin.com/in/sep-in-t-panhuis-34a260392/"
        }
    ];

    return (
        <section id="contact" className="py-24 px-6 bg-surface">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Neem <span className="text-primary">Contact</span> Op
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Heb je een project in gedachten? Laten we samenwerken!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold mb-6">Laten we praten</h3>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                Ik ben altijd geïnteresseerd in nieuwe projecten en samenwerkingen. 
                                Of je nu een vraag hebt of gewoon hallo wilt zeggen, ik doe mijn best 
                                om zo snel mogelijk te reageren!
                            </p>

                            {/* Contact Methods */}
                            <div className="space-y-4">
                                {contactMethods.map((method, index) => (
                                    <a 
                                        key={index}
                                        href={method.link}
                                        className="flex items-center gap-4 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">{method.title}</p>
                                            <p className="font-medium">{method.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-lg font-semibold mb-4">Volg mij</h3>
                            <div className="flex gap-3">
                                <a 
                                    href="https://github.com/seppanhuis" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/sep-in-t-panhuis-34a260392/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold mb-6">Stuur een bericht</h3>
                        <form 
                            className="space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const subject = formData.get('subject');
                                const message = formData.get('message');
                                
                                // Maak mailto link met alle velden ingevuld
                                const mailtoLink = `mailto:339946@student.mboutrecht.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
                                
                                // Open email client
                                window.location.href = mailtoLink;
                            }}
                        >
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Onderwerp *
                                </label>
                                <input 
                                    type="text" 
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Waar gaat het over?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Bericht *
                                </label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Je bericht..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                            >
                                Verzend Bericht
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
