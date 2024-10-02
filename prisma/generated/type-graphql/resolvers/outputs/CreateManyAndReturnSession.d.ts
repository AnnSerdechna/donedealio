import { User } from "../../models/User";
export declare class CreateManyAndReturnSession {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
    user: User;
}
