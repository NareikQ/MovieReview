<?php
    //**********************************************************************************
    //**********************************************************************************
    //**********************************************************************************
    //Author: Kieran Quinn
    //Date: 06-Aug-2018
    //Description: Deletes a rating if the user is logged in.
    //**********************************************************************************
    header('Access-Control-Allow-Origin: *');

    header('Access-Control-Allow-Methods: GET, POST');
    
    header("Access-Control-Allow-Headers: X-Requested-With");
    
$server = "hostingmysql304.webapps.net";
$dbuser = "kqAdmin";
$password = "cl37kxQ1";

$link = mysqli_connect($server, $dbuser, $password);
mysqli_select_db($link, "moviereview");
$return_arr = array();
$memberId = 0;

$sql="call sp_GetInitialMovieInfo($memberId)";

$result = mysqli_query($link, $sql);
if (!$result)
    die('Invalid query: ' . mysql_error());

while ($row = mysqli_fetch_array($result)) {
    $row_array['movieId'] = $row["movie_id"];
    $row_array['title'] = $row["title"];
    $row_array['image'] = $row["image"];
    $row_array['releaseDate'] = $row["releasedate"];
    $row_array['LikeId'] = $row["Like_ID"];
    $row_array['RatingID'] = $row["Rating_ID"];
    $row_array['isAdmin'] = $row["IsAdmin"];
    $row_array['boxOffice'] = $row["BoxOffice"];
    $row_array['avgRating'] = $row["avgStars"];
    $row_array['actors'] = $row["MovieActors"];
    $row_array['genre'] = $row["Genre"];
    $row_array['numLikes'] = $row["num_likes"];
    $row_array['numRatings'] = $row["num_ratings"];
    $row_array['releaseDateYear'] = substr($releaseDate, 0,4);

    array_push($return_arr, $row_array);
}

$jsonNew = json_encode(utf8ize($return_arr));

echo $jsonNew;

function utf8ize($d)
{
    if (is_array($d)) {
        foreach ($d as $k => $v) {
            $d[$k] = utf8ize($v);
        }
    } else if (is_string($d)) {
        return utf8_encode($d);
    }
    return $d;
}
 