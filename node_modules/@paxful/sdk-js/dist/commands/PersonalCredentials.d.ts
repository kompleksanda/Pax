import { Credentials } from "../oauth";
import { ApiConfiguration } from "../ApiConfiguration";
/**
 * Retrieves personal access token and refresh token.
 *
 * @param config
 */
export default function retrievePersonalCredentials(config: ApiConfiguration): Promise<Credentials>;
