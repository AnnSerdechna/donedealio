import { AccountUpdateManyWithoutUserNestedInput } from "../inputs/AccountUpdateManyWithoutUserNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TwoFactorConfirnationUpdateOneWithoutUserNestedInput } from "../inputs/TwoFactorConfirnationUpdateOneWithoutUserNestedInput";
export declare class UserUpdateWithoutWorkspacesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    password?: NullableStringFieldUpdateOperationsInput | undefined;
    role?: EnumRoleFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    imageId?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    isTwoFactorEnable?: BoolFieldUpdateOperationsInput | undefined;
    twoFactorConfirnation?: TwoFactorConfirnationUpdateOneWithoutUserNestedInput | undefined;
    accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;
}
