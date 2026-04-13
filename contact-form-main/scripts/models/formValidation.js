/**
 * Validates the contact form fields.
 * @param {Object} param0 - The form fields to validate.
 * @param {HTMLInputElement} param0.firstName - The first name field.
 * @param {HTMLInputElement} param0.lastName - The last name field.
 * @param {HTMLInputElement} param0.email - The email field.
 * @param {HTMLInputElement} param0.message - The message field.
 * @param {HTMLInputElement} param0.queryType - The query type field.
 * @returns {string[]} An array of error fields.
 */
export function validateForm(rawFormData) {
  const errors = [];
  // check for empty fields and trim whitespace
  for (const [field, value] of Object.entries({
    "first-name": rawFormData.get("first-name"),
    "last-name": rawFormData.get("last-name"),
    email: rawFormData.get("email"),
    message: rawFormData.get("message"),
    "query-type": rawFormData.get("query-type"),
    consent: rawFormData.get("consent"),
  })) {
    if (!value || value.trim() === "") {
      errors.push(field);
    }
  }
  // validate email format if email is provided
  if (
    rawFormData.get("email") &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawFormData.get("email").trim())
  ) {
    errors.push("email");
  }

  return errors;
}
