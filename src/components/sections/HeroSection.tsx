import Header from "@/components/layout/Header";

export function HeroSection() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* фон */}
            <div className="absolute inset-0 z-0 bg-hero-gradient" />

            {/* контент */}
            <div className="relative z-10 container mx-auto px-4">
                <Header/>
            </div>
        </div>
    )
}
