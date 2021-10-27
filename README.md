# PseudoVacnine

Сайт с примером, как вас могут заскамить \ обмануть, а может и не вас.

## Параметры страницы

#### params

```curl
  url?f=[name]&l=[last]&m=[midle]&d=[date]&n=[number]
```

| Параметр | Тип      | Описание                  |
| :------- | :------- | :------------------------ |
| `name`   | `string` | [*] Имя на странице       |
| `last`   | `string` | [*] Фамилия на странице   |
| `midle`  | `string` | [*] Отчество на странице  |
| `date`   | `string` | Дата рождения на странице |
| `number` | `number` | Номер на странице         |

[*] Вы можете ввести первую букву имени, остальное доставить любыми символами

#### Форматирование входящего текста

```js
function formatTextToP(text) {
  return text
    .split('')
    .map((_, i) => (i == 0 ? text[0] : '*'))
    .join('')
    .toString()
    .toLowerCase();
}
```

## Демо

[Ссылка](https://md-firebase-feed.vercel.app/)

## Фичи

- Переход по кнопке "Назад" на страницу госуслуг
- Нет неправильных данных

## Запустить

Клонировать репозиторий

```bash
  git clone https://github.com/Markoffka/md-firebase-feed/tree/dev
```

Перейти к новой папке

```bash
  cd md-firebase-feed
```

Установить зависимости

```bash
  npm install
```

Запустить сервер

```bash
  npm run start
```

## WARNING

За мошенические действия отвественность не несу.
