const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is Invalid");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is Invalid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error(" please enter a strong Password");
  }
};

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "photoUrl",
    "about",
    "skills",
  ];

  const isEditProfileAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditProfileAllowed;
};

const validateEditPassword = (req) => {
  const allowedEditFields = [
    "oldPassword",
    "newPassword",
    "reEnterNewPassword",
  ];

  const isEditPasswordAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditPasswordAllowed;
};

module.exports = {
  validateSignUpData,
  validateEditProfileData,
  validateEditPassword,
};
