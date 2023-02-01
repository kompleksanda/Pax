"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryCredentialStorage = void 0;
var InMemoryCredentialStorage = /** @class */ (function () {
    function InMemoryCredentialStorage() {
        if (process.env.ALLOW_IN_MEMORY_STORAGE === "true")
            return;
        // eslint-disable-next-line no-console
        console.warn("Warning: at the moment PaxfulApi is using an InMemoryCredentialsStorage, meaning if you restart your application then access token you have received will be lost and SDK will need to fetch a new one. As a result your requests will have additional latency added to them. For production use please create and use a proper implementation that would store the access token in a persistence storage (i.e. database). For more details please see /README.md file.");
    }
    InMemoryCredentialStorage.prototype.getCredentials = function () {
        return this.credentials;
    };
    InMemoryCredentialStorage.prototype.saveCredentials = function (credentials) {
        return this.credentials = credentials;
    };
    return InMemoryCredentialStorage;
}());
exports.InMemoryCredentialStorage = InMemoryCredentialStorage;
//# sourceMappingURL=CredentialStorage.js.map