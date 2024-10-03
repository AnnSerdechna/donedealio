import { FileCreateInput } from "../../../inputs/FileCreateInput";
import { FileUpdateInput } from "../../../inputs/FileUpdateInput";
import { FileWhereUniqueInput } from "../../../inputs/FileWhereUniqueInput";
export declare class UpsertOneFileArgs {
    where: FileWhereUniqueInput;
    create: FileCreateInput;
    update: FileUpdateInput;
}
