import { EnumStatusTypeFieldUpdateOperationsInput } from "../inputs/EnumStatusTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class StatusUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    color?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumStatusTypeFieldUpdateOperationsInput | undefined;
}
