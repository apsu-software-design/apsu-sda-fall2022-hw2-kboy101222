import internal = require("assert");
import { Members } from "./members";
import { Organizations } from "./organizations";

class Gathering {
    name: String;
    hostOrgId: number;
    gatheringTime: String;
    members: Members;
    location: String;

    constructor(name: String, location: String, gatheringTime: String, hostOrgId?: number) {
        this.name = name;
        this.gatheringTime = gatheringTime;
        this.location = location;
        this.members = new Members();
        if (typeof hostOrgId !== undefined) {
            this.hostOrgId = hostOrgId;
        }
    }

    registerMember(name: String, email: String) {
        let memInfo = this.members.findMemberByEmail;
        if (!(typeof memInfo === 'boolean')) {
            memInfo = this.members.findMemberByEmail(email);
            this.members.addMember(memInfo[0], memInfo[1]);
        } else {
            console.log(`That member does not exist or is not a member of this organization`);
        }
    }

    getMembers() {
        this.members.listAllMembers();
    }
}

export class Gatherings {
    gatherings: Gathering[];
    orgList: Organizations;

    constructor(orgList: Organizations) {
        this.orgList = orgList;
        this.gatherings = [];
    }

    addGathering(name: String, location: String, gatheringTime: String, hostOrgId?: number) {
        if (typeof hostOrgId !== 'undefined') {
            if (this.orgList[hostOrgId] === 'undefined') {
                console.log("There are no organizations with that Id")
            } else {
                this.gatherings.push(new Gathering(name, location, gatheringTime, hostOrgId));
            }
        } else {
            this.gatherings.push(new Gathering(name, location, gatheringTime));
        }
    }

    listGatheringByOrg(hostOrgId: number) {
        this.gatherings.forEach((element, index) => {
            if (element.hostOrgId == hostOrgId) {
                console.log(`[${index}] ${element.name} | ${element.gatheringTime}`);
            }
        });
    }

    listGatheringMembers(gatheringId: number) {
        if (typeof this.gatherings[gatheringId] === 'undefined') {
            console.log(`The gathering with Id ${gatheringId} does not exist.`);
        } else {
            this.gatherings[gatheringId].members.listAllMembers();
        }
    }

    findGatheringByName(name: String): any {
        this.gatherings.forEach((element, index) => {
            if (element.name == name) {
                return index;
            }
        });
        return false;
    }

    findGathering(query: String): string[] {
        let outList = [];
        this.gatherings.forEach(element => {
            if (element.name == query || element.gatheringTime == query || element.location == query){
                outList.push(element.name);
            }
        });
        return outList;
    }

    addMemberToGathering(name: String, gatheringTitle: String) {
        let person = this.orgList.members.findMemberByName(name);
        let gathering = this.findGatheringByName(gatheringTitle);

        if (person != false && gathering != false) {
            this.gatherings[gathering].registerMember(person[0], person[1]);
        }
    }

    addOrgToGathering(gatheringTitle: string, orgTitle: String) {
        let org = this.orgList.findOrgByName(orgTitle);
        let gathering = this.findGatheringByName(gatheringTitle);

        this.gatherings[gathering].hostOrgId = org;
    }

    modifyGathering(title: string, newTitle: string, newDate?: string) {
        let gathering = this.findGatheringByName(title);

        this.gatherings[gathering].name = newTitle;
        if (typeof newDate !== 'undefined') {
            this.gatherings[gathering].gatheringTime = newDate;
        }
    }
}