import Footer from "@/components/layout/Footer";

export function BottomSection() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* фон */}
            <div className="absolute inset-0 bg-bottom-gradient" />

            {/* контент */}
            <div className="relative z-20 container mx-auto px-4">
                <div className="h-[100vh]"/>
                <Footer/>
            </div>
        </div>
    )
}
