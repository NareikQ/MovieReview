<?php
    //**********************************************************************************
    //**********************************************************************************
    //**********************************************************************************
    //Author: Kieran Quinn
    //Date: 14-Jul-2018
    //Description: Runs the users email and password against the database.
    //If the combination is correct, a session is created.
    //**********************************************************************************

    session_start();
	$server = "hostingmysql304.webapps.net";
	$dbuser = "kqAdmin";
	$password = "cl37kxQ1";
	$link=mysqli_connect($server,$dbuser,$password);
	mysqli_select_db($link, "moviereview");

	if(isset($_POST['admin_name']) and isset($_POST['password'])) {
		$username=$_POST['admin_name'];
		$password=$_POST['password'];
        $isAdmin='';
		$query = "call sp_MemberLogin('$username', '$password')";

        $result=mysqli_query($link,$query) or die(mysqli_error($connection));
		$count=mysqli_num_rows($result);
        while($row=mysqli_fetch_array($result)) {
            $memberId=$row["Member_ID"];
            $isAdmin=$row["IsAdmin"];
        }

        //Username and password combination exists in the database
		if($count == 1) {
			$_SESSION['username']=$username;
            $_SESSION['memberID']=$memberId;
            $_SESSION['isAdmin']=$isAdmin;

            //Only show the logged in popup once
            $_SESSION['loginMessage']='Not Shown';

            $memberIdNew=$_SESSION['memberID'];

			echo "Successful Login";
            header("Location:../default.php");
			exit;
		}
		else {
			$_SESSION['errors']='Your username or password was incorrect';
            unset($_SESSION["username"]);
            unset($_SESSION["password"]);
			echo "Failed Login";
            header("Location:../default.php");
		}
	}
?>