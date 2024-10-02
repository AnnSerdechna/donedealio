import { User } from "../../models/User";
export declare class CreateManyAndReturnAccount {
    id: string;
    userId: string;
    provider: string;
    providerAccountId: string;
    type: string;
    access_token: string | null;
    expires_at: number | null;
    user: User;
}
