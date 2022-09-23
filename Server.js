const http = require('http');
const port = 5000;
const data = {
    Name:'Sahil',
    LastName:'Gupta',
    Age:23,
    city:'Amritsar'
}
const jsonData = JSON.stringify(data);

const server = http.createServer((req, res) => {
    res.write(`<h1> Hello Welcome </h1>`);
    res.write(jsonData);
    res.end();
})


server.listen(port, () => {
    console.log(`Connected to port ${port}✅`);
})