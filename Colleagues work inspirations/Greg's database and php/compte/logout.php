<?php

//logout user
include 'autoload.php';

use lib\auth\Auth as Auth;

Auth::logout();

header('Location: login.php');