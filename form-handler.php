<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'website\'s email id here';
$email_subject = 'New Form Submission';
$email_body = "User Name: $name .\n".
              "User Email: $visitor_email .\n".
              "Subject: $subject .\n".
              "User Message: $message .\n";

$to = 'innoed.education@gmail.com';
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

//Send the data to email
mail($to, $email_subject, $email_body, $headers);
//Direct to this page after form submission
header("Location: contact.html");