export declare class UserCreateManyInput {
    id?: string | undefined;
    name: string;
    email: string;
    emailVerified?: Date | undefined;
    password?: string | undefined;
    role?: "ADMIN" | "MEMBER" | "USER" | undefined;
    image?: string | undefined;
    imageId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    isTwoFactorEnable?: boolean | undefined;
}
