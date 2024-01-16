import Link from "next/link";
import LoginForm from "./LoginForm";
import Image from "next/image";
import medicine from "@/assets/login/Frame.png";
import GoogleLoginButton from "@/components/GoogleLoginButton";

export const metadata = {
  title: "Login - Doc Home"
}

const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#07332F] px-8 md:px-24 py-16 md:py-[226px]">
        <Image src={medicine} alt="medicine" priority={true} />
      </div>
      <div className="bg-white">
        <div className="w-full md:w-[461px] mx-auto my-[98px] border border-[#E6E6E6] rounded-[10px] p-[50px]">
          <h1 className="text-[30px] text-[#0A0808] text-center font-bold mb-12">
            Sign in to Doc Home
          </h1>
          <LoginForm />
          <p className="text-center text-lg text-[#6C6B6B]">
            Don&apos;t have an account?{" "}
            <Link className="text-[#9d857b] text-lg font-bold" href="/signup">
              SignUp
            </Link>
          </p>
          <div className="text-center mt-5">Or</div>
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
