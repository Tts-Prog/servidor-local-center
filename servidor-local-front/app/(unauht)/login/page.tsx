import { LeftSection } from "@/components/login/login/left_section";
import { RightSection } from "@/components/login/login/right_section";

export default function LoginPage() {
    return (
        <div className="bg-gray-200 h-screen flex justify-between">
            <LeftSection/>
            <RightSection/>
        </div>
    
);
}