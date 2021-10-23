const express = require('express');
const cors = require('cors');//bring
const app = express();
const port = 5000;

//call cors
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from my third data node server');
})

//Load all users api--------------------
const users =[
    {id: 0, name: 'Rafiq', age: 21},
    {id: 1, name: 'Safiq', age: 25},
    {id: 2, name: 'Faruk', age: 27},
    {id: 4, name: 'Asad', age: 28}
]

//Load all users-------------------------
app.get('/users', (req, res) => {
    console.log(req.query.search); //search keyword show in terminal
    const search = req.query.search; 
    if(search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    //short code below
    res.json(newUser);
})

// go url and search: http://localhost:5000/users?search=fa
//Answer: {id: 2, name: 'Faruk', age: 27},

//Load all single user using dynamic api-------------------
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);    
    console.log(req.params.id)//show  in terminal
})




app.get('/fruits', (req, res) => {
    res.send(['mango, orange, banana'])
})
//url: localhost:5000/fruits
//ANswer: ['mango, orange, banana']

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("This is Fazli mango")
})
//url: localhost:5000/fruits/mangoes/fazli
//Ans: This is Fazli mango


//Listening-------------------
app.listen(port, () => {
console.log('Listening to port', port);
})