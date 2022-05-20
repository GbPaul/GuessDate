<?php
   require_once 'connect.php';

   $score = $total_games = $gameId = '';

   if($_SERVER['REQUEST_METHOD'] === 'POST') {
   $score = filter_var($_POST['score'], FILTER_SANITIZE_NUMBER_INT);
   $total_games= filter_var($_POST['total_games'], FILTER_SANITIZE_NUMBER_INT);
   $gameId = uniqid('game-', true);

   $sql = "INSERT INTO results (gameId, score, total_games) VALUES (?, ?, ?)";


   $stmt = mysqli_prepare($conn, $sql);

   if(!$stmt) {
       echo 'Sorry there was an error'. mysqli_error($conn);
       die();
   }

   mysqli_stmt_bind_param($stmt, "sss", $gameId, $score, $total_games);

   mysqli_stmt_execute($stmt);

   echo 'success';

   }
 ?>