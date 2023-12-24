function maskEmail(email) {
    // Split the email address into username and domain
    const [username, domain] = email.split("@")

    // Replace characters in the username with asterisks
    const hiddenUsername =
        username[0] + "*".repeat(username.length - 2) + username.slice(-1)

    // Recreate the masked email address
    const maskedEmail = hiddenUsername + "@" + domain

    return maskedEmail
}

function maskPhoneNumber(phoneNumber) {
    // Check if the phoneNumber is a valid string
    if (typeof phoneNumber !== "string") {
        console.error("Input must be a string.")
        return null
    }

    // Replace characters in the beginning with asterisks
    const hiddenPart = "*".repeat(phoneNumber.length - 2)

    // Keep the last two characters
    const maskedPhoneNumber = hiddenPart + phoneNumber.slice(-2)

    return maskedPhoneNumber
}

export {
    maskEmail,
    maskPhoneNumber
}