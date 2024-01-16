"use client";

import useAuth from "@/hooks/useAuth";
import createJWT from "@/utils/createJWT";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const toastId = toast.loading("Loading...");
    try {
      await signIn(email, password);
      await createJWT({ email });
      startTransition(() => {
        refresh();
        replace(from);
        toast.dismiss(toastId);
        toast.success("User signed in successfully");
      });
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="mb-[30px]">
        <div className="flex flex-col mb-[26px]">
          <label
            htmlFor="email"
            className="text-xl font-semibold text-[#0A0808] mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="bg-[#F3F3F3] text-[#9D9C9C] rounded-[10px] p-4 leading-[26px]"
            {...register("email", {
              required: true,
              pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
            })}
          />
          {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid email address.
          </span>
        )}
        </div>
        {/* Input: Password */}
        <div className="flex flex-col mb-[26px]">
          <label
            htmlFor="password"
            className="text-xl font-semibold text-[#0A0808] mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            className="bg-[#F3F3F3] text-[#9D9C9C] rounded-[10px] p-4 leading-[26px]"
            placeholder="Enter your password"
          {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid password.
          </span>
        )}
        </div>
        <input
          type="submit"
          value="Login"
          className="text-white font-bold bg-[#F7A582] rounded-[10px] py-[19px] px-4 md:px-[119px] cursor-pointer w-full"
        />
      </form>
  );
};

export default LoginForm;
