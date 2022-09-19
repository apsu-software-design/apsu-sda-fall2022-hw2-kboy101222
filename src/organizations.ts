import { Members } from "./members";

export class Organization {
    id: number;
    name: String;
    members: Members;

    constructor(id: number, name: String) {
        this.id = id;
        this.name = name;
        this.members = new Members();
    }

    registerMember(name: String, email: String) {
        this.members.addMember(name, email);
    }

    listMembers() {
        this.members.listAllMembers();
    }

}

export class Organizations {
    members: Members;
    organizations: Organization[];

    constructor(members: Members) {
        this.members = members;
        this.organizations = [];
    }

    addOrg(id: number, name: String) {
        if (typeof this.organizations[id] === 'undefined') {
            this.organizations[id] = new Organization(id, name);
        } else {
            console.log("That organization ID is already being used.\nPlease select a different ID");
        }
    }

    listAllOrgs() {
        this.organizations.forEach(element => {
            console.log(`[${element.id}] ${element.name}`);
        });
    }

    findOrgByName(name: String): any {
        this.organizations.forEach((element, index) => {
            if (element.name == name) {
                return index;
            }
        });
        return false;
    }

    findOrganization(query: String): string[] {
        let outList = [];
        this.organizations.forEach(element => {
            if (element.name == query){
                outList.push(element.name);
            }
        });
        return outList;
    }
}