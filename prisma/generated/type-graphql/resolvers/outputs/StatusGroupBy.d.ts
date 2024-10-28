import { StatusCountAggregate } from "../outputs/StatusCountAggregate";
import { StatusMaxAggregate } from "../outputs/StatusMaxAggregate";
import { StatusMinAggregate } from "../outputs/StatusMinAggregate";
export declare class StatusGroupBy {
    id: string;
    name: string | null;
    color: string;
    type: "STATUS" | "PRIORITY";
    userId: string;
    _count: StatusCountAggregate | null;
    _min: StatusMinAggregate | null;
    _max: StatusMaxAggregate | null;
}
