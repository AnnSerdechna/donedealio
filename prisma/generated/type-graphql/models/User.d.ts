import { Account } from "../models/Account";
import { Workspace } from "../models/Workspace";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name: string;
    email: string;
    emailVerified?: Date | null;
    password?: string | null;
    role: "ADMIN" | "MEMBER" | "USER";
    image?: string | null;
    createdAt: Date;
    updatedAt: Date;
    accounts?: Account[];
    workspaces?: Workspace[];
    _count?: UserCount | null;
}
