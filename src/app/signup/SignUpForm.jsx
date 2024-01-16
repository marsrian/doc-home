"use client";

import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import createJWT from "@/utils/createJWT";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const { createUser, profileUpdate } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();

  const uploadImage = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;
    formData.append("image", event.target.files[0]);
    const toastId = toast.loading("Image uploading...");
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json();
      toast.dismiss(toastId);
      toast.success("Image uploaded successfully!");
      setValue("photo", data.data.url);
    } catch (error) {
      toast.error("Image not uploaded!");
      toast.dismiss(toastId);
    }
  };

  const onSubmit = async (data, event) => {
    const { name, email, password, photo } = data;
    const toastId = toast.loading("Loading...");
    try {
      await createUser(email, password);
      await createJWT({ email });
      await profileUpdate({
        displayName: name,
        photoURL: photo,
      });
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
    <form className="mb-[30px]" onSubmit={handleSubmit(onSubmit)}>
      {/* Input: Name */}
      <div className="flex flex-col mb-[26px]">
        <label
          htmlFor="name"
          className="text-xl font-semibold text-[#0A0808] mb-1"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-[#F3F3F3] text-[#9D9C9C] rounded-[10px] p-4 leading-[26px]"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Please enter your name.
          </span>
        )}
      </div>
      {/* Input: Photo */}
      <div className="flex flex-col mb-[26px]">
        <label
          htmlFor="photo"
          className="text-xl font-semibold text-[#0A0808] mb-1"
        >
          Photo
        </label>
        <input
          type="file"
          id="photo"
          onChange={uploadImage}
          className="bg-[#F3F3F3] text-[#9D9C9C] rounded-[10px] p-4 leading-[26px]"
        />
      </div>
      {/* Input: Email */}
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
          placeholder="Enter your email"
          autoComplete="email"
          className="bg-[#F3F3F3] text-[#9D9C9C] rounded-[10px] p-4 leading-[26px]"
          {...register("email", {
            required: true,
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
          placeholder="Enter your password"
          autoComplete="new-password"
          className="bg-[#F3F3F3] text-[#9D9C9C] rounded-[10px] p-4 leading-[26px]"
          {...register("password", {
            required: true,
            minLength: 6,
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter a password.
          </span>
        )}
      </div>
      {/* Input: Confirm Password */}
      <div className="flex flex-col mb-[26px]">
        <label
          htmlFor="confirmPassword"
          className="text-xl font-semibold text-[#0A0808] mb-1"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
          autoComplete="new-password"
          className="bg-[ r#F3F3F3] text-[#9D9C9C] rounded-[10px] p-4 leading-[26px]"
          {...register("confirmPassword", {
            required: true,
            minLength: 6,
            validate: (value) =>
              value === getValues("password") || "The passwords do not match.",
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-base mt-1">
            {errors.confirmPassword.message || "Please confirm your password."}
          </span>
        )}
      </div>
      <input
        type="submit"
        value="Create Account"
        className="text-white font-bold bg-[#F7A582] rounded-[10px] py-[19px] px-4 md:px-[119px] cursor-pointer w-full"
      />
    </form>
  );
};

export default SignUpForm;
