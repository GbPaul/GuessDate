<?php
function generateRandomDate () {
  // generate random timestamp
  $timestamp = mt_rand(1, time());

  $randomDate = date("d M Y", $timestamp);

  return $randomDate;
}


 function determineDayOfWeek () {
   $randomDate = generateRandomDate();

   $stringDate = strtotime($randomDate);

   $dayOfWeek = date("l", $stringDate);

   $object = new stdClass();

   $object->dateString = date("d M Y", $stringDate);

   $object->dayOfWeek = $dayOfWeek;

   return $object;
 }


 $randomDate = determineDayOfWeek();


 echo json_encode($randomDate);