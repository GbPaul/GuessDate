# Day of the week guessing game

### To run this game you need to have xampp installed in your local machine

# Steps to follow

- Start your xampp control panel;

- Run the Apache and MySQL server on Xampp contol Panel " _click on start_";

- In your browser type `http://localhost/phpmyadmin/`

- Create a new database called `day_game`

- You can find the file in the folder called config which is located inside app folder.

- Import the sql file provided in the in this file `day_game.sql` to the `day_game` database created above.

- Inside your xampp folder -> htdocs folder. I mean `C:\xampp\htdocs` create a folder and name it `projects` inside the projects folder create another folder `game`
- This is how the directory looks like from my side

- Copy or extract game.zip file the game directory created above

- Lastly in your browser type `http://localhost/projects/game/index.html`

> Please remember to put correct database credentials

```php
<?php
$servername = "localhost";
$username = "YOUR USER NAME"; - it should be root if you have not set any
$password = "your Password";
$dbname='day_game';

// Create connection
$conn = @new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
```

> the above code is in the `connect.php` file

# The goal is to build a simple game where a random date is displayed, and the user can guess
what day of the week (Monday to Sunday) that date is.
Within the game, there shall be
• A way for the user to select what day the presented day is.
• A log showing what date has been presented and what day the user chose and whether or not
not the chosen day of the week is correct.
• A counter of how many answers the user has had that is correct (e.g. 3 out of 7).
• A way to reset the game to start over, removing previous answers and resetting the counter to 0.
Dates must be randomly generated using php and it must be specified what date-span the
game covers.
• Control if the guessed day of the week matches the random date must be done with php.
• At least one functionality must be using ajax allowing the user interface to be updated
without reloading the page.

- Homepage



![image](https://user-images.githubusercontent.com/19783928/169557953-e956c1aa-83b9-4195-aa7f-1ac7cd4b611d.png)


