export declare class CreateManyAndReturnUser {
    id: string;
    email: string;
    emailVerified: Date | null;
    firstName: string;
    lastName: string;
    password: string;
    role: "ADMIN" | "MEMBER" | "USER";
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
}
