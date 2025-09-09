import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <button className="btn btn-outline rounded-lg">
        <FcGoogle size={25} /> Login with Google
      </button>
      <button className="btn btn-outline rounded-lg">
        <FaGithub size={25} /> Login with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
