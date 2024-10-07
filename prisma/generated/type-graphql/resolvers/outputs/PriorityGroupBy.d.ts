import { PriorityAvgAggregate } from "../outputs/PriorityAvgAggregate";
import { PriorityCountAggregate } from "../outputs/PriorityCountAggregate";
import { PriorityMaxAggregate } from "../outputs/PriorityMaxAggregate";
import { PriorityMinAggregate } from "../outputs/PriorityMinAggregate";
import { PrioritySumAggregate } from "../outputs/PrioritySumAggregate";
export declare class PriorityGroupBy {
    id: number;
    name: string;
    color: string;
    _count: PriorityCountAggregate | null;
    _avg: PriorityAvgAggregate | null;
    _sum: PrioritySumAggregate | null;
    _min: PriorityMinAggregate | null;
    _max: PriorityMaxAggregate | null;
}
