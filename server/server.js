const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const retrieveData = require("./retrieveData");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/heroAPI", (req, res) => {
    
    retrieveData(req.body.post, res);
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
