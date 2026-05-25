<<<<<<< HEAD
import { LeftSection } from "@/components/login/left-section";
=======
import { AuthLeftSection } from "@/components/auth/left-section";
>>>>>>> dev
import { RightSection } from "@/components/login/right-section";

export default function LoginPage() {
  return (
<<<<<<< HEAD
    <>
      <div className="bg-gray-300 h-screen flex justify-between">
        <LeftSection/>

        <RightSection/>
      </div>
    </>
=======
    <div className="bg-gray-200 h-screen flex justify-between">
      <AuthLeftSection />
      <RightSection />
    </div>
>>>>>>> dev
  );
}
