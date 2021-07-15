require('./sourcemap-register.js');module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3842:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Context = void 0;
const github = __importStar(__webpack_require__(5438));
exports.Context = {
    token: process.env.GITHUB_TOKEN,
    repo: github.context.repo,
};


/***/ }),

/***/ 9088:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MergeableState = exports.LockReason = exports.LanguageOrderField = exports.LabelOrderField = exports.IssueTimelineItemsItemType = exports.IssueState = exports.IssueOrderField = exports.IssueCommentOrderField = exports.IpAllowListForInstalledAppsEnabledSettingValue = exports.IpAllowListEntryOrderField = exports.IpAllowListEnabledSettingValue = exports.IdentityProviderConfigurationState = exports.GitSignatureState = exports.GistPrivacy = exports.GistOrderField = exports.FundingPlatform = exports.FileViewedState = exports.EnterpriseUserDeployment = exports.EnterpriseUserAccountMembershipRole = exports.EnterpriseServerUserAccountsUploadSyncState = exports.EnterpriseServerUserAccountsUploadOrderField = exports.EnterpriseServerUserAccountOrderField = exports.EnterpriseServerUserAccountEmailOrderField = exports.EnterpriseServerInstallationOrderField = exports.EnterpriseMembersCanMakePurchasesSettingValue = exports.EnterpriseMembersCanCreateRepositoriesSettingValue = exports.EnterpriseMemberOrderField = exports.EnterpriseEnabledSettingValue = exports.EnterpriseEnabledDisabledSettingValue = exports.EnterpriseDefaultRepositoryPermissionSettingValue = exports.EnterpriseAdministratorRole = exports.EnterpriseAdministratorInvitationOrderField = exports.DiscussionOrderField = exports.DiffSide = exports.DeploymentStatusState = exports.DeploymentState = exports.DeploymentReviewState = exports.DeploymentProtectionRuleType = exports.DeploymentOrderField = exports.DefaultRepositoryPermissionField = exports.ContributionLevel = exports.CommitContributionOrderField = exports.CommentCannotUpdateReason = exports.CommentAuthorAssociation = exports.CollaboratorAffiliation = exports.CheckStatusState = exports.CheckRunType = exports.CheckConclusionState = exports.CheckAnnotationLevel = exports.AuditLogOrderField = void 0;
exports.RepoArchivedAuditEntryVisibility = exports.RepoAddMemberAuditEntryVisibility = exports.RepoAccessAuditEntryVisibility = exports.ReleaseOrderField = exports.RefOrderField = exports.ReactionOrderField = exports.ReactionContent = exports.PullRequestUpdateState = exports.PullRequestTimelineItemsItemType = exports.PullRequestState = exports.PullRequestReviewState = exports.PullRequestReviewEvent = exports.PullRequestReviewDecision = exports.PullRequestReviewCommentState = exports.PullRequestOrderField = exports.PullRequestMergeMethod = exports.ProjectTemplate = exports.ProjectState = exports.ProjectOrderField = exports.ProjectColumnPurpose = exports.ProjectCardState = exports.ProjectCardArchivedState = exports.PinnedDiscussionPattern = exports.PinnedDiscussionGradient = exports.PinnableItemType = exports.PackageVersionOrderField = exports.PackageType = exports.PackageOrderField = exports.PackageFileOrderField = exports.OrganizationOrderField = exports.OrganizationMembersCanCreateRepositoriesSettingValue = exports.OrganizationMemberRole = exports.OrganizationInvitationType = exports.OrganizationInvitationRole = exports.OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = exports.OrgUpdateMemberAuditEntryPermission = exports.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = exports.OrgRemoveOutsideCollaboratorAuditEntryReason = exports.OrgRemoveOutsideCollaboratorAuditEntryMembershipType = exports.OrgRemoveMemberAuditEntryReason = exports.OrgRemoveMemberAuditEntryMembershipType = exports.OrgRemoveBillingManagerAuditEntryReason = exports.OrgCreateAuditEntryBillingPlan = exports.OrgAddMemberAuditEntryPermission = exports.OrderDirection = exports.OperationType = exports.OauthApplicationCreateAuditEntryState = exports.NotificationRestrictionSettingValue = exports.MilestoneState = exports.MilestoneOrderField = void 0;
exports.VerifiableDomainOrderField = exports.UserStatusOrderField = exports.UserBlockDuration = exports.TopicSuggestionDeclineReason = exports.TeamRole = exports.TeamRepositoryOrderField = exports.TeamPrivacy = exports.TeamOrderField = exports.TeamMembershipType = exports.TeamMemberRole = exports.TeamMemberOrderField = exports.TeamDiscussionOrderField = exports.TeamDiscussionCommentOrderField = exports.SubscriptionState = exports.StatusState = exports.StarOrderField = exports.SponsorshipPrivacy = exports.SponsorshipOrderField = exports.SponsorsTierOrderField = exports.SponsorsGoalKind = exports.SponsorableOrderField = exports.SecurityVulnerabilityOrderField = exports.SecurityAdvisorySeverity = exports.SecurityAdvisoryOrderField = exports.SecurityAdvisoryIdentifierType = exports.SecurityAdvisoryEcosystem = exports.SearchType = exports.SavedReplyOrderField = exports.SamlSignatureAlgorithm = exports.SamlDigestAlgorithm = exports.RequestableCheckStatusState = exports.RepositoryVisibility = exports.RepositoryPrivacy = exports.RepositoryPermission = exports.RepositoryOrderField = exports.RepositoryLockReason = exports.RepositoryInvitationOrderField = exports.RepositoryInteractionLimitOrigin = exports.RepositoryInteractionLimitExpiry = exports.RepositoryInteractionLimit = exports.RepositoryContributionType = exports.RepositoryAffiliation = exports.ReportedContentClassifiers = exports.RepoRemoveMemberAuditEntryVisibility = exports.RepoDestroyAuditEntryVisibility = exports.RepoCreateAuditEntryVisibility = exports.RepoChangeMergeSettingAuditEntryMergeType = void 0;
/** Properties by which Audit Log connections can be ordered. */
var AuditLogOrderField;
(function (AuditLogOrderField) {
    /** Order audit log entries by timestamp */
    AuditLogOrderField["CreatedAt"] = "CREATED_AT";
})(AuditLogOrderField = exports.AuditLogOrderField || (exports.AuditLogOrderField = {}));
/** Represents an annotation's information level. */
var CheckAnnotationLevel;
(function (CheckAnnotationLevel) {
    /** An annotation indicating an inescapable error. */
    CheckAnnotationLevel["Failure"] = "FAILURE";
    /** An annotation indicating some information. */
    CheckAnnotationLevel["Notice"] = "NOTICE";
    /** An annotation indicating an ignorable error. */
    CheckAnnotationLevel["Warning"] = "WARNING";
})(CheckAnnotationLevel = exports.CheckAnnotationLevel || (exports.CheckAnnotationLevel = {}));
/** The possible states for a check suite or run conclusion. */
var CheckConclusionState;
(function (CheckConclusionState) {
    /** The check suite or run requires action. */
    CheckConclusionState["ActionRequired"] = "ACTION_REQUIRED";
    /** The check suite or run has timed out. */
    CheckConclusionState["TimedOut"] = "TIMED_OUT";
    /** The check suite or run has been cancelled. */
    CheckConclusionState["Cancelled"] = "CANCELLED";
    /** The check suite or run has failed. */
    CheckConclusionState["Failure"] = "FAILURE";
    /** The check suite or run has succeeded. */
    CheckConclusionState["Success"] = "SUCCESS";
    /** The check suite or run was neutral. */
    CheckConclusionState["Neutral"] = "NEUTRAL";
    /** The check suite or run was skipped. */
    CheckConclusionState["Skipped"] = "SKIPPED";
    /** The check suite or run has failed at startup. */
    CheckConclusionState["StartupFailure"] = "STARTUP_FAILURE";
    /** The check suite or run was marked stale by GitHub. Only GitHub can use this conclusion. */
    CheckConclusionState["Stale"] = "STALE";
})(CheckConclusionState = exports.CheckConclusionState || (exports.CheckConclusionState = {}));
/** The possible types of check runs. */
var CheckRunType;
(function (CheckRunType) {
    /** Every check run available. */
    CheckRunType["All"] = "ALL";
    /** The latest check run. */
    CheckRunType["Latest"] = "LATEST";
})(CheckRunType = exports.CheckRunType || (exports.CheckRunType = {}));
/** The possible states for a check suite or run status. */
var CheckStatusState;
(function (CheckStatusState) {
    /** The check suite or run has been queued. */
    CheckStatusState["Queued"] = "QUEUED";
    /** The check suite or run is in progress. */
    CheckStatusState["InProgress"] = "IN_PROGRESS";
    /** The check suite or run has been completed. */
    CheckStatusState["Completed"] = "COMPLETED";
    /** The check suite or run is in waiting state. */
    CheckStatusState["Waiting"] = "WAITING";
    /** The check suite or run is in pending state. */
    CheckStatusState["Pending"] = "PENDING";
    /** The check suite or run has been requested. */
    CheckStatusState["Requested"] = "REQUESTED";
})(CheckStatusState = exports.CheckStatusState || (exports.CheckStatusState = {}));
/** Collaborators affiliation level with a subject. */
var CollaboratorAffiliation;
(function (CollaboratorAffiliation) {
    /** All outside collaborators of an organization-owned subject. */
    CollaboratorAffiliation["Outside"] = "OUTSIDE";
    /** All collaborators with permissions to an organization-owned subject, regardless of organization membership status. */
    CollaboratorAffiliation["Direct"] = "DIRECT";
    /** All collaborators the authenticated user can see. */
    CollaboratorAffiliation["All"] = "ALL";
})(CollaboratorAffiliation = exports.CollaboratorAffiliation || (exports.CollaboratorAffiliation = {}));
/** A comment author association with repository. */
var CommentAuthorAssociation;
(function (CommentAuthorAssociation) {
    /** Author is a member of the organization that owns the repository. */
    CommentAuthorAssociation["Member"] = "MEMBER";
    /** Author is the owner of the repository. */
    CommentAuthorAssociation["Owner"] = "OWNER";
    /** Author is a placeholder for an unclaimed user. */
    CommentAuthorAssociation["Mannequin"] = "MANNEQUIN";
    /** Author has been invited to collaborate on the repository. */
    CommentAuthorAssociation["Collaborator"] = "COLLABORATOR";
    /** Author has previously committed to the repository. */
    CommentAuthorAssociation["Contributor"] = "CONTRIBUTOR";
    /** Author has not previously committed to the repository. */
    CommentAuthorAssociation["FirstTimeContributor"] = "FIRST_TIME_CONTRIBUTOR";
    /** Author has not previously committed to GitHub. */
    CommentAuthorAssociation["FirstTimer"] = "FIRST_TIMER";
    /** Author has no association with the repository. */
    CommentAuthorAssociation["None"] = "NONE";
})(CommentAuthorAssociation = exports.CommentAuthorAssociation || (exports.CommentAuthorAssociation = {}));
/** The possible errors that will prevent a user from updating a comment. */
var CommentCannotUpdateReason;
(function (CommentCannotUpdateReason) {
    /** Unable to create comment because repository is archived. */
    CommentCannotUpdateReason["Archived"] = "ARCHIVED";
    /** You must be the author or have write access to this repository to update this comment. */
    CommentCannotUpdateReason["InsufficientAccess"] = "INSUFFICIENT_ACCESS";
    /** Unable to create comment because issue is locked. */
    CommentCannotUpdateReason["Locked"] = "LOCKED";
    /** You must be logged in to update this comment. */
    CommentCannotUpdateReason["LoginRequired"] = "LOGIN_REQUIRED";
    /** Repository is under maintenance. */
    CommentCannotUpdateReason["Maintenance"] = "MAINTENANCE";
    /** At least one email address must be verified to update this comment. */
    CommentCannotUpdateReason["VerifiedEmailRequired"] = "VERIFIED_EMAIL_REQUIRED";
    /** You cannot update this comment */
    CommentCannotUpdateReason["Denied"] = "DENIED";
})(CommentCannotUpdateReason = exports.CommentCannotUpdateReason || (exports.CommentCannotUpdateReason = {}));
/** Properties by which commit contribution connections can be ordered. */
var CommitContributionOrderField;
(function (CommitContributionOrderField) {
    /** Order commit contributions by when they were made. */
    CommitContributionOrderField["OccurredAt"] = "OCCURRED_AT";
    /** Order commit contributions by how many commits they represent. */
    CommitContributionOrderField["CommitCount"] = "COMMIT_COUNT";
})(CommitContributionOrderField = exports.CommitContributionOrderField || (exports.CommitContributionOrderField = {}));
/** Varying levels of contributions from none to many. */
var ContributionLevel;
(function (ContributionLevel) {
    /** No contributions occurred. */
    ContributionLevel["None"] = "NONE";
    /** Lowest 25% of days of contributions. */
    ContributionLevel["FirstQuartile"] = "FIRST_QUARTILE";
    /** Second lowest 25% of days of contributions. More contributions than the first quartile. */
    ContributionLevel["SecondQuartile"] = "SECOND_QUARTILE";
    /** Second highest 25% of days of contributions. More contributions than second quartile, less than the fourth quartile. */
    ContributionLevel["ThirdQuartile"] = "THIRD_QUARTILE";
    /** Highest 25% of days of contributions. More contributions than the third quartile. */
    ContributionLevel["FourthQuartile"] = "FOURTH_QUARTILE";
})(ContributionLevel = exports.ContributionLevel || (exports.ContributionLevel = {}));
/** The possible default permissions for repositories. */
var DefaultRepositoryPermissionField;
(function (DefaultRepositoryPermissionField) {
    /** No access */
    DefaultRepositoryPermissionField["None"] = "NONE";
    /** Can read repos by default */
    DefaultRepositoryPermissionField["Read"] = "READ";
    /** Can read and write repos by default */
    DefaultRepositoryPermissionField["Write"] = "WRITE";
    /** Can read, write, and administrate repos by default */
    DefaultRepositoryPermissionField["Admin"] = "ADMIN";
})(DefaultRepositoryPermissionField = exports.DefaultRepositoryPermissionField || (exports.DefaultRepositoryPermissionField = {}));
/** Properties by which deployment connections can be ordered. */
var DeploymentOrderField;
(function (DeploymentOrderField) {
    /** Order collection by creation time */
    DeploymentOrderField["CreatedAt"] = "CREATED_AT";
})(DeploymentOrderField = exports.DeploymentOrderField || (exports.DeploymentOrderField = {}));
/** The possible protection rule types. */
var DeploymentProtectionRuleType;
(function (DeploymentProtectionRuleType) {
    /** Required reviewers */
    DeploymentProtectionRuleType["RequiredReviewers"] = "REQUIRED_REVIEWERS";
    /** Wait timer */
    DeploymentProtectionRuleType["WaitTimer"] = "WAIT_TIMER";
})(DeploymentProtectionRuleType = exports.DeploymentProtectionRuleType || (exports.DeploymentProtectionRuleType = {}));
/** The possible states for a deployment review. */
var DeploymentReviewState;
(function (DeploymentReviewState) {
    /** The deployment was approved. */
    DeploymentReviewState["Approved"] = "APPROVED";
    /** The deployment was rejected. */
    DeploymentReviewState["Rejected"] = "REJECTED";
})(DeploymentReviewState = exports.DeploymentReviewState || (exports.DeploymentReviewState = {}));
/** The possible states in which a deployment can be. */
var DeploymentState;
(function (DeploymentState) {
    /** The pending deployment was not updated after 30 minutes. */
    DeploymentState["Abandoned"] = "ABANDONED";
    /** The deployment is currently active. */
    DeploymentState["Active"] = "ACTIVE";
    /** An inactive transient deployment. */
    DeploymentState["Destroyed"] = "DESTROYED";
    /** The deployment experienced an error. */
    DeploymentState["Error"] = "ERROR";
    /** The deployment has failed. */
    DeploymentState["Failure"] = "FAILURE";
    /** The deployment is inactive. */
    DeploymentState["Inactive"] = "INACTIVE";
    /** The deployment is pending. */
    DeploymentState["Pending"] = "PENDING";
    /** The deployment has queued */
    DeploymentState["Queued"] = "QUEUED";
    /** The deployment is in progress. */
    DeploymentState["InProgress"] = "IN_PROGRESS";
    /** The deployment is waiting. */
    DeploymentState["Waiting"] = "WAITING";
})(DeploymentState = exports.DeploymentState || (exports.DeploymentState = {}));
/** The possible states for a deployment status. */
var DeploymentStatusState;
(function (DeploymentStatusState) {
    /** The deployment is pending. */
    DeploymentStatusState["Pending"] = "PENDING";
    /** The deployment was successful. */
    DeploymentStatusState["Success"] = "SUCCESS";
    /** The deployment has failed. */
    DeploymentStatusState["Failure"] = "FAILURE";
    /** The deployment is inactive. */
    DeploymentStatusState["Inactive"] = "INACTIVE";
    /** The deployment experienced an error. */
    DeploymentStatusState["Error"] = "ERROR";
    /** The deployment is queued */
    DeploymentStatusState["Queued"] = "QUEUED";
    /** The deployment is in progress. */
    DeploymentStatusState["InProgress"] = "IN_PROGRESS";
    /** The deployment is waiting. */
    DeploymentStatusState["Waiting"] = "WAITING";
})(DeploymentStatusState = exports.DeploymentStatusState || (exports.DeploymentStatusState = {}));
/** The possible sides of a diff. */
var DiffSide;
(function (DiffSide) {
    /** The left side of the diff. */
    DiffSide["Left"] = "LEFT";
    /** The right side of the diff. */
    DiffSide["Right"] = "RIGHT";
})(DiffSide = exports.DiffSide || (exports.DiffSide = {}));
/** Properties by which discussion connections can be ordered. */
var DiscussionOrderField;
(function (DiscussionOrderField) {
    /** Order discussions by creation time. */
    DiscussionOrderField["CreatedAt"] = "CREATED_AT";
    /** Order discussions by most recent modification time. */
    DiscussionOrderField["UpdatedAt"] = "UPDATED_AT";
})(DiscussionOrderField = exports.DiscussionOrderField || (exports.DiscussionOrderField = {}));
/** Properties by which enterprise administrator invitation connections can be ordered. */
var EnterpriseAdministratorInvitationOrderField;
(function (EnterpriseAdministratorInvitationOrderField) {
    /** Order enterprise administrator member invitations by creation time */
    EnterpriseAdministratorInvitationOrderField["CreatedAt"] = "CREATED_AT";
})(EnterpriseAdministratorInvitationOrderField = exports.EnterpriseAdministratorInvitationOrderField || (exports.EnterpriseAdministratorInvitationOrderField = {}));
/** The possible administrator roles in an enterprise account. */
var EnterpriseAdministratorRole;
(function (EnterpriseAdministratorRole) {
    /** Represents an owner of the enterprise account. */
    EnterpriseAdministratorRole["Owner"] = "OWNER";
    /** Represents a billing manager of the enterprise account. */
    EnterpriseAdministratorRole["BillingManager"] = "BILLING_MANAGER";
})(EnterpriseAdministratorRole = exports.EnterpriseAdministratorRole || (exports.EnterpriseAdministratorRole = {}));
/** The possible values for the enterprise default repository permission setting. */
var EnterpriseDefaultRepositoryPermissionSettingValue;
(function (EnterpriseDefaultRepositoryPermissionSettingValue) {
    /** Organizations in the enterprise choose default repository permissions for their members. */
    EnterpriseDefaultRepositoryPermissionSettingValue["NoPolicy"] = "NO_POLICY";
    /** Organization members will be able to clone, pull, push, and add new collaborators to all organization repositories. */
    EnterpriseDefaultRepositoryPermissionSettingValue["Admin"] = "ADMIN";
    /** Organization members will be able to clone, pull, and push all organization repositories. */
    EnterpriseDefaultRepositoryPermissionSettingValue["Write"] = "WRITE";
    /** Organization members will be able to clone and pull all organization repositories. */
    EnterpriseDefaultRepositoryPermissionSettingValue["Read"] = "READ";
    /** Organization members will only be able to clone and pull public repositories. */
    EnterpriseDefaultRepositoryPermissionSettingValue["None"] = "NONE";
})(EnterpriseDefaultRepositoryPermissionSettingValue = exports.EnterpriseDefaultRepositoryPermissionSettingValue || (exports.EnterpriseDefaultRepositoryPermissionSettingValue = {}));
/** The possible values for an enabled/disabled enterprise setting. */
var EnterpriseEnabledDisabledSettingValue;
(function (EnterpriseEnabledDisabledSettingValue) {
    /** The setting is enabled for organizations in the enterprise. */
    EnterpriseEnabledDisabledSettingValue["Enabled"] = "ENABLED";
    /** The setting is disabled for organizations in the enterprise. */
    EnterpriseEnabledDisabledSettingValue["Disabled"] = "DISABLED";
    /** There is no policy set for organizations in the enterprise. */
    EnterpriseEnabledDisabledSettingValue["NoPolicy"] = "NO_POLICY";
})(EnterpriseEnabledDisabledSettingValue = exports.EnterpriseEnabledDisabledSettingValue || (exports.EnterpriseEnabledDisabledSettingValue = {}));
/** The possible values for an enabled/no policy enterprise setting. */
var EnterpriseEnabledSettingValue;
(function (EnterpriseEnabledSettingValue) {
    /** The setting is enabled for organizations in the enterprise. */
    EnterpriseEnabledSettingValue["Enabled"] = "ENABLED";
    /** There is no policy set for organizations in the enterprise. */
    EnterpriseEnabledSettingValue["NoPolicy"] = "NO_POLICY";
})(EnterpriseEnabledSettingValue = exports.EnterpriseEnabledSettingValue || (exports.EnterpriseEnabledSettingValue = {}));
/** Properties by which enterprise member connections can be ordered. */
var EnterpriseMemberOrderField;
(function (EnterpriseMemberOrderField) {
    /** Order enterprise members by login */
    EnterpriseMemberOrderField["Login"] = "LOGIN";
    /** Order enterprise members by creation time */
    EnterpriseMemberOrderField["CreatedAt"] = "CREATED_AT";
})(EnterpriseMemberOrderField = exports.EnterpriseMemberOrderField || (exports.EnterpriseMemberOrderField = {}));
/** The possible values for the enterprise members can create repositories setting. */
var EnterpriseMembersCanCreateRepositoriesSettingValue;
(function (EnterpriseMembersCanCreateRepositoriesSettingValue) {
    /** Organization administrators choose whether to allow members to create repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["NoPolicy"] = "NO_POLICY";
    /** Members will be able to create public and private repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["All"] = "ALL";
    /** Members will be able to create only public repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["Public"] = "PUBLIC";
    /** Members will be able to create only private repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["Private"] = "PRIVATE";
    /** Members will not be able to create public or private repositories. */
    EnterpriseMembersCanCreateRepositoriesSettingValue["Disabled"] = "DISABLED";
})(EnterpriseMembersCanCreateRepositoriesSettingValue = exports.EnterpriseMembersCanCreateRepositoriesSettingValue || (exports.EnterpriseMembersCanCreateRepositoriesSettingValue = {}));
/** The possible values for the members can make purchases setting. */
var EnterpriseMembersCanMakePurchasesSettingValue;
(function (EnterpriseMembersCanMakePurchasesSettingValue) {
    /** The setting is enabled for organizations in the enterprise. */
    EnterpriseMembersCanMakePurchasesSettingValue["Enabled"] = "ENABLED";
    /** The setting is disabled for organizations in the enterprise. */
    EnterpriseMembersCanMakePurchasesSettingValue["Disabled"] = "DISABLED";
})(EnterpriseMembersCanMakePurchasesSettingValue = exports.EnterpriseMembersCanMakePurchasesSettingValue || (exports.EnterpriseMembersCanMakePurchasesSettingValue = {}));
/** Properties by which Enterprise Server installation connections can be ordered. */
var EnterpriseServerInstallationOrderField;
(function (EnterpriseServerInstallationOrderField) {
    /** Order Enterprise Server installations by host name */
    EnterpriseServerInstallationOrderField["HostName"] = "HOST_NAME";
    /** Order Enterprise Server installations by customer name */
    EnterpriseServerInstallationOrderField["CustomerName"] = "CUSTOMER_NAME";
    /** Order Enterprise Server installations by creation time */
    EnterpriseServerInstallationOrderField["CreatedAt"] = "CREATED_AT";
})(EnterpriseServerInstallationOrderField = exports.EnterpriseServerInstallationOrderField || (exports.EnterpriseServerInstallationOrderField = {}));
/** Properties by which Enterprise Server user account email connections can be ordered. */
var EnterpriseServerUserAccountEmailOrderField;
(function (EnterpriseServerUserAccountEmailOrderField) {
    /** Order emails by email */
    EnterpriseServerUserAccountEmailOrderField["Email"] = "EMAIL";
})(EnterpriseServerUserAccountEmailOrderField = exports.EnterpriseServerUserAccountEmailOrderField || (exports.EnterpriseServerUserAccountEmailOrderField = {}));
/** Properties by which Enterprise Server user account connections can be ordered. */
var EnterpriseServerUserAccountOrderField;
(function (EnterpriseServerUserAccountOrderField) {
    /** Order user accounts by login */
    EnterpriseServerUserAccountOrderField["Login"] = "LOGIN";
    /** Order user accounts by creation time on the Enterprise Server installation */
    EnterpriseServerUserAccountOrderField["RemoteCreatedAt"] = "REMOTE_CREATED_AT";
})(EnterpriseServerUserAccountOrderField = exports.EnterpriseServerUserAccountOrderField || (exports.EnterpriseServerUserAccountOrderField = {}));
/** Properties by which Enterprise Server user accounts upload connections can be ordered. */
var EnterpriseServerUserAccountsUploadOrderField;
(function (EnterpriseServerUserAccountsUploadOrderField) {
    /** Order user accounts uploads by creation time */
    EnterpriseServerUserAccountsUploadOrderField["CreatedAt"] = "CREATED_AT";
})(EnterpriseServerUserAccountsUploadOrderField = exports.EnterpriseServerUserAccountsUploadOrderField || (exports.EnterpriseServerUserAccountsUploadOrderField = {}));
/** Synchronization state of the Enterprise Server user accounts upload */
var EnterpriseServerUserAccountsUploadSyncState;
(function (EnterpriseServerUserAccountsUploadSyncState) {
    /** The synchronization of the upload is pending. */
    EnterpriseServerUserAccountsUploadSyncState["Pending"] = "PENDING";
    /** The synchronization of the upload succeeded. */
    EnterpriseServerUserAccountsUploadSyncState["Success"] = "SUCCESS";
    /** The synchronization of the upload failed. */
    EnterpriseServerUserAccountsUploadSyncState["Failure"] = "FAILURE";
})(EnterpriseServerUserAccountsUploadSyncState = exports.EnterpriseServerUserAccountsUploadSyncState || (exports.EnterpriseServerUserAccountsUploadSyncState = {}));
/** The possible roles for enterprise membership. */
var EnterpriseUserAccountMembershipRole;
(function (EnterpriseUserAccountMembershipRole) {
    /** The user is a member of the enterprise membership. */
    EnterpriseUserAccountMembershipRole["Member"] = "MEMBER";
    /** The user is an owner of the enterprise membership. */
    EnterpriseUserAccountMembershipRole["Owner"] = "OWNER";
})(EnterpriseUserAccountMembershipRole = exports.EnterpriseUserAccountMembershipRole || (exports.EnterpriseUserAccountMembershipRole = {}));
/** The possible GitHub Enterprise deployments where this user can exist. */
var EnterpriseUserDeployment;
(function (EnterpriseUserDeployment) {
    /** The user is part of a GitHub Enterprise Cloud deployment. */
    EnterpriseUserDeployment["Cloud"] = "CLOUD";
    /** The user is part of a GitHub Enterprise Server deployment. */
    EnterpriseUserDeployment["Server"] = "SERVER";
})(EnterpriseUserDeployment = exports.EnterpriseUserDeployment || (exports.EnterpriseUserDeployment = {}));
/** The possible viewed states of a file . */
var FileViewedState;
(function (FileViewedState) {
    /** The file has new changes since last viewed. */
    FileViewedState["Dismissed"] = "DISMISSED";
    /** The file has been marked as viewed. */
    FileViewedState["Viewed"] = "VIEWED";
    /** The file has not been marked as viewed. */
    FileViewedState["Unviewed"] = "UNVIEWED";
})(FileViewedState = exports.FileViewedState || (exports.FileViewedState = {}));
/** The possible funding platforms for repository funding links. */
var FundingPlatform;
(function (FundingPlatform) {
    /** GitHub funding platform. */
    FundingPlatform["Github"] = "GITHUB";
    /** Patreon funding platform. */
    FundingPlatform["Patreon"] = "PATREON";
    /** Open Collective funding platform. */
    FundingPlatform["OpenCollective"] = "OPEN_COLLECTIVE";
    /** Ko-fi funding platform. */
    FundingPlatform["KoFi"] = "KO_FI";
    /** Tidelift funding platform. */
    FundingPlatform["Tidelift"] = "TIDELIFT";
    /** Community Bridge funding platform. */
    FundingPlatform["CommunityBridge"] = "COMMUNITY_BRIDGE";
    /** Liberapay funding platform. */
    FundingPlatform["Liberapay"] = "LIBERAPAY";
    /** IssueHunt funding platform. */
    FundingPlatform["Issuehunt"] = "ISSUEHUNT";
    /** Otechie funding platform. */
    FundingPlatform["Otechie"] = "OTECHIE";
    /** Custom funding platform. */
    FundingPlatform["Custom"] = "CUSTOM";
})(FundingPlatform = exports.FundingPlatform || (exports.FundingPlatform = {}));
/** Properties by which gist connections can be ordered. */
var GistOrderField;
(function (GistOrderField) {
    /** Order gists by creation time */
    GistOrderField["CreatedAt"] = "CREATED_AT";
    /** Order gists by update time */
    GistOrderField["UpdatedAt"] = "UPDATED_AT";
    /** Order gists by push time */
    GistOrderField["PushedAt"] = "PUSHED_AT";
})(GistOrderField = exports.GistOrderField || (exports.GistOrderField = {}));
/** The privacy of a Gist */
var GistPrivacy;
(function (GistPrivacy) {
    /** Public */
    GistPrivacy["Public"] = "PUBLIC";
    /** Secret */
    GistPrivacy["Secret"] = "SECRET";
    /** Gists that are public and secret */
    GistPrivacy["All"] = "ALL";
})(GistPrivacy = exports.GistPrivacy || (exports.GistPrivacy = {}));
/** The state of a Git signature. */
var GitSignatureState;
(function (GitSignatureState) {
    /** Valid signature and verified by GitHub */
    GitSignatureState["Valid"] = "VALID";
    /** Invalid signature */
    GitSignatureState["Invalid"] = "INVALID";
    /** Malformed signature */
    GitSignatureState["MalformedSig"] = "MALFORMED_SIG";
    /** Key used for signing not known to GitHub */
    GitSignatureState["UnknownKey"] = "UNKNOWN_KEY";
    /** Invalid email used for signing */
    GitSignatureState["BadEmail"] = "BAD_EMAIL";
    /** Email used for signing unverified on GitHub */
    GitSignatureState["UnverifiedEmail"] = "UNVERIFIED_EMAIL";
    /** Email used for signing not known to GitHub */
    GitSignatureState["NoUser"] = "NO_USER";
    /** Unknown signature type */
    GitSignatureState["UnknownSigType"] = "UNKNOWN_SIG_TYPE";
    /** Unsigned */
    GitSignatureState["Unsigned"] = "UNSIGNED";
    /** Internal error - the GPG verification service is unavailable at the moment */
    GitSignatureState["GpgverifyUnavailable"] = "GPGVERIFY_UNAVAILABLE";
    /** Internal error - the GPG verification service misbehaved */
    GitSignatureState["GpgverifyError"] = "GPGVERIFY_ERROR";
    /** The usage flags for the key that signed this don't allow signing */
    GitSignatureState["NotSigningKey"] = "NOT_SIGNING_KEY";
    /** Signing key expired */
    GitSignatureState["ExpiredKey"] = "EXPIRED_KEY";
    /** Valid signature, pending certificate revocation checking */
    GitSignatureState["OcspPending"] = "OCSP_PENDING";
    /** Valid signature, though certificate revocation check failed */
    GitSignatureState["OcspError"] = "OCSP_ERROR";
    /** The signing certificate or its chain could not be verified */
    GitSignatureState["BadCert"] = "BAD_CERT";
    /** One or more certificates in chain has been revoked */
    GitSignatureState["OcspRevoked"] = "OCSP_REVOKED";
})(GitSignatureState = exports.GitSignatureState || (exports.GitSignatureState = {}));
/** The possible states in which authentication can be configured with an identity provider. */
var IdentityProviderConfigurationState;
(function (IdentityProviderConfigurationState) {
    /** Authentication with an identity provider is configured and enforced. */
    IdentityProviderConfigurationState["Enforced"] = "ENFORCED";
    /** Authentication with an identity provider is configured but not enforced. */
    IdentityProviderConfigurationState["Configured"] = "CONFIGURED";
    /** Authentication with an identity provider is not configured. */
    IdentityProviderConfigurationState["Unconfigured"] = "UNCONFIGURED";
})(IdentityProviderConfigurationState = exports.IdentityProviderConfigurationState || (exports.IdentityProviderConfigurationState = {}));
/** The possible values for the IP allow list enabled setting. */
var IpAllowListEnabledSettingValue;
(function (IpAllowListEnabledSettingValue) {
    /** The setting is enabled for the owner. */
    IpAllowListEnabledSettingValue["Enabled"] = "ENABLED";
    /** The setting is disabled for the owner. */
    IpAllowListEnabledSettingValue["Disabled"] = "DISABLED";
})(IpAllowListEnabledSettingValue = exports.IpAllowListEnabledSettingValue || (exports.IpAllowListEnabledSettingValue = {}));
/** Properties by which IP allow list entry connections can be ordered. */
var IpAllowListEntryOrderField;
(function (IpAllowListEntryOrderField) {
    /** Order IP allow list entries by creation time. */
    IpAllowListEntryOrderField["CreatedAt"] = "CREATED_AT";
    /** Order IP allow list entries by the allow list value. */
    IpAllowListEntryOrderField["AllowListValue"] = "ALLOW_LIST_VALUE";
})(IpAllowListEntryOrderField = exports.IpAllowListEntryOrderField || (exports.IpAllowListEntryOrderField = {}));
/** The possible values for the IP allow list configuration for installed GitHub Apps setting. */
var IpAllowListForInstalledAppsEnabledSettingValue;
(function (IpAllowListForInstalledAppsEnabledSettingValue) {
    /** The setting is enabled for the owner. */
    IpAllowListForInstalledAppsEnabledSettingValue["Enabled"] = "ENABLED";
    /** The setting is disabled for the owner. */
    IpAllowListForInstalledAppsEnabledSettingValue["Disabled"] = "DISABLED";
})(IpAllowListForInstalledAppsEnabledSettingValue = exports.IpAllowListForInstalledAppsEnabledSettingValue || (exports.IpAllowListForInstalledAppsEnabledSettingValue = {}));
/** Properties by which issue comment connections can be ordered. */
var IssueCommentOrderField;
(function (IssueCommentOrderField) {
    /** Order issue comments by update time */
    IssueCommentOrderField["UpdatedAt"] = "UPDATED_AT";
})(IssueCommentOrderField = exports.IssueCommentOrderField || (exports.IssueCommentOrderField = {}));
/** Properties by which issue connections can be ordered. */
var IssueOrderField;
(function (IssueOrderField) {
    /** Order issues by creation time */
    IssueOrderField["CreatedAt"] = "CREATED_AT";
    /** Order issues by update time */
    IssueOrderField["UpdatedAt"] = "UPDATED_AT";
    /** Order issues by comment count */
    IssueOrderField["Comments"] = "COMMENTS";
})(IssueOrderField = exports.IssueOrderField || (exports.IssueOrderField = {}));
/** The possible states of an issue. */
var IssueState;
(function (IssueState) {
    /** An issue that is still open */
    IssueState["Open"] = "OPEN";
    /** An issue that has been closed */
    IssueState["Closed"] = "CLOSED";
})(IssueState = exports.IssueState || (exports.IssueState = {}));
/** The possible item types found in a timeline. */
var IssueTimelineItemsItemType;
(function (IssueTimelineItemsItemType) {
    /** Represents a comment on an Issue. */
    IssueTimelineItemsItemType["IssueComment"] = "ISSUE_COMMENT";
    /** Represents a mention made by one issue or pull request to another. */
    IssueTimelineItemsItemType["CrossReferencedEvent"] = "CROSS_REFERENCED_EVENT";
    /** Represents a 'added_to_project' event on a given issue or pull request. */
    IssueTimelineItemsItemType["AddedToProjectEvent"] = "ADDED_TO_PROJECT_EVENT";
    /** Represents an 'assigned' event on any assignable object. */
    IssueTimelineItemsItemType["AssignedEvent"] = "ASSIGNED_EVENT";
    /** Represents a 'closed' event on any `Closable`. */
    IssueTimelineItemsItemType["ClosedEvent"] = "CLOSED_EVENT";
    /** Represents a 'comment_deleted' event on a given issue or pull request. */
    IssueTimelineItemsItemType["CommentDeletedEvent"] = "COMMENT_DELETED_EVENT";
    /** Represents a 'connected' event on a given issue or pull request. */
    IssueTimelineItemsItemType["ConnectedEvent"] = "CONNECTED_EVENT";
    /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
    IssueTimelineItemsItemType["ConvertedNoteToIssueEvent"] = "CONVERTED_NOTE_TO_ISSUE_EVENT";
    /** Represents a 'demilestoned' event on a given issue or pull request. */
    IssueTimelineItemsItemType["DemilestonedEvent"] = "DEMILESTONED_EVENT";
    /** Represents a 'disconnected' event on a given issue or pull request. */
    IssueTimelineItemsItemType["DisconnectedEvent"] = "DISCONNECTED_EVENT";
    /** Represents a 'labeled' event on a given issue or pull request. */
    IssueTimelineItemsItemType["LabeledEvent"] = "LABELED_EVENT";
    /** Represents a 'locked' event on a given issue or pull request. */
    IssueTimelineItemsItemType["LockedEvent"] = "LOCKED_EVENT";
    /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
    IssueTimelineItemsItemType["MarkedAsDuplicateEvent"] = "MARKED_AS_DUPLICATE_EVENT";
    /** Represents a 'mentioned' event on a given issue or pull request. */
    IssueTimelineItemsItemType["MentionedEvent"] = "MENTIONED_EVENT";
    /** Represents a 'milestoned' event on a given issue or pull request. */
    IssueTimelineItemsItemType["MilestonedEvent"] = "MILESTONED_EVENT";
    /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
    IssueTimelineItemsItemType["MovedColumnsInProjectEvent"] = "MOVED_COLUMNS_IN_PROJECT_EVENT";
    /** Represents a 'pinned' event on a given issue or pull request. */
    IssueTimelineItemsItemType["PinnedEvent"] = "PINNED_EVENT";
    /** Represents a 'referenced' event on a given `ReferencedSubject`. */
    IssueTimelineItemsItemType["ReferencedEvent"] = "REFERENCED_EVENT";
    /** Represents a 'removed_from_project' event on a given issue or pull request. */
    IssueTimelineItemsItemType["RemovedFromProjectEvent"] = "REMOVED_FROM_PROJECT_EVENT";
    /** Represents a 'renamed' event on a given issue or pull request */
    IssueTimelineItemsItemType["RenamedTitleEvent"] = "RENAMED_TITLE_EVENT";
    /** Represents a 'reopened' event on any `Closable`. */
    IssueTimelineItemsItemType["ReopenedEvent"] = "REOPENED_EVENT";
    /** Represents a 'subscribed' event on a given `Subscribable`. */
    IssueTimelineItemsItemType["SubscribedEvent"] = "SUBSCRIBED_EVENT";
    /** Represents a 'transferred' event on a given issue or pull request. */
    IssueTimelineItemsItemType["TransferredEvent"] = "TRANSFERRED_EVENT";
    /** Represents an 'unassigned' event on any assignable object. */
    IssueTimelineItemsItemType["UnassignedEvent"] = "UNASSIGNED_EVENT";
    /** Represents an 'unlabeled' event on a given issue or pull request. */
    IssueTimelineItemsItemType["UnlabeledEvent"] = "UNLABELED_EVENT";
    /** Represents an 'unlocked' event on a given issue or pull request. */
    IssueTimelineItemsItemType["UnlockedEvent"] = "UNLOCKED_EVENT";
    /** Represents a 'user_blocked' event on a given user. */
    IssueTimelineItemsItemType["UserBlockedEvent"] = "USER_BLOCKED_EVENT";
    /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
    IssueTimelineItemsItemType["UnmarkedAsDuplicateEvent"] = "UNMARKED_AS_DUPLICATE_EVENT";
    /** Represents an 'unpinned' event on a given issue or pull request. */
    IssueTimelineItemsItemType["UnpinnedEvent"] = "UNPINNED_EVENT";
    /** Represents an 'unsubscribed' event on a given `Subscribable`. */
    IssueTimelineItemsItemType["UnsubscribedEvent"] = "UNSUBSCRIBED_EVENT";
})(IssueTimelineItemsItemType = exports.IssueTimelineItemsItemType || (exports.IssueTimelineItemsItemType = {}));
/** Properties by which label connections can be ordered. */
var LabelOrderField;
(function (LabelOrderField) {
    /** Order labels by name  */
    LabelOrderField["Name"] = "NAME";
    /** Order labels by creation time */
    LabelOrderField["CreatedAt"] = "CREATED_AT";
})(LabelOrderField = exports.LabelOrderField || (exports.LabelOrderField = {}));
/** Properties by which language connections can be ordered. */
var LanguageOrderField;
(function (LanguageOrderField) {
    /** Order languages by the size of all files containing the language */
    LanguageOrderField["Size"] = "SIZE";
})(LanguageOrderField = exports.LanguageOrderField || (exports.LanguageOrderField = {}));
/** The possible reasons that an issue or pull request was locked. */
var LockReason;
(function (LockReason) {
    /** The issue or pull request was locked because the conversation was off-topic. */
    LockReason["OffTopic"] = "OFF_TOPIC";
    /** The issue or pull request was locked because the conversation was too heated. */
    LockReason["TooHeated"] = "TOO_HEATED";
    /** The issue or pull request was locked because the conversation was resolved. */
    LockReason["Resolved"] = "RESOLVED";
    /** The issue or pull request was locked because the conversation was spam. */
    LockReason["Spam"] = "SPAM";
})(LockReason = exports.LockReason || (exports.LockReason = {}));
/** Whether or not a PullRequest can be merged. */
var MergeableState;
(function (MergeableState) {
    /** The pull request can be merged. */
    MergeableState["Mergeable"] = "MERGEABLE";
    /** The pull request cannot be merged due to merge conflicts. */
    MergeableState["Conflicting"] = "CONFLICTING";
    /** The mergeability of the pull request is still being calculated. */
    MergeableState["Unknown"] = "UNKNOWN";
})(MergeableState = exports.MergeableState || (exports.MergeableState = {}));
/** Properties by which milestone connections can be ordered. */
var MilestoneOrderField;
(function (MilestoneOrderField) {
    /** Order milestones by when they are due. */
    MilestoneOrderField["DueDate"] = "DUE_DATE";
    /** Order milestones by when they were created. */
    MilestoneOrderField["CreatedAt"] = "CREATED_AT";
    /** Order milestones by when they were last updated. */
    MilestoneOrderField["UpdatedAt"] = "UPDATED_AT";
    /** Order milestones by their number. */
    MilestoneOrderField["Number"] = "NUMBER";
})(MilestoneOrderField = exports.MilestoneOrderField || (exports.MilestoneOrderField = {}));
/** The possible states of a milestone. */
var MilestoneState;
(function (MilestoneState) {
    /** A milestone that is still open. */
    MilestoneState["Open"] = "OPEN";
    /** A milestone that has been closed. */
    MilestoneState["Closed"] = "CLOSED";
})(MilestoneState = exports.MilestoneState || (exports.MilestoneState = {}));
/** The possible values for the notification restriction setting. */
var NotificationRestrictionSettingValue;
(function (NotificationRestrictionSettingValue) {
    /** The setting is enabled for the owner. */
    NotificationRestrictionSettingValue["Enabled"] = "ENABLED";
    /** The setting is disabled for the owner. */
    NotificationRestrictionSettingValue["Disabled"] = "DISABLED";
})(NotificationRestrictionSettingValue = exports.NotificationRestrictionSettingValue || (exports.NotificationRestrictionSettingValue = {}));
/** The state of an OAuth Application when it was created. */
var OauthApplicationCreateAuditEntryState;
(function (OauthApplicationCreateAuditEntryState) {
    /** The OAuth Application was active and allowed to have OAuth Accesses. */
    OauthApplicationCreateAuditEntryState["Active"] = "ACTIVE";
    /** The OAuth Application was suspended from generating OAuth Accesses due to abuse or security concerns. */
    OauthApplicationCreateAuditEntryState["Suspended"] = "SUSPENDED";
    /** The OAuth Application was in the process of being deleted. */
    OauthApplicationCreateAuditEntryState["PendingDeletion"] = "PENDING_DELETION";
})(OauthApplicationCreateAuditEntryState = exports.OauthApplicationCreateAuditEntryState || (exports.OauthApplicationCreateAuditEntryState = {}));
/** The corresponding operation type for the action */
var OperationType;
(function (OperationType) {
    /** An existing resource was accessed */
    OperationType["Access"] = "ACCESS";
    /** A resource performed an authentication event */
    OperationType["Authentication"] = "AUTHENTICATION";
    /** A new resource was created */
    OperationType["Create"] = "CREATE";
    /** An existing resource was modified */
    OperationType["Modify"] = "MODIFY";
    /** An existing resource was removed */
    OperationType["Remove"] = "REMOVE";
    /** An existing resource was restored */
    OperationType["Restore"] = "RESTORE";
    /** An existing resource was transferred between multiple resources */
    OperationType["Transfer"] = "TRANSFER";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
var OrderDirection;
(function (OrderDirection) {
    /** Specifies an ascending order for a given `orderBy` argument. */
    OrderDirection["Asc"] = "ASC";
    /** Specifies a descending order for a given `orderBy` argument. */
    OrderDirection["Desc"] = "DESC";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
/** The permissions available to members on an Organization. */
var OrgAddMemberAuditEntryPermission;
(function (OrgAddMemberAuditEntryPermission) {
    /** Can read and clone repositories. */
    OrgAddMemberAuditEntryPermission["Read"] = "READ";
    /** Can read, clone, push, and add collaborators to repositories. */
    OrgAddMemberAuditEntryPermission["Admin"] = "ADMIN";
})(OrgAddMemberAuditEntryPermission = exports.OrgAddMemberAuditEntryPermission || (exports.OrgAddMemberAuditEntryPermission = {}));
/** The billing plans available for organizations. */
var OrgCreateAuditEntryBillingPlan;
(function (OrgCreateAuditEntryBillingPlan) {
    /** Free Plan */
    OrgCreateAuditEntryBillingPlan["Free"] = "FREE";
    /** Team Plan */
    OrgCreateAuditEntryBillingPlan["Business"] = "BUSINESS";
    /** Enterprise Cloud Plan */
    OrgCreateAuditEntryBillingPlan["BusinessPlus"] = "BUSINESS_PLUS";
    /** Legacy Unlimited Plan */
    OrgCreateAuditEntryBillingPlan["Unlimited"] = "UNLIMITED";
    /** Tiered Per Seat Plan */
    OrgCreateAuditEntryBillingPlan["TieredPerSeat"] = "TIERED_PER_SEAT";
})(OrgCreateAuditEntryBillingPlan = exports.OrgCreateAuditEntryBillingPlan || (exports.OrgCreateAuditEntryBillingPlan = {}));
/** The reason a billing manager was removed from an Organization. */
var OrgRemoveBillingManagerAuditEntryReason;
(function (OrgRemoveBillingManagerAuditEntryReason) {
    /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
    OrgRemoveBillingManagerAuditEntryReason["TwoFactorRequirementNonCompliance"] = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";
    /** SAML external identity missing */
    OrgRemoveBillingManagerAuditEntryReason["SamlExternalIdentityMissing"] = "SAML_EXTERNAL_IDENTITY_MISSING";
    /** SAML SSO enforcement requires an external identity */
    OrgRemoveBillingManagerAuditEntryReason["SamlSsoEnforcementRequiresExternalIdentity"] = "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY";
})(OrgRemoveBillingManagerAuditEntryReason = exports.OrgRemoveBillingManagerAuditEntryReason || (exports.OrgRemoveBillingManagerAuditEntryReason = {}));
/** The type of membership a user has with an Organization. */
var OrgRemoveMemberAuditEntryMembershipType;
(function (OrgRemoveMemberAuditEntryMembershipType) {
    /** A direct member is a user that is a member of the Organization. */
    OrgRemoveMemberAuditEntryMembershipType["DirectMember"] = "DIRECT_MEMBER";
    /** Organization administrators have full access and can change several settings, including the names of repositories that belong to the Organization and Owners team membership. In addition, organization admins can delete the organization and all of its repositories. */
    OrgRemoveMemberAuditEntryMembershipType["Admin"] = "ADMIN";
    /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
    OrgRemoveMemberAuditEntryMembershipType["BillingManager"] = "BILLING_MANAGER";
    /** An unaffiliated collaborator is a person who is not a member of the Organization and does not have access to any repositories in the Organization. */
    OrgRemoveMemberAuditEntryMembershipType["Unaffiliated"] = "UNAFFILIATED";
    /** An outside collaborator is a person who isn't explicitly a member of the Organization, but who has Read, Write, or Admin permissions to one or more repositories in the organization. */
    OrgRemoveMemberAuditEntryMembershipType["OutsideCollaborator"] = "OUTSIDE_COLLABORATOR";
})(OrgRemoveMemberAuditEntryMembershipType = exports.OrgRemoveMemberAuditEntryMembershipType || (exports.OrgRemoveMemberAuditEntryMembershipType = {}));
/** The reason a member was removed from an Organization. */
var OrgRemoveMemberAuditEntryReason;
(function (OrgRemoveMemberAuditEntryReason) {
    /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
    OrgRemoveMemberAuditEntryReason["TwoFactorRequirementNonCompliance"] = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";
    /** SAML external identity missing */
    OrgRemoveMemberAuditEntryReason["SamlExternalIdentityMissing"] = "SAML_EXTERNAL_IDENTITY_MISSING";
    /** SAML SSO enforcement requires an external identity */
    OrgRemoveMemberAuditEntryReason["SamlSsoEnforcementRequiresExternalIdentity"] = "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY";
    /** User account has been deleted */
    OrgRemoveMemberAuditEntryReason["UserAccountDeleted"] = "USER_ACCOUNT_DELETED";
    /** User was removed from organization during account recovery */
    OrgRemoveMemberAuditEntryReason["TwoFactorAccountRecovery"] = "TWO_FACTOR_ACCOUNT_RECOVERY";
})(OrgRemoveMemberAuditEntryReason = exports.OrgRemoveMemberAuditEntryReason || (exports.OrgRemoveMemberAuditEntryReason = {}));
/** The type of membership a user has with an Organization. */
var OrgRemoveOutsideCollaboratorAuditEntryMembershipType;
(function (OrgRemoveOutsideCollaboratorAuditEntryMembershipType) {
    /** An outside collaborator is a person who isn't explicitly a member of the Organization, but who has Read, Write, or Admin permissions to one or more repositories in the organization. */
    OrgRemoveOutsideCollaboratorAuditEntryMembershipType["OutsideCollaborator"] = "OUTSIDE_COLLABORATOR";
    /** An unaffiliated collaborator is a person who is not a member of the Organization and does not have access to any repositories in the organization. */
    OrgRemoveOutsideCollaboratorAuditEntryMembershipType["Unaffiliated"] = "UNAFFILIATED";
    /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
    OrgRemoveOutsideCollaboratorAuditEntryMembershipType["BillingManager"] = "BILLING_MANAGER";
})(OrgRemoveOutsideCollaboratorAuditEntryMembershipType = exports.OrgRemoveOutsideCollaboratorAuditEntryMembershipType || (exports.OrgRemoveOutsideCollaboratorAuditEntryMembershipType = {}));
/** The reason an outside collaborator was removed from an Organization. */
var OrgRemoveOutsideCollaboratorAuditEntryReason;
(function (OrgRemoveOutsideCollaboratorAuditEntryReason) {
    /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
    OrgRemoveOutsideCollaboratorAuditEntryReason["TwoFactorRequirementNonCompliance"] = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE";
    /** SAML external identity missing */
    OrgRemoveOutsideCollaboratorAuditEntryReason["SamlExternalIdentityMissing"] = "SAML_EXTERNAL_IDENTITY_MISSING";
})(OrgRemoveOutsideCollaboratorAuditEntryReason = exports.OrgRemoveOutsideCollaboratorAuditEntryReason || (exports.OrgRemoveOutsideCollaboratorAuditEntryReason = {}));
/** The default permission a repository can have in an Organization. */
var OrgUpdateDefaultRepositoryPermissionAuditEntryPermission;
(function (OrgUpdateDefaultRepositoryPermissionAuditEntryPermission) {
    /** Can read and clone repositories. */
    OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["Read"] = "READ";
    /** Can read, clone and push to repositories. */
    OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["Write"] = "WRITE";
    /** Can read, clone, push, and add collaborators to repositories. */
    OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["Admin"] = "ADMIN";
    /** No default permission value. */
    OrgUpdateDefaultRepositoryPermissionAuditEntryPermission["None"] = "NONE";
})(OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = exports.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission || (exports.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = {}));
/** The permissions available to members on an Organization. */
var OrgUpdateMemberAuditEntryPermission;
(function (OrgUpdateMemberAuditEntryPermission) {
    /** Can read and clone repositories. */
    OrgUpdateMemberAuditEntryPermission["Read"] = "READ";
    /** Can read, clone, push, and add collaborators to repositories. */
    OrgUpdateMemberAuditEntryPermission["Admin"] = "ADMIN";
})(OrgUpdateMemberAuditEntryPermission = exports.OrgUpdateMemberAuditEntryPermission || (exports.OrgUpdateMemberAuditEntryPermission = {}));
/** The permissions available for repository creation on an Organization. */
var OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility;
(function (OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility) {
    /** All organization members are restricted from creating any repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["All"] = "ALL";
    /** All organization members are restricted from creating public repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["Public"] = "PUBLIC";
    /** All organization members are allowed to create any repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["None"] = "NONE";
    /** All organization members are restricted from creating private repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["Private"] = "PRIVATE";
    /** All organization members are restricted from creating internal repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["Internal"] = "INTERNAL";
    /** All organization members are restricted from creating public or internal repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["PublicInternal"] = "PUBLIC_INTERNAL";
    /** All organization members are restricted from creating private or internal repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["PrivateInternal"] = "PRIVATE_INTERNAL";
    /** All organization members are restricted from creating public or private repositories. */
    OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility["PublicPrivate"] = "PUBLIC_PRIVATE";
})(OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = exports.OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility || (exports.OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = {}));
/** The possible organization invitation roles. */
var OrganizationInvitationRole;
(function (OrganizationInvitationRole) {
    /** The user is invited to be a direct member of the organization. */
    OrganizationInvitationRole["DirectMember"] = "DIRECT_MEMBER";
    /** The user is invited to be an admin of the organization. */
    OrganizationInvitationRole["Admin"] = "ADMIN";
    /** The user is invited to be a billing manager of the organization. */
    OrganizationInvitationRole["BillingManager"] = "BILLING_MANAGER";
    /** The user's previous role will be reinstated. */
    OrganizationInvitationRole["Reinstate"] = "REINSTATE";
})(OrganizationInvitationRole = exports.OrganizationInvitationRole || (exports.OrganizationInvitationRole = {}));
/** The possible organization invitation types. */
var OrganizationInvitationType;
(function (OrganizationInvitationType) {
    /** The invitation was to an existing user. */
    OrganizationInvitationType["User"] = "USER";
    /** The invitation was to an email address. */
    OrganizationInvitationType["Email"] = "EMAIL";
})(OrganizationInvitationType = exports.OrganizationInvitationType || (exports.OrganizationInvitationType = {}));
/** The possible roles within an organization for its members. */
var OrganizationMemberRole;
(function (OrganizationMemberRole) {
    /** The user is a member of the organization. */
    OrganizationMemberRole["Member"] = "MEMBER";
    /** The user is an administrator of the organization. */
    OrganizationMemberRole["Admin"] = "ADMIN";
})(OrganizationMemberRole = exports.OrganizationMemberRole || (exports.OrganizationMemberRole = {}));
/** The possible values for the members can create repositories setting on an organization. */
var OrganizationMembersCanCreateRepositoriesSettingValue;
(function (OrganizationMembersCanCreateRepositoriesSettingValue) {
    /** Members will be able to create public and private repositories. */
    OrganizationMembersCanCreateRepositoriesSettingValue["All"] = "ALL";
    /** Members will be able to create only private repositories. */
    OrganizationMembersCanCreateRepositoriesSettingValue["Private"] = "PRIVATE";
    /** Members will not be able to create public or private repositories. */
    OrganizationMembersCanCreateRepositoriesSettingValue["Disabled"] = "DISABLED";
})(OrganizationMembersCanCreateRepositoriesSettingValue = exports.OrganizationMembersCanCreateRepositoriesSettingValue || (exports.OrganizationMembersCanCreateRepositoriesSettingValue = {}));
/** Properties by which organization connections can be ordered. */
var OrganizationOrderField;
(function (OrganizationOrderField) {
    /** Order organizations by creation time */
    OrganizationOrderField["CreatedAt"] = "CREATED_AT";
    /** Order organizations by login */
    OrganizationOrderField["Login"] = "LOGIN";
})(OrganizationOrderField = exports.OrganizationOrderField || (exports.OrganizationOrderField = {}));
/** Properties by which package file connections can be ordered. */
var PackageFileOrderField;
(function (PackageFileOrderField) {
    /** Order package files by creation time */
    PackageFileOrderField["CreatedAt"] = "CREATED_AT";
})(PackageFileOrderField = exports.PackageFileOrderField || (exports.PackageFileOrderField = {}));
/** Properties by which package connections can be ordered. */
var PackageOrderField;
(function (PackageOrderField) {
    /** Order packages by creation time */
    PackageOrderField["CreatedAt"] = "CREATED_AT";
})(PackageOrderField = exports.PackageOrderField || (exports.PackageOrderField = {}));
/** The possible types of a package. */
var PackageType;
(function (PackageType) {
    /** An npm package. */
    PackageType["Npm"] = "NPM";
    /** A rubygems package. */
    PackageType["Rubygems"] = "RUBYGEMS";
    /** A maven package. */
    PackageType["Maven"] = "MAVEN";
    /** A docker image. */
    PackageType["Docker"] = "DOCKER";
    /** A debian package. */
    PackageType["Debian"] = "DEBIAN";
    /** A nuget package. */
    PackageType["Nuget"] = "NUGET";
    /** A python package. */
    PackageType["Pypi"] = "PYPI";
})(PackageType = exports.PackageType || (exports.PackageType = {}));
/** Properties by which package version connections can be ordered. */
var PackageVersionOrderField;
(function (PackageVersionOrderField) {
    /** Order package versions by creation time */
    PackageVersionOrderField["CreatedAt"] = "CREATED_AT";
})(PackageVersionOrderField = exports.PackageVersionOrderField || (exports.PackageVersionOrderField = {}));
/** Represents items that can be pinned to a profile page or dashboard. */
var PinnableItemType;
(function (PinnableItemType) {
    /** A repository. */
    PinnableItemType["Repository"] = "REPOSITORY";
    /** A gist. */
    PinnableItemType["Gist"] = "GIST";
    /** An issue. */
    PinnableItemType["Issue"] = "ISSUE";
    /** A project. */
    PinnableItemType["Project"] = "PROJECT";
    /** A pull request. */
    PinnableItemType["PullRequest"] = "PULL_REQUEST";
    /** A user. */
    PinnableItemType["User"] = "USER";
    /** An organization. */
    PinnableItemType["Organization"] = "ORGANIZATION";
    /** A team. */
    PinnableItemType["Team"] = "TEAM";
})(PinnableItemType = exports.PinnableItemType || (exports.PinnableItemType = {}));
/** Preconfigured gradients that may be used to style discussions pinned within a repository. */
var PinnedDiscussionGradient;
(function (PinnedDiscussionGradient) {
    /** A gradient of red to orange */
    PinnedDiscussionGradient["RedOrange"] = "RED_ORANGE";
    /** A gradient of blue to mint */
    PinnedDiscussionGradient["BlueMint"] = "BLUE_MINT";
    /** A gradient of blue to purple */
    PinnedDiscussionGradient["BluePurple"] = "BLUE_PURPLE";
    /** A gradient of pink to blue */
    PinnedDiscussionGradient["PinkBlue"] = "PINK_BLUE";
    /** A gradient of purple to coral */
    PinnedDiscussionGradient["PurpleCoral"] = "PURPLE_CORAL";
})(PinnedDiscussionGradient = exports.PinnedDiscussionGradient || (exports.PinnedDiscussionGradient = {}));
/** Preconfigured background patterns that may be used to style discussions pinned within a repository. */
var PinnedDiscussionPattern;
(function (PinnedDiscussionPattern) {
    /** A solid dot pattern */
    PinnedDiscussionPattern["DotFill"] = "DOT_FILL";
    /** A plus sign pattern */
    PinnedDiscussionPattern["Plus"] = "PLUS";
    /** A lightning bolt pattern */
    PinnedDiscussionPattern["Zap"] = "ZAP";
    /** An upward-facing chevron pattern */
    PinnedDiscussionPattern["ChevronUp"] = "CHEVRON_UP";
    /** A hollow dot pattern */
    PinnedDiscussionPattern["Dot"] = "DOT";
    /** A heart pattern */
    PinnedDiscussionPattern["HeartFill"] = "HEART_FILL";
})(PinnedDiscussionPattern = exports.PinnedDiscussionPattern || (exports.PinnedDiscussionPattern = {}));
/** The possible archived states of a project card. */
var ProjectCardArchivedState;
(function (ProjectCardArchivedState) {
    /** A project card that is archived */
    ProjectCardArchivedState["Archived"] = "ARCHIVED";
    /** A project card that is not archived */
    ProjectCardArchivedState["NotArchived"] = "NOT_ARCHIVED";
})(ProjectCardArchivedState = exports.ProjectCardArchivedState || (exports.ProjectCardArchivedState = {}));
/** Various content states of a ProjectCard */
var ProjectCardState;
(function (ProjectCardState) {
    /** The card has content only. */
    ProjectCardState["ContentOnly"] = "CONTENT_ONLY";
    /** The card has a note only. */
    ProjectCardState["NoteOnly"] = "NOTE_ONLY";
    /** The card is redacted. */
    ProjectCardState["Redacted"] = "REDACTED";
})(ProjectCardState = exports.ProjectCardState || (exports.ProjectCardState = {}));
/** The semantic purpose of the column - todo, in progress, or done. */
var ProjectColumnPurpose;
(function (ProjectColumnPurpose) {
    /** The column contains cards still to be worked on */
    ProjectColumnPurpose["Todo"] = "TODO";
    /** The column contains cards which are currently being worked on */
    ProjectColumnPurpose["InProgress"] = "IN_PROGRESS";
    /** The column contains cards which are complete */
    ProjectColumnPurpose["Done"] = "DONE";
})(ProjectColumnPurpose = exports.ProjectColumnPurpose || (exports.ProjectColumnPurpose = {}));
/** Properties by which project connections can be ordered. */
var ProjectOrderField;
(function (ProjectOrderField) {
    /** Order projects by creation time */
    ProjectOrderField["CreatedAt"] = "CREATED_AT";
    /** Order projects by update time */
    ProjectOrderField["UpdatedAt"] = "UPDATED_AT";
    /** Order projects by name */
    ProjectOrderField["Name"] = "NAME";
})(ProjectOrderField = exports.ProjectOrderField || (exports.ProjectOrderField = {}));
/** State of the project; either 'open' or 'closed' */
var ProjectState;
(function (ProjectState) {
    /** The project is open. */
    ProjectState["Open"] = "OPEN";
    /** The project is closed. */
    ProjectState["Closed"] = "CLOSED";
})(ProjectState = exports.ProjectState || (exports.ProjectState = {}));
/** GitHub-provided templates for Projects */
var ProjectTemplate;
(function (ProjectTemplate) {
    /** Create a board with columns for To do, In progress and Done. */
    ProjectTemplate["BasicKanban"] = "BASIC_KANBAN";
    /** Create a board with v2 triggers to automatically move cards across To do, In progress and Done columns. */
    ProjectTemplate["AutomatedKanbanV2"] = "AUTOMATED_KANBAN_V2";
    /** Create a board with triggers to automatically move cards across columns with review automation. */
    ProjectTemplate["AutomatedReviewsKanban"] = "AUTOMATED_REVIEWS_KANBAN";
    /** Create a board to triage and prioritize bugs with To do, priority, and Done columns. */
    ProjectTemplate["BugTriage"] = "BUG_TRIAGE";
})(ProjectTemplate = exports.ProjectTemplate || (exports.ProjectTemplate = {}));
/** Represents available types of methods to use when merging a pull request. */
var PullRequestMergeMethod;
(function (PullRequestMergeMethod) {
    /** Add all commits from the head branch to the base branch with a merge commit. */
    PullRequestMergeMethod["Merge"] = "MERGE";
    /** Combine all commits from the head branch into a single commit in the base branch. */
    PullRequestMergeMethod["Squash"] = "SQUASH";
    /** Add all commits from the head branch onto the base branch individually. */
    PullRequestMergeMethod["Rebase"] = "REBASE";
})(PullRequestMergeMethod = exports.PullRequestMergeMethod || (exports.PullRequestMergeMethod = {}));
/** Properties by which pull_requests connections can be ordered. */
var PullRequestOrderField;
(function (PullRequestOrderField) {
    /** Order pull_requests by creation time */
    PullRequestOrderField["CreatedAt"] = "CREATED_AT";
    /** Order pull_requests by update time */
    PullRequestOrderField["UpdatedAt"] = "UPDATED_AT";
})(PullRequestOrderField = exports.PullRequestOrderField || (exports.PullRequestOrderField = {}));
/** The possible states of a pull request review comment. */
var PullRequestReviewCommentState;
(function (PullRequestReviewCommentState) {
    /** A comment that is part of a pending review */
    PullRequestReviewCommentState["Pending"] = "PENDING";
    /** A comment that is part of a submitted review */
    PullRequestReviewCommentState["Submitted"] = "SUBMITTED";
})(PullRequestReviewCommentState = exports.PullRequestReviewCommentState || (exports.PullRequestReviewCommentState = {}));
/** The review status of a pull request. */
var PullRequestReviewDecision;
(function (PullRequestReviewDecision) {
    /** Changes have been requested on the pull request. */
    PullRequestReviewDecision["ChangesRequested"] = "CHANGES_REQUESTED";
    /** The pull request has received an approving review. */
    PullRequestReviewDecision["Approved"] = "APPROVED";
    /** A review is required before the pull request can be merged. */
    PullRequestReviewDecision["ReviewRequired"] = "REVIEW_REQUIRED";
})(PullRequestReviewDecision = exports.PullRequestReviewDecision || (exports.PullRequestReviewDecision = {}));
/** The possible events to perform on a pull request review. */
var PullRequestReviewEvent;
(function (PullRequestReviewEvent) {
    /** Submit general feedback without explicit approval. */
    PullRequestReviewEvent["Comment"] = "COMMENT";
    /** Submit feedback and approve merging these changes. */
    PullRequestReviewEvent["Approve"] = "APPROVE";
    /** Submit feedback that must be addressed before merging. */
    PullRequestReviewEvent["RequestChanges"] = "REQUEST_CHANGES";
    /** Dismiss review so it now longer effects merging. */
    PullRequestReviewEvent["Dismiss"] = "DISMISS";
})(PullRequestReviewEvent = exports.PullRequestReviewEvent || (exports.PullRequestReviewEvent = {}));
/** The possible states of a pull request review. */
var PullRequestReviewState;
(function (PullRequestReviewState) {
    /** A review that has not yet been submitted. */
    PullRequestReviewState["Pending"] = "PENDING";
    /** An informational review. */
    PullRequestReviewState["Commented"] = "COMMENTED";
    /** A review allowing the pull request to merge. */
    PullRequestReviewState["Approved"] = "APPROVED";
    /** A review blocking the pull request from merging. */
    PullRequestReviewState["ChangesRequested"] = "CHANGES_REQUESTED";
    /** A review that has been dismissed. */
    PullRequestReviewState["Dismissed"] = "DISMISSED";
})(PullRequestReviewState = exports.PullRequestReviewState || (exports.PullRequestReviewState = {}));
/** The possible states of a pull request. */
var PullRequestState;
(function (PullRequestState) {
    /** A pull request that is still open. */
    PullRequestState["Open"] = "OPEN";
    /** A pull request that has been closed without being merged. */
    PullRequestState["Closed"] = "CLOSED";
    /** A pull request that has been closed by being merged. */
    PullRequestState["Merged"] = "MERGED";
})(PullRequestState = exports.PullRequestState || (exports.PullRequestState = {}));
/** The possible item types found in a timeline. */
var PullRequestTimelineItemsItemType;
(function (PullRequestTimelineItemsItemType) {
    /** Represents a Git commit part of a pull request. */
    PullRequestTimelineItemsItemType["PullRequestCommit"] = "PULL_REQUEST_COMMIT";
    /** Represents a commit comment thread part of a pull request. */
    PullRequestTimelineItemsItemType["PullRequestCommitCommentThread"] = "PULL_REQUEST_COMMIT_COMMENT_THREAD";
    /** A review object for a given pull request. */
    PullRequestTimelineItemsItemType["PullRequestReview"] = "PULL_REQUEST_REVIEW";
    /** A threaded list of comments for a given pull request. */
    PullRequestTimelineItemsItemType["PullRequestReviewThread"] = "PULL_REQUEST_REVIEW_THREAD";
    /** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
    PullRequestTimelineItemsItemType["PullRequestRevisionMarker"] = "PULL_REQUEST_REVISION_MARKER";
    /** Represents a 'automatic_base_change_failed' event on a given pull request. */
    PullRequestTimelineItemsItemType["AutomaticBaseChangeFailedEvent"] = "AUTOMATIC_BASE_CHANGE_FAILED_EVENT";
    /** Represents a 'automatic_base_change_succeeded' event on a given pull request. */
    PullRequestTimelineItemsItemType["AutomaticBaseChangeSucceededEvent"] = "AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT";
    /** Represents a 'auto_merge_disabled' event on a given pull request. */
    PullRequestTimelineItemsItemType["AutoMergeDisabledEvent"] = "AUTO_MERGE_DISABLED_EVENT";
    /** Represents a 'auto_merge_enabled' event on a given pull request. */
    PullRequestTimelineItemsItemType["AutoMergeEnabledEvent"] = "AUTO_MERGE_ENABLED_EVENT";
    /** Represents a 'auto_rebase_enabled' event on a given pull request. */
    PullRequestTimelineItemsItemType["AutoRebaseEnabledEvent"] = "AUTO_REBASE_ENABLED_EVENT";
    /** Represents a 'auto_squash_enabled' event on a given pull request. */
    PullRequestTimelineItemsItemType["AutoSquashEnabledEvent"] = "AUTO_SQUASH_ENABLED_EVENT";
    /** Represents a 'base_ref_changed' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["BaseRefChangedEvent"] = "BASE_REF_CHANGED_EVENT";
    /** Represents a 'base_ref_force_pushed' event on a given pull request. */
    PullRequestTimelineItemsItemType["BaseRefForcePushedEvent"] = "BASE_REF_FORCE_PUSHED_EVENT";
    /** Represents a 'base_ref_deleted' event on a given pull request. */
    PullRequestTimelineItemsItemType["BaseRefDeletedEvent"] = "BASE_REF_DELETED_EVENT";
    /** Represents a 'deployed' event on a given pull request. */
    PullRequestTimelineItemsItemType["DeployedEvent"] = "DEPLOYED_EVENT";
    /** Represents a 'deployment_environment_changed' event on a given pull request. */
    PullRequestTimelineItemsItemType["DeploymentEnvironmentChangedEvent"] = "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT";
    /** Represents a 'head_ref_deleted' event on a given pull request. */
    PullRequestTimelineItemsItemType["HeadRefDeletedEvent"] = "HEAD_REF_DELETED_EVENT";
    /** Represents a 'head_ref_force_pushed' event on a given pull request. */
    PullRequestTimelineItemsItemType["HeadRefForcePushedEvent"] = "HEAD_REF_FORCE_PUSHED_EVENT";
    /** Represents a 'head_ref_restored' event on a given pull request. */
    PullRequestTimelineItemsItemType["HeadRefRestoredEvent"] = "HEAD_REF_RESTORED_EVENT";
    /** Represents a 'merged' event on a given pull request. */
    PullRequestTimelineItemsItemType["MergedEvent"] = "MERGED_EVENT";
    /** Represents a 'review_dismissed' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["ReviewDismissedEvent"] = "REVIEW_DISMISSED_EVENT";
    /** Represents an 'review_requested' event on a given pull request. */
    PullRequestTimelineItemsItemType["ReviewRequestedEvent"] = "REVIEW_REQUESTED_EVENT";
    /** Represents an 'review_request_removed' event on a given pull request. */
    PullRequestTimelineItemsItemType["ReviewRequestRemovedEvent"] = "REVIEW_REQUEST_REMOVED_EVENT";
    /** Represents a 'ready_for_review' event on a given pull request. */
    PullRequestTimelineItemsItemType["ReadyForReviewEvent"] = "READY_FOR_REVIEW_EVENT";
    /** Represents a 'convert_to_draft' event on a given pull request. */
    PullRequestTimelineItemsItemType["ConvertToDraftEvent"] = "CONVERT_TO_DRAFT_EVENT";
    /** Represents a comment on an Issue. */
    PullRequestTimelineItemsItemType["IssueComment"] = "ISSUE_COMMENT";
    /** Represents a mention made by one issue or pull request to another. */
    PullRequestTimelineItemsItemType["CrossReferencedEvent"] = "CROSS_REFERENCED_EVENT";
    /** Represents a 'added_to_project' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["AddedToProjectEvent"] = "ADDED_TO_PROJECT_EVENT";
    /** Represents an 'assigned' event on any assignable object. */
    PullRequestTimelineItemsItemType["AssignedEvent"] = "ASSIGNED_EVENT";
    /** Represents a 'closed' event on any `Closable`. */
    PullRequestTimelineItemsItemType["ClosedEvent"] = "CLOSED_EVENT";
    /** Represents a 'comment_deleted' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["CommentDeletedEvent"] = "COMMENT_DELETED_EVENT";
    /** Represents a 'connected' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["ConnectedEvent"] = "CONNECTED_EVENT";
    /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["ConvertedNoteToIssueEvent"] = "CONVERTED_NOTE_TO_ISSUE_EVENT";
    /** Represents a 'demilestoned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["DemilestonedEvent"] = "DEMILESTONED_EVENT";
    /** Represents a 'disconnected' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["DisconnectedEvent"] = "DISCONNECTED_EVENT";
    /** Represents a 'labeled' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["LabeledEvent"] = "LABELED_EVENT";
    /** Represents a 'locked' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["LockedEvent"] = "LOCKED_EVENT";
    /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["MarkedAsDuplicateEvent"] = "MARKED_AS_DUPLICATE_EVENT";
    /** Represents a 'mentioned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["MentionedEvent"] = "MENTIONED_EVENT";
    /** Represents a 'milestoned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["MilestonedEvent"] = "MILESTONED_EVENT";
    /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["MovedColumnsInProjectEvent"] = "MOVED_COLUMNS_IN_PROJECT_EVENT";
    /** Represents a 'pinned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["PinnedEvent"] = "PINNED_EVENT";
    /** Represents a 'referenced' event on a given `ReferencedSubject`. */
    PullRequestTimelineItemsItemType["ReferencedEvent"] = "REFERENCED_EVENT";
    /** Represents a 'removed_from_project' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["RemovedFromProjectEvent"] = "REMOVED_FROM_PROJECT_EVENT";
    /** Represents a 'renamed' event on a given issue or pull request */
    PullRequestTimelineItemsItemType["RenamedTitleEvent"] = "RENAMED_TITLE_EVENT";
    /** Represents a 'reopened' event on any `Closable`. */
    PullRequestTimelineItemsItemType["ReopenedEvent"] = "REOPENED_EVENT";
    /** Represents a 'subscribed' event on a given `Subscribable`. */
    PullRequestTimelineItemsItemType["SubscribedEvent"] = "SUBSCRIBED_EVENT";
    /** Represents a 'transferred' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["TransferredEvent"] = "TRANSFERRED_EVENT";
    /** Represents an 'unassigned' event on any assignable object. */
    PullRequestTimelineItemsItemType["UnassignedEvent"] = "UNASSIGNED_EVENT";
    /** Represents an 'unlabeled' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["UnlabeledEvent"] = "UNLABELED_EVENT";
    /** Represents an 'unlocked' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["UnlockedEvent"] = "UNLOCKED_EVENT";
    /** Represents a 'user_blocked' event on a given user. */
    PullRequestTimelineItemsItemType["UserBlockedEvent"] = "USER_BLOCKED_EVENT";
    /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["UnmarkedAsDuplicateEvent"] = "UNMARKED_AS_DUPLICATE_EVENT";
    /** Represents an 'unpinned' event on a given issue or pull request. */
    PullRequestTimelineItemsItemType["UnpinnedEvent"] = "UNPINNED_EVENT";
    /** Represents an 'unsubscribed' event on a given `Subscribable`. */
    PullRequestTimelineItemsItemType["UnsubscribedEvent"] = "UNSUBSCRIBED_EVENT";
})(PullRequestTimelineItemsItemType = exports.PullRequestTimelineItemsItemType || (exports.PullRequestTimelineItemsItemType = {}));
/** The possible target states when updating a pull request. */
var PullRequestUpdateState;
(function (PullRequestUpdateState) {
    /** A pull request that is still open. */
    PullRequestUpdateState["Open"] = "OPEN";
    /** A pull request that has been closed without being merged. */
    PullRequestUpdateState["Closed"] = "CLOSED";
})(PullRequestUpdateState = exports.PullRequestUpdateState || (exports.PullRequestUpdateState = {}));
/** Emojis that can be attached to Issues, Pull Requests and Comments. */
var ReactionContent;
(function (ReactionContent) {
    /** Represents the `:+1:` emoji. */
    ReactionContent["ThumbsUp"] = "THUMBS_UP";
    /** Represents the `:-1:` emoji. */
    ReactionContent["ThumbsDown"] = "THUMBS_DOWN";
    /** Represents the `:laugh:` emoji. */
    ReactionContent["Laugh"] = "LAUGH";
    /** Represents the `:hooray:` emoji. */
    ReactionContent["Hooray"] = "HOORAY";
    /** Represents the `:confused:` emoji. */
    ReactionContent["Confused"] = "CONFUSED";
    /** Represents the `:heart:` emoji. */
    ReactionContent["Heart"] = "HEART";
    /** Represents the `:rocket:` emoji. */
    ReactionContent["Rocket"] = "ROCKET";
    /** Represents the `:eyes:` emoji. */
    ReactionContent["Eyes"] = "EYES";
})(ReactionContent = exports.ReactionContent || (exports.ReactionContent = {}));
/** A list of fields that reactions can be ordered by. */
var ReactionOrderField;
(function (ReactionOrderField) {
    /** Allows ordering a list of reactions by when they were created. */
    ReactionOrderField["CreatedAt"] = "CREATED_AT";
})(ReactionOrderField = exports.ReactionOrderField || (exports.ReactionOrderField = {}));
/** Properties by which ref connections can be ordered. */
var RefOrderField;
(function (RefOrderField) {
    /** Order refs by underlying commit date if the ref prefix is refs/tags/ */
    RefOrderField["TagCommitDate"] = "TAG_COMMIT_DATE";
    /** Order refs by their alphanumeric name */
    RefOrderField["Alphabetical"] = "ALPHABETICAL";
})(RefOrderField = exports.RefOrderField || (exports.RefOrderField = {}));
/** Properties by which release connections can be ordered. */
var ReleaseOrderField;
(function (ReleaseOrderField) {
    /** Order releases by creation time */
    ReleaseOrderField["CreatedAt"] = "CREATED_AT";
    /** Order releases alphabetically by name */
    ReleaseOrderField["Name"] = "NAME";
})(ReleaseOrderField = exports.ReleaseOrderField || (exports.ReleaseOrderField = {}));
/** The privacy of a repository */
var RepoAccessAuditEntryVisibility;
(function (RepoAccessAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoAccessAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoAccessAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoAccessAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoAccessAuditEntryVisibility = exports.RepoAccessAuditEntryVisibility || (exports.RepoAccessAuditEntryVisibility = {}));
/** The privacy of a repository */
var RepoAddMemberAuditEntryVisibility;
(function (RepoAddMemberAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoAddMemberAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoAddMemberAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoAddMemberAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoAddMemberAuditEntryVisibility = exports.RepoAddMemberAuditEntryVisibility || (exports.RepoAddMemberAuditEntryVisibility = {}));
/** The privacy of a repository */
var RepoArchivedAuditEntryVisibility;
(function (RepoArchivedAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoArchivedAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoArchivedAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoArchivedAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoArchivedAuditEntryVisibility = exports.RepoArchivedAuditEntryVisibility || (exports.RepoArchivedAuditEntryVisibility = {}));
/** The merge options available for pull requests to this repository. */
var RepoChangeMergeSettingAuditEntryMergeType;
(function (RepoChangeMergeSettingAuditEntryMergeType) {
    /** The pull request is added to the base branch in a merge commit. */
    RepoChangeMergeSettingAuditEntryMergeType["Merge"] = "MERGE";
    /** Commits from the pull request are added onto the base branch individually without a merge commit. */
    RepoChangeMergeSettingAuditEntryMergeType["Rebase"] = "REBASE";
    /** The pull request's commits are squashed into a single commit before they are merged to the base branch. */
    RepoChangeMergeSettingAuditEntryMergeType["Squash"] = "SQUASH";
})(RepoChangeMergeSettingAuditEntryMergeType = exports.RepoChangeMergeSettingAuditEntryMergeType || (exports.RepoChangeMergeSettingAuditEntryMergeType = {}));
/** The privacy of a repository */
var RepoCreateAuditEntryVisibility;
(function (RepoCreateAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoCreateAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoCreateAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoCreateAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoCreateAuditEntryVisibility = exports.RepoCreateAuditEntryVisibility || (exports.RepoCreateAuditEntryVisibility = {}));
/** The privacy of a repository */
var RepoDestroyAuditEntryVisibility;
(function (RepoDestroyAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoDestroyAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoDestroyAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoDestroyAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoDestroyAuditEntryVisibility = exports.RepoDestroyAuditEntryVisibility || (exports.RepoDestroyAuditEntryVisibility = {}));
/** The privacy of a repository */
var RepoRemoveMemberAuditEntryVisibility;
(function (RepoRemoveMemberAuditEntryVisibility) {
    /** The repository is visible only to users in the same business. */
    RepoRemoveMemberAuditEntryVisibility["Internal"] = "INTERNAL";
    /** The repository is visible only to those with explicit access. */
    RepoRemoveMemberAuditEntryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepoRemoveMemberAuditEntryVisibility["Public"] = "PUBLIC";
})(RepoRemoveMemberAuditEntryVisibility = exports.RepoRemoveMemberAuditEntryVisibility || (exports.RepoRemoveMemberAuditEntryVisibility = {}));
/** The reasons a piece of content can be reported or minimized. */
var ReportedContentClassifiers;
(function (ReportedContentClassifiers) {
    /** A spammy piece of content */
    ReportedContentClassifiers["Spam"] = "SPAM";
    /** An abusive or harassing piece of content */
    ReportedContentClassifiers["Abuse"] = "ABUSE";
    /** An irrelevant piece of content */
    ReportedContentClassifiers["OffTopic"] = "OFF_TOPIC";
    /** An outdated piece of content */
    ReportedContentClassifiers["Outdated"] = "OUTDATED";
    /** A duplicated piece of content */
    ReportedContentClassifiers["Duplicate"] = "DUPLICATE";
    /** The content has been resolved */
    ReportedContentClassifiers["Resolved"] = "RESOLVED";
})(ReportedContentClassifiers = exports.ReportedContentClassifiers || (exports.ReportedContentClassifiers = {}));
/** The affiliation of a user to a repository */
var RepositoryAffiliation;
(function (RepositoryAffiliation) {
    /** Repositories that are owned by the authenticated user. */
    RepositoryAffiliation["Owner"] = "OWNER";
    /** Repositories that the user has been added to as a collaborator. */
    RepositoryAffiliation["Collaborator"] = "COLLABORATOR";
    /** Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on. */
    RepositoryAffiliation["OrganizationMember"] = "ORGANIZATION_MEMBER";
})(RepositoryAffiliation = exports.RepositoryAffiliation || (exports.RepositoryAffiliation = {}));
/** The reason a repository is listed as 'contributed'. */
var RepositoryContributionType;
(function (RepositoryContributionType) {
    /** Created a commit */
    RepositoryContributionType["Commit"] = "COMMIT";
    /** Created an issue */
    RepositoryContributionType["Issue"] = "ISSUE";
    /** Created a pull request */
    RepositoryContributionType["PullRequest"] = "PULL_REQUEST";
    /** Created the repository */
    RepositoryContributionType["Repository"] = "REPOSITORY";
    /** Reviewed a pull request */
    RepositoryContributionType["PullRequestReview"] = "PULL_REQUEST_REVIEW";
})(RepositoryContributionType = exports.RepositoryContributionType || (exports.RepositoryContributionType = {}));
/** A repository interaction limit. */
var RepositoryInteractionLimit;
(function (RepositoryInteractionLimit) {
    /** Users that have recently created their account will be unable to interact with the repository. */
    RepositoryInteractionLimit["ExistingUsers"] = "EXISTING_USERS";
    /** Users that have not previously committed to a repository’s default branch will be unable to interact with the repository. */
    RepositoryInteractionLimit["ContributorsOnly"] = "CONTRIBUTORS_ONLY";
    /** Users that are not collaborators will not be able to interact with the repository. */
    RepositoryInteractionLimit["CollaboratorsOnly"] = "COLLABORATORS_ONLY";
    /** No interaction limits are enabled. */
    RepositoryInteractionLimit["NoLimit"] = "NO_LIMIT";
})(RepositoryInteractionLimit = exports.RepositoryInteractionLimit || (exports.RepositoryInteractionLimit = {}));
/** The length for a repository interaction limit to be enabled for. */
var RepositoryInteractionLimitExpiry;
(function (RepositoryInteractionLimitExpiry) {
    /** The interaction limit will expire after 1 day. */
    RepositoryInteractionLimitExpiry["OneDay"] = "ONE_DAY";
    /** The interaction limit will expire after 3 days. */
    RepositoryInteractionLimitExpiry["ThreeDays"] = "THREE_DAYS";
    /** The interaction limit will expire after 1 week. */
    RepositoryInteractionLimitExpiry["OneWeek"] = "ONE_WEEK";
    /** The interaction limit will expire after 1 month. */
    RepositoryInteractionLimitExpiry["OneMonth"] = "ONE_MONTH";
    /** The interaction limit will expire after 6 months. */
    RepositoryInteractionLimitExpiry["SixMonths"] = "SIX_MONTHS";
})(RepositoryInteractionLimitExpiry = exports.RepositoryInteractionLimitExpiry || (exports.RepositoryInteractionLimitExpiry = {}));
/** Indicates where an interaction limit is configured. */
var RepositoryInteractionLimitOrigin;
(function (RepositoryInteractionLimitOrigin) {
    /** A limit that is configured at the repository level. */
    RepositoryInteractionLimitOrigin["Repository"] = "REPOSITORY";
    /** A limit that is configured at the organization level. */
    RepositoryInteractionLimitOrigin["Organization"] = "ORGANIZATION";
    /** A limit that is configured at the user-wide level. */
    RepositoryInteractionLimitOrigin["User"] = "USER";
})(RepositoryInteractionLimitOrigin = exports.RepositoryInteractionLimitOrigin || (exports.RepositoryInteractionLimitOrigin = {}));
/** Properties by which repository invitation connections can be ordered. */
var RepositoryInvitationOrderField;
(function (RepositoryInvitationOrderField) {
    /** Order repository invitations by creation time */
    RepositoryInvitationOrderField["CreatedAt"] = "CREATED_AT";
    /** Order repository invitations by invitee login */
    RepositoryInvitationOrderField["InviteeLogin"] = "INVITEE_LOGIN";
})(RepositoryInvitationOrderField = exports.RepositoryInvitationOrderField || (exports.RepositoryInvitationOrderField = {}));
/** The possible reasons a given repository could be in a locked state. */
var RepositoryLockReason;
(function (RepositoryLockReason) {
    /** The repository is locked due to a move. */
    RepositoryLockReason["Moving"] = "MOVING";
    /** The repository is locked due to a billing related reason. */
    RepositoryLockReason["Billing"] = "BILLING";
    /** The repository is locked due to a rename. */
    RepositoryLockReason["Rename"] = "RENAME";
    /** The repository is locked due to a migration. */
    RepositoryLockReason["Migrating"] = "MIGRATING";
})(RepositoryLockReason = exports.RepositoryLockReason || (exports.RepositoryLockReason = {}));
/** Properties by which repository connections can be ordered. */
var RepositoryOrderField;
(function (RepositoryOrderField) {
    /** Order repositories by creation time */
    RepositoryOrderField["CreatedAt"] = "CREATED_AT";
    /** Order repositories by update time */
    RepositoryOrderField["UpdatedAt"] = "UPDATED_AT";
    /** Order repositories by push time */
    RepositoryOrderField["PushedAt"] = "PUSHED_AT";
    /** Order repositories by name */
    RepositoryOrderField["Name"] = "NAME";
    /** Order repositories by number of stargazers */
    RepositoryOrderField["Stargazers"] = "STARGAZERS";
})(RepositoryOrderField = exports.RepositoryOrderField || (exports.RepositoryOrderField = {}));
/** The access level to a repository */
var RepositoryPermission;
(function (RepositoryPermission) {
    /** Can read, clone, and push to this repository. Can also manage issues, pull requests, and repository settings, including adding collaborators */
    RepositoryPermission["Admin"] = "ADMIN";
    /** Can read, clone, and push to this repository. They can also manage issues, pull requests, and some repository settings */
    RepositoryPermission["Maintain"] = "MAINTAIN";
    /** Can read, clone, and push to this repository. Can also manage issues and pull requests */
    RepositoryPermission["Write"] = "WRITE";
    /** Can read and clone this repository. Can also manage issues and pull requests */
    RepositoryPermission["Triage"] = "TRIAGE";
    /** Can read and clone this repository. Can also open and comment on issues and pull requests */
    RepositoryPermission["Read"] = "READ";
})(RepositoryPermission = exports.RepositoryPermission || (exports.RepositoryPermission = {}));
/** The privacy of a repository */
var RepositoryPrivacy;
(function (RepositoryPrivacy) {
    /** Public */
    RepositoryPrivacy["Public"] = "PUBLIC";
    /** Private */
    RepositoryPrivacy["Private"] = "PRIVATE";
})(RepositoryPrivacy = exports.RepositoryPrivacy || (exports.RepositoryPrivacy = {}));
/** The repository's visibility level. */
var RepositoryVisibility;
(function (RepositoryVisibility) {
    /** The repository is visible only to those with explicit access. */
    RepositoryVisibility["Private"] = "PRIVATE";
    /** The repository is visible to everyone. */
    RepositoryVisibility["Public"] = "PUBLIC";
    /** The repository is visible only to users in the same business. */
    RepositoryVisibility["Internal"] = "INTERNAL";
})(RepositoryVisibility = exports.RepositoryVisibility || (exports.RepositoryVisibility = {}));
/** The possible states that can be requested when creating a check run. */
var RequestableCheckStatusState;
(function (RequestableCheckStatusState) {
    /** The check suite or run has been queued. */
    RequestableCheckStatusState["Queued"] = "QUEUED";
    /** The check suite or run is in progress. */
    RequestableCheckStatusState["InProgress"] = "IN_PROGRESS";
    /** The check suite or run has been completed. */
    RequestableCheckStatusState["Completed"] = "COMPLETED";
    /** The check suite or run is in waiting state. */
    RequestableCheckStatusState["Waiting"] = "WAITING";
    /** The check suite or run is in pending state. */
    RequestableCheckStatusState["Pending"] = "PENDING";
})(RequestableCheckStatusState = exports.RequestableCheckStatusState || (exports.RequestableCheckStatusState = {}));
/** The possible digest algorithms used to sign SAML requests for an identity provider. */
var SamlDigestAlgorithm;
(function (SamlDigestAlgorithm) {
    /** SHA1 */
    SamlDigestAlgorithm["Sha1"] = "SHA1";
    /** SHA256 */
    SamlDigestAlgorithm["Sha256"] = "SHA256";
    /** SHA384 */
    SamlDigestAlgorithm["Sha384"] = "SHA384";
    /** SHA512 */
    SamlDigestAlgorithm["Sha512"] = "SHA512";
})(SamlDigestAlgorithm = exports.SamlDigestAlgorithm || (exports.SamlDigestAlgorithm = {}));
/** The possible signature algorithms used to sign SAML requests for a Identity Provider. */
var SamlSignatureAlgorithm;
(function (SamlSignatureAlgorithm) {
    /** RSA-SHA1 */
    SamlSignatureAlgorithm["RsaSha1"] = "RSA_SHA1";
    /** RSA-SHA256 */
    SamlSignatureAlgorithm["RsaSha256"] = "RSA_SHA256";
    /** RSA-SHA384 */
    SamlSignatureAlgorithm["RsaSha384"] = "RSA_SHA384";
    /** RSA-SHA512 */
    SamlSignatureAlgorithm["RsaSha512"] = "RSA_SHA512";
})(SamlSignatureAlgorithm = exports.SamlSignatureAlgorithm || (exports.SamlSignatureAlgorithm = {}));
/** Properties by which saved reply connections can be ordered. */
var SavedReplyOrderField;
(function (SavedReplyOrderField) {
    /** Order saved reply by when they were updated. */
    SavedReplyOrderField["UpdatedAt"] = "UPDATED_AT";
})(SavedReplyOrderField = exports.SavedReplyOrderField || (exports.SavedReplyOrderField = {}));
/** Represents the individual results of a search. */
var SearchType;
(function (SearchType) {
    /** Returns results matching issues in repositories. */
    SearchType["Issue"] = "ISSUE";
    /** Returns results matching repositories. */
    SearchType["Repository"] = "REPOSITORY";
    /** Returns results matching users and organizations on GitHub. */
    SearchType["User"] = "USER";
    /** Returns matching discussions in repositories. */
    SearchType["Discussion"] = "DISCUSSION";
})(SearchType = exports.SearchType || (exports.SearchType = {}));
/** The possible ecosystems of a security vulnerability's package. */
var SecurityAdvisoryEcosystem;
(function (SecurityAdvisoryEcosystem) {
    /** PHP packages hosted at packagist.org */
    SecurityAdvisoryEcosystem["Composer"] = "COMPOSER";
    /** Go modules */
    SecurityAdvisoryEcosystem["Go"] = "GO";
    /** Java artifacts hosted at the Maven central repository */
    SecurityAdvisoryEcosystem["Maven"] = "MAVEN";
    /** JavaScript packages hosted at npmjs.com */
    SecurityAdvisoryEcosystem["Npm"] = "NPM";
    /** .NET packages hosted at the NuGet Gallery */
    SecurityAdvisoryEcosystem["Nuget"] = "NUGET";
    /** Python packages hosted at PyPI.org */
    SecurityAdvisoryEcosystem["Pip"] = "PIP";
    /** Ruby gems hosted at RubyGems.org */
    SecurityAdvisoryEcosystem["Rubygems"] = "RUBYGEMS";
    /** Applications, runtimes, operating systems and other kinds of software */
    SecurityAdvisoryEcosystem["Other"] = "OTHER";
})(SecurityAdvisoryEcosystem = exports.SecurityAdvisoryEcosystem || (exports.SecurityAdvisoryEcosystem = {}));
/** Identifier formats available for advisories. */
var SecurityAdvisoryIdentifierType;
(function (SecurityAdvisoryIdentifierType) {
    /** Common Vulnerabilities and Exposures Identifier. */
    SecurityAdvisoryIdentifierType["Cve"] = "CVE";
    /** GitHub Security Advisory ID. */
    SecurityAdvisoryIdentifierType["Ghsa"] = "GHSA";
})(SecurityAdvisoryIdentifierType = exports.SecurityAdvisoryIdentifierType || (exports.SecurityAdvisoryIdentifierType = {}));
/** Properties by which security advisory connections can be ordered. */
var SecurityAdvisoryOrderField;
(function (SecurityAdvisoryOrderField) {
    /** Order advisories by publication time */
    SecurityAdvisoryOrderField["PublishedAt"] = "PUBLISHED_AT";
    /** Order advisories by update time */
    SecurityAdvisoryOrderField["UpdatedAt"] = "UPDATED_AT";
})(SecurityAdvisoryOrderField = exports.SecurityAdvisoryOrderField || (exports.SecurityAdvisoryOrderField = {}));
/** Severity of the vulnerability. */
var SecurityAdvisorySeverity;
(function (SecurityAdvisorySeverity) {
    /** Low. */
    SecurityAdvisorySeverity["Low"] = "LOW";
    /** Moderate. */
    SecurityAdvisorySeverity["Moderate"] = "MODERATE";
    /** High. */
    SecurityAdvisorySeverity["High"] = "HIGH";
    /** Critical. */
    SecurityAdvisorySeverity["Critical"] = "CRITICAL";
})(SecurityAdvisorySeverity = exports.SecurityAdvisorySeverity || (exports.SecurityAdvisorySeverity = {}));
/** Properties by which security vulnerability connections can be ordered. */
var SecurityVulnerabilityOrderField;
(function (SecurityVulnerabilityOrderField) {
    /** Order vulnerability by update time */
    SecurityVulnerabilityOrderField["UpdatedAt"] = "UPDATED_AT";
})(SecurityVulnerabilityOrderField = exports.SecurityVulnerabilityOrderField || (exports.SecurityVulnerabilityOrderField = {}));
/** Properties by which sponsorable connections can be ordered. */
var SponsorableOrderField;
(function (SponsorableOrderField) {
    /** Order sponsorable entities by login (username). */
    SponsorableOrderField["Login"] = "LOGIN";
})(SponsorableOrderField = exports.SponsorableOrderField || (exports.SponsorableOrderField = {}));
/** The different kinds of goals a GitHub Sponsors member can have. */
var SponsorsGoalKind;
(function (SponsorsGoalKind) {
    /** The goal is about reaching a certain number of sponsors. */
    SponsorsGoalKind["TotalSponsorsCount"] = "TOTAL_SPONSORS_COUNT";
    /** The goal is about getting a certain dollar amount from sponsorships each month. */
    SponsorsGoalKind["MonthlySponsorshipAmount"] = "MONTHLY_SPONSORSHIP_AMOUNT";
})(SponsorsGoalKind = exports.SponsorsGoalKind || (exports.SponsorsGoalKind = {}));
/** Properties by which Sponsors tiers connections can be ordered. */
var SponsorsTierOrderField;
(function (SponsorsTierOrderField) {
    /** Order tiers by creation time. */
    SponsorsTierOrderField["CreatedAt"] = "CREATED_AT";
    /** Order tiers by their monthly price in cents */
    SponsorsTierOrderField["MonthlyPriceInCents"] = "MONTHLY_PRICE_IN_CENTS";
})(SponsorsTierOrderField = exports.SponsorsTierOrderField || (exports.SponsorsTierOrderField = {}));
/** Properties by which sponsorship connections can be ordered. */
var SponsorshipOrderField;
(function (SponsorshipOrderField) {
    /** Order sponsorship by creation time. */
    SponsorshipOrderField["CreatedAt"] = "CREATED_AT";
})(SponsorshipOrderField = exports.SponsorshipOrderField || (exports.SponsorshipOrderField = {}));
/** The privacy of a sponsorship */
var SponsorshipPrivacy;
(function (SponsorshipPrivacy) {
    /** Public */
    SponsorshipPrivacy["Public"] = "PUBLIC";
    /** Private */
    SponsorshipPrivacy["Private"] = "PRIVATE";
})(SponsorshipPrivacy = exports.SponsorshipPrivacy || (exports.SponsorshipPrivacy = {}));
/** Properties by which star connections can be ordered. */
var StarOrderField;
(function (StarOrderField) {
    /** Allows ordering a list of stars by when they were created. */
    StarOrderField["StarredAt"] = "STARRED_AT";
})(StarOrderField = exports.StarOrderField || (exports.StarOrderField = {}));
/** The possible commit status states. */
var StatusState;
(function (StatusState) {
    /** Status is expected. */
    StatusState["Expected"] = "EXPECTED";
    /** Status is errored. */
    StatusState["Error"] = "ERROR";
    /** Status is failing. */
    StatusState["Failure"] = "FAILURE";
    /** Status is pending. */
    StatusState["Pending"] = "PENDING";
    /** Status is successful. */
    StatusState["Success"] = "SUCCESS";
})(StatusState = exports.StatusState || (exports.StatusState = {}));
/** The possible states of a subscription. */
var SubscriptionState;
(function (SubscriptionState) {
    /** The User is only notified when participating or @mentioned. */
    SubscriptionState["Unsubscribed"] = "UNSUBSCRIBED";
    /** The User is notified of all conversations. */
    SubscriptionState["Subscribed"] = "SUBSCRIBED";
    /** The User is never notified. */
    SubscriptionState["Ignored"] = "IGNORED";
})(SubscriptionState = exports.SubscriptionState || (exports.SubscriptionState = {}));
/** Properties by which team discussion comment connections can be ordered. */
var TeamDiscussionCommentOrderField;
(function (TeamDiscussionCommentOrderField) {
    /** Allows sequential ordering of team discussion comments (which is equivalent to chronological ordering). */
    TeamDiscussionCommentOrderField["Number"] = "NUMBER";
})(TeamDiscussionCommentOrderField = exports.TeamDiscussionCommentOrderField || (exports.TeamDiscussionCommentOrderField = {}));
/** Properties by which team discussion connections can be ordered. */
var TeamDiscussionOrderField;
(function (TeamDiscussionOrderField) {
    /** Allows chronological ordering of team discussions. */
    TeamDiscussionOrderField["CreatedAt"] = "CREATED_AT";
})(TeamDiscussionOrderField = exports.TeamDiscussionOrderField || (exports.TeamDiscussionOrderField = {}));
/** Properties by which team member connections can be ordered. */
var TeamMemberOrderField;
(function (TeamMemberOrderField) {
    /** Order team members by login */
    TeamMemberOrderField["Login"] = "LOGIN";
    /** Order team members by creation time */
    TeamMemberOrderField["CreatedAt"] = "CREATED_AT";
})(TeamMemberOrderField = exports.TeamMemberOrderField || (exports.TeamMemberOrderField = {}));
/** The possible team member roles; either 'maintainer' or 'member'. */
var TeamMemberRole;
(function (TeamMemberRole) {
    /** A team maintainer has permission to add and remove team members. */
    TeamMemberRole["Maintainer"] = "MAINTAINER";
    /** A team member has no administrative permissions on the team. */
    TeamMemberRole["Member"] = "MEMBER";
})(TeamMemberRole = exports.TeamMemberRole || (exports.TeamMemberRole = {}));
/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
var TeamMembershipType;
(function (TeamMembershipType) {
    /** Includes only immediate members of the team. */
    TeamMembershipType["Immediate"] = "IMMEDIATE";
    /** Includes only child team members for the team. */
    TeamMembershipType["ChildTeam"] = "CHILD_TEAM";
    /** Includes immediate and child team members for the team. */
    TeamMembershipType["All"] = "ALL";
})(TeamMembershipType = exports.TeamMembershipType || (exports.TeamMembershipType = {}));
/** Properties by which team connections can be ordered. */
var TeamOrderField;
(function (TeamOrderField) {
    /** Allows ordering a list of teams by name. */
    TeamOrderField["Name"] = "NAME";
})(TeamOrderField = exports.TeamOrderField || (exports.TeamOrderField = {}));
/** The possible team privacy values. */
var TeamPrivacy;
(function (TeamPrivacy) {
    /** A secret team can only be seen by its members. */
    TeamPrivacy["Secret"] = "SECRET";
    /** A visible team can be seen and @mentioned by every member of the organization. */
    TeamPrivacy["Visible"] = "VISIBLE";
})(TeamPrivacy = exports.TeamPrivacy || (exports.TeamPrivacy = {}));
/** Properties by which team repository connections can be ordered. */
var TeamRepositoryOrderField;
(function (TeamRepositoryOrderField) {
    /** Order repositories by creation time */
    TeamRepositoryOrderField["CreatedAt"] = "CREATED_AT";
    /** Order repositories by update time */
    TeamRepositoryOrderField["UpdatedAt"] = "UPDATED_AT";
    /** Order repositories by push time */
    TeamRepositoryOrderField["PushedAt"] = "PUSHED_AT";
    /** Order repositories by name */
    TeamRepositoryOrderField["Name"] = "NAME";
    /** Order repositories by permission */
    TeamRepositoryOrderField["Permission"] = "PERMISSION";
    /** Order repositories by number of stargazers */
    TeamRepositoryOrderField["Stargazers"] = "STARGAZERS";
})(TeamRepositoryOrderField = exports.TeamRepositoryOrderField || (exports.TeamRepositoryOrderField = {}));
/** The role of a user on a team. */
var TeamRole;
(function (TeamRole) {
    /** User has admin rights on the team. */
    TeamRole["Admin"] = "ADMIN";
    /** User is a member of the team. */
    TeamRole["Member"] = "MEMBER";
})(TeamRole = exports.TeamRole || (exports.TeamRole = {}));
/** Reason that the suggested topic is declined. */
var TopicSuggestionDeclineReason;
(function (TopicSuggestionDeclineReason) {
    /** The suggested topic is not relevant to the repository. */
    TopicSuggestionDeclineReason["NotRelevant"] = "NOT_RELEVANT";
    /** The suggested topic is too specific for the repository (e.g. #ruby-on-rails-version-4-2-1). */
    TopicSuggestionDeclineReason["TooSpecific"] = "TOO_SPECIFIC";
    /** The viewer does not like the suggested topic. */
    TopicSuggestionDeclineReason["PersonalPreference"] = "PERSONAL_PREFERENCE";
    /** The suggested topic is too general for the repository. */
    TopicSuggestionDeclineReason["TooGeneral"] = "TOO_GENERAL";
})(TopicSuggestionDeclineReason = exports.TopicSuggestionDeclineReason || (exports.TopicSuggestionDeclineReason = {}));
/** The possible durations that a user can be blocked for. */
var UserBlockDuration;
(function (UserBlockDuration) {
    /** The user was blocked for 1 day */
    UserBlockDuration["OneDay"] = "ONE_DAY";
    /** The user was blocked for 3 days */
    UserBlockDuration["ThreeDays"] = "THREE_DAYS";
    /** The user was blocked for 7 days */
    UserBlockDuration["OneWeek"] = "ONE_WEEK";
    /** The user was blocked for 30 days */
    UserBlockDuration["OneMonth"] = "ONE_MONTH";
    /** The user was blocked permanently */
    UserBlockDuration["Permanent"] = "PERMANENT";
})(UserBlockDuration = exports.UserBlockDuration || (exports.UserBlockDuration = {}));
/** Properties by which user status connections can be ordered. */
var UserStatusOrderField;
(function (UserStatusOrderField) {
    /** Order user statuses by when they were updated. */
    UserStatusOrderField["UpdatedAt"] = "UPDATED_AT";
})(UserStatusOrderField = exports.UserStatusOrderField || (exports.UserStatusOrderField = {}));
/** Properties by which verifiable domain connections can be ordered. */
var VerifiableDomainOrderField;
(function (VerifiableDomainOrderField) {
    /** Order verifiable domains by the domain name. */
    VerifiableDomainOrderField["Domain"] = "DOMAIN";
    /** Order verifiable domains by their creation date. */
    VerifiableDomainOrderField["CreatedAt"] = "CREATED_AT";
})(VerifiableDomainOrderField = exports.VerifiableDomainOrderField || (exports.VerifiableDomainOrderField = {}));


/***/ }),

/***/ 3109:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__webpack_require__(2186));
const prs_1 = __webpack_require__(8941);
const utils_1 = __webpack_require__(918);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (let i = 0; i < 5; ++i) {
                const pullRequests = yield prs_1.getPullRequests();
                pullRequests.forEach(({ number, mergeable }) => {
                    core.info(`${number} -> ${mergeable}`);
                });
                yield utils_1.sleep(1000);
            }
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();


/***/ }),

/***/ 3258:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.octokit = void 0;
const graphql_1 = __webpack_require__(8467);
const context_1 = __webpack_require__(3842);
exports.octokit = graphql_1.graphql.defaults({
    headers: {
        authorization: `token ${context_1.Context.token}`,
    },
});


/***/ }),

/***/ 8941:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPullRequests = void 0;
const core = __importStar(__webpack_require__(2186));
const json_to_graphql_query_1 = __webpack_require__(6450);
const context_1 = __webpack_require__(3842);
const graphql_1 = __webpack_require__(9088);
const octokit_1 = __webpack_require__(3258);
const utils_1 = __webpack_require__(918);
const getPullRequests = (cursor) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const request = {
        query: {
            repository: {
                __args: {
                    owner: context_1.Context.repo.owner,
                    name: context_1.Context.repo.repo,
                },
                pullRequests: {
                    __args: Object.assign({ first: 100, states: new json_to_graphql_query_1.EnumType(graphql_1.PullRequestState.Open) }, (cursor && { after: cursor })),
                    edges: {
                        node: {
                            id: true,
                            number: true,
                            mergeable: true,
                        },
                    },
                    pageInfo: {
                        endCursor: true,
                        hasNextPage: true,
                    },
                },
            },
        },
    };
    const { repository: { pullRequests: { edges, pageInfo: { hasNextPage, endCursor }, }, }, } = yield octokit_1.octokit(json_to_graphql_query_1.jsonToGraphQLQuery(request));
    core.info(JSON.stringify(edges, null, 2));
    const results = (_a = edges === null || edges === void 0 ? void 0 : edges.filter(utils_1.notEmpty).map(({ node }) => node).filter(utils_1.notEmpty)) !== null && _a !== void 0 ? _a : [];
    if (hasNextPage) {
        const recurse = yield exports.getPullRequests(endCursor);
        results.push(...recurse);
    }
    return results;
});
exports.getPullRequests = getPullRequests;


