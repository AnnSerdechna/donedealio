import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutPriorityNestedInput } from "../inputs/TaskUpdateManyWithoutPriorityNestedInput";
export declare class PriorityUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    color?: StringFieldUpdateOperationsInput | undefined;
    task?: TaskUpdateManyWithoutPriorityNestedInput | undefined;
}
