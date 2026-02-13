"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/ui/components/logo";
import Input  from "@/ui/layout/auth/input";
import Divider from "@/ui/layout/auth/divider";
import SocialAuth from "@/ui/layout/auth/socialAuth";
import BackToHome from "@/ui/layout/auth/backToHome";

/**
 * @file input.tsx
 * @module  ui/layout/auth
 * @description Reusable, accessible input field component with validation support
 */

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!email) newErrors.email = "Email обязателен";
    if (!password) newErrors.password = "Пароль обязателен";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Logo />
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-sky-600/30 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              error={errors.email}
            />

            <Input
              label="Пароль"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({ ...errors, password: "" });
              }}
              error={errors.password}
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-300">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 rounded border-sky-600/30 bg-gray-800/50 text-sky-700 focus:ring-sky-600"
                />
                <span className="text-sm">Запомнить меня</span>
              </label>
              <a
                href="#"
                className="text-sm text-sky-500 hover:text-sky-400 transition-colors"
              >
                Забыли пароль?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-colors"
            >
              Войти
            </button>
          </form>
          <Divider />
          <SocialAuth />
 <div className="mt-6 text-center text-sm text-gray-400">
       
        <span>
          Нет аккаунта?{" "}
          <Link
            href="/register"
            className="text-sky-500 hover:text-sky-400 font-semibold transition-colors"
          >
            Зарегистрируйтесь
          </Link>
        </span>
        </div>

        </div>
        <BackToHome />
      </div>
    </div>
  );
}

export default LoginPage;
