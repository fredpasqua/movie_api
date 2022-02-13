const express = require('express'),
  morgan = require('morgan');

const app = express();

app.use(morgan('common'));
app.use(express.static('public'));

let moviestop10 = [
  { title: "Walk the Line",
    year: "2005",
    genre: "Drama"
  }, { title: "Amy",
    year: "2015",
    genre: "Documentary"
  },{ title: "Hedwig and the Angry Inch",
    year: "2001",
    genre: "Drama"
  },{ title: "The Doors",
    year: "1991",
    genre: "Drama"
  },{ title: "Whiplash",
    year: "2014",
    genre: "Drama"
  },{ title: "The Young Ones",
    year: "1961",
    genre: "Drama"
  },{ title: "Cracked Actor",
    year: "1975",
    genre: "Documentary"
  },{ title: "Cabaret",
    year: "1972",
    genre: "Drama"
  },{ title: "Song of Summer",
    year: "1968",
    genre: "Drama"
  },{ title: "The Wrecking Crew!",
    year: "2008",
    genre: "Documentary"
  }
];

app.get('/toptenmovies', (req, res) => {
  res.json(moviestop10);
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
