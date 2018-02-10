const express= require('express');
var app = express();


app.use(express.static(__dirname + '/public'));
app.get('/',(req, res)=> {
    // res.send('<h1>Hello Express!<h1>');
    res.send({
        name: 'Samuel RAfini',
        likes: ['Music', 'Javascript']
    })
});

app.get('/about',( req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'Error Message 1',
        extra: 'Extra Info'
    }) 
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
