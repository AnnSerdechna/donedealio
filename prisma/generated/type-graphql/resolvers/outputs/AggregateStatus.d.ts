import { StatusCountAggregate } from "../outputs/StatusCountAggregate";
import { StatusMaxAggregate } from "../outputs/StatusMaxAggregate";
import { StatusMinAggregate } from "../outputs/StatusMinAggregate";
export declare class AggregateStatus {
    _count: StatusCountAggregate | null;
    _min: StatusMinAggregate | null;
    _max: StatusMaxAggregate | null;
}