/***/ }),

/***/ 918:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sleep = exports.notEmpty = void 0;
const notEmpty = (value) => {
    return value !== null && value !== undefined;
};
exports.notEmpty = notEmpty;
const sleep = (ms) => __awaiter(void 0, void 0, void 0, function* () { return new Promise((resolve) => setTimeout(resolve, ms)); });
exports.sleep = sleep;


/***/ }),

/***/ 7351:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const os = __importStar(__webpack_require__(2087));
const utils_1 = __webpack_require__(5278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 2186:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const command_1 = __webpack_require__(7351);
const file_command_1 = __webpack_require__(717);
const utils_1 = __webpack_require__(5278);
const os = __importStar(__webpack_require__(2087));
const path = __importStar(__webpack_require__(5622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */
function error(message) {
    command_1.issue('error', message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */
function warning(message) {
    command_1.issue('warning', message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// For internal use, subject to change.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__webpack_require__(5747));
const os = __importStar(__webpack_require__(2087));
const utils_1 = __webpack_require__(5278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 5278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 4087:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Context = void 0;
const fs_1 = __webpack_require__(5747);
const os_1 = __webpack_require__(2087);
class Context {
    /**
     * Hydrate the context from the environment
     */
    constructor() {
        var _a, _b, _c;
        this.payload = {};
        if (process.env.GITHUB_EVENT_PATH) {
            if (fs_1.existsSync(process.env.GITHUB_EVENT_PATH)) {
                this.payload = JSON.parse(fs_1.readFileSync(process.env.GITHUB_EVENT_PATH, { encoding: 'utf8' }));
            }
            else {
                const path = process.env.GITHUB_EVENT_PATH;
                process.stdout.write(`GITHUB_EVENT_PATH ${path} does not exist${os_1.EOL}`);
            }
        }
        this.eventName = process.env.GITHUB_EVENT_NAME;
        this.sha = process.env.GITHUB_SHA;
        this.ref = process.env.GITHUB_REF;
        this.workflow = process.env.GITHUB_WORKFLOW;
        this.action = process.env.GITHUB_ACTION;
        this.actor = process.env.GITHUB_ACTOR;
        this.job = process.env.GITHUB_JOB;
        this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10);
        this.runId = parseInt(process.env.GITHUB_RUN_ID, 10);
        this.apiUrl = (_a = process.env.GITHUB_API_URL) !== null && _a !== void 0 ? _a : `https://api.github.com`;
        this.serverUrl = (_b = process.env.GITHUB_SERVER_URL) !== null && _b !== void 0 ? _b : `https://github.com`;
        this.graphqlUrl = (_c = process.env.GITHUB_GRAPHQL_URL) !== null && _c !== void 0 ? _c : `https://api.github.com/graphql`;
    }
    get issue() {
        const payload = this.payload;
        return Object.assign(Object.assign({}, this.repo), { number: (payload.issue || payload.pull_request || payload).number });
    }
    get repo() {
        if (process.env.GITHUB_REPOSITORY) {
            const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
            return { owner, repo };
        }
        if (this.payload.repository) {
            return {
                owner: this.payload.repository.owner.login,
                repo: this.payload.repository.name
            };
        }
        throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'");
    }
}
exports.Context = Context;
//# sourceMappingURL=context.js.map

/***/ }),

/***/ 5438:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOctokit = exports.context = void 0;
const Context = __importStar(__webpack_require__(4087));
const utils_1 = __webpack_require__(3030);
exports.context = new Context.Context();
/**
 * Returns a hydrated octokit ready to use for GitHub Actions
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */
function getOctokit(token, options) {
    return new utils_1.GitHub(utils_1.getOctokitOptions(token, options));
}
exports.getOctokit = getOctokit;
//# sourceMappingURL=github.js.map

/***/ }),

/***/ 7914:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getApiBaseUrl = exports.getProxyAgent = exports.getAuthString = void 0;
const httpClient = __importStar(__webpack_require__(9925));
function getAuthString(token, options) {
    if (!token && !options.auth) {
        throw new Error('Parameter token or opts.auth is required');
    }
    else if (token && options.auth) {
        throw new Error('Parameters token and opts.auth may not both be specified');
    }
    return typeof options.auth === 'string' ? options.auth : `token ${token}`;
}
exports.getAuthString = getAuthString;
function getProxyAgent(destinationUrl) {
    const hc = new httpClient.HttpClient();
    return hc.getAgent(destinationUrl);
}
exports.getProxyAgent = getProxyAgent;
function getApiBaseUrl() {
    return process.env['GITHUB_API_URL'] || 'https://api.github.com';
}
exports.getApiBaseUrl = getApiBaseUrl;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 3030:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOctokitOptions = exports.GitHub = exports.context = void 0;
const Context = __importStar(__webpack_require__(4087));
const Utils = __importStar(__webpack_require__(7914));
// octokit + plugins
const core_1 = __webpack_require__(6762);
const plugin_rest_endpoint_methods_1 = __webpack_require__(3044);
const plugin_paginate_rest_1 = __webpack_require__(4193);
exports.context = new Context.Context();
const baseUrl = Utils.getApiBaseUrl();
const defaults = {
    baseUrl,
    request: {
        agent: Utils.getProxyAgent(baseUrl)
    }
};
exports.GitHub = core_1.Octokit.plugin(plugin_rest_endpoint_methods_1.restEndpointMethods, plugin_paginate_rest_1.paginateRest).defaults(defaults);
/**
 * Convience function to correctly format Octokit Options to pass into the constructor.
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */
function getOctokitOptions(token, options) {
    const opts = Object.assign({}, options || {}); // Shallow clone - don't mutate the object provided by the caller
    // Auth
    const auth = Utils.getAuthString(token, opts);
    if (auth) {
        opts.auth = auth;
    }
    return opts;
}
exports.getOctokitOptions = getOctokitOptions;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 9925:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const http = __webpack_require__(8605);
const https = __webpack_require__(7211);
const pm = __webpack_require__(6443);
let tunnel;
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    let proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return new Promise(async (resolve, reject) => {
            let output = Buffer.alloc(0);
            this.message.on('data', (chunk) => {
                output = Buffer.concat([output, chunk]);
            });
            this.message.on('end', () => {
                resolve(output.toString());
            });
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    let parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
    }
    get(requestUrl, additionalHeaders) {
        return this.request('GET', requestUrl, null, additionalHeaders || {});
    }
    del(requestUrl, additionalHeaders) {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }
    post(requestUrl, data, additionalHeaders) {
        return this.request('POST', requestUrl, data, additionalHeaders || {});
    }
    patch(requestUrl, data, additionalHeaders) {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }
    put(requestUrl, data, additionalHeaders) {
        return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }
    head(requestUrl, additionalHeaders) {
        return this.request('HEAD', requestUrl, null, additionalHeaders || {});
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    async getJson(requestUrl, additionalHeaders = {}) {
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        let res = await this.get(requestUrl, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async postJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.post(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async putJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.put(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async patchJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.patch(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    async request(verb, requestUrl, data, headers) {
        if (this._disposed) {
            throw new Error('Client has already been disposed.');
        }
        let parsedUrl = new URL(requestUrl);
        let info = this._prepareRequest(verb, parsedUrl, headers);
        // Only perform retries on reads since writes may not be idempotent.
        let maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1
            ? this._maxRetries + 1
            : 1;
        let numTries = 0;
        let response;
        while (numTries < maxTries) {
            response = await this.requestRaw(info, data);
            // Check if it's an authentication challenge
            if (response &&
                response.message &&
                response.message.statusCode === HttpCodes.Unauthorized) {
                let authenticationHandler;
                for (let i = 0; i < this.handlers.length; i++) {
                    if (this.handlers[i].canHandleAuthentication(response)) {
                        authenticationHandler = this.handlers[i];
                        break;
                    }
                }
                if (authenticationHandler) {
                    return authenticationHandler.handleAuthentication(this, info, data);
                }
                else {
                    // We have received an unauthorized response but have no handlers to handle it.
                    // Let the response return to the caller.
                    return response;
                }
            }
            let redirectsRemaining = this._maxRedirects;
            while (HttpRedirectCodes.indexOf(response.message.statusCode) != -1 &&
                this._allowRedirects &&
                redirectsRemaining > 0) {
                const redirectUrl = response.message.headers['location'];
                if (!redirectUrl) {
                    // if there's no location to redirect to, we won't
                    break;
                }
                let parsedRedirectUrl = new URL(redirectUrl);
                if (parsedUrl.protocol == 'https:' &&
                    parsedUrl.protocol != parsedRedirectUrl.protocol &&
                    !this._allowRedirectDowngrade) {
                    throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                }
                // we need to finish reading the response before reassigning response
                // which will leak the open socket.
                await response.readBody();
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                    for (let header in headers) {
                        // header names are case insensitive
                        if (header.toLowerCase() === 'authorization') {
                            delete headers[header];
                        }
                    }
                }
                // let's make the request with the new redirectUrl
                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                response = await this.requestRaw(info, data);
                redirectsRemaining--;
            }
            if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                // If not a retry code, return immediately instead of retrying
                return response;
            }
            numTries += 1;
            if (numTries < maxTries) {
                await response.readBody();
                await this._performExponentialBackoff(numTries);
            }
        }
        return response;
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return new Promise((resolve, reject) => {
            let callbackForResult = function (err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            };
            this.requestRawWithCallback(info, data, callbackForResult);
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        let socket;
        if (typeof data === 'string') {
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        let handleResult = (err, res) => {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info.httpModule.request(info.options, (msg) => {
            let res = new HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error('Request timeout: ' + info.options.path), null);
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        let parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            this.handlers.forEach(handler => {
                handler.prepareRequest(info.options);
            });
        }
        return info;
    }
    _mergeHeaders(headers) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxyUrl = pm.getProxyUrl(parsedUrl);
        let useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (!!agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (!!this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        if (useProxy) {
            // If using proxy, need tunnel
            if (!tunnel) {
                tunnel = __webpack_require__(4294);
            }
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    ...((proxyUrl.username || proxyUrl.password) && {
                        proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                    }),
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise(resolve => setTimeout(() => resolve(), ms));
    }
    static dateTimeDeserializer(key, value) {
        if (typeof value === 'string') {
            let a = new Date(value);
            if (!isNaN(a.valueOf())) {
                return a;
            }
        }
        return value;
    }
    async _processResponse(res, options) {
        return new Promise(async (resolve, reject) => {
            const statusCode = res.message.statusCode;
            const response = {
                statusCode: statusCode,
                result: null,
                headers: {}
            };
            // not found leads to null obj returned
            if (statusCode == HttpCodes.NotFound) {
                resolve(response);
            }
            let obj;
            let contents;
            // get the result from the body
            try {
                contents = await res.readBody();
                if (contents && contents.length > 0) {
                    if (options && options.deserializeDates) {
                        obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                    }
                    else {
                        obj = JSON.parse(contents);
                    }
                    response.result = obj;
                }
                response.headers = res.message.headers;
            }
            catch (err) {
                // Invalid resource (contents not json);  leaving result obj null
            }
            // note that 3xx redirects are handled by the http layer.
            if (statusCode > 299) {
                let msg;
                // if exception/error in body, attempt to get better error
                if (obj && obj.message) {
                    msg = obj.message;
                }
                else if (contents && contents.length > 0) {
                    // it may be the case that the exception is in the body message as string
                    msg = contents;
                }
                else {
                    msg = 'Failed request: (' + statusCode + ')';
                }
                let err = new HttpClientError(msg, statusCode);
                err.result = response.result;
                reject(err);
            }
            else {
                resolve(response);
            }
        });
    }
}
exports.HttpClient = HttpClient;


/***/ }),

/***/ 6443:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function getProxyUrl(reqUrl) {
    let usingSsl = reqUrl.protocol === 'https:';
    let proxyUrl;
    if (checkBypass(reqUrl)) {
        return proxyUrl;
    }
    let proxyVar;
    if (usingSsl) {
        proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
    }
    else {
        proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
    }
    if (proxyVar) {
        proxyUrl = new URL(proxyVar);
    }
    return proxyUrl;
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    let upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (let upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;


/***/ }),

/***/ 334:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

async function auth(token) {
  const tokenType = token.split(/\./).length === 3 ? "app" : /^v\d+\./.test(token) ? "installation" : "oauth";
  return {
    type: "token",
    token: token,
    tokenType
  };
}

/**
 * Prefix token for usage in the Authorization header
 *
 * @param token OAuth token or JSON Web Token
 */
function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return `bearer ${token}`;
  }

  return `token ${token}`;
}

async function hook(token, request, route, parameters) {
  const endpoint = request.endpoint.merge(route, parameters);
  endpoint.headers.authorization = withAuthorizationPrefix(token);
  return request(endpoint);
}

const createTokenAuth = function createTokenAuth(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }

  if (typeof token !== "string") {
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  }

  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
};

exports.createTokenAuth = createTokenAuth;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6762:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var universalUserAgent = __webpack_require__(5030);
var beforeAfterHook = __webpack_require__(3682);
var request = __webpack_require__(6234);
var graphql = __webpack_require__(8467);
var authToken = __webpack_require__(334);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

const VERSION = "3.5.1";

const _excluded = ["authStrategy"];
class Octokit {
  constructor(options = {}) {
    const hook = new beforeAfterHook.Collection();
    const requestDefaults = {
      baseUrl: request.request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        // @ts-ignore internal usage only, no need to type
        hook: hook.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    }; // prepend default user agent with `options.userAgent` if set

    requestDefaults.headers["user-agent"] = [options.userAgent, `octokit-core.js/${VERSION} ${universalUserAgent.getUserAgent()}`].filter(Boolean).join(" ");

    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }

    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }

    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }

    this.request = request.request.defaults(requestDefaults);
    this.graphql = graphql.withCustomRequest(this.request).defaults(requestDefaults);
    this.log = Object.assign({
      debug: () => {},
      info: () => {},
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, options.log);
    this.hook = hook; // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
    //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
    // (2) If only `options.auth` is set, use the default token authentication strategy.
    // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
    // TODO: type `options.auth` based on `options.authStrategy`.

    if (!options.authStrategy) {
      if (!options.auth) {
        // (1)
        this.auth = async () => ({
          type: "unauthenticated"
        });
      } else {
        // (2)
        const auth = authToken.createTokenAuth(options.auth); // @ts-ignore  ¯\_(ツ)_/¯

        hook.wrap("request", auth.hook);
        this.auth = auth;
      }
    } else {
      const {
        authStrategy
      } = options,
            otherOptions = _objectWithoutProperties(options, _excluded);

      const auth = authStrategy(Object.assign({
        request: this.request,
        log: this.log,
        // we pass the current octokit instance as well as its constructor options
        // to allow for authentication strategies that return a new octokit instance
        // that shares the same internal state as the current one. The original
        // requirement for this was the "event-octokit" authentication strategy
        // of https://github.com/probot/octokit-auth-probot.
        octokit: this,
        octokitOptions: otherOptions
      }, options.auth)); // @ts-ignore  ¯\_(ツ)_/¯

      hook.wrap("request", auth.hook);
      this.auth = auth;
    } // apply plugins
    // https://stackoverflow.com/a/16345172


    const classConstructor = this.constructor;
    classConstructor.plugins.forEach(plugin => {
      Object.assign(this, plugin(this, options));
    });
  }

  static defaults(defaults) {
    const OctokitWithDefaults = class extends this {
      constructor(...args) {
        const options = args[0] || {};

        if (typeof defaults === "function") {
          super(defaults(options));
          return;
        }

        super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent ? {
          userAgent: `${options.userAgent} ${defaults.userAgent}`
        } : null));
      }

    };
    return OctokitWithDefaults;
  }
  /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */


  static plugin(...newPlugins) {
    var _a;

    const currentPlugins = this.plugins;
    const NewOctokit = (_a = class extends this {}, _a.plugins = currentPlugins.concat(newPlugins.filter(plugin => !currentPlugins.includes(plugin))), _a);
    return NewOctokit;
  }

}
Octokit.VERSION = VERSION;
Octokit.plugins = [];

exports.Octokit = Octokit;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9440:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var isPlainObject = __webpack_require__(3287);
var universalUserAgent = __webpack_require__(5030);

function lowercaseKeys(object) {
  if (!object) {
    return {};
  }

  return Object.keys(object).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}

function mergeDeep(defaults, options) {
  const result = Object.assign({}, defaults);
  Object.keys(options).forEach(key => {
    if (isPlainObject.isPlainObject(options[key])) {
      if (!(key in defaults)) Object.assign(result, {
        [key]: options[key]
      });else result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, {
        [key]: options[key]
      });
    }
  });
  return result;
}

function removeUndefinedProperties(obj) {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }

  return obj;
}

function merge(defaults, route, options) {
  if (typeof route === "string") {
    let [method, url] = route.split(" ");
    options = Object.assign(url ? {
      method,
      url
    } : {
      url: method
    }, options);
  } else {
    options = Object.assign({}, route);
  } // lowercase header names before merging with defaults to avoid duplicates


  options.headers = lowercaseKeys(options.headers); // remove properties with undefined values before merging

  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  const mergedOptions = mergeDeep(defaults || {}, options); // mediaType.previews arrays are merged, instead of overwritten

  if (defaults && defaults.mediaType.previews.length) {
    mergedOptions.mediaType.previews = defaults.mediaType.previews.filter(preview => !mergedOptions.mediaType.previews.includes(preview)).concat(mergedOptions.mediaType.previews);
  }

  mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(preview => preview.replace(/-preview/, ""));
  return mergedOptions;
}

function addQueryParameters(url, parameters) {
  const separator = /\?/.test(url) ? "&" : "?";
  const names = Object.keys(parameters);

  if (names.length === 0) {
    return url;
  }

  return url + separator + names.map(name => {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }

    return `${name}=${encodeURIComponent(parameters[name])}`;
  }).join("&");
}

const urlVariableRegex = /\{[^}]+\}/g;

