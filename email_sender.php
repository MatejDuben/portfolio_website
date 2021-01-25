<?php

// Načíta pole z formulára - blokuje bilele znaky, HTML ...
$name = strip_tags(trim($_POST["name"]));
$name = str_replace(array("\r","\n"),array(" "," "),$name);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"]);

// Kontroluje dáta - ak nastala chyba pri odoslaní presmeruje na chybnú adresu
if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  header("Location: https://matejduben.github.io/portfolio_website/");

exit;
}

// Email na ktorý sa správa odošle
$recipient = "matejduben.buisness@gmail.com";

// Predmet odoslanej správy
$subject = "Máte nový kontakt od: $name";

// Obsah emailu, ktorý sa odošle
$email_content = "Meno: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Správa:\n$message\n";

// Emailová hlavička
$email_headers = "From: $name <$email>";

// Odoslanie emailu
// Odoslanie emailu
mail($recipient, $subject, $email_content, $email_headers);


// Presmerovanie na stránku ak bolo odoslanie úspešné
header("Location:https://matejduben.github.io/portfolio_website/");

?>
