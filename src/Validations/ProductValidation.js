import * as Yup from "yup";
// const FILE_SIZE = 502 * 1024;
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const UserValidation = Yup.object().shape({
    title: Yup.string().required("Field is required").nullable(),
    price: Yup.string().required("Field is required").nullable(),
    description: Yup.string().required("Field is required").nullable(),
    tags: Yup.string().required("Field is required").nullable(),
    categories: Yup.string().required("Field is required").nullable(),
    status: Yup.string().required("Field is required").nullable(),
});

export default UserValidation;