function removeNonChars(variableName) {
  return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}

function extractUrlVariableNames(url) {
  const matches = url.match(urlVariableRegex);

  if (!matches) {
    return [];
  }

  return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}

function omit(object, keysToOmit) {
  return Object.keys(object).filter(option => !keysToOmit.includes(option)).reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  }, {});
}

// Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* istanbul ignore file */
function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }

    return part;
  }).join("");
}

function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);

  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}

function getValues(context, operator, key, modifier) {
  var value = context[key],
      result = [];

  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();

      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }

      result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        const tmp = [];

        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            tmp.push(encodeValue(operator, value));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }

        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }

  return result;
}

function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}

function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
    if (expression) {
      let operator = "";
      const values = [];

      if (operators.indexOf(expression.charAt(0)) !== -1) {
        operator = expression.charAt(0);
        expression = expression.substr(1);
      }

      expression.split(/,/g).forEach(function (variable) {
        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
        values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
      });

      if (operator && operator !== "+") {
        var separator = ",";

        if (operator === "?") {
          separator = "&";
        } else if (operator !== "#") {
          separator = operator;
        }

        return (values.length !== 0 ? operator : "") + values.join(separator);
      } else {
        return values.join(",");
      }
    } else {
      return encodeReserved(literal);
    }
  });
}

