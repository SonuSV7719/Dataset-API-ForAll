# Dataset-API
Introducing the Dataset-API - a powerful tool for real-time data fetching. Our API is designed to help you seamlessly access and retrieve datasets from our database. With the Dataset-API, you can do following operations 
1. Fetch all available datasets in our database 
2. Retrieve all columns of any specific collection
3. Fetch all the values of a specific column of any particular collection.

Our API is designed to help you upload your own datasets and retrieve them using our API link.To upload your datasets, simply visit our website at https://dataset-api.netlify.app/ and follow the simple steps to upload your data. Once your data is uploaded, you can then retrieve it using our API link at https://actual-dataset-api.onrender.com/.

## How to run this repo locally

For to run this repo locally follow following steps

> 1. Clone this repo first using folling command 

```
git clone https://github.com/SonuSV7719/Dataset-API-ForAll.git
```

> 2. Move to Dataset-API-ForAll directory by using following command

```
cd Dataset-API-ForAll
```

> 3. Run following command to install all dependencies 

```
npm install
```

> 4. After installation to run this use following command 

```
nodemon index.js
```

## How to use it

To use this API, you can simply access our deployed link at https://actual-dataset-api.onrender.com. From there, you can fetch the data you need and integrate it into your own projects.

Following are some use cases of it

> 1. To fetch all the required datasets/collections use following link with your project

```
https://actual-dataset-api.onrender.com/getCollections
```

> 2. To fetch all the required columns of any dataset you can use following link 

```
https://actual-dataset-api.onrender.com/getColumns/COLLECTION_NAME
```

just replace COLLECTION_NAME which you got from 1st link

> 3. To fetch all the values of any specific column in dataset use following link

```
https://actual-dataset-api.onrender.com/getColumnData/COLLECTION_NAME?columnName=COLUMN_NAME
```

just replace COLLECTION_NAME with your collection name and COLUMN_NAME with your required column which you got from previous steps


