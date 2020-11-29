<?php


require 'const.php';


$request = $_SERVER['REQUEST_URI'];



switch($request){


    case root :

        require 'views/game.php';

    break;


}