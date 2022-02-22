import * as Yup from "yup";

const RoleValidation = Yup.object().shape({
    name: Yup.string()
        .required("Field is required")
        .nullable()
        .matches(".*\\S+.*", "Blank Space not allowed"),
    permissions: Yup.string().required("Field is required").nullable(),
});

export default RoleValidation;
