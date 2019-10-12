<?php
 
 if(!$_POST){
  die('No Post Variables');
 }
  
 echo "Данные получены:\n";
 print_r($_POST);
 die;