function parse(options) {
  // https://fetch.spec.whatwg.org/#methods
  let method = options.method.toUpperCase(); // replace :varname with {varname} to make it RFC 6570 compatible

  let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  let headers = Object.assign({}, options.headers);
  let body;
  let parameters = omit(options, ["method", "baseUrl", "url", "headers", "request", "mediaType"]); // extract variable names from URL to calculate remaining variables later

  const urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);

  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }

  const omittedParameters = Object.keys(options).filter(option => urlVariableNames.includes(option)).concat("baseUrl");
  const remainingParameters = omit(parameters, omittedParameters);
  const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);

  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
      headers.accept = headers.accept.split(/,/).map(preview => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`)).join(",");
    }

    if (options.mediaType.previews.length) {
      const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
      headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map(preview => {
        const format = options.mediaType.format ? `.${options.mediaType.format}` : "+json";
        return `application/vnd.github.${preview}-preview${format}`;
      }).join(",");
    }
  } // for GET/HEAD requests, set URL query parameters from remaining parameters
  // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters


  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      } else {
        headers["content-length"] = 0;
      }
    }
  } // default content-type for JSON if body is set


  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
  // fetch does not allow to set `content-length` header, but we can set body to an empty string


  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  } // Only return body/request keys if present


  return Object.assign({
    method,
    url,
    headers
  }, typeof body !== "undefined" ? {
    body
  } : null, options.request ? {
    request: options.request
  } : null);
}

function endpointWithDefaults(defaults, route, options) {
  return parse(merge(defaults, route, options));
}

function withDefaults(oldDefaults, newDefaults) {
  const DEFAULTS = merge(oldDefaults, newDefaults);
  const endpoint = endpointWithDefaults.bind(null, DEFAULTS);
  return Object.assign(endpoint, {
    DEFAULTS,
    defaults: withDefaults.bind(null, DEFAULTS),
    merge: merge.bind(null, DEFAULTS),
    parse
  });
}

const VERSION = "6.0.12";

const userAgent = `octokit-endpoint.js/${VERSION} ${universalUserAgent.getUserAgent()}`; // DEFAULTS has all properties set that EndpointOptions has, except url.
// So we use RequestParameters and add method as additional required property.

const DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: "",
    previews: []
  }
};

const endpoint = withDefaults(null, DEFAULTS);

exports.endpoint = endpoint;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 8467:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var request = __webpack_require__(6234);
var universalUserAgent = __webpack_require__(5030);

const VERSION = "4.6.4";

class GraphqlError extends Error {
  constructor(request, response) {
    const message = response.data.errors[0].message;
    super(message);
    Object.assign(this, response.data);
    Object.assign(this, {
      headers: response.headers
    });
    this.name = "GraphqlError";
    this.request = request; // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

}

const NON_VARIABLE_OPTIONS = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType"];
const FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(request, query, options) {
  if (options) {
    if (typeof query === "string" && "query" in options) {
      return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
    }

    for (const key in options) {
      if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue;
      return Promise.reject(new Error(`[@octokit/graphql] "${key}" cannot be used as variable name`));
    }
  }

  const parsedOptions = typeof query === "string" ? Object.assign({
    query
  }, options) : query;
  const requestOptions = Object.keys(parsedOptions).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = parsedOptions[key];
      return result;
    }

    if (!result.variables) {
      result.variables = {};
    }

    result.variables[key] = parsedOptions[key];
    return result;
  }, {}); // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
  // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451

  const baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl;

  if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
  }

  return request(requestOptions).then(response => {
    if (response.data.errors) {
      const headers = {};

      for (const key of Object.keys(response.headers)) {
        headers[key] = response.headers[key];
      }

      throw new GraphqlError(requestOptions, {
        headers,
        data: response.data
      });
    }

    return response.data.data;
  });
}

function withDefaults(request$1, newDefaults) {
  const newRequest = request$1.defaults(newDefaults);

  const newApi = (query, options) => {
    return graphql(newRequest, query, options);
  };

  return Object.assign(newApi, {
    defaults: withDefaults.bind(null, newRequest),
    endpoint: request.request.endpoint
  });
}

const graphql$1 = withDefaults(request.request, {
  headers: {
    "user-agent": `octokit-graphql.js/${VERSION} ${universalUserAgent.getUserAgent()}`
  },
  method: "POST",
  url: "/graphql"
});
function withCustomRequest(customRequest) {
  return withDefaults(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}

exports.graphql = graphql$1;
exports.withCustomRequest = withCustomRequest;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4193:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const VERSION = "2.14.0";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * Some “list” response that can be paginated have a different response structure
 *
 * They have a `total_count` key in the response (search also has `incomplete_results`,
 * /installation/repositories also has `repository_selection`), as well as a key with
 * the list of the items which name varies from endpoint to endpoint.
 *
 * Octokit normalizes these responses so that paginated results are always returned following
 * the same structure. One challenge is that if the list response has only one page, no Link
 * header is provided, so this header alone is not sufficient to check wether a response is
 * paginated or not.
 *
 * We check if a "total_count" key is present in the response data, but also make sure that
 * a "url" property is not, as the "Get the combined status for a specific ref" endpoint would
 * otherwise match: https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref
 */
function normalizePaginatedListResponse(response) {
  // endpoints can respond with 204 if repository is empty
  if (!response.data) {
    return _objectSpread2(_objectSpread2({}, response), {}, {
      data: []
    });
  }

  const responseNeedsNormalization = "total_count" in response.data && !("url" in response.data);
  if (!responseNeedsNormalization) return response; // keep the additional properties intact as there is currently no other way
  // to retrieve the same information.

  const incompleteResults = response.data.incomplete_results;
  const repositorySelection = response.data.repository_selection;
  const totalCount = response.data.total_count;
  delete response.data.incomplete_results;
  delete response.data.repository_selection;
  delete response.data.total_count;
  const namespaceKey = Object.keys(response.data)[0];
  const data = response.data[namespaceKey];
  response.data = data;

  if (typeof incompleteResults !== "undefined") {
    response.data.incomplete_results = incompleteResults;
  }

  if (typeof repositorySelection !== "undefined") {
    response.data.repository_selection = repositorySelection;
  }

  response.data.total_count = totalCount;
  return response;
}

function iterator(octokit, route, parameters) {
  const options = typeof route === "function" ? route.endpoint(parameters) : octokit.request.endpoint(route, parameters);
  const requestMethod = typeof route === "function" ? route : octokit.request;
  const method = options.method;
  const headers = options.headers;
  let url = options.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!url) return {
          done: true
        };

        try {
          const response = await requestMethod({
            method,
            url,
            headers
          });
          const normalizedResponse = normalizePaginatedListResponse(response); // `response.headers.link` format:
          // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
          // sets `url` to undefined if "next" URL is not present or `link` header is not set

          url = ((normalizedResponse.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1];
          return {
            value: normalizedResponse
          };
        } catch (error) {
          if (error.status !== 409) throw error;
          url = "";
          return {
            value: {
              status: 200,
              headers: {},
              data: []
            }
          };
        }
      }

    })
  };
}

function paginate(octokit, route, parameters, mapFn) {
  if (typeof parameters === "function") {
    mapFn = parameters;
    parameters = undefined;
  }

  return gather(octokit, [], iterator(octokit, route, parameters)[Symbol.asyncIterator](), mapFn);
}

function gather(octokit, results, iterator, mapFn) {
  return iterator.next().then(result => {
    if (result.done) {
      return results;
    }

    let earlyExit = false;

    function done() {
      earlyExit = true;
    }

    results = results.concat(mapFn ? mapFn(result.value, done) : result.value.data);

    if (earlyExit) {
      return results;
    }

    return gather(octokit, results, iterator, mapFn);
  });
}

const composePaginateRest = Object.assign(paginate, {
  iterator
});

const paginatingEndpoints = ["GET /app/hook/deliveries", "GET /app/installations", "GET /applications/grants", "GET /authorizations", "GET /enterprises/{enterprise}/actions/permissions/organizations", "GET /enterprises/{enterprise}/actions/runner-groups", "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", "GET /enterprises/{enterprise}/actions/runners", "GET /enterprises/{enterprise}/actions/runners/downloads", "GET /events", "GET /gists", "GET /gists/public", "GET /gists/starred", "GET /gists/{gist_id}/comments", "GET /gists/{gist_id}/commits", "GET /gists/{gist_id}/forks", "GET /installation/repositories", "GET /issues", "GET /marketplace_listing/plans", "GET /marketplace_listing/plans/{plan_id}/accounts", "GET /marketplace_listing/stubbed/plans", "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts", "GET /networks/{owner}/{repo}/events", "GET /notifications", "GET /organizations", "GET /orgs/{org}/actions/permissions/repositories", "GET /orgs/{org}/actions/runner-groups", "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners", "GET /orgs/{org}/actions/runners", "GET /orgs/{org}/actions/runners/downloads", "GET /orgs/{org}/actions/secrets", "GET /orgs/{org}/actions/secrets/{secret_name}/repositories", "GET /orgs/{org}/blocks", "GET /orgs/{org}/credential-authorizations", "GET /orgs/{org}/events", "GET /orgs/{org}/failed_invitations", "GET /orgs/{org}/hooks", "GET /orgs/{org}/hooks/{hook_id}/deliveries", "GET /orgs/{org}/installations", "GET /orgs/{org}/invitations", "GET /orgs/{org}/invitations/{invitation_id}/teams", "GET /orgs/{org}/issues", "GET /orgs/{org}/members", "GET /orgs/{org}/migrations", "GET /orgs/{org}/migrations/{migration_id}/repositories", "GET /orgs/{org}/outside_collaborators", "GET /orgs/{org}/projects", "GET /orgs/{org}/public_members", "GET /orgs/{org}/repos", "GET /orgs/{org}/team-sync/groups", "GET /orgs/{org}/teams", "GET /orgs/{org}/teams/{team_slug}/discussions", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "GET /orgs/{org}/teams/{team_slug}/invitations", "GET /orgs/{org}/teams/{team_slug}/members", "GET /orgs/{org}/teams/{team_slug}/projects", "GET /orgs/{org}/teams/{team_slug}/repos", "GET /orgs/{org}/teams/{team_slug}/team-sync/group-mappings", "GET /orgs/{org}/teams/{team_slug}/teams", "GET /projects/columns/{column_id}/cards", "GET /projects/{project_id}/collaborators", "GET /projects/{project_id}/columns", "GET /repos/{owner}/{repo}/actions/artifacts", "GET /repos/{owner}/{repo}/actions/runners", "GET /repos/{owner}/{repo}/actions/runners/downloads", "GET /repos/{owner}/{repo}/actions/runs", "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs", "GET /repos/{owner}/{repo}/actions/secrets", "GET /repos/{owner}/{repo}/actions/workflows", "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", "GET /repos/{owner}/{repo}/assignees", "GET /repos/{owner}/{repo}/branches", "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations", "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", "GET /repos/{owner}/{repo}/code-scanning/alerts", "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "GET /repos/{owner}/{repo}/code-scanning/analyses", "GET /repos/{owner}/{repo}/collaborators", "GET /repos/{owner}/{repo}/comments", "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/commits", "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments", "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls", "GET /repos/{owner}/{repo}/commits/{ref}/check-runs", "GET /repos/{owner}/{repo}/commits/{ref}/check-suites", "GET /repos/{owner}/{repo}/commits/{ref}/statuses", "GET /repos/{owner}/{repo}/contributors", "GET /repos/{owner}/{repo}/deployments", "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "GET /repos/{owner}/{repo}/events", "GET /repos/{owner}/{repo}/forks", "GET /repos/{owner}/{repo}/git/matching-refs/{ref}", "GET /repos/{owner}/{repo}/hooks", "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries", "GET /repos/{owner}/{repo}/invitations", "GET /repos/{owner}/{repo}/issues", "GET /repos/{owner}/{repo}/issues/comments", "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/issues/events", "GET /repos/{owner}/{repo}/issues/{issue_number}/comments", "GET /repos/{owner}/{repo}/issues/{issue_number}/events", "GET /repos/{owner}/{repo}/issues/{issue_number}/labels", "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions", "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline", "GET /repos/{owner}/{repo}/keys", "GET /repos/{owner}/{repo}/labels", "GET /repos/{owner}/{repo}/milestones", "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels", "GET /repos/{owner}/{repo}/notifications", "GET /repos/{owner}/{repo}/pages/builds", "GET /repos/{owner}/{repo}/projects", "GET /repos/{owner}/{repo}/pulls", "GET /repos/{owner}/{repo}/pulls/comments", "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments", "GET /repos/{owner}/{repo}/pulls/{pull_number}/commits", "GET /repos/{owner}/{repo}/pulls/{pull_number}/files", "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews", "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", "GET /repos/{owner}/{repo}/releases", "GET /repos/{owner}/{repo}/releases/{release_id}/assets", "GET /repos/{owner}/{repo}/secret-scanning/alerts", "GET /repos/{owner}/{repo}/stargazers", "GET /repos/{owner}/{repo}/subscribers", "GET /repos/{owner}/{repo}/tags", "GET /repos/{owner}/{repo}/teams", "GET /repositories", "GET /repositories/{repository_id}/environments/{environment_name}/secrets", "GET /scim/v2/enterprises/{enterprise}/Groups", "GET /scim/v2/enterprises/{enterprise}/Users", "GET /scim/v2/organizations/{org}/Users", "GET /search/code", "GET /search/commits", "GET /search/issues", "GET /search/labels", "GET /search/repositories", "GET /search/topics", "GET /search/users", "GET /teams/{team_id}/discussions", "GET /teams/{team_id}/discussions/{discussion_number}/comments", "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", "GET /teams/{team_id}/discussions/{discussion_number}/reactions", "GET /teams/{team_id}/invitations", "GET /teams/{team_id}/members", "GET /teams/{team_id}/projects", "GET /teams/{team_id}/repos", "GET /teams/{team_id}/team-sync/group-mappings", "GET /teams/{team_id}/teams", "GET /user/blocks", "GET /user/emails", "GET /user/followers", "GET /user/following", "GET /user/gpg_keys", "GET /user/installations", "GET /user/installations/{installation_id}/repositories", "GET /user/issues", "GET /user/keys", "GET /user/marketplace_purchases", "GET /user/marketplace_purchases/stubbed", "GET /user/memberships/orgs", "GET /user/migrations", "GET /user/migrations/{migration_id}/repositories", "GET /user/orgs", "GET /user/public_emails", "GET /user/repos", "GET /user/repository_invitations", "GET /user/starred", "GET /user/subscriptions", "GET /user/teams", "GET /users", "GET /users/{username}/events", "GET /users/{username}/events/orgs/{org}", "GET /users/{username}/events/public", "GET /users/{username}/followers", "GET /users/{username}/following", "GET /users/{username}/gists", "GET /users/{username}/gpg_keys", "GET /users/{username}/keys", "GET /users/{username}/orgs", "GET /users/{username}/projects", "GET /users/{username}/received_events", "GET /users/{username}/received_events/public", "GET /users/{username}/repos", "GET /users/{username}/starred", "GET /users/{username}/subscriptions"];

function isPaginatingEndpoint(arg) {
  if (typeof arg === "string") {
    return paginatingEndpoints.includes(arg);
  } else {
    return false;
  }
}

/**
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */

function paginateRest(octokit) {
  return {
    paginate: Object.assign(paginate.bind(null, octokit), {
      iterator: iterator.bind(null, octokit)
    })
  };
}
paginateRest.VERSION = VERSION;

exports.composePaginateRest = composePaginateRest;
exports.isPaginatingEndpoint = isPaginatingEndpoint;
exports.paginateRest = paginateRest;
exports.paginatingEndpoints = paginatingEndpoints;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3044:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const Endpoints = {
  actions: {
    addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],
    approveWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"],
    cancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"],
    createOrUpdateEnvironmentSecret: ["PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"],
    createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
    createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    createRegistrationTokenForOrg: ["POST /orgs/{org}/actions/runners/registration-token"],
    createRegistrationTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/registration-token"],
    createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
    createRemoveTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/remove-token"],
    createWorkflowDispatch: ["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"],
    deleteArtifact: ["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    deleteEnvironmentSecret: ["DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"],
    deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
    deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    deleteSelfHostedRunnerFromOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}"],
    deleteSelfHostedRunnerFromRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"],
    deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
    deleteWorkflowRunLogs: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],
    disableSelectedRepositoryGithubActionsOrganization: ["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"],
    disableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"],
    downloadArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"],
    downloadJobLogsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"],
    downloadWorkflowRunLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],
    enableSelectedRepositoryGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"],
    enableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"],
    getAllowedActionsOrganization: ["GET /orgs/{org}/actions/permissions/selected-actions"],
    getAllowedActionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"],
    getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    getEnvironmentPublicKey: ["GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key"],
    getEnvironmentSecret: ["GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"],
    getGithubActionsPermissionsOrganization: ["GET /orgs/{org}/actions/permissions"],
    getGithubActionsPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions"],
    getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
    getPendingDeploymentsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],
    getRepoPermissions: ["GET /repos/{owner}/{repo}/actions/permissions", {}, {
      renamed: ["actions", "getGithubActionsPermissionsRepository"]
    }],
    getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
    getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    getReviewsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"],
    getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
    getSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"],
    getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    getWorkflowRunUsage: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"],
    getWorkflowUsage: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"],
    listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
    listEnvironmentSecrets: ["GET /repositories/{repository_id}/environments/{environment_name}/secrets"],
    listJobsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"],
    listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
    listRunnerApplicationsForRepo: ["GET /repos/{owner}/{repo}/actions/runners/downloads"],
    listSelectedReposForOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"],
    listSelectedRepositoriesEnabledGithubActionsOrganization: ["GET /orgs/{org}/actions/permissions/repositories"],
    listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
    listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
    listWorkflowRunArtifacts: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"],
    listWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"],
    listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
    reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
    removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],
    reviewPendingDeploymentsForRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],
    setAllowedActionsOrganization: ["PUT /orgs/{org}/actions/permissions/selected-actions"],
    setAllowedActionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"],
    setGithubActionsPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions"],
    setGithubActionsPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions"],
    setSelectedReposForOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"],
    setSelectedRepositoriesEnabledGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories"]
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: ["DELETE /notifications/threads/{thread_id}/subscription"],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscriptionForAuthenticatedUser: ["GET /notifications/threads/{thread_id}/subscription"],
    listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listOrgEventsForAuthenticatedUser: ["GET /users/{username}/events/orgs/{org}"],
    listPublicEvents: ["GET /events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listPublicOrgEvents: ["GET /orgs/{org}/events"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: ["GET /users/{username}/received_events/public"],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listRepoNotificationsForAuthenticatedUser: ["GET /repos/{owner}/{repo}/notifications"],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markNotificationsAsRead: ["PUT /notifications"],
    markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: ["PUT /notifications/threads/{thread_id}/subscription"],
    starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
  },
  apps: {
    addRepoToInstallation: ["PUT /user/installations/{installation_id}/repositories/{repository_id}"],
    checkToken: ["POST /applications/{client_id}/token"],
    createContentAttachment: ["POST /content_references/{content_reference_id}/attachments", {
      mediaType: {
        previews: ["corsair"]
      }
    }],
    createContentAttachmentForRepo: ["POST /repos/{owner}/{repo}/content_references/{content_reference_id}/attachments", {
      mediaType: {
        previews: ["corsair"]
      }
    }],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: ["POST /app/installations/{installation_id}/access_tokens"],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: ["DELETE /app/installations/{installation_id}"],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: ["GET /app"],
    getBySlug: ["GET /apps/{app_slug}"],
    getInstallation: ["GET /app/installations/{installation_id}"],
    getOrgInstallation: ["GET /orgs/{org}/installation"],
    getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
    getSubscriptionPlanForAccount: ["GET /marketplace_listing/accounts/{account_id}"],
    getSubscriptionPlanForAccountStubbed: ["GET /marketplace_listing/stubbed/accounts/{account_id}"],
    getUserInstallation: ["GET /users/{username}/installation"],
    getWebhookConfigForApp: ["GET /app/hook/config"],
    getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"],
    listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
    listAccountsForPlanStubbed: ["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"],
    listInstallationReposForAuthenticatedUser: ["GET /user/installations/{installation_id}/repositories"],
    listInstallations: ["GET /app/installations"],
    listInstallationsForAuthenticatedUser: ["GET /user/installations"],
    listPlans: ["GET /marketplace_listing/plans"],
    listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
    listReposAccessibleToInstallation: ["GET /installation/repositories"],
    listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
    listSubscriptionsForAuthenticatedUserStubbed: ["GET /user/marketplace_purchases/stubbed"],
    listWebhookDeliveries: ["GET /app/hook/deliveries"],
    redeliverWebhookDelivery: ["POST /app/hook/deliveries/{delivery_id}/attempts"],
    removeRepoFromInstallation: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}"],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
    scopeToken: ["POST /applications/{client_id}/token/scoped"],
    suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
    unsuspendInstallation: ["DELETE /app/installations/{installation_id}/suspended"],
    updateWebhookConfigForApp: ["PATCH /app/hook/config"]
  },
  billing: {
    getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
    getGithubActionsBillingUser: ["GET /users/{username}/settings/billing/actions"],
    getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
    getGithubPackagesBillingUser: ["GET /users/{username}/settings/billing/packages"],
    getSharedStorageBillingOrg: ["GET /orgs/{org}/settings/billing/shared-storage"],
    getSharedStorageBillingUser: ["GET /users/{username}/settings/billing/shared-storage"]
  },
  checks: {
    create: ["POST /repos/{owner}/{repo}/check-runs"],
    createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
    get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
    listAnnotations: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"],
    listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
    listForSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"],
    listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
    rerequestSuite: ["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"],
    setSuitesPreferences: ["PATCH /repos/{owner}/{repo}/check-suites/preferences"],
    update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]
  },
  codeScanning: {
    deleteAnalysis: ["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"],
    getAlert: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", {}, {
      renamedParameters: {
        alert_id: "alert_number"
      }
    }],
    getAnalysis: ["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"],
    getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
    listAlertInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
    listAlertsInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", {}, {
      renamed: ["codeScanning", "listAlertInstances"]
    }],
    listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
    updateAlert: ["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"],
    uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"]
  },
  codesOfConduct: {
    getAllCodesOfConduct: ["GET /codes_of_conduct", {
      mediaType: {
        previews: ["scarlet-witch"]
      }
    }],
    getConductCode: ["GET /codes_of_conduct/{key}", {
      mediaType: {
        previews: ["scarlet-witch"]
      }
    }],
    getForRepo: ["GET /repos/{owner}/{repo}/community/code_of_conduct", {
      mediaType: {
        previews: ["scarlet-witch"]
      }
    }]
  },
  emojis: {
    get: ["GET /emojis"]
  },
  enterpriseAdmin: {
    disableSelectedOrganizationGithubActionsEnterprise: ["DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"],
    enableSelectedOrganizationGithubActionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"],
    getAllowedActionsEnterprise: ["GET /enterprises/{enterprise}/actions/permissions/selected-actions"],
    getGithubActionsPermissionsEnterprise: ["GET /enterprises/{enterprise}/actions/permissions"],
    listSelectedOrganizationsEnabledGithubActionsEnterprise: ["GET /enterprises/{enterprise}/actions/permissions/organizations"],
    setAllowedActionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions/selected-actions"],
    setGithubActionsPermissionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions"],
    setSelectedOrganizationsEnabledGithubActionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions/organizations"]
  },
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForUser: ["GET /users/{username}/gists"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/{name}"]
  },
  interactions: {
    getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
    getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
    getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
    getRestrictionsForYourPublicRepos: ["GET /user/interaction-limits", {}, {
      renamed: ["interactions", "getRestrictionsForAuthenticatedUser"]
    }],
    removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"],
    removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
    removeRestrictionsForRepo: ["DELETE /repos/{owner}/{repo}/interaction-limits"],
    removeRestrictionsForYourPublicRepos: ["DELETE /user/interaction-limits", {}, {
      renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"]
    }],
    setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
    setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
    setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
    setRestrictionsForYourPublicRepos: ["PUT /user/interaction-limits", {}, {
      renamed: ["interactions", "setRestrictionsForAuthenticatedUser"]
    }]
  },
  issues: {
    addAssignees: ["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: ["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: ["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: ["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline", {
      mediaType: {
        previews: ["mockingbird"]
      }
    }],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAllLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    removeAssignees: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"],
    removeLabel: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"],
    setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: ["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"]
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: ["POST /markdown/raw", {
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    }]
  },
  meta: {
    get: ["GET /meta"],
    getOctocat: ["GET /octocat"],
    getZen: ["GET /zen"],
    root: ["GET /"]
  },
  migrations: {
    cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
    deleteArchiveForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/archive", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    deleteArchiveForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/archive", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    downloadArchiveForOrg: ["GET /orgs/{org}/migrations/{migration_id}/archive", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    getArchiveForAuthenticatedUser: ["GET /user/migrations/{migration_id}/archive", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
    getImportStatus: ["GET /repos/{owner}/{repo}/import"],
    getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
    getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    listForAuthenticatedUser: ["GET /user/migrations", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    listForOrg: ["GET /orgs/{org}/migrations", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    listReposForUser: ["GET /user/migrations/{migration_id}/repositories", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
    setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
    startImport: ["PUT /repos/{owner}/{repo}/import"],
    unlockRepoForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    unlockRepoForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    updateImport: ["PATCH /repos/{owner}/{repo}/import"]
  },
  orgs: {
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: ["PUT /orgs/{org}/outside_collaborators/{username}"],
    createInvitation: ["POST /orgs/{org}/invitations"],
    createWebhook: ["POST /orgs/{org}/hooks"],
    deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    get: ["GET /orgs/{org}"],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
    getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
    getWebhookDelivery: ["GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"],
    list: ["GET /organizations"],
    listAppInstallations: ["GET /orgs/{org}/installations"],
    listBlockedUsers: ["GET /orgs/{org}/blocks"],
    listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPendingInvitations: ["GET /orgs/{org}/invitations"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: ["POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: ["DELETE /orgs/{org}/outside_collaborators/{username}"],
    removePublicMembershipForAuthenticatedUser: ["DELETE /orgs/{org}/public_members/{username}"],
    setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
    setPublicMembershipForAuthenticatedUser: ["PUT /orgs/{org}/public_members/{username}"],
    unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
    update: ["PATCH /orgs/{org}"],
    updateMembershipForAuthenticatedUser: ["PATCH /user/memberships/orgs/{org}"],
    updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"]
  },
  packages: {
    deletePackageForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}"],
    deletePackageForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}"],
    deletePackageVersionForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    deletePackageVersionForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    getAllPackageVersionsForAPackageOwnedByAnOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions", {}, {
      renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"]
    }],
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions", {}, {
      renamed: ["packages", "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"]
    }],
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions"],
    getAllPackageVersionsForPackageOwnedByOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"],
    getAllPackageVersionsForPackageOwnedByUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions"],
    getPackageForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}"],
    getPackageForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}"],
    getPackageForUser: ["GET /users/{username}/packages/{package_type}/{package_name}"],
    getPackageVersionForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    getPackageVersionForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    getPackageVersionForUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    restorePackageForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/restore{?token}"],
    restorePackageForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"],
    restorePackageVersionForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"],
    restorePackageVersionForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]
  },
  projects: {
    addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createCard: ["POST /projects/columns/{column_id}/cards", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createColumn: ["POST /projects/{project_id}/columns", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createForAuthenticatedUser: ["POST /user/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createForOrg: ["POST /orgs/{org}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createForRepo: ["POST /repos/{owner}/{repo}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    delete: ["DELETE /projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    deleteCard: ["DELETE /projects/columns/cards/{card_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    deleteColumn: ["DELETE /projects/columns/{column_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    get: ["GET /projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    getCard: ["GET /projects/columns/cards/{card_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    getColumn: ["GET /projects/columns/{column_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    getPermissionForUser: ["GET /projects/{project_id}/collaborators/{username}/permission", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listCards: ["GET /projects/columns/{column_id}/cards", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listCollaborators: ["GET /projects/{project_id}/collaborators", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listColumns: ["GET /projects/{project_id}/columns", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listForOrg: ["GET /orgs/{org}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listForRepo: ["GET /repos/{owner}/{repo}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listForUser: ["GET /users/{username}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    moveCard: ["POST /projects/columns/cards/{card_id}/moves", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    moveColumn: ["POST /projects/columns/{column_id}/moves", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    removeCollaborator: ["DELETE /projects/{project_id}/collaborators/{username}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    update: ["PATCH /projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    updateCard: ["PATCH /projects/columns/cards/{card_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    updateColumn: ["PATCH /projects/columns/{column_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }]
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createReplyForReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
    deletePendingReview: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
    deleteReviewComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    dismissReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
    getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listCommentsForReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listRequestedReviewers: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
    listReviewComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
    listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    removeRequestedReviewers: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
    requestReviewers: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
    submitReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch", {
      mediaType: {
        previews: ["lydian"]
      }
    }],
    updateReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
    updateReviewComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]
  },
  rateLimit: {
    get: ["GET /rate_limit"]
  },
  reactions: {
    createForCommitComment: ["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForIssueComment: ["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForPullRequestReviewComment: ["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForRelease: ["POST /repos/{owner}/{repo}/releases/{release_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForTeamDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForTeamDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForIssueComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForPullRequestComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForTeamDiscussion: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForTeamDiscussionComment: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteLegacy: ["DELETE /reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }, {
      deprecated: "octokit.rest.reactions.deleteLegacy() is deprecated, see https://docs.github.com/rest/reference/reactions/#delete-a-reaction-legacy"
    }],
    listForCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForIssueComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForPullRequestReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForTeamDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForTeamDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }]
  },
  repos: {
    acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}"],
    addAppAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
      mapToData: "apps"
    }],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addStatusCheckContexts: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
      mapToData: "contexts"
    }],
    addTeamAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
      mapToData: "teams"
    }],
    addUserAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
      mapToData: "users"
    }],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    checkVulnerabilityAlerts: ["GET /repos/{owner}/{repo}/vulnerability-alerts", {
      mediaType: {
        previews: ["dorian"]
      }
    }],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    compareCommitsWithBasehead: ["GET /repos/{owner}/{repo}/compare/{basehead}"],
    createCommitComment: ["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"],
    createCommitSignatureProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
      mediaType: {
        previews: ["zzzax"]
      }
    }],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentStatus: ["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateEnvironment: ["PUT /repos/{owner}/{repo}/environments/{environment_name}"],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createPagesSite: ["POST /repos/{owner}/{repo}/pages", {
      mediaType: {
        previews: ["switcheroo"]
      }
    }],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createUsingTemplate: ["POST /repos/{template_owner}/{template_repo}/generate", {
      mediaType: {
        previews: ["baptiste"]
      }
    }],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}"],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],
    deleteAdminBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],
    deleteAnEnvironment: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}"],
    deleteBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteCommitSignatureProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
      mediaType: {
        previews: ["zzzax"]
      }
    }],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: ["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: ["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"],
    deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages", {
      mediaType: {
        previews: ["switcheroo"]
      }
    }],
    deletePullRequestReviewProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: ["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableAutomatedSecurityFixes: ["DELETE /repos/{owner}/{repo}/automated-security-fixes", {
      mediaType: {
        previews: ["london"]
      }
    }],
    disableVulnerabilityAlerts: ["DELETE /repos/{owner}/{repo}/vulnerability-alerts", {
      mediaType: {
        previews: ["dorian"]
      }
    }],
    downloadArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}", {}, {
      renamed: ["repos", "downloadZipballArchive"]
    }],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableAutomatedSecurityFixes: ["PUT /repos/{owner}/{repo}/automated-security-fixes", {
      mediaType: {
        previews: ["london"]
      }
    }],
    enableVulnerabilityAlerts: ["PUT /repos/{owner}/{repo}/vulnerability-alerts", {
      mediaType: {
        previews: ["dorian"]
      }
    }],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],
    getAdminBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],
    getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
    getAllStatusCheckContexts: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"],
    getAllTopics: ["GET /repos/{owner}/{repo}/topics", {
      mediaType: {
        previews: ["mercy"]
      }
    }],
    getAppsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection"],
    getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: ["GET /repos/{owner}/{repo}/collaborators/{username}/permission"],
    getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getCommitSignatureProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
      mediaType: {
        previews: ["zzzax"]
      }
    }],
    getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentStatus: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"],
    getEnvironment: ["GET /repos/{owner}/{repo}/environments/{environment_name}"],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getPullRequestReviewProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getStatusChecksProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],
    getTeamsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"],
    getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
    getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
    getUsersWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"],
    getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
    getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getWebhookConfigForRepo: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"],
    getWebhookDelivery: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", {
      mediaType: {
        previews: ["groot"]
      }
    }],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"],
    listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
    listCommitStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentStatuses: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls", {
      mediaType: {
        previews: ["groot"]
      }
    }],
    listReleaseAssets: ["GET /repos/{owner}/{repo}/releases/{release_id}/assets"],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhookDeliveries: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"],
    removeAppAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
      mapToData: "apps"
    }],
    removeCollaborator: ["DELETE /repos/{owner}/{repo}/collaborators/{username}"],
    removeStatusCheckContexts: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
      mapToData: "contexts"
    }],
    removeStatusCheckProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],
    removeTeamAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
      mapToData: "teams"
    }],
    removeUserAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
      mapToData: "users"
    }],
    renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
    replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics", {
      mediaType: {
        previews: ["mercy"]
      }
    }],
    requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    setAdminBranchProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],
    setAppAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
      mapToData: "apps"
    }],
    setStatusCheckContexts: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
      mapToData: "contexts"
    }],
    setTeamAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
      mapToData: "teams"
    }],
    setUserAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
      mapToData: "users"
    }],
    testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection"],
    updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: ["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"],
    updatePullRequestReviewProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: ["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    updateStatusCheckPotection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", {}, {
      renamed: ["repos", "updateStatusCheckProtection"]
    }],
    updateStatusCheckProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],
    updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateWebhookConfigForRepo: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"],
    uploadReleaseAsset: ["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}", {
      baseUrl: "https://uploads.github.com"
    }]
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits", {
      mediaType: {
        previews: ["cloak"]
      }
    }],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics", {
      mediaType: {
        previews: ["mercy"]
      }
    }],
    users: ["GET /search/users"]
  },
  secretScanning: {
    getAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
    updateAlert: ["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"]
  },
  teams: {
    addOrUpdateMembershipForUserInOrg: ["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"],
    addOrUpdateProjectPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    addOrUpdateRepoPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
    checkPermissionsForProjectInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    checkPermissionsForRepoInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    deleteDiscussionCommentInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],
    deleteDiscussionInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],
    getDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
    getMembershipForUserInOrg: ["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listDiscussionCommentsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listPendingInvitationsInOrg: ["GET /orgs/{org}/teams/{team_slug}/invitations"],
    listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    removeMembershipForUserInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"],
    removeProjectInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"],
    removeRepoInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
    updateDiscussionCommentInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],
    updateDiscussionInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
  },
  users: {
    addEmailForAuthenticated: ["POST /user/emails"],
    block: ["PUT /user/blocks/{username}"],
    checkBlocked: ["GET /user/blocks/{username}"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: ["POST /user/keys"],
    deleteEmailForAuthenticated: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}"],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}"],
    list: ["GET /users"],
    listBlockedByAuthenticated: ["GET /user/blocks"],
    listEmailsForAuthenticated: ["GET /user/emails"],
    listFollowedByAuthenticated: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: ["GET /user/keys"],
    setPrimaryEmailVisibilityForAuthenticated: ["PATCH /user/email/visibility"],
    unblock: ["DELETE /user/blocks/{username}"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"]
  }
};

const VERSION = "5.4.1";

function endpointsToMethods(octokit, endpointsMap) {
  const newMethods = {};

  for (const [scope, endpoints] of Object.entries(endpointsMap)) {
    for (const [methodName, endpoint] of Object.entries(endpoints)) {
      const [route, defaults, decorations] = endpoint;
      const [method, url] = route.split(/ /);
      const endpointDefaults = Object.assign({
        method,
        url
      }, defaults);

      if (!newMethods[scope]) {
        newMethods[scope] = {};
      }

      const scopeMethods = newMethods[scope];

      if (decorations) {
        scopeMethods[methodName] = decorate(octokit, scope, methodName, endpointDefaults, decorations);
        continue;
      }

      scopeMethods[methodName] = octokit.request.defaults(endpointDefaults);
    }
  }

  return newMethods;
}

function decorate(octokit, scope, methodName, defaults, decorations) {
  const requestWithDefaults = octokit.request.defaults(defaults);
  /* istanbul ignore next */

  function withDecorations(...args) {
    // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
    let options = requestWithDefaults.endpoint.merge(...args); // There are currently no other decorations than `.mapToData`

    if (decorations.mapToData) {
      options = Object.assign({}, options, {
        data: options[decorations.mapToData],
        [decorations.mapToData]: undefined
      });
      return requestWithDefaults(options);
    }

    if (decorations.renamed) {
      const [newScope, newMethodName] = decorations.renamed;
      octokit.log.warn(`octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`);
    }

    if (decorations.deprecated) {
      octokit.log.warn(decorations.deprecated);
    }

    if (decorations.renamedParameters) {
      // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
      const options = requestWithDefaults.endpoint.merge(...args);

      for (const [name, alias] of Object.entries(decorations.renamedParameters)) {
        if (name in options) {
          octokit.log.warn(`"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`);

          if (!(alias in options)) {
            options[alias] = options[name];
          }

          delete options[name];
        }
      }

      return requestWithDefaults(options);
    } // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488


    return requestWithDefaults(...args);
  }

  return Object.assign(withDecorations, requestWithDefaults);
}

