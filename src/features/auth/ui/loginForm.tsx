"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";

import { loginThunk } from "@/features/auth/model/authThunk";
import Input from "@/ui/components/auth/input";
import Divider from "@/ui/layout/auth/divider";
import SocialAuth from "@/ui/layout/auth/socialAuth";


const LoginForm: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const isError = useAppSelector((state) => state.auth.isError);
    const userId = useAppSelector((state) => state.auth.user?.id);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) return;

        dispatch(loginThunk({ username: email, password: password }));
    };

    const hasError = (value: string) => isError && value.trim() === "" || isError;

    useEffect(() => {
        if (isAuth) {
          router.push(`/${userId}/dashboard`);
        }
    }, [isAuth, router, userId]);
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-sky-600/30 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" hasError={hasError(email)} />
        <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" hasError={hasError(password)} />

        <div className="flex items-center justify-between">
          <label className="flex items-center text-gray-300">
            <input type="checkbox" className="mr-2 w-4 h-4 rounded border-sky-600/30 bg-gray-800/50 text-sky-700 focus:ring-sky-600" />
            <span className="text-sm">Запомнить меня</span>
          </label>

          <a href="#" className="text-sm text-sky-500 hover:text-sky-400 transition-colors">Забыли пароль?</a>
        </div>

        <button type="submit" className="w-full py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-colors">
          Войти
        </button>
      </form>

      <Divider />
      <SocialAuth />

      <div className="mt-6 text-center text-sm text-gray-400">
        <span>
          Нет аккаунта? <Link href="/register" className="text-sky-500 hover:text-sky-400 font-semibold transition-colors">Зарегистрируйтесь</Link>
        </span>
      </div>
    </div>
  );
};
export default LoginForm;