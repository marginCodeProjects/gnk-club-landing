import GnkInfrastructure from "@/components/main/GnkInfrastructure";
import GnkClubAdvantages from "@/components/main/GnkClubAdvantages";
import TargetGroup from "@/components/main/TargetGroup";
import MoneyRisks from "@/components/main/MoneyRisks";

export function MainSection() {
    return (
        <div className="relative bg-white z-10">
            <div className="mx-auto max-w-[1440px] px-4 md:px-20 py-24">
                <GnkInfrastructure/>
                <div className="h-px bg-[#D6D6D6] my-20"></div>
                <GnkClubAdvantages/>
                <TargetGroup/>
                <MoneyRisks/>
            </div>
        </div>
    )
}