function restEndpointMethods(octokit) {
  const api = endpointsToMethods(octokit, Endpoints);
  return {
    rest: api
  };
}
restEndpointMethods.VERSION = VERSION;
function legacyRestEndpointMethods(octokit) {
  const api = endpointsToMethods(octokit, Endpoints);
  return _objectSpread2(_objectSpread2({}, api), {}, {
    rest: api
  });
}
legacyRestEndpointMethods.VERSION = VERSION;

exports.legacyRestEndpointMethods = legacyRestEndpointMethods;
exports.restEndpointMethods = restEndpointMethods;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 537:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var deprecation = __webpack_require__(8932);
var once = _interopDefault(__webpack_require__(1223));

const logOnceCode = once(deprecation => console.warn(deprecation));
const logOnceHeaders = once(deprecation => console.warn(deprecation));
/**
 * Error with extra properties to help with debugging
 */

class RequestError extends Error {
  constructor(message, statusCode, options) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = "HttpError";
    this.status = statusCode;
    let headers;

    if ("headers" in options && typeof options.headers !== "undefined") {
      headers = options.headers;
    }

    if ("response" in options) {
      this.response = options.response;
      headers = options.response.headers;
    } // redact request credentials without mutating original request options


    const requestCopy = Object.assign({}, options.request);

    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
      });
    }

    requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
    // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
    .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]") // OAuth tokens can be passed as URL query parameters, although it is not recommended
    // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
    .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy; // deprecations

    Object.defineProperty(this, "code", {
      get() {
        logOnceCode(new deprecation.Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
        return statusCode;
      }

    });
    Object.defineProperty(this, "headers", {
      get() {
        logOnceHeaders(new deprecation.Deprecation("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."));
        return headers || {};
      }

    });
  }

}

