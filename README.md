## 

Приложение написано на базе create-react-app. 
Оно корректно работает в браузерах на базе Webkit (Chrome, Opera). В других браузерах, например в FireFox и Safari, из-за их политике к геолокации пользователя может не работать погода по-умолчанию (вашего города).

## Использованные API

- Погода: openweathermap.org
- Новости: newsapi.org
- Города: opencagedata.com (поиск и карта)

## Структура проекта

- src
- - components - Компоненты. Каждый находится в отдельной папке, стили прописаны в файле _styles.css
- - pages - Страницы. Названия совпадают с маршрутами в react-router. В них прописана бизнес-логика.
- - utils - Вспомогательные инструменты - константы, функции, redux и хранилище. 

## Проверка

`git clone https://github.com/dmitritelnov/avtor-test.git` <br/>
`cd avtor-test` <br/>
`npm install` <br/>
`npm start` <br/>
Открыть http://localhost:3999/