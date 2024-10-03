import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutFilesNestedInput } from "../inputs/TaskUpdateOneWithoutFilesNestedInput";
export declare class FileUpdateInput {
    file?: StringFieldUpdateOperationsInput | undefined;
    task?: TaskUpdateOneWithoutFilesNestedInput | undefined;
}
