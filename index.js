const {pick} = require('lodash');


const metaData = {
    name: "Suraj Vishwakarma",
    email: "suraj@gmail.com",
    password: "5151515151"
}

console.log(pick(metaData, ["email"]))