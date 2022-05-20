<?php

// intialize variables
$user_answer = $game_count = $date = $correctAnswer = '';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
$user_answer = filter_var($_POST['answer'], FILTER_SANITIZE_STRING);
$game_count = filter_var($_POST['gameCount'], FILTER_SANITIZE_STRING);
$date = filter_var($_POST['date'], FILTER_SANITIZE_STRING);
$correctAnswer = filter_var($_POST['correctAnswer'], FILTER_SANITIZE_STRING);

$is_answer_correct = $user_answer === $correctAnswer ? true : false;

$object = new stdClass();

$object->date = $date;
$object->user_answer = $user_answer;
$object->correct_answer = $correctAnswer;
$object->is_answer_correct = $is_answer_correct;

echo json_encode($object);

}

?>