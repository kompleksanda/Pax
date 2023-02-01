/// <reference types="node" />
import { Http2ServerResponse } from "http2";
import { ApiConfiguration } from "../ApiConfiguration";
/**
 * Redirects the user for the authorization flow.
 *
 * @param response
 * @param config
 */
export default function authorize(response: Http2ServerResponse, config: ApiConfiguration): void;
