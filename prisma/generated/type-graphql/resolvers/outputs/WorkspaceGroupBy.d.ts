import { WorkspaceCountAggregate } from "../outputs/WorkspaceCountAggregate";
import { WorkspaceMaxAggregate } from "../outputs/WorkspaceMaxAggregate";
import { WorkspaceMinAggregate } from "../outputs/WorkspaceMinAggregate";
export declare class WorkspaceGroupBy {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    _count: WorkspaceCountAggregate | null;
    _min: WorkspaceMinAggregate | null;
    _max: WorkspaceMaxAggregate | null;
}
