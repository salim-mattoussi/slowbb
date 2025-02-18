"use client"; // Mark this as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token); // Store token in localStorage
      router.push("/admin"); // Redirect to admin dashboard
    } else {
      setError(data.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="font-goldman text-3xl ">Admin Login</h1>
      <div className="relative h-[50rem] sm:h-[25rem] w-[25rem] sm:w-[40rem] border border-black" >
      <form onSubmit={handleLogin} className="pt-5 px-5 sm:pt-12 sm:pl-16 ">
       
       <div className="flex flex-col justify-center items-center"> 
        <div >
          <label className='mt-6 font-goldman text-xl'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-[250px] sm:w-[500px] mt-4 px-4 py-3 border-black border outline-none"
          />
        </div>
        <div>
          <label className='mt-6 font-goldman text-xl'>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-[250px] sm:w-[500px] mt-4 px-4 py-3 border-black border outline-none"

          />
        </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="mt-6 border-2 border-black rounded-lg h-[50px] w-[120px] flex items-center justify-center hover:bg-gray-900 hover:text-white cursor-pointer sm:h-[50px] sm:w-[150px] font-goldman " type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}