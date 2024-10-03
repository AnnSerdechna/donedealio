export declare class TaskCreateManyStatusInput {
    id?: string | undefined;
    name: string;
    message?: string | undefined;
    note?: string | undefined;
    dueDate?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    priorityId?: number | undefined;
    workspaceId: string;
}
