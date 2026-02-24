"use client";
import { motion } from "framer-motion";

function page() {
  // Rendu de la page de connexion
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 w-3/4 h-3/7 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-300"
      >
        {" "}
        <div className="flex flex-col justify-center p-8 bg-slate-100">
          <h1 className="text-2xl font-bold mb-4">Login Page</h1>
          <div className="mb-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition duration-300">
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <a href="/auth/register" className="text-blue-500">
              Register
            </a>
            or you can login with{" "}
            <a href="/auth/google" className="text-blue-500">
              Google
            </a>
            .
          </p>
        </div>
        <div className="w-full h-full bg-slate-900"></div>
      </motion.div>
    </div>
  );
}

export default page;
