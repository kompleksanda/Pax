import { Request, Response } from "node-fetch";
import { Credentials, CredentialStorage } from "../oauth";
import { ApiConfiguration } from "../ApiConfiguration";
export declare function fetchRefreshedCredentials(credentialStorage: CredentialStorage, config: ApiConfiguration): Promise<Credentials>;
export default function validateAndRefresh(request: Request, response: Response, config: ApiConfiguration, credentialStorage: CredentialStorage): Promise<Response>;
