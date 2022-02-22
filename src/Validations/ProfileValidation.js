import * as Yup from "yup";

const ProfileValidation = Yup.object().shape({
  first_name: Yup.string().required("Field is required").nullable(),
  last_name: Yup.string().required("Field is required").nullable(),
  email: Yup.string()
    .required("Field is required")
    .nullable()
    .email("Email should be Valid Format"),
  // phone: Yup.number()
  //     .required("Field is required")
  //     .integer("Invalid Format")
  //     .positive("Phone Number should be Positive")
  //     .typeError("Invalid Format")
  //     .nullable()
  //     .transform((value, originalValue) =>
  //         originalValue.trim() === "" ? null : value
  //     ),
  //   password: Yup.string()
  //     .required("Field is required")
  //     .min(6, "Password should be minimun 6 characters")
  //     .max(16, "Password should be maximum 16 characters")
  //     .nullable(),
  //   password_confirmation: Yup.string()
  // .oneOf([Yup.ref("password"), null], "Does not match with password!")
  // .required("Required"),
  //     .required("Field is required")
  //     .nullable(),
  //   roles: Yup.string().required("Field is required").nullable(),
});

export const PasswordValidation = Yup.object().shape({
  // first_name: Yup.string().required("Field is required").nullable(),
  // last_name: Yup.string().required("Field is required").nullable(),
  // email: Yup.string()
  //   .required("Field is required")
  //   .nullable()
  //   .email("Email should be Valid Format"),
  // phone: Yup.number()
  //     .required("Field is required")
  //     .integer("Invalid Format")
  //     .positive("Phone Number should be Positive")
  //     .typeError("Invalid Format")
  //     .nullable()
  //     .transform((value, originalValue) =>
  //         originalValue.trim() === "" ? null : value
  //     ),
  old_password: Yup.string()
    .required("Field is required")
    .min(6, "Password should be minimun 6 characters")
    .max(16, "Password should be maximum 16 characters")
    .nullable(),
  password: Yup.string()
    .required("Field is required")
    .min(6, "Password should be minimun 6 characters")
    .max(16, "Password should be maximum 16 characters")
    .nullable(),
  //   password_confirmation: Yup.string()
  // .oneOf([Yup.ref("password"), null], "Does not match with password!")
  // .required("Required"),
  //     .required("Field is required")
  //     .nullable(),
  //   roles: Yup.string().required("Field is required").nullable(),
});

export default ProfileValidation;
