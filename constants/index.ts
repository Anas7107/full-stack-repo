export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "Aadhar Card",
  "Passport",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Dr.John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Dr.Leila Cameron",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Dr.David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Dr.Evan Peter",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Dr.Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Dr.Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Dr.Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Dr.Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Dr.Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};