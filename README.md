# Getting Started 

Go to the project directory.

## 1 - Installing dependencies and running:

### 1 - `npm i`

It will install the entire Node.js dependency package

### 2 - `npm start`

Runs the server in the development mode on http://localhost:3000 

## 2 - How to test:

Use Postman to test the API. 
Below are different examples of requisitions and their respectives responses:

### Ex. 1:

Body:

{
    "n": 10,
    "elements": [10,10,9,9,8,8,7,7,6,6]
}

Response:

{
    "elements": [
        6,
        7,
        8,
        9,
        10
    ]
}

### Ex. 2:

Body:

{
    "n": 5,
    "elements": [-1,-1,-1,-1,-1]
}

Response:

{
    "elements": [
        -1
    ]
}

### Ex. 2:

Body:

{
    "n": 5,
    "elements": [-123,123,999,1000,-1000]
}

Response:

{
    "elements": [
        -1000,
        -123,
        123,
        999,
        1000
    ]
}

## 3 - Run only test.js file on terminal:

In the project directory, you will run  `node ./src/test.js`.