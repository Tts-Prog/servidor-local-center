import { LeftSection } from "@/components/registo/left.registo";
import { RightSection } from "@/components/registo/right.registo";



export default function registoPage(){
    return(
    <div className="bg-gray-200 h-screen flex justify-between">
        <LeftSection/>
        <RightSection/>
    </div>
    );
} 