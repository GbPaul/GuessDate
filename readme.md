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

- Homepage



![image](https://user-images.githubusercontent.com/19783928/169557953-e956c1aa-83b9-4195-aa7f-1ac7cd4b611d.png)


