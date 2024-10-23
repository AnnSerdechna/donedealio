import { TaskCreateNestedOneWithoutFilesInput } from "../inputs/TaskCreateNestedOneWithoutFilesInput";
export declare class FileCreateInput {
    url: string;
    fileId: string;
    name: string;
    task?: TaskCreateNestedOneWithoutFilesInput | undefined;
}
