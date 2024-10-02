import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AccountUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    provider?: StringFieldUpdateOperationsInput | undefined;
    providerAccountId?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    access_token?: NullableStringFieldUpdateOperationsInput | undefined;
    expires_at?: NullableIntFieldUpdateOperationsInput | undefined;
}
