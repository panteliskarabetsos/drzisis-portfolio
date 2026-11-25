// Shared by the contact form (client) and the contact API route (server)
// so both enforce the same input length limits.
export const MAX_NAME_LENGTH = 100;
export const MAX_EMAIL_LENGTH = 254;
export const MAX_MESSAGE_LENGTH = 5000;
