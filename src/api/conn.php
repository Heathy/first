<?php
header('Content-type:text/html;charset=utf-8');

$servername = 'localhost';
$username = 'root';
$password = 'root';
$dbname = 'dbname';

$conn = new mysqli($servername,$username,$password,$dbname);

// $conn = new mysqli($servername, $username, $password);

if($conn->connect_error){
    die('链接失败' . $conn->connect_error);
}else {
    // echo '链接成功';
}
//构造函数建立连接
// $conn =new mysqli($severname,$username,$psd,$dbname) or die('error');

// try{
//     //解析config.ini文件
//     $config = parse_ini_file(realpath(dirname(__FILE__) . '/config/config.ini'));
//     //对mysqli类进行实例化
//     $mysqli = new mysqli($config['host'], $config['username'], $config['password'], $config['dbname']);   
//     if(mysqli_connect_errno()){    //判断是否成功连接上MySQL数据库
//         throw new Exception('数据库连接错误！');  //如果连接错误，则抛出异常
//     }else{
//         echo '数据库连接成功！';   //打印连接成功的提示
//     }
// }catch (Exception $e){        //捕获异常
//     echo $e->getMessage();    //打印异常信息
// }
?>