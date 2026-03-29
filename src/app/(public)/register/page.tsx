import { Metadata } from "next";
import { Logo } from "@/ui/components/logo";
import BackToHome from "@/ui/layout/auth/backToHome";
import RegisterForm from "@/features/auth/ui/RegisterForm";

export const metadata: Metadata = {
  title: "Регистрация аккаунта",
  description: "Создайте новый аккаунт для участия в хакатонах",
};

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Logo />
        </div>

        <RegisterForm />

        <BackToHome />
      </div>
    </div>
  );
};

export default RegisterPage;