import { toast } from "react-toastify";

export const validate = function (data) {
  const errors = {};

  if (!data.fullName.length) {
    errors.fullName = true;
  } else {
    delete errors.fullName;
  }

  if (!data.phoneNumber.length) {
    errors.phoneNumber = true;
  } else {
    delete errors.phoneNumber;
  }

  if (!data.age.length) {
    errors.age = true;
  } else {
    delete errors.age;
  }

  if (!data.description.length) {
    errors.description = true;
  } else {
    delete errors.description;
  }

  return errors;
};

export const notify = (message, type) => {
  if (type === "success") {
    toast.success(message);
  } else {
    toast.error(message);
  }
};
