const http = require('http');
const port = 3445;
const data = {
    Name:'Rajat',
    LastName:'adhikari',
    Age:22,
    city:'delhi'
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
