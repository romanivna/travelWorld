<?php 
$login = $_POST["pro"];
$ok = "ok";
$f = fopen("users.json", "a+");
fwrite($f, $login);
fclose($f);
/*
$login = ",\n\t{\n\t\t\"login\" : \"".$_POST["login"]."\"";
$pass = ",\n\t\t\"pass\": \"".$_POST["password"]."\"";
$email = ",\n\t\t\"email\": \"".$_POST["user_email"]."\"";
$name = ",\n\t\t\"name\": \"".$_POST["user_name"]."\"";
$country = ",\n\t\t\"country\": \"".$_POST["user_country"]."\"";
$hobby = ",\n\t\t\"hobby\": \"".$_POST["user_interest"]."\"\n\t}";
$end = "\n]\n}";

$f = fopen("users.json", "a+");
$str = fread($f,600);
//$repl = strstr($str, '', -4);
fclose($f);
// Записать текст
/*
$f = fopen("users.json", "w");
fwrite($f, $repl);
fclose($f);
$f = fopen("users.json", "a+");
fwrite($f, $login); 
fwrite($f, $pass);
fwrite($f, $email);
fwrite($f, $name);
fwrite($f, $country);
fwrite($f, $hobby);
fwrite($f, $end);
*/
// Закрыть текстовый файл
//fclose($f);

?>