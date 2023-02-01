"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaxfulApi_1 = require("./PaxfulApi");
/**
 * Function that initializes the Paxful API SDK.
 *
 * To use authorization flow use:
 * ```typescript
 * import usePaxful from "paxful-sdk";
 *
 * const paxfulApi = usePaxful({
 *     clientId: "YOUR CLIENT ID HERE",
 *     clientSecret: "YOUR CLIENT SECRET HERE",
 *     redirectUri: "YOUR REDIRECT URI HERE",
 * //  scope: ["profile", "email"] // Optional variable for passing requested scopes.
 * });
 * ```
 *
 * To use client credentials flow use:
 * ```typescript
 * import usePaxful from "paxful-sdk";
 *
 * const paxfulApi = usePaxful({
 *     clientId: "YOUR CLIENT ID HERE",
 *     clientSecret: "YOUR CLIENT SECRET HERE",
 * //  scope: ["profile", "email"] // Optional variable for passing requested scopes.
 * });
 * ```
 *
 * @param configuration {@link ApiConfiguration} needed to make use of Paxful API
 * @param credentialStorage If you want to persiste the tokens you need to pass a implementation of {@links CredentialStorage}
 * @return {@link PaxfulApi}
 * @public
 */
function usePaxful(configuration, credentialStorage) {
    return new PaxfulApi_1.PaxfulApi(configuration, credentialStorage);
}
exports.default = usePaxful;
//# sourceMappingURL=index.js.map