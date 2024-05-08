import { GithubIssuePayload, GitHubStartPayload } from "../../interfaces";


export class GithubService {

    constructor(){}


    onStart(payload: GitHubStartPayload): string {

        let message: string = "";
        const { action, sender , repository ,starred_at } = payload

        return message = `User ${sender.login} ${action} star on ${ repository.full_name }`;

    }

    onIssue(payload: GithubIssuePayload) {

        const { action, issue } = payload

        if ( action === "opened" ) {
            return `An issue was opened with this tittle ${ issue.title }`
        }
        if ( action === "closed" ) {
            return `An issue was closed by ${ issue.user.login }`
        }
        if ( action === "reopened" ) {
            return `An issue was reopened by ${ issue.user.login }`
        }

        return `Unhanled action for the issue event ${ action }`
    }

}