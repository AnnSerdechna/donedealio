import { AccountAvgAggregate } from "../outputs/AccountAvgAggregate";
import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
import { AccountSumAggregate } from "../outputs/AccountSumAggregate";
export declare class AccountGroupBy {
    id: string;
    userId: string;
    provider: string;
    providerAccountId: string;
    type: string;
    access_token: string | null;
    expires_at: number | null;
    _count: AccountCountAggregate | null;
    _avg: AccountAvgAggregate | null;
    _sum: AccountSumAggregate | null;
    _min: AccountMinAggregate | null;
    _max: AccountMaxAggregate | null;
}
