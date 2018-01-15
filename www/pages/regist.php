<?php

if(isset($_POST['login'])){

	$file = file_get_contents('users2.json');

	$file = json_decode($file, true);

	$file['users'][] = $_POST;

	$json = json_encode($file);

	file_put_contents('users2.json', $json);

}


