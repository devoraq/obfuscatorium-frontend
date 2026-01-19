/**
 * @file logger.ts
 * @module core/Logger
 * @description Lightweight browser logger with log levels
 */

/**
 * ! my imports
 */
import { EModuleType, LogLevel } from '@core/types';

/**
 * @class Logger
 * @description Браузерный логгер с уровнями логирования
 */
export class Logger {
	private moduleType: EModuleType;
	private moduleName: string;
	private enabledLevels: Set<LogLevel>;

	constructor(
		moduleType: EModuleType,
		moduleName: string = 'APP',
		enabled: LogLevel[] = ['debug', 'info', 'warn', 'error'],
	) {
		this.moduleType = moduleType;
		this.moduleName = moduleName;
		this.enabledLevels = new Set(enabled);
	}

	/** Включить уровень */
	public enable(level: LogLevel): void {
		this.enabledLevels.add(level);
	}

	/** Выключить уровень */
	public disable(level: LogLevel): void {
		this.enabledLevels.delete(level);
	}

	/** Проверка доступности уровня */
	private canLog(level: LogLevel): boolean {
		return this.enabledLevels.has(level);
	}

	/** Базовый вывод с оформлением */
	private log(level: LogLevel, color: string, ...args: unknown[]): void {
		if (!this.canLog(level)) return;

		const time = new Date().toISOString();

		console.log(
			`%c[${this.moduleType}-${this.moduleName}] %c${level.toUpperCase()} %c${time}`,
			'color: #888; font-weight: bold;',
			`color: ${color}; font-weight: bold;`,
			'color: #555;',
			...args,
		);
	}

	public debug(...args: unknown[]): void {
		this.log('debug', '#6ab0ff', ...args);
	}

	public info(...args: unknown[]): void {
		this.log('info', '#4caf50', ...args);
	}

	public warn(...args: unknown[]): void {
		this.log('warn', '#ff9800', ...args);
	}

	public error(...args: unknown[]): void {
		this.log('error', '#f44336', ...args);
	}
}
