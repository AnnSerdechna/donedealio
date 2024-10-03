import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutStatusNestedInput } from "../inputs/TaskUpdateManyWithoutStatusNestedInput";
export declare class StatusUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    color?: StringFieldUpdateOperationsInput | undefined;
    task?: TaskUpdateManyWithoutStatusNestedInput | undefined;
}
