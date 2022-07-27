import cors from 'cors';
import express from 'express';
import { chats } from './db';

const app = express();

app.use(cors()); // server is ready to use

// ----- call which route?
// give an instruction to the server to send a response
// used as a (health check)
app.get('/_ping', (req, res) => {
  res.send('pong');
});
// obtain all chats from the database
app.get('/chats', (req, res) => {
  res.json(chats);
});

const port = process.env.PORT || 4000;

// creates a server instance and makes it give back info
// ports are already configured,
// in GET : specify what ports to use
// app.listen (is put at the end)
app.listen(port, () => {
  console.log(`....Listening on port ${port}`);
});
