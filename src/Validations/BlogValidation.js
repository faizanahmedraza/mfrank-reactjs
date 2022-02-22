import * as Yup from "yup";
const FILE_SIZE = 502 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const UserValidation = Yup.object().shape({
    title: Yup.string().required("Field is required").nullable(),
    description: Yup.string().required("Field is required").nullable(),
    link: Yup.string()
        .required("Field is required")
        .nullable(),
    tags: Yup.string().required("Field is required").nullable(),
    status: Yup.string().required("Field is required").nullable(),
    image_value: Yup.mixed().required("Field is required").nullable()
    .test(
        "fileSize",
        "The file is too large. Allowed maximum size in 500Kbs.",
        (value) => {
            if (value === null) {
                return 100 <= FILE_SIZE;
            } else {
                return value && value.size <= FILE_SIZE;
            }
        }
    )
    .test(
        "fileFormat",
        "Upload valid image, Only jpg, png, jpeg, gif are allowed",
        (value) => {
            if (value === null) {
                return SUPPORTED_FORMATS.includes("image/jpg");
            } else {
                return value && SUPPORTED_FORMATS.includes(value.type);
            }
        }
    ),
});

export default UserValidation;
