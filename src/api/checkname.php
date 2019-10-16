<?php
$name =isset($_GET['name'])?$_GET['name']:'error';
include 'conn.php';
$sql ="SELECT * FROM usersheet where name = '$name'";
$res =$conn->query($sql);
if($res->num_rows){
    echo 1;
}else{
    echo 2;
}
$res->close();
$conn->close();
?>