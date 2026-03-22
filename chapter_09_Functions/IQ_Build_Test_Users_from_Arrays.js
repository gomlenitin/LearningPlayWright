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