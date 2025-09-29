<?php
    //Отримуємо дані з глобальної перемінної $_GET, так як ми передаемо данні методом GET
    $theme = $_GET['Theme'];
    $name = $_GET['Name']; // Виймаємо ім'я в перемінну
    $email = $_GET['Email']; // Виймаємо пошту в перемінну
    $tell = $_GET['Telegram/WhatsApp'];
    $message = "Форма зворотнього зв'язку<br> Заявка на: $theme<br> Ім'я: $name<br> Пошта: $email<br> Telegram/WhatsApp: $tell"; // Формуємо повідомлення, відправляємо на пошту
    $to = "#@gmail.com"; // Задаємо отримувача листа
    $from = "HAMSTERS"; // Від кого прийшов лист
    $subject = "Лист з сайта HAMSTERS"; // Задаємо тему листа
    $headers = "From: $from\r\nReply-To: $to\r\nContent-type: text/html; charset=utf-8\r\n"; // Формуємо заголовок листа
    if (mail($to, $subject, $message, $headers)) { // За допомогою функції mail, відправляємо повідомлення, перевіряємо чи відправилось воно
        sleep(3);
        header("Location: index.html");
    }
    else {
        echo "<p>Помилка <a href='/'>Повернутись на головну</a>"; // Лист не відправився
    }
?>
