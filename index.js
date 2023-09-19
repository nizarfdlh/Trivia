const express =  require('express');
const { getContact } = require(`./function`)
const app = express();
const port = 3000;


// app.get adalah method 
// (/) adalah EndPoint
// Hello World adalah Body
app.get(`/`, (req, res) => {
    res.send("Hello World");
});

app.get(`/getContact`, (req, res) => {
    const data = getContact();
    return res.json(data);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}); 