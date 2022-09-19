"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gatherings = void 0;
var members_1 = require("./members");
var Gathering = (function () {
    function Gathering(name, location, gatheringTime, hostOrgId) {
        this.name = name;
        this.gatheringTime = gatheringTime;
        this.location = location;
        this.members = new members_1.Members();
        if (typeof hostOrgId !== undefined) {
            this.hostOrgId = hostOrgId;
        }
    }
    Gathering.prototype.registerMember = function (name, email) {
        var memInfo = this.members.findMemberByEmail;
        if (!(typeof memInfo === 'boolean')) {
            memInfo = this.members.findMemberByEmail(email);
            this.members.addMember(memInfo[0], memInfo[1]);
        }
        else {
            console.log("That member does not exist or is not a member of this organization");
        }
    };
    Gathering.prototype.getMembers = function () {
        this.members.listAllMembers();
    };
    return Gathering;
}());
var Gatherings = (function () {
    function Gatherings(orgList) {
        this.orgList = orgList;
        this.gatherings = [];
    }
    Gatherings.prototype.addGathering = function (name, location, gatheringTime, hostOrgId) {
        if (typeof hostOrgId !== 'undefined') {
            if (this.orgList[hostOrgId] === 'undefined') {
                console.log("There are no organizations with that Id");
            }
            else {
                this.gatherings.push(new Gathering(name, location, gatheringTime, hostOrgId));
            }
        }
        else {
            this.gatherings.push(new Gathering(name, location, gatheringTime));
        }
    };
    Gatherings.prototype.listGatheringByOrg = function (hostOrgId) {
        this.gatherings.forEach(function (element, index) {
            if (element.hostOrgId == hostOrgId) {
                console.log("[".concat(index, "] ").concat(element.name, " | ").concat(element.gatheringTime));
            }
        });
    };
    Gatherings.prototype.listGatheringMembers = function (gatheringId) {
        if (typeof this.gatherings[gatheringId] === 'undefined') {
            console.log("The gathering with Id ".concat(gatheringId, " does not exist."));
        }
        else {
            this.gatherings[gatheringId].members.listAllMembers();
        }
    };
    Gatherings.prototype.findGatheringByName = function (name) {
        this.gatherings.forEach(function (element, index) {
            if (element.name == name) {
                return index;
            }
        });
        return false;
    };
    Gatherings.prototype.findGathering = function (query) {
        var outList = [];
        this.gatherings.forEach(function (element) {
            if (element.name == query || element.gatheringTime == query || element.location == query) {
                outList.push(element.name);
            }
        });
        return outList;
    };
    Gatherings.prototype.addMemberToGathering = function (name, gatheringTitle) {
        var person = this.orgList.members.findMemberByName(name);
        var gathering = this.findGatheringByName(gatheringTitle);
        if (person != false && gathering != false) {
            this.gatherings[gathering].registerMember(person[0], person[1]);
        }
    };
    Gatherings.prototype.addOrgToGathering = function (gatheringTitle, orgTitle) {
        var org = this.orgList.findOrgByName(orgTitle);
        var gathering = this.findGatheringByName(gatheringTitle);
        this.gatherings[gathering].hostOrgId = org;
    };
    Gatherings.prototype.modifyGathering = function (title, newTitle, newDate) {
        var gathering = this.findGatheringByName(title);
        this.gatherings[gathering].name = newTitle;
        if (typeof newDate !== 'undefined') {
            this.gatherings[gathering].gatheringTime = newDate;
        }
    };
    return Gatherings;
}());
exports.Gatherings = Gatherings;
//# sourceMappingURL=gatherings.js.map