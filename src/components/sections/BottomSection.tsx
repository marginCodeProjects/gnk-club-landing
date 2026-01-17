export function BottomSection() {
    return (
        <section className="relative overflow-hidden">
            {/* фон */}
            <div className="absolute inset-0 bg-bottom-gradient" />

            {/* контент */}
            <div className="relative z-20 container mx-auto px-4 py-32">
                <div className="h-[100vh]"/>
            </div>
        </section>
    )
}
