/**
 * @file Date.utils.ts
 * @module core/utils
 *
 * @description
 * Экспортирует класс утилиты для работы с датами.
 *
 * @extends UtilModule
 *
 * @see UtilModule
 * @exports DateUtils
 */

/**
 * ! my imports
 */
import { UtilModule } from '@core/modules';
import { type IsoDateString } from '@core/types';

/**
 * Утилиты для работы с датами.
 */
class DateUtils extends UtilModule {
	public constructor() {
		super(DateUtils.name);
	}

	/**
	 * Добавляет ведущие нули к числу, если оно меньше заданной ширины.
	 *
	 * @param n Число, к которому нужно добавить ведущие нули
	 * @param size Ширина числа после добавления ведущих нулей (по умолчанию 2)
	 * @returns Строка с добавленными ведущими нулями
	 */
	protected pad(n: number, size = 2) {
		return n.toString().padStart(size, '0');
	}

	/**
	 * Возвращает время в формате 24-часового времени.
	 *
	 * @param date Объект Date, представляющий время.
	 * @returns Время в формате "HH:mm:ss.SSS" (24-часовой формат).
	 */
	public get24HourTime(date: Date): string {
		return `${this.pad(date.getHours())}:${this.pad(date.getMinutes())}:${this.pad(date.getSeconds())}.${this.pad(
			date.getMilliseconds(),
			3,
		)}`;
	}

	/**
	 * Утилитная функция для возврата текущей даты в формате IsoDateString
	 *
	 * @returns строка формата ISO 8601 с брендом IsoDateString
	 */
	public getCurrentIsoDateString(): IsoDateString {
		return this.toIsoDateString(new Date());
	}

	/**
	 * Утилитная функция для генерации IsoDateString из объекта Date
	 *
	 * @param date объект Date
	 * @returns строка формата ISO 8601 с брендом IsoDateString
	 */
	public toIsoDateString(date: Date): IsoDateString {
		return date.toISOString() as IsoDateString;
	}
}

/**
 * Экземпляр DateUtils, который может быть использован для вызова методов утилит.
 */
const util = new DateUtils();

/**
 * Экспортируем единственный экземпляр DateUtils
 */
export { util as DateUtils };
