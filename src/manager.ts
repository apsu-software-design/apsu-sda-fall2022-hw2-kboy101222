//your code goes here!

// These import statements are suggestions on how to get your three main libraries into this code.
// You'll need to create each of these libraries.
import { Members } from './members';
import { Gatherings } from './gatherings';
import { Organizations } from './organizations';

export class GatheringManager {
    members: Members;
    orgs: Organizations;
    gatherings: Gatherings;

    constructor() {
        this.members = new Members();
        this.orgs = new Organizations(this.members);
        this.gatherings = new Gatherings(this.orgs);
    }

    addMember(name: string, email: string) {
        this.members.addMember(name, email);
    }

    addGathering(title: string, location: string, date: string) {
        this.gatherings.addGathering(title, location, date)
    }

    addOrganization(title: string) {
        this.orgs.addOrg(this.orgs.organizations.length, title);
    }

    addMemberToGathering(name: string, gatheringTitle: string) {
        this.gatherings.addMemberToGathering(name, gatheringTitle);
    }

    addGatheringToOrganization(gatheringTitle: string, organizationTitle: string) {
        this.gatherings.addOrgToGathering(gatheringTitle, organizationTitle);
    }

    modifyGathering(title: string, newTitle: string, newDate?: string) {
        this.gatherings.modifyGathering(title, newTitle, newDate);
    }

    getMembers(gatheringTitle: string): String[] {
        let outString = this.gatherings.orgList.members.listAllMembers();
        return outString;
    }

    findMemberNames(query: string): string[] {
        return this.members.findMember(query);
    }

    findGatheringNames(query: string): string[] {
        return this.gatherings.findGathering(query);
    }

    findOrganizationNames(query: string): string[] {
        return this.orgs.findOrganization(query);
    }
}
