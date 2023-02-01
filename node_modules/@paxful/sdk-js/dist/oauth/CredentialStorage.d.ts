import { Credentials } from "./Credentials";
export declare interface CredentialStorage {
    getCredentials(): Credentials | undefined;
    saveCredentials(credentials: Credentials): Credentials;
}
export declare class InMemoryCredentialStorage implements CredentialStorage {
    private credentials?;
    constructor();
    getCredentials(): Credentials | undefined;
    saveCredentials(credentials: Credentials): Credentials;
}
