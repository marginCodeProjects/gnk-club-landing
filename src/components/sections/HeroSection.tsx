export function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            {/* фон */}
            <div className="absolute inset-0 bg-hero-gradient" />

            {/* контент */}
            <div className="relative z-10 container mx-auto px-4 pt-10 pb-32">
                <div className="h-[100vh]"/>
            </div>
        </section>
    )
}
