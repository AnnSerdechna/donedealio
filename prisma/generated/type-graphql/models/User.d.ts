import { Account } from "../models/Account";
import { Session } from "../models/Session";
import { Workspace } from "../models/Workspace";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    email: string;
    emailVerified?: Date | null;
    firstName: string;
    lastName: string;
    password: string;
    role: "ADMIN" | "MEMBER" | "USER";
    image?: string | null;
    createdAt: Date;
    updatedAt: Date;
    accounts?: Account[];
    sessions?: Session[];
    workspaces?: Workspace[];
    _count?: UserCount | null;
}
