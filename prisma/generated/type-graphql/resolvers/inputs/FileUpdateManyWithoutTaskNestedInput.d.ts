import { FileCreateManyTaskInputEnvelope } from "../inputs/FileCreateManyTaskInputEnvelope";
import { FileCreateOrConnectWithoutTaskInput } from "../inputs/FileCreateOrConnectWithoutTaskInput";
import { FileCreateWithoutTaskInput } from "../inputs/FileCreateWithoutTaskInput";
import { FileScalarWhereInput } from "../inputs/FileScalarWhereInput";
import { FileUpdateManyWithWhereWithoutTaskInput } from "../inputs/FileUpdateManyWithWhereWithoutTaskInput";
import { FileUpdateWithWhereUniqueWithoutTaskInput } from "../inputs/FileUpdateWithWhereUniqueWithoutTaskInput";
import { FileUpsertWithWhereUniqueWithoutTaskInput } from "../inputs/FileUpsertWithWhereUniqueWithoutTaskInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";
export declare class FileUpdateManyWithoutTaskNestedInput {
    create?: FileCreateWithoutTaskInput[] | undefined;
    connectOrCreate?: FileCreateOrConnectWithoutTaskInput[] | undefined;
    upsert?: FileUpsertWithWhereUniqueWithoutTaskInput[] | undefined;
    createMany?: FileCreateManyTaskInputEnvelope | undefined;
    set?: FileWhereUniqueInput[] | undefined;
    disconnect?: FileWhereUniqueInput[] | undefined;
    delete?: FileWhereUniqueInput[] | undefined;
    connect?: FileWhereUniqueInput[] | undefined;
    update?: FileUpdateWithWhereUniqueWithoutTaskInput[] | undefined;
    updateMany?: FileUpdateManyWithWhereWithoutTaskInput[] | undefined;
    deleteMany?: FileScalarWhereInput[] | undefined;
}
