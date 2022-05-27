const express = require('express');
const { createClient } = require('redis');


const app  = express();
const client = createClient({ url: 'redis://redis-server' });
client.connect().then(() => {
  client.set('visits', 0);
})

app.get('/', async (req, res) => {
  const visits = await client.get('visits');
  res.send(`Number of visits: ${visits}`);
  client.set('visits', parseInt(visits) + 1);
});

app.get('/exit', (req, res) => {
  process.exit(0);
})
app.get('/exit-failure', (req, res) => {
  process.exit(1);
})

app.listen(8081, () => {
  console.log('listening on ', 8081);
});