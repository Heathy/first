<?php
$name =isset($_REQUEST['name'])?$_REQUEST['name']:'';
$pwd =isset($_REQUEST['pwd'])?$_REQUEST['pwd']:'';
include 'conn.php';
$sql="SELECT * FROM loginreg WHERE `name` ='$name' AND pwd ='$pwd'";
$res =$conn->query($sql);
if($res->num_rows){
    echo 5;
}else{
    echo 6;
}
$res->close();
$conn->close();
?>