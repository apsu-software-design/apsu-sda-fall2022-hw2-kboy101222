"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizations = exports.Organization = void 0;
var members_1 = require("./members");
var Organization = (function () {
    function Organization(id, name) {
        this.id = id;
        this.name = name;
        this.members = new members_1.Members();
    }
    Organization.prototype.registerMember = function (name, email) {
        this.members.addMember(name, email);
    };
    Organization.prototype.listMembers = function () {
        this.members.listAllMembers();
    };
    return Organization;
}());
exports.Organization = Organization;
var Organizations = (function () {
    function Organizations(members) {
        this.members = members;
        this.organizations = [];
    }
    Organizations.prototype.addOrg = function (id, name) {
        if (typeof this.organizations[id] === 'undefined') {
            this.organizations[id] = new Organization(id, name);
        }
        else {
            console.log("That organization ID is already being used.\nPlease select a different ID");
        }
    };
    Organizations.prototype.listAllOrgs = function () {
        this.organizations.forEach(function (element) {
            console.log("[".concat(element.id, "] ").concat(element.name));
        });
    };
    Organizations.prototype.findOrgByName = function (name) {
        this.organizations.forEach(function (element, index) {
            if (element.name == name) {
                return index;
            }
        });
        return false;
    };
    Organizations.prototype.findOrganization = function (query) {
        var outList = [];
        this.organizations.forEach(function (element) {
            if (element.name == query) {
                outList.push(element.name);
            }
        });
        return outList;
    };
    return Organizations;
}());
exports.Organizations = Organizations;
//# sourceMappingURL=organizations.js.map