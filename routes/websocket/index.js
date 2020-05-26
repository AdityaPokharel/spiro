const WebSocket = require('ws');
const WS_PORT = 8080;


const wss = new WebSocket.Server({port: WS_PORT}, () => {
  console.log('WebSocket server running at port:' + WS_PORT);
});

wss.on('connection', function connection(ws) {
  console.log('New client connected.');
  ws.on('message', (message) => {
    console.log('RECEIVED: %s', message);
  });
  ws.on('open', () => {
    console.log('SOCKET OPENEd');
  })
  ws.on('close', () => {
    console.log('SOCKET CLOSED');
  })
  ws.on('test', m => {
    console.log('test:,', m);
  });
  ws.send('something');
});

