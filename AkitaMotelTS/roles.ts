// Define the user roles as constants
export const roles = {
  PATIENT: "patient",
  DOCTOR: "doctor",
  CLINIC: "clinic",
};

// Define the detailed properties for each role
export const rolesDetails = {
  [roles.PATIENT]: {
    label: "Patient",
    icon: "mdi-account-injury-outline",
  },
  [roles.DOCTOR]: {
    label: "Doctor",
    icon: "mdi-doctor",
  },
  [roles.CLINIC]: {
    label: "Clinic",
    icon: "mdi-flask",
  },
};

// Define the role-based routes
export const roleRoutes: Record<string, string[]> = {
  [roles.PATIENT]: ["/portal/otp-patient"],
  [roles.CLINIC]: ["/portal/corporate"],
  [roles.DOCTOR]: ["/portal/corporate"],
};
