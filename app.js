
    // app.js
    const express = require('express');
    const app = express();
    const port = 4000;

    // Define a route for the root URL ("/") that sends "Hello World!"
    app.get('/', (req, res) => {
      res.send('Welcome to EC2 instance!');
    });

    // Start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`ackend is running on port ${port}`);
    });
