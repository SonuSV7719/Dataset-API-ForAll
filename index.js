const express = require('express')
const dotenv = require('dotenv');
const cors = require("cors");
const db = require("./utils/db");
const app = express()
app.use(express.json());
dotenv.config({ path: './.env' });
const port = process.env.PORT || 7000;
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declarationd


app.get('/getCollections', async (req, res) => {
    try {
        await db.db.connect();
        let collectionList = []
        const array = await db.db.createCollection.db.listCollections().toArray();
        array.map((arr) => {
            if (arr.name != "users") {
                collectionList.push(arr.name);
            }
        })
        await db.db.disconnect();
        res.send({ collectionFetched: true, collectionsList: collectionList });
    } catch (error) {
        res.send({ error: error, msg: "Error", collectionFetched: false });
    }
})

app.get('/getColumns/:collectionName', async (req, res) => {
    try {
        await db.db.connect();
        const selectedCollection = await db.db.createCollection.collection(req.params.collectionName);
        const data = await selectedCollection.findOne({});
        let columns = Object.keys(data);
        columns = columns.splice(1, columns.length);
        await db.db.disconnect();
        res.send({ columnsFetched: true, columnsList: columns });
    } catch (error) {
        console.log(error);
        res.send({ columnsFetched: false, error: error });
    }
})

app.get('/getColumnData/:collectionName', async (req, res) => {
    try {
        await db.db.connect();
        const selectedCollection = await db.db.createCollection.collection(req.params.collectionName);
        const fieldName = req.query.columnName;
        const projection = { [fieldName]: 1 };
        const data = await selectedCollection.find({}, { projection }).toArray();
        let columnData = []
        data.map((data) => {
            columnData.push(data[fieldName]);
        })
        // console.log(columnData);
        await db.db.disconnect();
        res.send({ columnDataFetched: true, columnDataList: columnData });
    } catch (error) {
        res.send({ columnDataFetched: false, error: error });
    }
})


app.get('/home', async (req, res) => {
    res.status(200).send({ msg: "Connected to database API!!" });
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})