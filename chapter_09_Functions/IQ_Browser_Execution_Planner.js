function planExecution(allBrowsers, blockedBrowsers) {
    const runnable = allBrowsers.filter(
        browser => !blockedBrowsers.includes(browser)
    );

    const blocked = allBrowsers.filter(
        browser => blockedBrowsers.includes(browser)
    );

    const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;

    return { runnable, blocked, plan };
}

const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

const result = planExecution(allBrowsers, blockedBrowsers);
console.log(result);