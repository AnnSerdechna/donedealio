import { FileAvgAggregate } from "../outputs/FileAvgAggregate";
import { FileCountAggregate } from "../outputs/FileCountAggregate";
import { FileMaxAggregate } from "../outputs/FileMaxAggregate";
import { FileMinAggregate } from "../outputs/FileMinAggregate";
import { FileSumAggregate } from "../outputs/FileSumAggregate";
export declare class AggregateFile {
    _count: FileCountAggregate | null;
    _avg: FileAvgAggregate | null;
    _sum: FileSumAggregate | null;
    _min: FileMinAggregate | null;
    _max: FileMaxAggregate | null;
}
