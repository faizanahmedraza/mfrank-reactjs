import * as Yup from "yup";

const TagValidation = Yup.object().shape({
  name: Yup.string().required("Field is required").nullable(),
});

export default TagValidation;
