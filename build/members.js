"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
var Member = (function () {
    function Member(name, email) {
        this.name = name;
        this.email = email;
    }
    return Member;
}());
var Members = (function () {
    function Members() {
        this.members = [];
    }
    Members.prototype.addMember = function (name, email) {
        var mem = new Member(name, email);
        this.members.push(mem);
    };
    Members.prototype.listAllMembers = function () {
        var outList = [];
        this.members.forEach(function (element) {
            outList.push("".concat(element.name, " | ").concat(element.email, "\n"));
        });
        return outList;
    };
    Members.prototype.findMemberByEmail = function (email) {
        this.members.forEach(function (element) {
            if (element.email == email) {
                return (element.name, element.email);
            }
        });
        return false;
    };
    Members.prototype.findMemberByName = function (name) {
        this.members.forEach(function (element) {
            if (element.name == name) {
                return (element.name, element.email);
            }
        });
        return false;
    };
    Members.prototype.findMember = function (query) {
        var outList = [];
        this.members.forEach(function (element) {
            if (element.email == query || element.name == query) {
                outList.push(element.name);
            }
        });
        return outList;
    };
    return Members;
}());
exports.Members = Members;
//# sourceMappingURL=members.js.map