exports.RequestError = RequestError;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6234:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var endpoint = __webpack_require__(9440);
var universalUserAgent = __webpack_require__(5030);
var isPlainObject = __webpack_require__(3287);
var nodeFetch = _interopDefault(__webpack_require__(467));
var requestError = __webpack_require__(537);

const VERSION = "5.6.0";

function getBufferResponse(response) {
  return response.arrayBuffer();
}

function fetchWrapper(requestOptions) {
  const log = requestOptions.request && requestOptions.request.log ? requestOptions.request.log : console;

  if (isPlainObject.isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }

  let headers = {};
  let status;
  let url;
  const fetch = requestOptions.request && requestOptions.request.fetch || nodeFetch;
  return fetch(requestOptions.url, Object.assign({
    method: requestOptions.method,
    body: requestOptions.body,
    headers: requestOptions.headers,
    redirect: requestOptions.redirect
  }, // `requestOptions.request.agent` type is incompatible
  // see https://github.com/octokit/types.ts/pull/264
  requestOptions.request)).then(async response => {
    url = response.url;
    status = response.status;

    for (const keyAndValue of response.headers) {
      headers[keyAndValue[0]] = keyAndValue[1];
    }

    if ("deprecation" in headers) {
      const matches = headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/);
      const deprecationLink = matches && matches.pop();
      log.warn(`[@octokit/request] "${requestOptions.method} ${requestOptions.url}" is deprecated. It is scheduled to be removed on ${headers.sunset}${deprecationLink ? `. See ${deprecationLink}` : ""}`);
    }

    if (status === 204 || status === 205) {
      return;
    } // GitHub API returns 200 for HEAD requests


    if (requestOptions.method === "HEAD") {
      if (status < 400) {
        return;
      }

      throw new requestError.RequestError(response.statusText, status, {
        response: {
          url,
          status,
          headers,
          data: undefined
        },
        request: requestOptions
      });
    }

    if (status === 304) {
      throw new requestError.RequestError("Not modified", status, {
        response: {
          url,
          status,
          headers,
          data: await getResponseData(response)
        },
        request: requestOptions
      });
    }

    if (status >= 400) {
      const data = await getResponseData(response);
      const error = new requestError.RequestError(toErrorMessage(data), status, {
        response: {
          url,
          status,
          headers,
          data
        },
        request: requestOptions
      });
      throw error;
    }

    return getResponseData(response);
  }).then(data => {
    return {
      status,
      url,
      headers,
      data
    };
  }).catch(error => {
    if (error instanceof requestError.RequestError) throw error;
    throw new requestError.RequestError(error.message, 500, {
      request: requestOptions
    });
  });
}

