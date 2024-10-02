import { User } from "../models/User";
export declare class Session {
    id: string;
    sessionToken: string;
    userId: string;
    user?: User;
    expires: Date;
}
