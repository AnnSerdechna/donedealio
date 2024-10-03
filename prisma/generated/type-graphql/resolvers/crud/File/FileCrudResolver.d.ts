import type { GraphQLResolveInfo } from "graphql";
import { AggregateFileArgs } from "./args/AggregateFileArgs";
import { CreateManyAndReturnFileArgs } from "./args/CreateManyAndReturnFileArgs";
import { CreateManyFileArgs } from "./args/CreateManyFileArgs";
import { CreateOneFileArgs } from "./args/CreateOneFileArgs";
import { DeleteManyFileArgs } from "./args/DeleteManyFileArgs";
import { DeleteOneFileArgs } from "./args/DeleteOneFileArgs";
import { FindFirstFileArgs } from "./args/FindFirstFileArgs";
import { FindFirstFileOrThrowArgs } from "./args/FindFirstFileOrThrowArgs";
import { FindManyFileArgs } from "./args/FindManyFileArgs";
import { FindUniqueFileArgs } from "./args/FindUniqueFileArgs";
import { FindUniqueFileOrThrowArgs } from "./args/FindUniqueFileOrThrowArgs";
import { GroupByFileArgs } from "./args/GroupByFileArgs";
import { UpdateManyFileArgs } from "./args/UpdateManyFileArgs";
import { UpdateOneFileArgs } from "./args/UpdateOneFileArgs";
import { UpsertOneFileArgs } from "./args/UpsertOneFileArgs";
import { File } from "../../../models/File";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFile } from "../../outputs/AggregateFile";
import { CreateManyAndReturnFile } from "../../outputs/CreateManyAndReturnFile";
import { FileGroupBy } from "../../outputs/FileGroupBy";
export declare class FileCrudResolver {
    aggregateFile(ctx: any, info: GraphQLResolveInfo, args: AggregateFileArgs): Promise<AggregateFile>;
    createManyFile(ctx: any, info: GraphQLResolveInfo, args: CreateManyFileArgs): Promise<AffectedRowsOutput>;
    createManyAndReturnFile(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnFileArgs): Promise<CreateManyAndReturnFile[]>;
    createOneFile(ctx: any, info: GraphQLResolveInfo, args: CreateOneFileArgs): Promise<File>;
    deleteManyFile(ctx: any, info: GraphQLResolveInfo, args: DeleteManyFileArgs): Promise<AffectedRowsOutput>;
    deleteOneFile(ctx: any, info: GraphQLResolveInfo, args: DeleteOneFileArgs): Promise<File | null>;
    findFirstFile(ctx: any, info: GraphQLResolveInfo, args: FindFirstFileArgs): Promise<File | null>;
    findFirstFileOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstFileOrThrowArgs): Promise<File | null>;
    files(ctx: any, info: GraphQLResolveInfo, args: FindManyFileArgs): Promise<File[]>;
    file(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFileArgs): Promise<File | null>;
    getFile(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFileOrThrowArgs): Promise<File | null>;
    groupByFile(ctx: any, info: GraphQLResolveInfo, args: GroupByFileArgs): Promise<FileGroupBy[]>;
    updateManyFile(ctx: any, info: GraphQLResolveInfo, args: UpdateManyFileArgs): Promise<AffectedRowsOutput>;
    updateOneFile(ctx: any, info: GraphQLResolveInfo, args: UpdateOneFileArgs): Promise<File | null>;
    upsertOneFile(ctx: any, info: GraphQLResolveInfo, args: UpsertOneFileArgs): Promise<File>;
}