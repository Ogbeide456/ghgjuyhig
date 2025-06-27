import express from "express";
const app = express();
//An endpoint is a combination of a URL + HTTP method that lets the client interact with a specific resource.
app.get('/api/notes', (req, res) => {
    res.status(200).send("You have 20 notes");


});

app.post('/api/notes', (req, res) => {
    res.status(201).json({message: "post created successfully!"});
})

app.listen(5001, () => {
    console.log("Server is running on port 5001");
})

const router = express.Router();