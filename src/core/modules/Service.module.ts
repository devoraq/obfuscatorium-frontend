/**
 * @file Service.module.ts
 * @module core/modules
 *
 * @description
 * Базовый абстрактный класс для всех сервисных модулей приложения.
 *
 * Основные задачи:
 * - Хранение типа модуля ({@link EModuleType.SERVICE}) для целей логирования и структурирования проекта
 *
 * @see EModuleType
 *
 * @example
 * ```ts
 * class UserService extends ServiceModule {
 *   constructor() {
 *     super(UserService.name);
 *   }
 * }
 * ```
 */

/**
 * ! my imports
 */
import { EModuleType } from '@core/types';
import { CoreModule } from '@core/modules/Core.module';

/**
 * Абстрактный класс, описывающий базовые свойства всех сервисных модулей:
 * тип и имя модуля. Используется как фундамент для логгирования и архитектурного разграничения.
 */
export abstract class ServiceModule extends CoreModule {
	/**
	 * Базовый конструктор Service-модуля.
	 *
	 * @param moduleName - Название модуля
	 */
	constructor(moduleName: string) {
		super(EModuleType.SERVICE, moduleName);
	}
}
