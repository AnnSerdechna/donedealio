import { User } from "../models/User";
export declare class Account {
    id: string;
    userId: string;
    user?: User;
    provider: string;
    providerAccountId: string;
    type: string;
    access_token?: string | null;
    expires_at?: number | null;
}
