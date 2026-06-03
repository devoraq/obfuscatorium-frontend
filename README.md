# Obfuscatorium Frontend

Frontend‑приложение проекта **Obfuscatorium**, разработанное на базе **Next.js (App Router)** и **React** с использованием современного TypeScript‑стека.

Проект ориентирован на масштабируемость, читаемую архитектуру и предсказуемое управление состоянием.

---

## 🛠 Технологии

В проекте используется следующий стек:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **CSS Framework**: [Bootstrap](https://getbootstrap.com/) (частично, для готовых компонентов и утилит)
- **State Management**: **Redux Toolkit**
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) (EN / RU)

---

## 🚀 Начало работы

### Требования

- Node.js (LTS рекомендуется)
- Пакетный менеджер: **bun / npm / yarn / pnpm**

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

После запуска приложение будет доступно по адресу:
[http://localhost:3000](http://localhost:3000)

---

## 📂 Структура проекта

Проект организован по принципам **Feature‑Sliced Design (FSD)**:

```text
src/
├── app/          # Инициализация приложения, store, rootReducer
├── entities/     # Бизнес‑сущности (User и др.)
├── features/     # Фичи (auth, ui, и т.д.)
├── ui/           # Переиспользуемые UI‑компоненты
├── i18n/         # Конфигурация интернационализации
└── store/        # Redux store и связанные типы
```

Ключевая идея: **одна фича — один независимый модуль состояния**.

---

## 📜 Скрипты

Доступные команды из `package.json`:

- `dev` — запуск в режиме разработки
- `build` — сборка production‑версии
- `start` — запуск production‑сборки
- `lint` — проверка кода ESLint
- `lint:fix` — исправление кода по правилам eslint(некоторые ошибки нужно исправлять самому)
- `format` — приведение кода к одному стилю что бы код везде выглядел одинаково
- `typecheck` — проверка типов в коде

---

# 🧠 Redux Toolkit — архитектура в проекте

В проекте используется **Redux Toolkit (RTK)** — рекомендованный способ работы с Redux.

Основные сущности:

- **Slice (reducer)** — описание части состояния
- **initialState** — начальное состояние slice
- **name** — уникальный namespace slice
- **Thunk** — асинхронная логика и side effects
- **rootReducer** — объединение всех reducer

---

## 1️⃣ Slice (reducer)

**ВАЖНО**: 
Не делаем розширение файла слайса и санков в формате `.tsx`, **это не компонент там только логика состояния и редьюсеры** формат только `.ts`, 
также чтобы линтер не ругалься на  `export default slice` пишем слпйс в таком формате `name.slice.ts`

Slice описывает **одну логическую область состояния** (например, авторизация).

### Пример: `authReducer.ts`

```ts
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  token: '',
  url: '',
  loginStatus: 'idle', // idle | ok | error
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuth = true
      state.token = action.payload.token
      state.url = action.payload.url
      state.loginStatus = 'ok'
    },

    logout(state) {
      state.isAuth = false
      state.token = ''
      state.url = ''
      state.loginStatus = 'error'
    },
  },
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer
```

### Что здесь важно

- **initialState** — начальное состояние slice
- **name** — имя slice, используется как namespace (`auth/loginSuccess`)
- **reducers** — *только синхронное изменение state*

❗ **В reducer запрещено**:
- работать с `localStorage`
- обращаться к DOM
- делать API‑запросы

---

## 2️⃣ Thunk (middleware для асинхронной логики)

Thunk используется для:

- API‑запросов
- работы с `localStorage`
- side effects
- сложной бизнес‑логики

### Пример: `authThunk.ts`

```ts
import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginSuccess, logout } from './authReducer'

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const token = data.accessToken
      const url = data.url

      // side effects
      localStorage.setItem('access_token', token)
      document.body.classList.add('no-scroll')

      // обновление state
      dispatch(loginSuccess({ token, url }))
    } catch (e) {
      dispatch(logout())
      return rejectWithValue('login error')
    }
  }
)
```

📌 **Правило**:

> Вся асинхронная логика и побочные эффекты — **только в thunk**

---

## 3️⃣ rootReducer

`rootReducer` объединяет все reducer приложения в один глобальный reducer.

### Пример: `rootReducer.ts`

```ts
import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'
import uiReducer from '../features/ui/uiReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
})
```

После этого состояние приложения выглядит так:

```ts
state = {
  auth: { ... },
  ui: { ... },
}
```

---

## 4️⃣ useDispatch и useSelector

Для работы с Redux в React используются хуки из `react-redux`.

### useDispatch

`useDispatch` позволяет отправлять actions (в том числе thunk) в Redux Store.

```ts
const dispatch = useDispatch()

dispatch(loginThunk(data))
dispatch(logout())
```

Что важно понимать:

- `dispatch` — это **единственный способ изменить state**
- можно диспатчить:
  - обычные actions (`logout()`)
  - thunk (`loginThunk()`)

В проекте рекомендуется использовать **типизированный хук**:

```ts
const dispatch = useAppDispatch()
```

Это даёт автокомплит и защиту типов.

---

### useSelector

`useSelector` используется для чтения данных из Redux Store.

```ts
const isAuth = useSelector((state) => state.auth.isAuth)
const token = useSelector((state) => state.auth.token)
```

Как это работает:

- `state` — это **глобальное состояние**, сформированное `rootReducer`
- компонент автоматически перерисуется при изменении выбранных данных

Рекомендуемый вариант — типизированный хук:

```ts
const isAuth = useAppSelector((state) => state.auth.isAuth)
```

---

### Кратко про хуки

- `useDispatch` — **отправляем события** (actions / thunk)
- `useSelector` — **читаем состояние**

---

## 🧩 Краткое резюме

- **Slice** — описывает часть состояния
- **initialState** — стартовые данные
- **name** — namespace slice
- **reducers** — синхронное обновление state
- **Thunk** — асинхронка и side effects
- **rootReducer** — сборка всех reducer


---
