<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "Данные получены через POST";
} else {
    header($_SERVER["SERVER_PROTOCOL"]." 405 Method Not Allowed", true, 405);
    echo "Метод не разрешен";
}

?>