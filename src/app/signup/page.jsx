import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import medicine from "@/assets/login/Frame.png";
import SignUpForm from "./SignUpForm";
import GoogleLoginButton from "@/components/GoogleLoginButton";

export const metadata = {
  title: "Sign Up - Doc Home"
}


const SignUpPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#07332F] px-8 md:px-24 py-16 md:py-[226px]">
        <Image src={medicine} alt="medicine" priority={true} />
      </div>
      <div className="bg-white">
        <div className="w-full md:w-[461px] mx-auto my-[98px] border border-[#E6E6E6] rounded-[10px] p-[50px]">
          <h1 className="text-[30px] text-[#0A0808] text-center font-bold mb-12">
            Sign Up to Doc Home
          </h1>
          <SignUpForm />
          <p className="text-center text-lg text-[#6C6B6B]">
            Already have an account? <Link className="text-[#F7A582] text-lg font-bold" href="/login">
              Login
            </Link>
          </p>
          <div className="text-center mt-5">Or</div>
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
