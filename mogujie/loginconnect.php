<?php
$host="localhost";//主机名
$db_user="root";//数据库用户名
$db_pass="";//数据库用户名密码
$db_name="mysql";//数据库名称
$timezone="Asia/Shanghai";//时区

//mysql_connect连接mysql数据库 需指定相应信息
$link=mysql_connect($host,$db_user,$db_pass);
//mysql_select_db选择你用的数据库
mysql_select_db($db_name,$link);

mysql_query("SET names UTF8");

header("Content-Type: text/html; charset=utf-8");
date_default_timezone_set($timezone);
?>