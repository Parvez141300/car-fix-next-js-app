"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const session = useSession();
  const router = useRouter();

  console.log("session is from social login", session);
  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  };

  useEffect(() => {
    if (session.status == "authenticated") {
      router.push("/");
    }
  }, [session.status]);

  return (
    <div className="flex flex-col gap-2 mt-4">
      <button
        onClick={() => handleSocialLogin("google")}
        className="btn btn-outline rounded-lg"
      >
        <FcGoogle size={25} /> Login with Google
      </button>
      <button
        onClick={() => handleSocialLogin("github")}
        className="btn btn-outline rounded-lg"
      >
        <FaGithub size={25} /> Login with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
