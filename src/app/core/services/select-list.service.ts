import { Injectable } from '@angular/core';
export interface SelectListOptions {
  text: string,
  value: any
}
@Injectable({
  providedIn: 'root'
})
export class SelectListService {

  constructor() { }
  getRoles(): SelectListOptions[] {
    return [
      {
      text: 'Администратор',
      value: 2
      },
      {
        text: 'Модератор',
        value: 3
      },
      {
        text: 'Пользователь',
        value: 1
      },
      {
        text: 'Инвестор',
        value: 4
      },
    ]
  };
  getRoleStr(): SelectListOptions[] {
    return [
      {
        text: 'администратора',
        value: 'ADMIN'
      },
      {
        text: 'модератора',
        value: 'MODERATOR'
      },
      {
        text: 'пользователя',
        value: 'USER'
      },
      {
        text: 'инвестора',
        value: 'INVESTOR'
      },
    ]
  };
  getStartupStatuses (): SelectListOptions[] {
    return [
      {
        text: 'На валидации у модератора',
        value: 0
      },
      {
        text: 'Прошел валидацию',
        value: 1
      },
      {
        text: 'Не прошел валидацию',
        value: 2
      },
    ]
  };
  getMaturityStage (): SelectListOptions[] {
    return [
      {
        text: 'Прототип',
        value: 0
      },
      {
        text: 'MVP',
        value: 1
      },
      {
        text: 'Первые продажи',
        value: 2
      },
      {
        text: 'Готовое решение',
        value: 3
      },
      {
        text: 'Перезапуск проекта',
        value: 4
      },
    ]
  };
  getInvestmentType() : SelectListOptions[] {
    return [
      {
        text: 'Краудфандинг',
        value: 0
      },
      {
        text: 'Венчурное инвестирование',
        value: 1
      },
      {
        text: 'Корпоративное инвестирование',
        value: 2
      },
      {
        text: 'Раунды',
        value: 3
      },
    ]
  };
  //главное в стартапе
  getMainInStartupStatuses() : SelectListOptions[] {
    return [
      {
        text: 'Заработок денег',
        value: 0
      },
      {
        text: 'Уникальный продукт',
        value: 1
      },
      {
        text: 'Решение глобальной проблемы',
        value: 2
      },
      {
        text: 'Помощь людям через продукт',
        value: 3
      },
      {
        text: 'Сложное техническое решение',
        value: 4
      },
    ]
  };
  getMainInMeStatuses() : SelectListOptions[] {
    return [
      {
        text: 'Достижение быстрого результата',
        value: 0
      },
      {
        text: 'Упорство в достижении цели',
        value: 1
      },
      {
        text: 'Помощь другим людям',
        value: 2
      },
      {
        text: 'Готовность на долгосрочную работу',
        value: 3
      },
      {
        text: 'Качественный результат в любых действиях',
        value: 4
      },
    ]
  };
}
