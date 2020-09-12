import express from "express";
const app = express();
const port = 5000;

app.listen(port, console.log(`server listening at: http://localhost:${port}`));
app.get('/', (request, response) => {
    response.send('que pex');
});

let tacos = [
    {
        id: 1,
        name: 'de asada',
        quantity: 5,
        pica: 'no'
    },
    {
        id: 2,
        name: 'al pastor',
        quantity: 4,
        pica: 'si'
    },
    {
        id: 3,
        name: 'cabeza',
        quantity: 6,
        pica: 'no'
    }
];

app.get('/', (request, response) =>{
    response.send(tacos);
});

app.get('/:id', (request, response) =>{
    const {id} = request.params;
    const taco = tacos.find(taco => taco.id == id);
    response.send(taco);
});

app.put('/:id', (request, response) =>{

    const {id} = request.params;
    const taco = tacos.find(taco => taco.id == id);
    const {name, quantity, pica} = request.body;
    taco.name = name;
    taco.quantity = quantity;
    taco.pica = pica;
    response.send(taco);
});

app.delete('/:id', (request, response) =>{
    const {id} = request.params;
    tacos = tacos.filter(taco => taco.id != id);
    response.send(tacos);
});

app.listen(port, ()=> console.log(`Server started at: http://localhost:${port}`));