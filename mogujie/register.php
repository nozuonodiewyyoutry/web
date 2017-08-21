<?php 
    header("Content-Type: text/html; charset=utf8");

    if(!isset($_POST['submit'])){
        exit("错误执行");
    }//判断是否有submit操作

    $name=$_POST['username'];//获取表单里的name
    $password=$_POST['password'];//获取表单里的password

    include('loginconnect.php');//链接数据库
    $sql="select username from logindata where username='$name'";
    $reslut=mysql_query($sql);
    $num=mysql_num_rows($reslut);
    if($num){
        echo "<script>alert('该用户已经存在！')</script>";
    }
    else{    	
	    	$q="insert into logindata(username,password) values ('$name','$password')";//向数据库插入表单传来的值的sql
	    	$q_reslut=mysql_query($q);//执行sql	    
	    	if (!$q_reslut){
	    	    die('Error:'. mysql_error());//如果sql执行失败输出错误
	    	}else{
	    	    echo "<script>alert('恭喜！您已经成功注册')</script>";
	    	     echo "
	    	         <script>
	    	               setTimeout(function(){window.location.href='http://127.0.0.1:8020/login/index.html?__hbt=1499399456200';},800);
	    	         </script>
	
	    	            ";//成功输出注册成功
	    	}
    }

    

    // mysql_close($con);//关闭数据库

?>