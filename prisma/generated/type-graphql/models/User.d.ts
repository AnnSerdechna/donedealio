import { Account } from "../models/Account";
import { Status } from "../models/Status";
import { TwoFactorConfirnation } from "../models/TwoFactorConfirnation";
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
    imageId?: string | null;
    createdAt: Date;
    updatedAt: Date;
    isTwoFactorEnable: boolean;
    twoFactorConfirnation?: TwoFactorConfirnation | null;
    accounts?: Account[];
    workspaces?: Workspace[];
    status?: Status[];
    _count?: UserCount | null;
}
