// Pure JavaScript helpers for the enquiry form (no React in this file).

export const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  destination: "",
  visitors: "",
  visitDate: "",
  message: "",
};

// Today's date as YYYY-MM-DD in the visitor's local time.
export function todayString() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

// Check every field and return an object of error messages.
// An empty object means the form is valid.
export function validateEnquiry(values) {
  const errors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = "Enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address, like name@example.com.";
  }

  if (!/^\+?[0-9\s-]{8,15}$/.test(values.phone.trim())) {
    errors.phone = "Enter a phone number with 8 to 15 digits.";
  }

  if (!values.destination) {
    errors.destination = "Choose a destination.";
  }

  const visitors = Number(values.visitors);
  if (!values.visitors || !Number.isInteger(visitors) || visitors < 1 || visitors > 50) {
    errors.visitors = "Enter a whole number of visitors between 1 and 50.";
  }

  if (!values.visitDate) {
    errors.visitDate = "Pick a preferred visit date.";
  } else if (values.visitDate < todayString()) {
    errors.visitDate = "The visit date can't be in the past.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Write a message of at least 10 characters.";
  }

  return errors;
}
