<?php
$name =isset($_POST['name'])?$_POST['name']:'';
$pwd =isset($_POST['pwd'])?$_POST['pwd']:'';
include 'conn.php';
$sql = "INSERT INTO usersheet(name,pwd) VALUES('$name','$pwd')";
$res =$conn->query($sql);
if($res){
    echo 3;
}else{
    echo 4;
}
?>