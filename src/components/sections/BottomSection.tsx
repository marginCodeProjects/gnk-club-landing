import Footer from "@/components/layout/Footer";
import WorkCycle from "@/components/bottom/WorkCycle";

export function BottomSection() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-bottom-gradient" />

            <div className="relative z-20 min-h-screen">
                <div className="max-w-[1440px] mx-auto px-10">
                    <WorkCycle/>
                </div>
                <div className="h-[100vh]"/>

                <div className="max-w-[1440px] mx-auto px-20">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
