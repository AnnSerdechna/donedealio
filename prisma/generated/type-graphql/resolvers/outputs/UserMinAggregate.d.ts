export declare class UserMinAggregate {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    password: string | null;
    role: "ADMIN" | "MEMBER" | "USER" | null;
    image: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    isTwoFactorEnable: boolean | null;
}
