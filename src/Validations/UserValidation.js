import * as Yup from "yup";

const UserValidation = Yup.object().shape({
    first_name: Yup.string().required("Field is required").matches(/^[a-zA-Z-]+$/, "Can not contain special characters and numbers").nullable(),
    last_name: Yup.string().required("Field is required").matches(/^[a-zA-Z-]+$/, "Can not contain special characters and numbers").nullable(),
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
    password: Yup.string()
        .required("Field is required")
        .min(6, "Password should be minimun 6 characters")
        .max(16, "Password should be maximum 16 characters")
        .nullable(),
    password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Does not match with password!")
        // .required("Required"),
        .required("Field is required")
        .nullable(),
    roles: Yup.string().required("Field is required").nullable(),
    status: Yup.string().required("Field is required").nullable(),
});

export const PasswordValidation = Yup.object().shape({

    password: Yup.string()
        .required("Field is required")
        .min(6, "Password should be minimun 6 characters")
        .max(16, "Password should be maximum 16 characters")
        .nullable(),
  });


export default UserValidation;
