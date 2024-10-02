import { CreateManyAndReturnWorkspaceUserArgs } from "./args/CreateManyAndReturnWorkspaceUserArgs";
import { User } from "../../models/User";
export declare class CreateManyAndReturnWorkspace {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    user: User | null;
    getUser(root: CreateManyAndReturnWorkspace, args: CreateManyAndReturnWorkspaceUserArgs): User | null;
}