async function getResponseData(response) {
  const contentType = response.headers.get("content-type");

  if (/application\/json/.test(contentType)) {
    return response.json();
  }

  if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
    return response.text();
  }

  return getBufferResponse(response);
}

function toErrorMessage(data) {
  if (typeof data === "string") return data; // istanbul ignore else - just in case

  if ("message" in data) {
    if (Array.isArray(data.errors)) {
      return `${data.message}: ${data.errors.map(JSON.stringify).join(", ")}`;
    }

    return data.message;
  } // istanbul ignore next - just in case


  return `Unknown error: ${JSON.stringify(data)}`;
}

function withDefaults(oldEndpoint, newDefaults) {
  const endpoint = oldEndpoint.defaults(newDefaults);

  const newApi = function (route, parameters) {
    const endpointOptions = endpoint.merge(route, parameters);

    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint.parse(endpointOptions));
    }

    const request = (route, parameters) => {
      return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
    };

    Object.assign(request, {
      endpoint,
      defaults: withDefaults.bind(null, endpoint)
    });
    return endpointOptions.request.hook(request, endpointOptions);
  };

  return Object.assign(newApi, {
    endpoint,
    defaults: withDefaults.bind(null, endpoint)
  });
}

const request = withDefaults(endpoint.endpoint, {
  headers: {
    "user-agent": `octokit-request.js/${VERSION} ${universalUserAgent.getUserAgent()}`
  }
});

