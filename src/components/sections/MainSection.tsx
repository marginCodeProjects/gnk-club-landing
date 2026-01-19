import GnkInfrastructure from "@/components/main/GnkInfrastructure";
import GnkClubAdvantages from "@/components/main/GnkClubAdvantages";

export function MainSection() {
    return (
        <div className="relative bg-white z-10">
            <div className="mx-auto px-20 py-24">
                <GnkInfrastructure/>
                <div className="h-px bg-[#D6D6D6] my-20"></div>
                <GnkClubAdvantages/>
            </div>
        </div>
    )
}
