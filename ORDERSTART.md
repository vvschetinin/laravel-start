### Чек-лист для создания и настройки нового проекта

на основе базовой сборки Laravel 12 с Laravel Herd и SQLite

#### Специфика сборки:

- шаблонный репозиторий на GitHub,
- SQLite для локальной разработки,
- Vite 7 для фронтенда,
- PowerShell и Herd.

#### Общие рекомендации перед стартом

Окружение: Windows с PowerShell (рекомендую Windows Terminal), Herd установлен и запущен.
Директория проектов: ~\Herd (или $env:USERPROFILE\Herd).
Версии: Laravel 12.x, PHP 8.2+, Node.js 18+, Composer 2.x, npm 11.x (обновите, если нужно: npm install -g npm@latest).
Безопасность: Не коммитьте .env или database.sqlite в Git (добавьте в .gitignore).
Время на выполнение: 10–15 минут для базовой настройки.

#### Проверка версий инструментов в PowerShell:

```bash

php -v  # Должно быть 8.2+
composer --version  # 2.x
node -v  # 18+
npm -v  # 11.x (обновите: npm install -g npm@latest)

```

### Запуск проекта с нуля в определенной папке

```bash

composer create-project laravel/laravel .

```

### Настройка Laravel-проекта

Скопируйте и настройте .env:

```bash
Copy-Item .env.example .env
```

Откройте в редакторе: notepad .env или code .env.
Обновите ключевые параметры:

```bash
APP_NAME="New Project Name"
APP_URL=http://new-project-name.test
DB_CONNECTION=sqlite
DB_DATABASE=C:\Users\$env:USERNAME\Herd\new-project-name\database\database.sqlite  # Абсолютный путь

Пример:
DB_DATABASE=E:\SERVER\Herd\laravel-start\database\database.sqlite

DB_FOREIGN_KEYS=true  # Для поддержки foreign keys в SQLite
```

Создайте файл SQLite:

```bash
New-Item -ItemType File -Path database\database.sqlite
```

Установите PHP-зависимости:

```bash
composer install
```

Сгенерируйте ключ приложения:

```bash
php artisan key:generate
```

Выполните миграции (создаст таблицы, включая users):

```bash
php artisan migrate
```

### Настройка Hosts | ОСОБЕННО ВАЖНО!

Перейти по адресу C:\Windows\System32\drivers\ets\
Открыть файл hosts
Проверить наличие записи о размеженном проекте вида: 127.0.0.1 laravel-start.test
Если ее нет, то запись нужно внести

### Настройка фронтенда (Vite 7, JavaScript/TypeScript)

Установите Node.js-зависимости:

```bash

npm install

```

Проверьте конфигурацию Vite (vite.config.js — должно быть настроено для Laravel).
Соберите ресурсы для разработки (в отдельном PowerShell-окне):

```bash

npm run dev  # Hot-reload на порту 5173

```

Соберите для продакшена (опционально):

```bash

npm run build

```

#### Очистка кэш (для чистоты):

```bash

php artisan cache:clear
php artisan config:clear

```

### ДОПОЛНИТЕЛЬНО

#### Команда для генерации контроллера:

```bash

# Основная команда
php artisan make:controller ControllerName
# Например:
php artisan make:controller PostController
# В заданной директории
php artisan make:controller Admin/UserController

```
