import { Request } from "node-fetch";
import { Credentials, CredentialStorage } from "../oauth";
import { ApiConfiguration } from "../ApiConfiguration";
export declare type AnyJson = boolean | number | string | null | JsonArray | JsonMap;
export interface JsonMap {
    [key: string]: AnyJson;
}
export interface JsonArray extends Array<AnyJson> {
}
export declare type InvokeBody = Record<string, unknown> | [];
export declare type AnyPromise = Promise<any>;
export declare type ResponseParser = (Response: any) => AnyPromise;
export declare function containsBinary(payload: InvokeBody): boolean;
export declare class RequestBuilder {
    private url;
    private init;
    private responseParser;
    constructor(url: string);
    withMethod(method: string): RequestBuilder;
    withConfig(config: ApiConfiguration): RequestBuilder;
    withHeader(header: string, value: string): RequestBuilder;
    withFormData(payload?: InvokeBody): RequestBuilder;
    withUrlParams(payload?: InvokeBody): RequestBuilder;
    withMultipartFormData(payload: InvokeBody): RequestBuilder;
    withJsonData(data?: AnyJson): RequestBuilder;
    withAuthorization(credentials: Credentials): RequestBuilder;
    acceptJson(): RequestBuilder;
    acceptText(): RequestBuilder;
    acceptBinary(): RequestBuilder;
    build(): [Request, ResponseParser];
}
/**
 * Executes request with the user credentials applied.
 * Retrieves personal access token and refresh token.
 *
 * @param requestBuilder
 * @param credentialStorage
 * @param config
 */
export default function executeRequestAuthorized(requestBuilder: RequestBuilder, config: ApiConfiguration, credentialStorage: CredentialStorage): Promise<any>;
