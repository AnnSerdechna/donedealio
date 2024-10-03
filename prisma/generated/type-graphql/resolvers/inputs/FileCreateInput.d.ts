import { TaskCreateNestedOneWithoutFilesInput } from "../inputs/TaskCreateNestedOneWithoutFilesInput";
export declare class FileCreateInput {
    file: string;
    task?: TaskCreateNestedOneWithoutFilesInput | undefined;
}
