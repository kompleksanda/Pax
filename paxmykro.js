const { createPaxfulApi } = require('./papi.js');
const dotenv = require('dotenv');
dotenv.config();

const paxfulApi = createPaxfulApi(process.env.PAXFUL_CLIENT_ID, process.env.PAXFUL_API_SECRET);

console.log(process.env.PAXFUL_CLIENT_ID);
process.env.PAXFUL_API_SECRET

function run() {
    paxfulApi.touch().then((result) => {
        console.log(result);
    });
}

setInterval(run, 2000);
