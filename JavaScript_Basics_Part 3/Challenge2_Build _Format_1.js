// Build Test Users from Arrays
// Write a JavaScript function that receives two arrays
// : one with names and one with roles. 
// Return a new array of user objects in the format `{ username, email, role }`. 
// The username should be lowercase with spaces replaced by 
// underscores, and the email should use the domain `@playwrightbatch.com`.

// names = ["Amit Kumar", "Neha Singh"], roles = ["admin", "viewer"]

// [{ username: "amit_kumar", email: "amit_kumar@playwrightbatch.com", role: "admin" }, { username: "neha_singh", email: "neha_singh@playwrightbatch.com", role: "viewer" }]

function buildUsers(names, roles) {
    return names.map((name, index) => {
        const username = name.toLowerCase().replaceAll(" ", "_");
        return {
            username: username,
            email: `${username}@playwrightbatch.com`,
            role: roles[index]
        };
    });
}
const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];
const users = buildUsers(names, roles);
console.log(users);