<?php
    $dataindex =isset($_REQUEST['dataindex'])?$_REQUEST['dataindex']:'';
    $iconurl1 =isset($_REQUEST['iconurl1'])?$_REQUEST['iconurl1']:'';
    $iconurl2 =isset($_REQUEST['iconurl2'])?$_REQUEST['iconurl2']:'';
    $sidetitle =isset($_REQUEST['sidetitle'])?$_REQUEST['sidetitle']:'';
    // echo $dataindex,$iconurl1,$iconurl2,$sidetitle;
    include 'conn.php';
    // echo 1;
    $sql ="SELECT * FROM `side column`;";
    $res =$conn->query($sql);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);
    

?>