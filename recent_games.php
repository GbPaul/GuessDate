<?php

require_once 'connect.php';


if($_SERVER['REQUEST_METHOD'] === 'GET') {
      $sql = "SELECT * FROM results ORDER BY created_at";

      $stmt = mysqli_prepare($conn, $sql);

       if(!$stmt) {
       echo 'Sorry there was an error'. mysqli_error($conn);
       die();
    }

    mysqli_stmt_execute($stmt);

    $results = mysqli_stmt_get_result($stmt);
    
  $output = '';
  while($rows = mysqli_fetch_assoc($results)){
	$output .= '
      <tr>
        <th scope="row">'.$rows['gameId'].'</th>
        <td>'.$rows['score'].'</td>
        <td>'.$rows['total_games'].'</td>
              
       </tr>
    ';
}

echo $output;


}else {
    echo 'Wrong request method';
}