"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatheringManager = void 0;
var members_1 = require("./members");
var gatherings_1 = require("./gatherings");
var organizations_1 = require("./organizations");
var GatheringManager = (function () {
    function GatheringManager() {
        this.members = new members_1.Members();
        this.orgs = new organizations_1.Organizations(this.members);
        this.gatherings = new gatherings_1.Gatherings(this.orgs);
    }
    GatheringManager.prototype.addMember = function (name, email) {
        this.members.addMember(name, email);
    };
    GatheringManager.prototype.addGathering = function (title, location, date) {
        this.gatherings.addGathering(title, location, date);
    };
    GatheringManager.prototype.addOrganization = function (title) {
        this.orgs.addOrg(this.orgs.organizations.length, title);
    };
    GatheringManager.prototype.addMemberToGathering = function (name, gatheringTitle) {
        this.gatherings.addMemberToGathering(name, gatheringTitle);
    };
    GatheringManager.prototype.addGatheringToOrganization = function (gatheringTitle, organizationTitle) {
        this.gatherings.addOrgToGathering(gatheringTitle, organizationTitle);
    };
    GatheringManager.prototype.modifyGathering = function (title, newTitle, newDate) {
        this.gatherings.modifyGathering(title, newTitle, newDate);
    };
    GatheringManager.prototype.getMembers = function (gatheringTitle) {
        var outString = this.gatherings.orgList.members.listAllMembers();
        return outString;
    };
    GatheringManager.prototype.findMemberNames = function (query) {
        return this.members.findMember(query);
    };
    GatheringManager.prototype.findGatheringNames = function (query) {
        return this.gatherings.findGathering(query);
    };
    GatheringManager.prototype.findOrganizationNames = function (query) {
        return this.orgs.findOrganization(query);
    };
    return GatheringManager;
}());
exports.GatheringManager = GatheringManager;
//# sourceMappingURL=manager.js.map