import * as Yup from 'yup';

const GroupValidation = Yup.object().shape({
    name: Yup.string().required('Field is required').nullable(),
    status: Yup.string().required('Field is required').nullable(),
});

export default GroupValidation;
