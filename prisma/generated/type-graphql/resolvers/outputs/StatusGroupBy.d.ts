import { StatusAvgAggregate } from "../outputs/StatusAvgAggregate";
import { StatusCountAggregate } from "../outputs/StatusCountAggregate";
import { StatusMaxAggregate } from "../outputs/StatusMaxAggregate";
import { StatusMinAggregate } from "../outputs/StatusMinAggregate";
import { StatusSumAggregate } from "../outputs/StatusSumAggregate";
export declare class StatusGroupBy {
    id: number;
    name: string;
    color: string;
    _count: StatusCountAggregate | null;
    _avg: StatusAvgAggregate | null;
    _sum: StatusSumAggregate | null;
    _min: StatusMinAggregate | null;
    _max: StatusMaxAggregate | null;
}
