import Link from "next/link";
const SocialAuth: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Link
        href="/"
        aria-label="Авторизоваться с помощью Google"
        className=" flex items-center justify-center px-4 py-3 bg-gray-800/50 border border-sky-600/30 rounded-lg hover:bg-gray-800 transition-all text-gray-300 font-medium"
      >
        Google
      </Link>
      <Link
        href="/"
        aria-label="Авторизоваться с помощью GitHub"
        className="flex items-center justify-center px-4 py-3 bg-gray-800/50 border border-sky-600/30 rounded-lg hover:bg-gray-800 transition-all text-gray-300 font-medium"
      >
        GitHub
      </Link>
    </div>
  );
};

export default SocialAuth;
