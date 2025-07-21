"use client";
import React from "react";

const SignUp = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <div className="absolute flex items-center justify-center w-full">
        {/* Background Image */}
        <img
          src="/images/retrohacks_images/driveintheater.jpeg" // Path to your uploaded image
          alt="Drive-in Theater"
          className="w-full h-full object-contain blur-[1px]"
        />

        {/* Login Form */}
        <div className="absolute mt-[-17%] inset-0 flex items-center justify-center">
          <div className="relative w-[38.4%] h-[27.1%] overflow-hidden text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Signup</h1>
            <div className="flex flex-col gap-4">
              Sign up by pressing the link below!
              <button className="bg-gray-800 text-white p-2 rounded-lg">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
