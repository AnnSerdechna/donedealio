"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCountAggregate = exports.TaskCount = exports.TaskAvgAggregate = exports.StatusSumAggregate = exports.StatusMinAggregate = exports.StatusMaxAggregate = exports.StatusGroupBy = exports.StatusCountAggregate = exports.StatusCount = exports.StatusAvgAggregate = exports.SessionMinAggregate = exports.SessionMaxAggregate = exports.SessionGroupBy = exports.SessionCountAggregate = exports.PrioritySumAggregate = exports.PriorityMinAggregate = exports.PriorityMaxAggregate = exports.PriorityGroupBy = exports.PriorityCountAggregate = exports.PriorityCount = exports.PriorityAvgAggregate = exports.FileSumAggregate = exports.FileMinAggregate = exports.FileMaxAggregate = exports.FileGroupBy = exports.FileCountAggregate = exports.FileAvgAggregate = exports.CreateManyAndReturnWorkspace = exports.CreateManyAndReturnUser = exports.CreateManyAndReturnTask = exports.CreateManyAndReturnStatus = exports.CreateManyAndReturnSession = exports.CreateManyAndReturnPriority = exports.CreateManyAndReturnFile = exports.CreateManyAndReturnAccount = exports.AggregateWorkspace = exports.AggregateUser = exports.AggregateTask = exports.AggregateStatus = exports.AggregateSession = exports.AggregatePriority = exports.AggregateFile = exports.AggregateAccount = exports.AffectedRowsOutput = exports.AccountSumAggregate = exports.AccountMinAggregate = exports.AccountMaxAggregate = exports.AccountGroupBy = exports.AccountCountAggregate = exports.AccountAvgAggregate = void 0;
exports.WorkspaceMinAggregate = exports.WorkspaceMaxAggregate = exports.WorkspaceGroupBy = exports.WorkspaceCountAggregate = exports.WorkspaceCount = exports.UserMinAggregate = exports.UserMaxAggregate = exports.UserGroupBy = exports.UserCountAggregate = exports.UserCount = exports.TaskSumAggregate = exports.TaskMinAggregate = exports.TaskMaxAggregate = exports.TaskGroupBy = void 0;
const tslib_1 = require("tslib");
var AccountAvgAggregate_1 = require("./AccountAvgAggregate");
Object.defineProperty(exports, "AccountAvgAggregate", { enumerable: true, get: function () { return AccountAvgAggregate_1.AccountAvgAggregate; } });
var AccountCountAggregate_1 = require("./AccountCountAggregate");
Object.defineProperty(exports, "AccountCountAggregate", { enumerable: true, get: function () { return AccountCountAggregate_1.AccountCountAggregate; } });
var AccountGroupBy_1 = require("./AccountGroupBy");
Object.defineProperty(exports, "AccountGroupBy", { enumerable: true, get: function () { return AccountGroupBy_1.AccountGroupBy; } });
var AccountMaxAggregate_1 = require("./AccountMaxAggregate");
Object.defineProperty(exports, "AccountMaxAggregate", { enumerable: true, get: function () { return AccountMaxAggregate_1.AccountMaxAggregate; } });
var AccountMinAggregate_1 = require("./AccountMinAggregate");
Object.defineProperty(exports, "AccountMinAggregate", { enumerable: true, get: function () { return AccountMinAggregate_1.AccountMinAggregate; } });
var AccountSumAggregate_1 = require("./AccountSumAggregate");
Object.defineProperty(exports, "AccountSumAggregate", { enumerable: true, get: function () { return AccountSumAggregate_1.AccountSumAggregate; } });
var AffectedRowsOutput_1 = require("./AffectedRowsOutput");
Object.defineProperty(exports, "AffectedRowsOutput", { enumerable: true, get: function () { return AffectedRowsOutput_1.AffectedRowsOutput; } });
var AggregateAccount_1 = require("./AggregateAccount");
Object.defineProperty(exports, "AggregateAccount", { enumerable: true, get: function () { return AggregateAccount_1.AggregateAccount; } });
var AggregateFile_1 = require("./AggregateFile");
Object.defineProperty(exports, "AggregateFile", { enumerable: true, get: function () { return AggregateFile_1.AggregateFile; } });
var AggregatePriority_1 = require("./AggregatePriority");
Object.defineProperty(exports, "AggregatePriority", { enumerable: true, get: function () { return AggregatePriority_1.AggregatePriority; } });
var AggregateSession_1 = require("./AggregateSession");
Object.defineProperty(exports, "AggregateSession", { enumerable: true, get: function () { return AggregateSession_1.AggregateSession; } });
var AggregateStatus_1 = require("./AggregateStatus");
Object.defineProperty(exports, "AggregateStatus", { enumerable: true, get: function () { return AggregateStatus_1.AggregateStatus; } });
var AggregateTask_1 = require("./AggregateTask");
Object.defineProperty(exports, "AggregateTask", { enumerable: true, get: function () { return AggregateTask_1.AggregateTask; } });
var AggregateUser_1 = require("./AggregateUser");
Object.defineProperty(exports, "AggregateUser", { enumerable: true, get: function () { return AggregateUser_1.AggregateUser; } });
var AggregateWorkspace_1 = require("./AggregateWorkspace");
Object.defineProperty(exports, "AggregateWorkspace", { enumerable: true, get: function () { return AggregateWorkspace_1.AggregateWorkspace; } });
var CreateManyAndReturnAccount_1 = require("./CreateManyAndReturnAccount");
Object.defineProperty(exports, "CreateManyAndReturnAccount", { enumerable: true, get: function () { return CreateManyAndReturnAccount_1.CreateManyAndReturnAccount; } });
var CreateManyAndReturnFile_1 = require("./CreateManyAndReturnFile");
Object.defineProperty(exports, "CreateManyAndReturnFile", { enumerable: true, get: function () { return CreateManyAndReturnFile_1.CreateManyAndReturnFile; } });
var CreateManyAndReturnPriority_1 = require("./CreateManyAndReturnPriority");
Object.defineProperty(exports, "CreateManyAndReturnPriority", { enumerable: true, get: function () { return CreateManyAndReturnPriority_1.CreateManyAndReturnPriority; } });
var CreateManyAndReturnSession_1 = require("./CreateManyAndReturnSession");
Object.defineProperty(exports, "CreateManyAndReturnSession", { enumerable: true, get: function () { return CreateManyAndReturnSession_1.CreateManyAndReturnSession; } });
var CreateManyAndReturnStatus_1 = require("./CreateManyAndReturnStatus");
Object.defineProperty(exports, "CreateManyAndReturnStatus", { enumerable: true, get: function () { return CreateManyAndReturnStatus_1.CreateManyAndReturnStatus; } });
var CreateManyAndReturnTask_1 = require("./CreateManyAndReturnTask");
Object.defineProperty(exports, "CreateManyAndReturnTask", { enumerable: true, get: function () { return CreateManyAndReturnTask_1.CreateManyAndReturnTask; } });
var CreateManyAndReturnUser_1 = require("./CreateManyAndReturnUser");
Object.defineProperty(exports, "CreateManyAndReturnUser", { enumerable: true, get: function () { return CreateManyAndReturnUser_1.CreateManyAndReturnUser; } });
var CreateManyAndReturnWorkspace_1 = require("./CreateManyAndReturnWorkspace");
Object.defineProperty(exports, "CreateManyAndReturnWorkspace", { enumerable: true, get: function () { return CreateManyAndReturnWorkspace_1.CreateManyAndReturnWorkspace; } });
var FileAvgAggregate_1 = require("./FileAvgAggregate");
Object.defineProperty(exports, "FileAvgAggregate", { enumerable: true, get: function () { return FileAvgAggregate_1.FileAvgAggregate; } });
var FileCountAggregate_1 = require("./FileCountAggregate");
Object.defineProperty(exports, "FileCountAggregate", { enumerable: true, get: function () { return FileCountAggregate_1.FileCountAggregate; } });
var FileGroupBy_1 = require("./FileGroupBy");
Object.defineProperty(exports, "FileGroupBy", { enumerable: true, get: function () { return FileGroupBy_1.FileGroupBy; } });
var FileMaxAggregate_1 = require("./FileMaxAggregate");
Object.defineProperty(exports, "FileMaxAggregate", { enumerable: true, get: function () { return FileMaxAggregate_1.FileMaxAggregate; } });
var FileMinAggregate_1 = require("./FileMinAggregate");
Object.defineProperty(exports, "FileMinAggregate", { enumerable: true, get: function () { return FileMinAggregate_1.FileMinAggregate; } });
var FileSumAggregate_1 = require("./FileSumAggregate");
Object.defineProperty(exports, "FileSumAggregate", { enumerable: true, get: function () { return FileSumAggregate_1.FileSumAggregate; } });
var PriorityAvgAggregate_1 = require("./PriorityAvgAggregate");
Object.defineProperty(exports, "PriorityAvgAggregate", { enumerable: true, get: function () { return PriorityAvgAggregate_1.PriorityAvgAggregate; } });
var PriorityCount_1 = require("./PriorityCount");
Object.defineProperty(exports, "PriorityCount", { enumerable: true, get: function () { return PriorityCount_1.PriorityCount; } });
var PriorityCountAggregate_1 = require("./PriorityCountAggregate");
Object.defineProperty(exports, "PriorityCountAggregate", { enumerable: true, get: function () { return PriorityCountAggregate_1.PriorityCountAggregate; } });
var PriorityGroupBy_1 = require("./PriorityGroupBy");
Object.defineProperty(exports, "PriorityGroupBy", { enumerable: true, get: function () { return PriorityGroupBy_1.PriorityGroupBy; } });
var PriorityMaxAggregate_1 = require("./PriorityMaxAggregate");
Object.defineProperty(exports, "PriorityMaxAggregate", { enumerable: true, get: function () { return PriorityMaxAggregate_1.PriorityMaxAggregate; } });
var PriorityMinAggregate_1 = require("./PriorityMinAggregate");
Object.defineProperty(exports, "PriorityMinAggregate", { enumerable: true, get: function () { return PriorityMinAggregate_1.PriorityMinAggregate; } });
var PrioritySumAggregate_1 = require("./PrioritySumAggregate");
Object.defineProperty(exports, "PrioritySumAggregate", { enumerable: true, get: function () { return PrioritySumAggregate_1.PrioritySumAggregate; } });
var SessionCountAggregate_1 = require("./SessionCountAggregate");
Object.defineProperty(exports, "SessionCountAggregate", { enumerable: true, get: function () { return SessionCountAggregate_1.SessionCountAggregate; } });
var SessionGroupBy_1 = require("./SessionGroupBy");
Object.defineProperty(exports, "SessionGroupBy", { enumerable: true, get: function () { return SessionGroupBy_1.SessionGroupBy; } });
var SessionMaxAggregate_1 = require("./SessionMaxAggregate");
Object.defineProperty(exports, "SessionMaxAggregate", { enumerable: true, get: function () { return SessionMaxAggregate_1.SessionMaxAggregate; } });
var SessionMinAggregate_1 = require("./SessionMinAggregate");
Object.defineProperty(exports, "SessionMinAggregate", { enumerable: true, get: function () { return SessionMinAggregate_1.SessionMinAggregate; } });
var StatusAvgAggregate_1 = require("./StatusAvgAggregate");
Object.defineProperty(exports, "StatusAvgAggregate", { enumerable: true, get: function () { return StatusAvgAggregate_1.StatusAvgAggregate; } });
var StatusCount_1 = require("./StatusCount");
Object.defineProperty(exports, "StatusCount", { enumerable: true, get: function () { return StatusCount_1.StatusCount; } });
var StatusCountAggregate_1 = require("./StatusCountAggregate");
Object.defineProperty(exports, "StatusCountAggregate", { enumerable: true, get: function () { return StatusCountAggregate_1.StatusCountAggregate; } });
var StatusGroupBy_1 = require("./StatusGroupBy");
Object.defineProperty(exports, "StatusGroupBy", { enumerable: true, get: function () { return StatusGroupBy_1.StatusGroupBy; } });
var StatusMaxAggregate_1 = require("./StatusMaxAggregate");
Object.defineProperty(exports, "StatusMaxAggregate", { enumerable: true, get: function () { return StatusMaxAggregate_1.StatusMaxAggregate; } });
var StatusMinAggregate_1 = require("./StatusMinAggregate");
Object.defineProperty(exports, "StatusMinAggregate", { enumerable: true, get: function () { return StatusMinAggregate_1.StatusMinAggregate; } });
var StatusSumAggregate_1 = require("./StatusSumAggregate");
Object.defineProperty(exports, "StatusSumAggregate", { enumerable: true, get: function () { return StatusSumAggregate_1.StatusSumAggregate; } });
var TaskAvgAggregate_1 = require("./TaskAvgAggregate");
Object.defineProperty(exports, "TaskAvgAggregate", { enumerable: true, get: function () { return TaskAvgAggregate_1.TaskAvgAggregate; } });
var TaskCount_1 = require("./TaskCount");
Object.defineProperty(exports, "TaskCount", { enumerable: true, get: function () { return TaskCount_1.TaskCount; } });
var TaskCountAggregate_1 = require("./TaskCountAggregate");
Object.defineProperty(exports, "TaskCountAggregate", { enumerable: true, get: function () { return TaskCountAggregate_1.TaskCountAggregate; } });
var TaskGroupBy_1 = require("./TaskGroupBy");
Object.defineProperty(exports, "TaskGroupBy", { enumerable: true, get: function () { return TaskGroupBy_1.TaskGroupBy; } });
var TaskMaxAggregate_1 = require("./TaskMaxAggregate");
Object.defineProperty(exports, "TaskMaxAggregate", { enumerable: true, get: function () { return TaskMaxAggregate_1.TaskMaxAggregate; } });
var TaskMinAggregate_1 = require("./TaskMinAggregate");
Object.defineProperty(exports, "TaskMinAggregate", { enumerable: true, get: function () { return TaskMinAggregate_1.TaskMinAggregate; } });
var TaskSumAggregate_1 = require("./TaskSumAggregate");
Object.defineProperty(exports, "TaskSumAggregate", { enumerable: true, get: function () { return TaskSumAggregate_1.TaskSumAggregate; } });
var UserCount_1 = require("./UserCount");
Object.defineProperty(exports, "UserCount", { enumerable: true, get: function () { return UserCount_1.UserCount; } });
var UserCountAggregate_1 = require("./UserCountAggregate");
Object.defineProperty(exports, "UserCountAggregate", { enumerable: true, get: function () { return UserCountAggregate_1.UserCountAggregate; } });
var UserGroupBy_1 = require("./UserGroupBy");
Object.defineProperty(exports, "UserGroupBy", { enumerable: true, get: function () { return UserGroupBy_1.UserGroupBy; } });
var UserMaxAggregate_1 = require("./UserMaxAggregate");
Object.defineProperty(exports, "UserMaxAggregate", { enumerable: true, get: function () { return UserMaxAggregate_1.UserMaxAggregate; } });
var UserMinAggregate_1 = require("./UserMinAggregate");
Object.defineProperty(exports, "UserMinAggregate", { enumerable: true, get: function () { return UserMinAggregate_1.UserMinAggregate; } });
var WorkspaceCount_1 = require("./WorkspaceCount");
Object.defineProperty(exports, "WorkspaceCount", { enumerable: true, get: function () { return WorkspaceCount_1.WorkspaceCount; } });
var WorkspaceCountAggregate_1 = require("./WorkspaceCountAggregate");
Object.defineProperty(exports, "WorkspaceCountAggregate", { enumerable: true, get: function () { return WorkspaceCountAggregate_1.WorkspaceCountAggregate; } });
var WorkspaceGroupBy_1 = require("./WorkspaceGroupBy");
Object.defineProperty(exports, "WorkspaceGroupBy", { enumerable: true, get: function () { return WorkspaceGroupBy_1.WorkspaceGroupBy; } });
var WorkspaceMaxAggregate_1 = require("./WorkspaceMaxAggregate");
Object.defineProperty(exports, "WorkspaceMaxAggregate", { enumerable: true, get: function () { return WorkspaceMaxAggregate_1.WorkspaceMaxAggregate; } });
var WorkspaceMinAggregate_1 = require("./WorkspaceMinAggregate");
Object.defineProperty(exports, "WorkspaceMinAggregate", { enumerable: true, get: function () { return WorkspaceMinAggregate_1.WorkspaceMinAggregate; } });
tslib_1.__exportStar(require("./args"), exports);
