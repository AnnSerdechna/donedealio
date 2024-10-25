import { EnumStatusTypeFieldUpdateOperationsInput } from "../inputs/EnumStatusTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class StatusUpdateManyMutationInput {
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    color?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumStatusTypeFieldUpdateOperationsInput | undefined;
}
