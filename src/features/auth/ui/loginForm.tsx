'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { loginThunk } from '@/features/auth/model/authThunk';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { Input } from '@/ui/components/auth/input';
import { Divider } from '@/ui/layout/auth/divider';
import { SocialAuth } from '@/ui/layout/auth/socialAuth';

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isError = useAppSelector((state) => state.auth.isError);
  const userId = useAppSelector((state) => state.auth.user?.id);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;

    dispatch(loginThunk({ username: email, password: password }));
  };

  const hasError = (value: string) =>
    (isError && value.trim() === '') || isError;

  useEffect(() => {
    if (isAuth) {
      router.push(`/${userId}/dashboard`);
    }
  }, [isAuth, router, userId]);
  return (
    <div className='rounded-2xl border border-sky-600/30 bg-gray-800/50 p-8 shadow-2xl backdrop-blur-sm'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
          hasError={hasError(email)}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          hasError={hasError(password)}
        />

        <div className='flex items-center justify-between'>
          <label className='flex items-center text-gray-300'>
            <input
              type='checkbox'
              className='mr-2 h-4 w-4 rounded border-sky-600/30 bg-gray-800/50 text-sky-700 focus:ring-sky-600'
            />
            <span className='text-sm'>Запомнить меня</span>
          </label>

          <a
            href='#'
            className='text-sm text-sky-500 transition-colors hover:text-sky-400'
          >
            Забыли пароль?
          </a>
        </div>

        <button
          type='submit'
          className='w-full rounded-xl bg-sky-600 py-3 text-white transition-colors hover:bg-sky-700'
        >
          Войти
        </button>
      </form>

      <Divider />
      <SocialAuth />

      <div className='mt-6 text-center text-sm text-gray-400'>
        <span>
          Нет аккаунта?{' '}
          <Link
            href='/register'
            className='font-semibold text-sky-500 transition-colors hover:text-sky-400'
          >
            Зарегистрируйтесь
          </Link>
        </span>
      </div>
    </div>
  );
};
