import { Profile, CredentialStorage } from "../oauth";
import { ApiConfiguration } from "../ApiConfiguration";
/**
 * Retrieves personal access token and refresh token.
 *
 * @param credentialStorage
 * @param config
 */
export default function retrieveProfile(credentialStorage: CredentialStorage, config: ApiConfiguration): Promise<Profile>;
