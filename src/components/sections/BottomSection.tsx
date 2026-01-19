import Footer from "@/components/layout/Footer";
import WorkCycle from "@/components/bottom/WorkCycle";
import TariffsSection from "@/components/bottom/TariffsSection";

export function BottomSection() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-bottom-gradient" />

            <div className="relative z-20 min-h-screen">
                <div className="max-w-[1440px] mx-auto px-10">
                    <WorkCycle/>
                </div>

                <div className="max-w-[1440px] mx-auto px-20">
                    <TariffsSection/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
