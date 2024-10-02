export declare class UserCreateManyInput {
    id?: string | undefined;
    email: string;
    emailVerified?: Date | undefined;
    firstName: string;
    lastName: string;
    password: string;
    role?: "ADMIN" | "MEMBER" | "USER" | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
