# Smart Design Frontend

Ссылка: [SmartDesignFrontend](https://github.com/InInferno/smart-design-frontend "SmartDesignFrontend").


Управление контентом электронного магазина
Приложение схематично демонстрирует работу с товарами в электронном магазине. Карточка отвечает за товар на складе.
Поля:
- Идентификатор (ID)
- Название
- Описание
- Параметры: пары ключ/значение
SPA приложение. Имеет два роута: страница с созданием товара и страница с поиском товаров.
На странице поиска можно найти определённый товар по имени или параметрам.

На странице добавления товара необходимо заполнить все поля, кнопка добавления станет активной и можно добавить товар. Ниже формы добавления отображаются все товары из БД, добавленный товар будет в самом низу.

На странице поиска необходимо заполнить одно из полей, чтобы найти подходящие товары. Если поиск не производился, отображаются все товары.

### Технологии: 
- JS
- React
- Redux
- GIT
- HTML
- CSS

### Установка:

Клонировать [репозиторий](https://github.com/InInferno/smart-design-frontend)

Установить пакеты

    npm install

### Запуск:

Сборка production

      npm run build
      
Режим разработки с hotreload

    npm run dev
