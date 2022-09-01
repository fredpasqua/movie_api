
<!DOCTYPE html>
<html lang="en" dir="ltr">

  MyFlix API

  <body>
    <h1>Documentation Page</h1>
    <h2>Project: myFlix Movie API</h2>
    <p>This project focused on building a server-side component of a "movies" web application.  The web application
    will provide users with access to information about different movies, directors, and genres.  Users will be able to sign up, update their
  personal information, and create a list of their favorite movies.</p>
  
    <h2> Technical Requirements of the Project</h2>
● The API was built with Node.js and Express.
● The API uses REST architecture, with URL endpoints performing CRUD operations.
● The API uses middleware modules, including body-parser package for
reading data from requests and morgan for logging.
● The database was built using MongoDB.
● The business logic was modeled with Mongoose.
● The API provides movie information in JSON format.
● The API endpoints were tested using Postman.
● The API includes user authentication and authorization code.
● The API includes data validation logic.
● The API was deployed to Heroku
    
    <h2>API ENDPOINTS</h2>
  <table class="tg">
  <thead>
    <tr>
      <th class="tg-0lax">DESCRIPTION</th>
      <th class="tg-0lax">METHOD</th>
      <th class="tg-0lax">ENDPOINT URL</th>
      <th class="tg-0lax">REQUEST BODY DATA FORMAT</th>
      <th class="tg-0lax">REQUEST PARAMETER</th>
      <th class="tg-0lax">RESPONSE</th>
      <th class="tg-0lax">RESPONSE BODY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="tg-0lax">Return list of ALL Movies</td>
      <td class="tg-0lax">GET</td>
      <td class="tg-0lax">/movies</td>
      <td class="tg-0lax">NONE</td>
      <td class="tg-0lax">NONE</td>
      <td class="tg-0lax">JSON object holding data about all movies.</td>
      <td class="tg-0lax">
        {
        "title": "Walk the Line",<br>
        "description": "A movie about...",<br>
        "year": "2005",<br>
        "genre": "Drama",<br>
        "director": "Joe Smith",<br>
        "imgURL": "#",<br>
        "featured": true<br>
    },...</td>
    </tr>
    <tr>
      <td class="tg-0lax">Return DATA about a single movie by Title</td>
      <td class="tg-0lax">GET</td>
      <td class="tg-0lax">/movies/[title]</td>
      <td class="tg-0lax">NONE</td>
      <td class="tg-0lax">:title</td>
      <td class="tg-0lax">JSON object holding data about one movie by Title</td>
      <td class="tg-0lax">{
    "Genre": {<br>
        "Name": "Comedy",<br>
        "Description": "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect."<br>
    },<br>
    "Director": {<br>
        "Name": "Judd Apatow",<br>
        "Bio": "Judd Apatow is an American producer, writer, director, actor and stand-up comedian.",<br>
        "Birth": "1967"<br>
    },<br>
    "Actors": [],<br>
    "_id": "621839eca9f7d842a1f68daf",<br>
    "Title": "The 40 Year-Old Virgin",<br>
    "Description": "Goaded by his buddies, a nerdy guy who's never \"done the deed\" only finds the pressure mounting when he meets a single mother.",<br>
    "ImagePath": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrR290Lef_IoPLgw10i5698Ynb9180AlD4rgjwcQx4O9oImvR1",<br>
    "Featured": false
}<br><br>
If no movie then response = "Movie is not available"</td>
    </tr>
    <tr>
      <td class="tg-0lax">Return data about a genre (description) by name/title (e.g., "Drama")</td>
      <td class="tg-0lax">GET</td>
      <td class="tg-0lax">/genre/[genreName]</td>
      <td class="tg-0lax">NONE</td>
      <td class="tg-0lax">:genreName</td>
      <td class="tg-0lax">JSON object holding data about the genre selected</td>
      <td class="tg-0lax">{
    "genre": "drama",
    "description": "In film and television, drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone."
}<br><br>
If no genre found then response ="Genre is not available"</td>
    </tr>
    <tr>
      <td class="tg-0lax">Return data about a Director (YearOfBirth/Death & Biography) by name (e.g., "Steven Spielberg")</td>
      <td class="tg-0lax">GET</td>
      <td class="tg-0lax">directors/[directorName]</td>
      <td class="tg-0lax">NONE</td>
      <td class="tg-0lax">:directorName</td>
      <td class="tg-0lax">JSON object holding data about the director</td>
      <td class="tg-0lax">{
    "name": "Steven Spielberg",
    "yearBirth": "1901",
    "yearDeath": "1949",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}<br><br>If no director found then response = "The Director was not found"</td>
    </tr>
    <tr>
      <td class="tg-0lax">Allow new users to register</td>
      <td class="tg-0lax">POST</td>
      <td class="tg-0lax">users/</td>
      <td class="tg-0lax">JSON Format: {<br>
        Userame: "Joe Smith",<br>
        Password: "Password",<br>
        Email: "Jsmith@email.com",<br>
        Birthday: "Date"<br>
      }</td>
      <td class="tg-0lax">NONE</td>
      <td class="tg-0lax">JSON object holding data about new user w/ ID.</td>
      <td class="tg-0lax">{<br>
        ID: 987478497489874938<br>
        Userame: "Joe Smith",<br>
        Password: "Password",<br>
        Email: "Jsmith@email.com",<br>
        Birthday: "Date"<br>
      } <br><br>If user already exists: Error Code 400 "USER already exists!"</td>
    </tr>
    <tr>
      <td class="tg-0lax">Allow user to update their user info (All).</td>
      <td class="tg-0lax">PUT</td>
      <td class="tg-0lax">/users/:Username</td>
      <td class="tg-0lax">JSON Format: {
        Username: String,
        (required)<br>
        Password: String,
        (required)<br>
        Email: String,
        (required)<br>
        Birthday: Date<br>
      }</td>
      <td class="tg-0lax">:Username</td>
      <td class="tg-0lax">JSON object with updated user info </td>
      <td class="tg-0lax">{"name": "Joseph Updated", "email": "tester@gmail.com", "favorites": ["Walk the Line", "Amy"]}</td>
    </tr>  <tr>
      <td class="tg-0lax">Allow user to add a movie to their favorites</td>
      <td class="tg-0lax">POST</td>
      <td class="tg-0lax">/users/:Username/movies/:movieID</td>
      <td class="tg-0lax">NONE</td>
      <td class="tg-0lax">:Username, ;movieID</td>
      <td class="tg-0lax">Console Log</td>
      <td class="tg-0lax">"MovieID was added to favorites"<br></td>
    </tr>
    <tr>
      <td class="tg-0lax">Allow users to remove a movie from their list of favorites</td>
      <td class="tg-0lax">DELETE</td>
      <td class="tg-0lax">/users/:Username/movies/:movieID</td>
      <td class="tg-0lax">NONE</td>
      <td class="tg-0lax">:Username, :movieID</td>
      <td class="tg-0lax">Console Log</td>
      <td class="tg-0lax">"MovieID was removed from favorites."</td>
    </tr>
    <tr>
      <td class="tg-0lax">Allow existing users to deregister</td>
      <td class="tg-0lax">DELETE</td>
      <td class="tg-0lax">/users/:Username</td>
      <td class="tg-0lax">NONE</td>
      <td class="tg-0lax">:Username</td>
      <td class="tg-0lax">"Username was deleted"<br><br>If no user found, "Username was not found."</td>
      <td class="tg-0lax">NONE</td>
    </tr>
  </tbody>
  </table>


  </ul>
  </body>
</html>
