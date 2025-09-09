'use client';
import { signIn } from "next-auth/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const handleSocialLogin = async (providerName) => {
    const result = await signIn(providerName, {redirect: false});
    console.log("signin with google or github", result);
  }
  return (
    <div className="flex flex-col gap-2 mt-4">
      <button onClick={() => handleSocialLogin('google')} className="btn btn-outline rounded-lg">
        <FcGoogle size={25} /> Login with Google
      </button>
      <button onClick={() => handleSocialLogin('github')} className="btn btn-outline rounded-lg">
        <FaGithub size={25} /> Login with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
