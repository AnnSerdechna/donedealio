export declare class CreateManyAndReturnUser {
    id: string;
    name: string;
    email: string;
    emailVerified: Date | null;
    password: string | null;
    role: "ADMIN" | "MEMBER" | "USER";
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
}
