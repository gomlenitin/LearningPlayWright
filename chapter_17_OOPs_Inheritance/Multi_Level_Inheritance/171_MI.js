// Grand Father -> Father -> Son
// BasePage -> AuthPape -> AdminPage

class BasePage {
    constructor(name) {
        this.name = name;
    }

    open() {
        console.log("[OPEN Base Page Class] " + this.name);
    }
}

class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN Auth Page Class] " + user);
    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel");
    }

    manageUsers() {
        console.log("[ADMIN Admin Page Class] Managing users");
    }
}

let admin = new AdminPage();
admin.open();
admin.login("superadmin");
admin.manageUsers();



