https://searchword.netlify.app/
Выполнение Тестового задания:

Сделать страницу, на которой будет:
-поле для ввода;
-checkbox;
-две кнопки;
-место для вывода данных.
Одна кнопка - фильтр по длине слов, вторая кнопка - фильтр по подстроке.
Checkbox отвечает за чувствительность регистра поиска.

При вводе в поле числа и клике по кнопке фильтра по длине слов в место для
вывода данных выводятся строки с длиной строки больше введенного числа.

При вводе строки в поле и клике по кнопке фильтра по подстроке в место для
вывода данных выводятся строки, которые содержат введенную подстроку.

Если checkbox чувствительности регистра проставлен, строки сравниваются с
учетом регистра ('aAa'9; не равно 'aaa'). Если checkbox снят, строки сравниваются
без учета регистра ('aAa' равно 'aaa').

Данные берутся HTTP запросом по адресу http://www.mrsoft.by/data.json (данные прописаны в переменной в app.js, так как данные по адресу не доступны). Файл с течением суток не меняется.
