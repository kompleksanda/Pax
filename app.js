const { createPaxfulApi } = require('./papi.js');
const dotenv = require('dotenv');
dotenv.config();

const paxfulApi = createPaxfulApi(process.env.PAXFUL_CLIENT_ID, process.env.PAXFUL_API_SECRET);

console.log("Starting...");

function run() {
    paxfulApi.run().then((result) => {
        console.log("updated");
    });
}

setInterval(run, 120000);
