<?php
if($_POST)
    {
    $to = "marsiknamarse@gmail.com"; 
    $subject = "Contact"; 
    $message = '<span style="font-weight:bold;color:#ff6600;font-size:18px;"></span><br><br>
    Имя: <span style="font-weight:bold;color:#339900;">'.$_POST['name'].'</span>';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <office@gmail.com>\r\n";
    $result = mail($to, $subject, $message, $headers);
  
    if ($result){
        echo "<p>Сообщение успешно отправлено. Скоро Вам перезвонят</p>";
    }
    }
?>