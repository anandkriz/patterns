'use strict';

const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});