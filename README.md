# Obfuscatorium Frontend

Frontend приложение для проекта Obfuscatorium, разработанное с использованием Next.js 16 и React 19.

## 🛠 Технологии

Проект использует современный стек технологий для создания быстрого и масштабируемого интерфейса:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), Shadcn UI patterns
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) (Поддержка EN и RU)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Validation**: [Zod](https://zod.dev/)

## 🚀 Начало работы

### Требования

Убедитесь, что у вас установлены:

- Node.js (рекомендуется LTS версия)
- Пакетный менеджер (bun, npm, yarn, или pnpm)

### Установка зависимостей

```bash
bun install
# или
npm install
# или
yarn install
# или
pnpm install
```

### Запуск в режиме разработки

```bash
bun run dev
# или
npm run dev
# или
yarn dev
# или
pnpm dev
```

После запуска откройте [http://localhost:3000](http://localhost:3000) в вашем браузере.

## 📂 Структура проекта

Проект организован с использованием архитектурных принципов - Feature-Sliced Design (FSD):

```
src/
├── app/          # Маршрутизация и страницы (App Router)
├── core/         # Базовые модули и ядро приложения (logger, utils)
├── entities/     # Бизнес-сущности (User и др.)
├── features/     # Функциональные модули (если есть)
├── shared/       # Переиспользуемый код (UI компоненты, хуки, конфиги)
├── widgets/      # Крупные UI блоки (Header, Sidebar)
├── i18n/         # Конфигурация интернационализации
└── ...
```

- **messages/** - Файлы локализации (`en.json`, `ru.json`).
- **public/** - Статические файлы.

## 📜 Доступные скрипты

В `package.json` определены следующие скрипты:

- `npm run dev` - Запуск сервера разработки.
- `npm run build` - Сборка приложения для продакшена.
- `npm run start` - Запуск собранного приложения.
- `npm run lint` - Проверка кода с помощью ESLint.
