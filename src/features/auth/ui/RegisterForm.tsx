"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/ui/layout/auth/input";
import Divider from "@/ui/layout/auth/divider";
import SocialAuth from "@/ui/layout/auth/socialAuth";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Имя пользователя обязательно";
    if (!email) newErrors.email = "Email обязателен";
    if (!password) newErrors.password = "Пароль обязателен";
    if (password !== confirmPassword) newErrors.confirmPassword = "Пароли не совпадают";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Здесь будет логика регистрации
    console.log({ name, email, password });
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-sky-600/30 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Имя пользователя"
          type="text"
          placeholder="Введите имя пользователя"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors({ ...errors, name: "" });
          }}
          error={errors.name}
        />

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

        <Input
          label="Подтвердите пароль"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: "" });
          }}
          error={errors.confirmPassword}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center text-gray-300">
            <input
              type="checkbox"
              name="remember"
              className="mr-2 w-4 h-4 rounded border-sky-600/30 bg-gray-800/50 text-sky-700 focus:ring-sky-600"
            />
            <span className="text-sm">Запомнить меня</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-colors"
        >
          Зарегистрироваться
        </button>
      </form>

      <Divider />
      <SocialAuth />

      <div className="mt-6 text-center text-sm text-gray-400">
        <span>
          Уже есть аккаунт?{" "}
          <Link
            href="/login"
            className="text-sky-500 hover:text-sky-400 font-semibold transition-colors"
          >
            Войдите
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;