/**
 * @file common.ts
 * @module shared/types
 * @description Общие типы данных для всего приложения.
 */

/**
 * Уникальный символ для брендирования IsoDateString.
 * Используется для создания номинального типа, который структурно является строкой,
 * но типобезопасно отличается от обычной строки.
 */
declare const __isoDateString: unique symbol;

/**
 * Представляет строку даты в формате ISO 8601 (например, "2025-11-20T12:00:00Z").
 * Это брендированный тип, который требует явного приведения или использования функции-гварда
 * для обеспечения типобезопасности.
 */
export type IsoDateString = string & { [__isoDateString]: never };

/**
 * Представляет тип, который может быть либо T, либо null.
 * @template T Тип, который может быть null.
 */
export type Nullable<T> = T | null;

/**
 * Представляет тип, который может быть либо T, либо undefined.
 * @template T Тип, который может быть undefined.
 */
export type Undefinable<T> = T | undefined;

/**
 * Представляет тип, который может быть либо T, либо null, либо undefined.
 * @template T Тип, который может быть null или undefined.
 */
export type Optional<T> = T | null | undefined;

/**
 * Представляет тип, который является объектом с произвольными строковыми ключами и значениями типа T.
 * @template T Тип значений объекта.
 */
export type Dictionary<T> = {
	[key: string]: T;
};

/**
 * Представляет тип, который является объектом с произвольными строковыми ключами и значениями типа T, но все свойства необязательны.
 * @template T Тип значений объекта.
 */
export type PartialDictionary<T> = Record<string, T | undefined>;

/**
 * Представляет тип, который является функцией без аргументов, возвращающей void.
 */
export type VoidFunction = () => void;

/**
 * Представляет тип, который является функцией с одним аргументом типа T, возвращающей void.
 * @template T Тип аргумента функции.
 */
export type Consumer<T> = (arg: T) => void;

/**
 * Представляет тип, который является функцией с одним аргументом типа T, возвращающей значение типа R.
 * @template T Тип аргумента функции.
 * @template R Тип возвращаемого значения функции.
 */
export type FunctionWithReturn<T, R> = (arg: T) => R;
