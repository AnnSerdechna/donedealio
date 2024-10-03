import { FileCreateManyTaskInputEnvelope } from "../inputs/FileCreateManyTaskInputEnvelope";
import { FileCreateOrConnectWithoutTaskInput } from "../inputs/FileCreateOrConnectWithoutTaskInput";
import { FileCreateWithoutTaskInput } from "../inputs/FileCreateWithoutTaskInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";
export declare class FileCreateNestedManyWithoutTaskInput {
    create?: FileCreateWithoutTaskInput[] | undefined;
    connectOrCreate?: FileCreateOrConnectWithoutTaskInput[] | undefined;
    createMany?: FileCreateManyTaskInputEnvelope | undefined;
    connect?: FileWhereUniqueInput[] | undefined;
}
