"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

// import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Github, Mail } from "lucide-react";
import { supabase } from "../api/auth/supabaseClient";
import Navbar from "@/components/Navbar";
export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   // Simulate a login action (e.g., API request)
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     alert("Logged in successfully");
  //     // Redirect to another page after successful login
  //     router.push("/");
  //   }, 2000);

  //   // // Mock API call
  //   // setTimeout(() => {
  //   //   const fakeToken = "123456abcdef";
  //   //   const userData = { email };

  //   //   login(fakeToken, userData);
  //   //   setIsLoading(false);
  //   // }, 2000);
  // };

  const [loading, setLoading] = useState<Boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(null);

    supabase.auth
      .signInWithPassword({ email, password })
      .then(({ data, error }) => {
        if (error) {
          setError(error.message);
        } else {
          setSuccess("Login successful! Redirecting...");
          setIsLoggedIn(true);
          router.push("/Dashboard");
          // Store token or redirect user
          console.log("User Data:", data);
          alert(`This is Access Token Token ${data.session.access_token}`);
        }
      })
      .catch(() => {
        setError("An unexpected error occurred.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <div
        className="from-primary-50 to-primary-100 mt-10 flex min-h-screen items-center justify-center bg-[#1b1c1d] bg-gradient-to-br bg-cover pt-20 text-[#A8955A]"
        style={{ backgroundImage: "url('/carbon-credit.png')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="mb-10 space-y-6 rounded-2xl bg-[#211E1E] p-8 shadow-xl">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter">
                Welcome Back
              </h1>
              <p className="text-muted-foreground">
                Enter your credentials to access your account
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember</Label>
                </div>
                <Link
                  href="/ForgotPassword"
                  className="text-primary-500 hover:text-primary-600 text-sm"
                >
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full bg-[#A8955A] text-black">
                Sign In
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>

              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#211E1E] px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="w-full bg-[#A8955A] text-black"
              >
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>

              <Button
                variant="outline"
                className="w-full bg-[#A8955A] text-black"
              >
                <Mail className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>

            <div className="text-center text-sm">
              Don't have an account?
              <Link
                href="/SignUp"
                className="text-primary-500 hover:text-primary-600 pl-2 font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
