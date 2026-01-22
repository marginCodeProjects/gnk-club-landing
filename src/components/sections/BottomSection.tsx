import Footer from "@/components/layout/Footer";
import WorkCycle from "@/components/bottom/WorkCycle";
import TariffsSection from "@/components/bottom/TariffsSection";
import InfrastructureAdvantages from "@/components/bottom/InfrastructureAdvantages";
import UsefulResources from "@/components/bottom/UsefulResources";
import LaunchPrice from "@/components/bottom/LaunchPrice";

export function BottomSection() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-bottom-gradient-mobile md:bg-bottom-gradient" />

            <div className="relative z-20 min-h-screen">
                <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                    <WorkCycle/>
                </div>

                <div className="max-w-[1440px] mx-auto px-5 md:px-20">
                    <TariffsSection/>
                    <InfrastructureAdvantages/>
                    <UsefulResources/>
                    <LaunchPrice/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
