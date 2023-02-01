import { AccountServiceTokenResponse } from "../oauth";
import { Response } from "node-fetch";
export declare const handleErrors: (processName: string) => (response: Response) => Promise<AccountServiceTokenResponse>;
