/**
 * @file Util.module.ts
 * @module core/modules
 *
 * @description
 * Абстрактный базовый класс для всех Util-компонентов приложения.
 *
 * Основные задачи:
 * - Хранение типа модуля ({@link EModuleType.UTIL}) для целей логирования и структурирования проекта
 *
 * @see EModuleType
 * @see CoreModule
 *
 * @example
 * class SomeCustomUtilModule extends BaseUtil {
 *   constructor() {
 *     super(SomeCustomUtilModule.name);
 *   }
 * }
 */

/**
 * ! my imports
 */
import { EModuleType } from '@core/types';
import { CoreModule } from '@core/modules/Core.module';

/**
 * Абстрактный базовый класс для утилитарных классов.
 */
export abstract class UtilModule extends CoreModule {
	/**
	 * Конструктор базового Util.
	 * Устанавливает тип модуля как {@link EModuleType.UTIL}
	 *
	 * @param {string} moduleName название класса, представляющий модуль
	 */
	protected constructor(moduleName: string) {
		super(EModuleType.UTIL, moduleName);
	}
}