exports.request = request;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3682:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var register = __webpack_require__(4670)
var addHook = __webpack_require__(5549)
var removeHook = __webpack_require__(6819)

// bind with array of arguments: https://stackoverflow.com/a/21792913
var bind = Function.bind
var bindable = bind.bind(bind)

function bindApi (hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state])
  hook.api = { remove: removeHookRef }
  hook.remove = removeHookRef

  ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind]
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args)
  })
}

function HookSingular () {
  var singularHookName = 'h'
  var singularHookState = {
    registry: {}
  }
  var singularHook = register.bind(null, singularHookState, singularHookName)
  bindApi(singularHook, singularHookState, singularHookName)
  return singularHook
}

function HookCollection () {
  var state = {
    registry: {}
  }

  var hook = register.bind(null, state)
  bindApi(hook, state)

  return hook
}

var collectionHookDeprecationMessageDisplayed = false
function Hook () {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4')
    collectionHookDeprecationMessageDisplayed = true
  }
  return HookCollection()
}

Hook.Singular = HookSingular.bind()
Hook.Collection = HookCollection.bind()

module.exports = Hook
// expose constructors as a named property for TypeScript
module.exports.Hook = Hook
module.exports.Singular = Hook.Singular
module.exports.Collection = Hook.Collection


/***/ }),

/***/ 5549:
/***/ ((module) => {

module.exports = addHook;

function addHook(state, kind, name, hook) {
  var orig = hook;
  if (!state.registry[name]) {
    state.registry[name] = [];
  }

  if (kind === "before") {
    hook = function (method, options) {
      return Promise.resolve()
        .then(orig.bind(null, options))
        .then(method.bind(null, options));
    };
  }

  if (kind === "after") {
    hook = function (method, options) {
      var result;
      return Promise.resolve()
        .then(method.bind(null, options))
        .then(function (result_) {
          result = result_;
          return orig(result, options);
        })
        .then(function () {
          return result;
        });
    };
  }

  if (kind === "error") {
    hook = function (method, options) {
      return Promise.resolve()
        .then(method.bind(null, options))
        .catch(function (error) {
          return orig(error, options);
        });
    };
  }

  state.registry[name].push({
    hook: hook,
    orig: orig,
  });
}


/***/ }),

/***/ 4670:
/***/ ((module) => {

module.exports = register;

function register(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }

  if (!options) {
    options = {};
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, callback, options);
    }, method)();
  }

  return Promise.resolve().then(function () {
    if (!state.registry[name]) {
      return method(options);
    }

    return state.registry[name].reduce(function (method, registered) {
      return registered.hook.bind(null, method, options);
    }, method)();
  });
}


/***/ }),

/***/ 6819:
/***/ ((module) => {

module.exports = removeHook;

function removeHook(state, name, method) {
  if (!state.registry[name]) {
    return;
  }

  var index = state.registry[name]
    .map(function (registered) {
      return registered.orig;
    })
    .indexOf(method);

  if (index === -1) {
    return;
  }

  state.registry[name].splice(index, 1);
}


/***/ }),

/***/ 8932:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

class Deprecation extends Error {
  constructor(message) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'Deprecation';
  }

}

exports.Deprecation = Deprecation;


/***/ }),

/***/ 3287:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}

exports.isPlainObject = isPlainObject;


/***/ }),

/***/ 6450:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(5492));
var EnumType_1 = __webpack_require__(1460);
exports.EnumType = EnumType_1.EnumType;
var VariableType_1 = __webpack_require__(4612);
exports.VariableType = VariableType_1.VariableType;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5492:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var EnumType_1 = __webpack_require__(1460);
var VariableType_1 = __webpack_require__(4612);
exports.configFields = [
    '__args', '__alias', '__aliasFor', '__variables', '__directives', '__on', '__all_on', '__typeName', '__name'
];
function stringify(obj_from_json) {
    if (obj_from_json instanceof EnumType_1.EnumType) {
        return obj_from_json.value;
    }
    else if (obj_from_json instanceof VariableType_1.VariableType) {
        return "$" + obj_from_json.value;
    }
    else if (typeof obj_from_json !== 'object' || obj_from_json === null) {
        return JSON.stringify(obj_from_json);
    }
    else if (Array.isArray(obj_from_json)) {
        return "[" + obj_from_json.map(function (item) { return stringify(item); }).join(', ') + "]";
    }
    var props = Object
        .keys(obj_from_json)
        .map(function (key) { return key + ": " + stringify(obj_from_json[key]); })
        .join(', ');
    return "{" + props + "}";
}
function buildArgs(argsObj) {
    var args = [];
    for (var argName in argsObj) {
        args.push(argName + ": " + stringify(argsObj[argName]));
    }
    return args.join(', ');
}
function buildVariables(varsObj) {
    var args = [];
    for (var varName in varsObj) {
        args.push("$" + varName + ": " + varsObj[varName]);
    }
    return args.join(', ');
}
function buildDirectives(dirsObj) {
    var directiveName = Object.keys(dirsObj)[0];
    var directiveValue = dirsObj[directiveName];
    if (typeof directiveValue === 'boolean') {
        return directiveName;
    }
    else if (typeof directiveValue === 'object') {
        var args = [];
        for (var argName in directiveValue) {
            var argVal = stringify(directiveValue[argName]).replace(/"/g, '');
            args.push(argName + ": " + argVal);
        }
        return directiveName + "(" + args.join(', ') + ")";
    }
    else {
        throw new Error("Unsupported type for directive: " + typeof directiveValue + ". Types allowed: object, boolean.\n" +
            ("Offending object: " + JSON.stringify(dirsObj)));
    }
}
function getIndent(level) {
    return Array((level * 4) + 1).join(' ');
}
function filterNonConfigFields(fieldName, ignoreFields) {
    return exports.configFields.indexOf(fieldName) == -1 && ignoreFields.indexOf(fieldName) == -1;
}
function convertQuery(node, level, output, options) {
    Object.keys(node)
        .filter(function (key) { return filterNonConfigFields(key, options.ignoreFields); })
        .forEach(function (key) {
        var value = node[key];
        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                value = value.find(function (item) { return item && typeof item === 'object'; });
                if (!value) {
                    output.push(["" + key, level]);
                    return;
                }
            }
            var fieldCount = Object.keys(value)
                .filter(function (keyCount) { return filterNonConfigFields(keyCount, options.ignoreFields); }).length;
            var subFields = fieldCount > 0;
            var argsExist = typeof value.__args === 'object';
            var directivesExist = typeof value.__directives === 'object';
            var fullFragmentsExist = value.__all_on instanceof Array;
            var partialFragmentsExist = typeof value.__on === 'object';
            var token = "" + key;
            if (typeof value.__name === 'string') {
                token = token + " " + value.__name;
            }
            if (typeof value.__aliasFor === 'string') {
                token = token + ": " + value.__aliasFor;
            }
            if (typeof value.__variables === 'object') {
                token = token + " (" + buildVariables(value.__variables) + ")";
            }
            else if (argsExist || directivesExist) {
                var argsStr = '';
                var dirsStr = '';
                if (directivesExist) {
                    var numDirectives = Object.keys(value.__directives).length;
                    if (numDirectives > 1) {
                        throw new Error("Too many directives. The object/key " +
                            ("'" + Object.keys(value)[0] + "' had " + numDirectives + " directives, ") +
                            "but only 1 directive per object/key is supported at this time.");
                    }
                    dirsStr = "@" + buildDirectives(value.__directives);
                }
                if (argsExist) {
                    argsStr = "(" + buildArgs(value.__args) + ")";
                }
                var spacer = directivesExist && argsExist ? ' ' : '';
                token = token + " " + dirsStr + spacer + argsStr;
            }
            output.push([token + (subFields || partialFragmentsExist || fullFragmentsExist ? ' {' : ''), level]);
            convertQuery(value, level + 1, output, options);
            if (fullFragmentsExist) {
                value.__all_on.forEach(function (fullFragment) {
                    output.push(["..." + fullFragment, level + 1]);
                });
            }
            if (partialFragmentsExist) {
                var inlineFragments = value.__on instanceof Array ? value.__on : [value.__on];
                inlineFragments.forEach(function (inlineFragment) {
                    var name = inlineFragment.__typeName;
                    output.push(["... on " + name + " {", level + 1]);
                    convertQuery(inlineFragment, level + 2, output, options);
                    output.push(['}', level + 1]);
                });
            }
            if (subFields || partialFragmentsExist || fullFragmentsExist) {
                output.push(['}', level]);
            }
        }
        else if (options.includeFalsyKeys === true || value) {
            output.push(["" + key, level]);
        }
    });
}
function jsonToGraphQLQuery(query, options) {
    if (options === void 0) { options = {}; }
    if (!query || typeof query != 'object') {
        throw new Error('query object not specified');
    }
    if (Object.keys(query).length == 0) {
        throw new Error('query object has no data');
    }
    if (!(options.ignoreFields instanceof Array)) {
        options.ignoreFields = [];
    }
    var queryLines = [];
    convertQuery(query, 0, queryLines, options);
    var output = '';
    queryLines.forEach(function (_a) {
        var line = _a[0], level = _a[1];
        if (options.pretty) {
            if (output) {
                output += '\n';
            }
            output += getIndent(level) + line;
        }
        else {
            if (output) {
                output += ' ';
            }
            output += line;
        }
    });
    return output;
}
exports.jsonToGraphQLQuery = jsonToGraphQLQuery;
//# sourceMappingURL=jsonToGraphQLQuery.js.map

/***/ }),

/***/ 1460:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var EnumType = (function () {
    function EnumType(value) {
        this.value = value;
    }
    return EnumType;
}());
exports.EnumType = EnumType;
//# sourceMappingURL=EnumType.js.map

/***/ }),

/***/ 4612:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var VariableType = (function () {
    function VariableType(value) {
        this.value = value;
    }
    VariableType.prototype.toJSON = function () {
        return "$" + this.value;
    };
    return VariableType;
}());
exports.VariableType = VariableType;
//# sourceMappingURL=VariableType.js.map

/***/ }),

/***/ 467:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Stream = _interopDefault(__webpack_require__(2413));
var http = _interopDefault(__webpack_require__(8605));
var Url = _interopDefault(__webpack_require__(8835));
var https = _interopDefault(__webpack_require__(7211));
var zlib = _interopDefault(__webpack_require__(8761));

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = __webpack_require__(2877).convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

module.exports = exports = fetch;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = exports;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.FetchError = FetchError;


/***/ }),

/***/ 1223:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(2940)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 4294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(4219);


/***/ }),

/***/ 4219:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var net = __webpack_require__(1631);
var tls = __webpack_require__(4016);
var http = __webpack_require__(8605);
var https = __webpack_require__(7211);
var events = __webpack_require__(8614);
var assert = __webpack_require__(2357);
var util = __webpack_require__(1669);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 5030:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }

  if (typeof process === "object" && "version" in process) {
    return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
  }

  return "<environment undetectable>";
}

exports.getUserAgent = getUserAgent;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2940:
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ 2877:
/***/ ((module) => {

module.exports = eval("require")("encoding");


/***/ }),

/***/ 2357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");;

/***/ }),

/***/ 8614:
/***/ ((module) => {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 8605:
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 7211:
/***/ ((module) => {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 1631:
/***/ ((module) => {

"use strict";
module.exports = require("net");;

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 2413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 4016:
/***/ ((module) => {

"use strict";
module.exports = require("tls");;

/***/ }),

/***/ 8835:
/***/ ((module) => {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 8761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__webpack_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(3109);
/******/ })()
;
//# sourceMappingURL=index.js.map