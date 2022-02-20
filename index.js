const express = require('express'),
  bodyParser = require('body-parser'),
  uuid = require('uuid'),
  morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(morgan('common'));
app.use(express.static('public'));


let movies = [
  { title: "Walk the Line",
  description: "A movie about...",
  year: "2005",
  genre: "Drama",
  director: "Joe Smith",
  imgURL: "#",
  featured: true
}, { title: "Amy",
description: "A movie about...",
year: "2015",
genre: "Documentary",
director: "Joe Smith",
imgURL: "#",
featured: false
},{ title: "Hedwig and the Angry Inch",
description: "A movie about...",
year: "2001",
genre: "Drama",
director: "Joe Smith",
imgURL: "#",
featured: true
},{ title: "The Doors",
description: "A movie about...",
year: "1991",
genre: "Drama",
director: "Joe Smith",
imgURL: "#",
featured: false
},{ title: "Whiplash",
description: "A movie about...",
year: "2014",
genre: "Drama",
director: "Joe Smith",
imgURL: "#",
featured: false
},{ title: "The Young Ones",
description: "A movie about...",
year: "1961",
genre: "Drama",
director: "Joe Smith",
imgURL: "#",
featured: true
},{ title: "Cracked Actor",
description: "A movie about...",
year: "1975",
genre: "Documentary",
director: "Joe Smith",
imgURL: "#",
featured: true
},{ title: "Cabaret",
description: "A movie about...",
year: "1972",
genre: "Drama",
director: "Joe Smith",
imgURL: "#",
featured: true
},{ title: "Song of Summer",
description: "A movie about...",
year: "1968",
genre: "Drama",
director: "Joe Smith",
imgURL: "#",
featured: false
},{ title: "The Wrecking Crew!",
description: "A movie about...",
year: "2008",
genre: "Documentary",
director: "Joe Smith",
imgURL: "#",
featured: false
}
];

let genres = [
  {name: "drama",
  description: "In film and television, drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone."},
  {name: "documentary",
  description: "A documentary film or documentary is a non-fictional motion-picture intended to document reality, primarily for the purposes of instruction, education, or maintaining a historical record."},
  {name: "musical", description: "Musical film is a film genre in which songs by the characters are interwoven into the narrative, sometimes accompanied by singing and dancing."}
];

let directors = [
  {name: "Steven Spielberg", yearBirth: "1901", yearDeath: "1949", bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
];

let users = [{id: "1", name: "Fred Pasqua", email: "tester@gmail.com", favorites: ["Walk the Line", "Amy"]}, {id: "2", name: "Tony Robbins", email: "tester@gmail.com", favorites: []}];

//READ A List of All Movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

//READ a Single Movies Data by Title
app.get('/movies/:title', (req, res) => {
 const { title } = req.params;
 const movie = movies.find( movie => movie.title === title);

  if (movie){
      res.status(200).json(movie);
  }else {
    res.status(400).send('Movie is not available')
  }
});

//READ the description of a genre by genre type
app.get('/genres/:genreName', (req, res) => {
  const { genreName } = req.params;
  const genre = genres.find( genre => genre.name === genreName);

   if (genre){
       res.status(200).json(genre);
   }else {
     res.status(400).send('Genre is not available')
   }
 });

 //READ info about a director by directors name
 app.get('/directors/:directorName', (req, res) => {
   const { directorName } = req.params;
   const director = directors.find( director => director.name === directorName);

    if (director){
        res.status(200).json(director);
    }else {
      res.status(400).send('The Director was not found')
    }
  });

//CREATE a new user
  app.post('/users', (req, res) => {
    //new user must be sent in JSON format
      const newUser = req.body;

      if (newUser.name) {
        newUser.id = uuid.v4();
        users.push(newUser);
        res.status(201).json(newUser);
      }else{
        res.status(400).send('User must have a name');
      }
  });

  //UPDATE user name
  app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    let user = users.find( user => user.id == id);

    if (user){
        user.name = updatedUser.name;
        res.status(200).json(user);
    }else{
      res.status(400).send('no such user')
    }
  });
//CREATE user favorite movie
  app.post('/users/:name/:movieTitle', (req, res) => {
    const { name, movieTitle } = req.params;

    let user = users.find( user => user.name == name );

    if (user){
      user.favorites.push(movieTitle);
      res.send(`Success! ${movieTitle} has been added to ${name}'s Favorite Movies.`);
    } else {
      res.status(400).send('no such user exists');
    }
  });
//DELETE MOVIE TITLE FROM USERS FAVORITES
app.delete('/users/:name/:movieTitle', (req, res) => {
  const { name, movieTitle } = req.params;

  let user = users.find( user => user.name == name );

  if (user){
    user.favorites.filter(title => title !== movieTitle);
    res.send(`Success! ${movieTitle} has been removed from ${name}'s Favorite Movies.`);
  } else {
    res.status(400).send('no such user exists');
  }
});

//ALLOW USERS TO DEREGISTER
app.delete('/users/:email', (req, res) => {
  const { email } = req.params;

  let user = users.find( user => user.email == email );

  if (user){
    users.filter(user => user.email != email);
    res.send(`User with email:${email} has been removed from myFlix.`);
  } else {
    res.status(400).send(`Can't locate an account with the email address ${email}, please try again.`);
  }
});

app.get('/', (req, res) => {
  res.send('Placeholder for myFLix Movie App home page.');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
