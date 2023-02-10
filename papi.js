const fs = require('fs');
const { default: usePaxful } = require("@paxful/sdk-js");

// In real word application you should consider using a database to store
// credentials
const credentialsStorage = {
    // private
    storageFilename: __dirname + '/storage/credentials.json',

    saveCredentials(credentials) {
        fs.writeFileSync(this.storageFilename, JSON.stringify(credentials));
    },

    getCredentials() {
        return fs.existsSync(this.storageFilename) ? JSON.parse(fs.readFileSync(this.storageFilename)) : null;
    }
};

class PaxfulApiFacade {
    constructor(client) {
        this.client = client;
    }

    getClient() {
        return this.client;
    }

    async sendMessage(tradeHash, message) {
        return this.client.invoke('/paxful/v1/trade-chat/post', {
            trade_hash: tradeHash,
            message: message
        });
    }

    async getTrade(tradeHash) {
        return this.client.invoke('/paxful/v1/trade/get', { trade_hash: tradeHash });
    }

    async touch() {
        return this.client.invoke("/paxful/v1/user/touch");
    }

    async me() {
        return this.client.invoke("/paxful/v1/user/me");
    }

    async run() {
        return this.client.invoke("/paxful/v1/user/blocked-list");
    }
}

module.exports.createPaxfulApi = (clientId, clientSecret) => {
    const client = usePaxful(
        { clientId, clientSecret },
        //credentialsStorage
    );
    return new PaxfulApiFacade(client);
};