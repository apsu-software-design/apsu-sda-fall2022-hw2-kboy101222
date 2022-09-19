import { type } from "os";

class Member {
    name: String;
    email: String;

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

export class Members {
    members: Member[];

    constructor() {
        this.members = [];
    }

    addMember(name: String, email: String): void {
        let mem: Member = new Member(name, email);
        this.members.push(mem);
    }

    listAllMembers(): String[] {
        let outList = [];
        this.members.forEach(element => {
            outList.push(`${element.name} | ${element.email}\n`);
        });
        return outList;
    }

    findMemberByEmail(email: String): any {
        this.members.forEach(element => {
            if (element.email == email) {
                return (element.name, element.email);
            }
        });

        return false;
    }

    findMemberByName(name: String): any {
        this.members.forEach(element => {
            if (element.name == name) {
                return (element.name, element.email);
            }
        });

        return false;
    }

    findMember(query: String): string[] {
        let outList = [];
        this.members.forEach(element => {
            if (element.email == query || element.name == query){
                outList.push(element.name);
            }
        });
        return outList;
    }
}