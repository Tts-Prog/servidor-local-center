import { LeftSection } from "@/components/login/left-section";
import { RightSection } from "@/components/login/right-section";

export default function LoginPage() {
  return (
    <>
      <div className="bg-gray-300 h-screen flex justify-between">
        <LeftSection/>

        <RightSection/>
      </div>
    </>
  );
}
