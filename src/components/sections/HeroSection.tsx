import Header from "@/components/layout/Header";
import GnkMainInfo from "@/components/hero/GNKMainInfo";
import GonkaAndBitcoin from "@/components/hero/GonkaAndBitcoin";

export function HeroSection() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0 bg-hero-gradient" />

            <div className="relative z-10 min-h-screen">
                <div className="max-w-[1440px] mx-auto px-20">
                    <Header/>
                    <GnkMainInfo/>
                </div>

                <div className="max-w-[1440px] mx-auto px-10">
                    <GonkaAndBitcoin/>
                </div>
            </div>
        </div>
    )
}
