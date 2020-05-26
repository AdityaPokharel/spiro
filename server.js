const express = require('express');
require('./routes/websocket');
const app = express();
const REST_PORT = 8000;

// app.listen(REST_PORT, () => console.log(`REST app listening at http://localhost:${REST_PORT}`));
