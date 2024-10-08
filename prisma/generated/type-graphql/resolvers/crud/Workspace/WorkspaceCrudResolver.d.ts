import type { GraphQLResolveInfo } from "graphql";
import { AggregateWorkspaceArgs } from "./args/AggregateWorkspaceArgs";
import { CreateManyAndReturnWorkspaceArgs } from "./args/CreateManyAndReturnWorkspaceArgs";
import { CreateManyWorkspaceArgs } from "./args/CreateManyWorkspaceArgs";
import { CreateOneWorkspaceArgs } from "./args/CreateOneWorkspaceArgs";
import { DeleteManyWorkspaceArgs } from "./args/DeleteManyWorkspaceArgs";
import { DeleteOneWorkspaceArgs } from "./args/DeleteOneWorkspaceArgs";
import { FindFirstWorkspaceArgs } from "./args/FindFirstWorkspaceArgs";
import { FindFirstWorkspaceOrThrowArgs } from "./args/FindFirstWorkspaceOrThrowArgs";
import { FindManyWorkspaceArgs } from "./args/FindManyWorkspaceArgs";
import { FindUniqueWorkspaceArgs } from "./args/FindUniqueWorkspaceArgs";
import { FindUniqueWorkspaceOrThrowArgs } from "./args/FindUniqueWorkspaceOrThrowArgs";
import { GroupByWorkspaceArgs } from "./args/GroupByWorkspaceArgs";
import { UpdateManyWorkspaceArgs } from "./args/UpdateManyWorkspaceArgs";
import { UpdateOneWorkspaceArgs } from "./args/UpdateOneWorkspaceArgs";
import { UpsertOneWorkspaceArgs } from "./args/UpsertOneWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateWorkspace } from "../../outputs/AggregateWorkspace";
import { CreateManyAndReturnWorkspace } from "../../outputs/CreateManyAndReturnWorkspace";
import { WorkspaceGroupBy } from "../../outputs/WorkspaceGroupBy";
export declare class WorkspaceCrudResolver {
    aggregateWorkspace(ctx: any, info: GraphQLResolveInfo, args: AggregateWorkspaceArgs): Promise<AggregateWorkspace>;
    createManyWorkspace(ctx: any, info: GraphQLResolveInfo, args: CreateManyWorkspaceArgs): Promise<AffectedRowsOutput>;
    createManyAndReturnWorkspace(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnWorkspaceArgs): Promise<CreateManyAndReturnWorkspace[]>;
    createOneWorkspace(ctx: any, info: GraphQLResolveInfo, args: CreateOneWorkspaceArgs): Promise<Workspace>;
    deleteManyWorkspace(ctx: any, info: GraphQLResolveInfo, args: DeleteManyWorkspaceArgs): Promise<AffectedRowsOutput>;
    deleteOneWorkspace(ctx: any, info: GraphQLResolveInfo, args: DeleteOneWorkspaceArgs): Promise<Workspace | null>;
    findFirstWorkspace(ctx: any, info: GraphQLResolveInfo, args: FindFirstWorkspaceArgs): Promise<Workspace | null>;
    findFirstWorkspaceOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstWorkspaceOrThrowArgs): Promise<Workspace | null>;
    workspaces(ctx: any, info: GraphQLResolveInfo, args: FindManyWorkspaceArgs): Promise<Workspace[]>;
    workspace(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWorkspaceArgs): Promise<Workspace | null>;
    getWorkspace(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWorkspaceOrThrowArgs): Promise<Workspace | null>;
    groupByWorkspace(ctx: any, info: GraphQLResolveInfo, args: GroupByWorkspaceArgs): Promise<WorkspaceGroupBy[]>;
    updateManyWorkspace(ctx: any, info: GraphQLResolveInfo, args: UpdateManyWorkspaceArgs): Promise<AffectedRowsOutput>;
    updateOneWorkspace(ctx: any, info: GraphQLResolveInfo, args: UpdateOneWorkspaceArgs): Promise<Workspace | null>;
    upsertOneWorkspace(ctx: any, info: GraphQLResolveInfo, args: UpsertOneWorkspaceArgs): Promise<Workspace>;
}
