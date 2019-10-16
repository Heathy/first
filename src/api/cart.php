<?php

    $id =isset($_REQUEST['id'])?$_REQUEST['id']:'';
    $url =isset($_REQUEST['url'])?$_REQUEST['url']:'';
    $name =isset($_REQUEST['name'])?$_REQUEST['name']:'';
    $dename =isset($_REQUEST['dename'])?$_REQUEST['dename']:'';
    $oldprice =isset($_REQUEST['oldprice'])?$_REQUEST['oldprice']:'';
    $newprice =isset($_REQUEST['newprice'])?$_REQUEST['newprice']:'';
    $satisficing =isset($_REQUEST['satisficing'])?$_REQUEST['satisficing']:'';
    $goodsCount =isset($_REQUEST['goodsCount'])?$_REQUEST['goodsCount']:'';
    include 'conn.php';
    $sql ="SELECT * FROM `goodlist`";
    $res =$conn->query($sql);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>