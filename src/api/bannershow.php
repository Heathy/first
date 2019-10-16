<?php
    $showpicurl =isset($_REQUEST['showpicurl'])?$_REQUEST['showpicurl']:'';
    include 'conn.php';
    // echo 1;
    $sql ="SELECT * FROM banner_pic";
    $res =$conn->query($sql);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);
    

?>