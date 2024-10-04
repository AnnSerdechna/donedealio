import { EnumStatusTypeFieldUpdateOperationsInput } from "../inputs/EnumStatusTypeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutStatusNestedInput } from "../inputs/TaskUpdateManyWithoutStatusNestedInput";
export declare class StatusUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    color?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumStatusTypeFieldUpdateOperationsInput | undefined;
    task?: TaskUpdateManyWithoutStatusNestedInput | undefined;
}
