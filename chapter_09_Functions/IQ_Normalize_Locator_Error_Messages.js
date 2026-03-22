function normalizeError(rawMessage) {
    // Normalize message
    const normalized = rawMessage
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

    // Determine category
    let category = "GENERAL";

    if (normalized.includes("timeout")) {
        category = "TIMEOUT";
    } else if (normalized.includes("locator")) {
        category = "LOCATOR";
    }

    console.log(`Normalized: ${normalized} Category: ${category}`);
}

const rawMessage = " Locator not found after TIMEOUT ";
normalizeError(rawMessage);