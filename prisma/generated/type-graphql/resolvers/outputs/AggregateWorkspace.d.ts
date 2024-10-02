import { WorkspaceCountAggregate } from "../outputs/WorkspaceCountAggregate";
import { WorkspaceMaxAggregate } from "../outputs/WorkspaceMaxAggregate";
import { WorkspaceMinAggregate } from "../outputs/WorkspaceMinAggregate";
export declare class AggregateWorkspace {
    _count: WorkspaceCountAggregate | null;
    _min: WorkspaceMinAggregate | null;
    _max: WorkspaceMaxAggregate | null;
}
