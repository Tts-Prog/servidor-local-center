import { LeftSection } from "@/components/register/left-section"
import { RightSection } from "@/components/register/rigth-section";

export default function RegisterPage() {
    return (
        <div className="bg-gray-200 h-screen flex justify-between">

            <LeftSection />

            <RightSection />

        </div>
    );
}
