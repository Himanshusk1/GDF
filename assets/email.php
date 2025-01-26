<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gurukul Dream Foundation</title>
</head>
<body>
    


<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
    
    require_once 'PHPMailer/src/Exception.php';
    require_once 'PHPMailer/src/PHPMailer.php';
    require_once 'PHPMailer/src/SMTP.php';

    $hostEmail = 'gurukuldreamfoundation@gmail.com';
    $emailPassword = 'tvyevsptslmgcbyk';

    function send_mail_to_me($name, $mobile, $email, $message, $hostEmail, $emailPassword){
    $mail = new PHPMailer(true);
    
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $hostEmail;
    $mail->Password   = $emailPassword;
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    
    $mail->setFrom("sumitrathor142272@gmail.com");
    
    $message1 = '<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Messsage from Gurukul Dream Foundation Website User</title>
        <style>
            body {
                padding: 0;
                margin: 0;
            }
            .container {
                width: 100% !important;
                height: 500px;
                display: grid;
                place-content: center;
                margin-top: 50px !important;
                font-family: sans-serif,"Sans-Sarif";
                
            }
            .message-box {
                width: 100% !important;
                max-width: 500px !important;
                border: 1px solid grey;
                border-radius: 5px;
                padding: 5px 10px;
            } 
            a {
                text-decoration: none;
            }
            .text-green {
                color: green;
            }
            .text-orange {
                color: orange;
            }
        </style>
    </head>
    <body>
        <div class="container ">
            <div class="message-box" >
                <img src="https://media.licdn.com/dms/image/C4E03AQFRwH-va-qVNw/profile-displayphoto-shrink_800_800/0/1617522979340?e=2147483647&v=beta&t=TfZHUZh5iVKsvZFS7Bb8QpVwdgeIugu2UWbZapYADb4" alt="" width="100">
                <h3  class="" >Messsage from Gurukul Dream Foundation Website User...</h3>
                <div  class="" >
                    <h4  class="" >Name : '. $name . '</h4>
                    <h4  class="" >Mobile : <a href="tel:'. $mobile .'">'. $mobile .' </a></h4>
                    <h4  class="" >Email : <a href="mailto:'. $email .'">'. $email .' </a></h4>
                    <p><b>Message : </b> <blockquote>' . $message . '</p>
                    <b><span class="text-green">Gurukul</span> <span class="text-orange">Dream</span> <span class="text-green"> Foundation</span></b></blockquote></div>
                
                </div>
            </div>
        </div>
    </body>
    </html>';

    $mail->addAddress($hostEmail);
    $mail->isHTML(true);
    $mail->Subject = $name . " Send you some message from Gurukul Dream Foundation Website";
    $mail->Body    = $message1;

    if ($mail->send()) {
        ?>

        <script>appendAlert('Your message havebeen send, I will try to read your message as soon as possible', 'success');</script>
        <?php
    } 
    else {
        ?>

        <script>appendAlert('Your message not havebeen send, pls try again', 'danger');</script>
        <?php
    }
  }
  
    function send_mail_to_user($name, $mobile, $email, $message, $hostEmail, $emailPassword){
    $mail = new PHPMailer(true);
    
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $hostEmail;
    $mail->Password   = $emailPassword;
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    
    $mail->setFrom("sumitrathor142272@gmail.com");
    
    $message1 = '<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Messsage Gurukul Dream Foundation</title>
        <style>
            body {
                padding: 0;
                margin: 0;
            }
            .container {
                width: 100% !important;
                height: 500px;
                display: grid;
                place-content: center;
                margin-top: 50px !important;
                font-family: sans-serif,"Sans-Sarif";
                
            }
            .message-box {
                width: 100% !important;
                max-width: 500px !important;
                border: 1px solid grey;
                border-radius: 5px;
                padding: 5px 10px;
            } 
            a {
                text-decoration: none;
            }
            .text-green {
                color: green;
            }
            .text-orange {
                color: orange;
            }
        </style>
    </head>
    <body>
        <div class="container ">
            <div class="message-box" >
                <img src="https://media.licdn.com/dms/image/C4E03AQFRwH-va-qVNw/profile-displayphoto-shrink_800_800/0/1617522979340?e=2147483647&v=beta&t=TfZHUZh5iVKsvZFS7Bb8QpVwdgeIugu2UWbZapYADb4" alt="" width="100">
                <h3  class="" >Your Message have been sent...</h3>
                <div  class="" >
                    <h4  class="" >Name : '. $name . '</h4>
                    <h4  class="" >Mobile : <a href="tel:'. $mobile . '">'. $mobile . ' </a></h4>
                    <h4  class="" >Email : <a href="mailto:'. $email . '">'. $email . ' </a></h4>
                    <p><b>Message : </b> <blockquote>' . $message . '</p>
                    <div>We will try to read your message and get back to you as soon as possible.
                    <br>
                    <b><span class="text-green">Gurukul</span> <span class="text-orange">Dream</span> <span class="text-green"> Foundation</span></b></blockquote></div>
                </div>
            </div>
        </div>
    </body>
    </html>';

    $mail->addAddress($email);
    $mail->isHTML(true);
    $mail->Subject = "Your message have been sent to Gurukul Dream Foundation.";
    $mail->Body    = $message1;
    $mail->send();
  }


//   Checking if the current request is POST and all the provided data is available...
  if(($_SERVER['REQUEST_METHOD'] == "POST") && (isset($_POST['name'])) && (isset($_POST['mobile'])) && (isset($_POST['email'])) && (isset($_POST['message']))) {
      
    try {
        //code...
        send_mail_to_me($_POST['name'], $_POST['mobile'], $_POST['email'], $_POST['message'], $hostEmail, $emailPassword);
        send_mail_to_user($_POST['name'], $_POST['mobile'], $_POST['email'], $_POST['message'], $hostEmail, $emailPassword);
    

        // Acknowledging the user that email have been sent...
        echo '<center>
            <h1 style="color: green;">Your Response has been Recorded.</h1>
            </center>
            
        ';


    } catch (\Throwable $th) {
        //throw $th;
        echo '<h1><center>403 Forbidden <a href="../">Go Back</a></center></h1>';
        
    }
  } else {
    echo '<h1><center>403 Forbidden <a href="../">Go Back</a></center></h1>';
    
  }

  ?>

    <center>
        <span>You will be redirected to home page in </span>
        <b id="time-limit">5</b>
    </center>

<script>
    let timebox = document.getElementById('time-limit');
    let timelimit = + timebox.innerText;
    setInterval(()=> {
        if(timelimit == 0) {
            location.replace('../');
        }

        timebox.innerText = timelimit--;
    }, 1000);
</script>
</body>
</html>