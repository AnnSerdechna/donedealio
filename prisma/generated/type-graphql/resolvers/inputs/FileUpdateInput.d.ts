import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutFilesNestedInput } from "../inputs/TaskUpdateOneWithoutFilesNestedInput";
export declare class FileUpdateInput {
    url?: StringFieldUpdateOperationsInput | undefined;
    fileId?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    task?: TaskUpdateOneWithoutFilesNestedInput | undefined;
}
