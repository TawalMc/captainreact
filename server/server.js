const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
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

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    })
}

app.listen(port, () => {
    /* console.log(`Listening on port: ${port}`) */;
});
