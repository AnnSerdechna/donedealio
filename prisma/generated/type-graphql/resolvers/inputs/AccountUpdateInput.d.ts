import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAccountsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAccountsNestedInput";
export declare class AccountUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    provider?: StringFieldUpdateOperationsInput | undefined;
    providerAccountId?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    access_token?: NullableStringFieldUpdateOperationsInput | undefined;
    expires_at?: NullableIntFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput | undefined;
}
