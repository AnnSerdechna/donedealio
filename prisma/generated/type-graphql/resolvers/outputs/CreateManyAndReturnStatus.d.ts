import { User } from "../../models/User";
export declare class CreateManyAndReturnStatus {
    id: number;
    name: string | null;
    color: string;
    type: "STATUS" | "PRIORITY";
    userId: string;
    user: User;
}
