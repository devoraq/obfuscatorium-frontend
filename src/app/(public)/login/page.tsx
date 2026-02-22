import { Metadata } from "next";
import LoginForm from "@/features/auth/ui/loginForm";
import { Logo } from "@/ui/components/logo";
import BackToHome from "@/ui/layout/auth/backToHome";

export const metadata: Metadata = {
  title: "Вход в аккаунт",
  description: "Авторизация на сайте. Введите email и пароль, чтобы войти.",
};

const LoginPage: React.FC = () => {

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Logo />
        </div>

        <LoginForm />

        <BackToHome />
      </div>
    </div>
  );
};
export default LoginPage;