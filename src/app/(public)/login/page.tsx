import { Metadata } from 'next';

import { LoginForm } from '@/features/auth/ui/loginForm';

import { Logo } from '@/ui/components/logo';
import { BackToHome } from '@/ui/layout/auth/backToHome';

export const metadata: Metadata = {
  title: 'Вход в аккаунт',
  description: 'Авторизация на сайте. Введите email и пароль, чтобы войти.',
};

const LoginPage: React.FC = () => (
  <div className='flex min-h-screen items-center justify-center px-6 py-12'>
    <div className='w-full max-w-md'>
      <div className='mb-8 flex items-center justify-center'>
        <Logo />
      </div>

      <LoginForm />

      <BackToHome />
    </div>
  </div>
);
export default LoginPage;
