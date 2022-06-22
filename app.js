require('dotenv').config()
const express = require('express')
const app = express()
const socketIo = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const port = process.env.PORT || 8000
const { pick } = require('lodash')
const {uuid} = require('uuid');
const { v4: uuidv4 } = require('uuid');
// console.log(uuidv4())

var randomGenerate = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
    return randomGenerate() + randomGenerate() + randomGenerate() + "-" + randomGenerate() + randomGenerate() + randomGenerate(); // to make it longer
};

console.log(token());

// const checkAsyncOrSync = async () => {
//     let y = await 'Hello world'
//     console.log(y);
// };
// console.log(1)
// checkAsyncOrSync();
// console.log(2)

// console.log(one)
// setTimeout(() => console.log(Two), 3000)
// console.log(Three)

// console.log(one)
// console.log(Two);
// console.log(Three)
// const {pick, filter, map} = require('lodash');

// const metaData = [{
//     name: "Suraj Vishwakarma",
//     email: "suraj@gmail.com",
//     password: "5151515151",
//     status: true
// },
// {
//     name: "Denny",
//     email: "denny@gmail.com",
//     password: "5151515151",
//     status: true
// }
// ]

// console.log(pick(metaData, ["email", "password"]))
// console.log(filter(metaData, ['status', true]))

// const runMap = [2, 5]

// const arrResult = map(runMap, (data) => {
//     return data > 500
// })

// console.log(arrResult)

// const metaData = {
//   _id: '62714bab1bcf4ebd1afae5cb',
//   name: 'denny',
//   totalLeaveCount: 12,
//   description:
//     'Hey please allow leave for 5 days because i am going to America',
//   reason: 'Out of station',
// }

// const result = pick(metaData, ['name', 'totalLeaveCount', 'description'])
// console.log(result)

/**
 * 
 */




server.listen(port, () => console.log(`App is running on : ${port}`))
