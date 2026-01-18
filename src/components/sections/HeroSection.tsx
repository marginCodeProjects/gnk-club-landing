import Header from "@/components/layout/Header";
import GnkMainInfo from "@/components/hero/GNKMainInfo";

export function HeroSection() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0 bg-hero-gradient" />

            <div className="relative z-10 container mx-auto px-4">
                <Header/>
                <GnkMainInfo/>
            </div>
        </div>
    )
}
