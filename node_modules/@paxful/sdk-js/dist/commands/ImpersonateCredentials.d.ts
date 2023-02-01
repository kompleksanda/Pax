import { Credentials } from "../oauth";
import { ApiConfiguration } from "../ApiConfiguration";
/**
 * Retrieves access token and refresh token for the user that authorized your application.
 *
 * @param code
 * @param config
 */
export default function retrieveImpersonatedCredentials(config: ApiConfiguration, code?: string): Promise<Credentials>;
