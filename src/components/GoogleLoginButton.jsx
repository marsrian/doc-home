"use client";

import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import createJWT from "@/utils/createJWT";

const GoogleLoginButton = () => {
  const { googleLogin } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace } = useRouter();

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const { user } = await googleLogin();
      await createJWT({ email: user.email });
      toast.dismiss(toastId);
      toast.success("user signed in successfully");
      replace(from);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "user not signed in");
    }
  };
  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="flex gap-1 items-center mt-5 rounded-full border border-gray-400 hover:border-orange-400 px-5 py-2 mx-auto"
    >
      <FcGoogle className="text-3xl mr-3" />
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;
