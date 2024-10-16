import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class UserGroupBy {
    id: string;
    name: string;
    email: string;
    emailVerified: Date | null;
    password: string | null;
    role: "ADMIN" | "MEMBER" | "USER";
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
