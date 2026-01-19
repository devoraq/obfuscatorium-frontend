/**
 * @file Core.module.ts
 * @module core/modules
 *
 * @description
 * Базовый абстрактный класс для всех модулей приложения.
 * Представляет собой фундамент, от которого наследуется, как системные, так и прикладные модули.
 *
 * Основные задачи:
 * - Хранение типа и имени модуля
 * - Предоставление лог-контекста (используется в логгере)
 *
 * @see EModuleType
 * @see Logger
 *
 *
 * @example
 * class SomeCustomModule extends CoreModule {
 *   constructor() {
 *     super(EModuleType.SERVICE, 'SomeService');
 *   }
 * }
 */

/**
 * ! my imports
 */
import { Logger } from '@core/logger/logger';
import { EModuleType } from '@core/types';

/**
 * Абстрактный класс, описывающий базовые свойства всех модулей:
 * тип и имя модуля. Используется как фундамент для логгирования и архитектурного разграничения.
 */
export abstract class CoreModule {
	/** Тип модуля (например, UTIL, SERVICE, и т.д.) */
	private moduleType: EModuleType;

	/** Имя модуля (используется в логах и отладке) */
	private readonly moduleName: string;

	private readonly logger: Logger;

	/**
	 * Базовый конструктор Core-модуля.
	 *
	 * @param moduleType - Тип модуля
	 * @param moduleName - Название модуля
	 */
	protected constructor(moduleType: EModuleType, moduleName: string) {
		const trimmedModuleName = moduleName.trim();

		if (!trimmedModuleName) {
			throw new Error(`[CoreModule] Module name is required for type: ${moduleType}`);
		}

		this.moduleType = moduleType;
		this.moduleName = trimmedModuleName;
		this.logger = new Logger(this.moduleType, trimmedModuleName);
	}

	protected getLogInfo() {
		return {
			moduleType: this.getModuleType(),
			moduleName: this.getModuleName(),
		};
	}

	/**
	 * Возвращает название модуля
	 *
	 * @returns {string} Название модуля
	 */
	public getModuleName(): string {
		return this.moduleName;
	}

	/**
	 * Возвращает тип модуля.
	 * Используется для внешней идентификации модуля или фильтрации по типу.
	 *
	 * @returns {EModuleType} Тип модуля
	 */
	public getModuleType(): EModuleType {
		return this.moduleType;
	}

	/**
	 * ? === === === LOGGER METHODS === === ===
	 */

	/**
	 * Лог уровня DEBUG
	 */
	protected debug(data: Array<unknown>): void {
		this.logger.debug(this.getLogInfo(), data);
	}

	/**
	 * Лог уровня DEBUG
	 */
	protected info(data: Array<unknown>): void {
		this.logger.info(this.getLogInfo(), data);
	}

	/**
	 * Лог уровня WARN
	 */
	protected warn(data: Array<unknown>): void {
		this.logger.warn(this.getLogInfo(), data);
	}

	/**
	 * Лог уровня ERROR
	 */
	protected error(data: Array<unknown>): void {
		this.logger.error(this.getLogInfo(), data);
	}
}
