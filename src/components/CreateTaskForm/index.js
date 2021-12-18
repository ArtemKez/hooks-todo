import "../../App.css"
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";

export default function CreateTaskForm(props) {
    const SignInSchema = Yup.object().shape({
        text: Yup.string().required('Please Feel In Task')
    })
    return (
        <div className={"create-task-form"}>
            <h2>New Task</h2>
            <Formik
                initialValues={{text: ''}}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    console.log(values)
                    props.addNewItem(values)
                    // setSubmitting(false);
                    resetForm({})
                }}
                validationSchema={SignInSchema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field
                            className={"form-style"}
                            type="text"
                            name="text"
                            value={values.text}
                        />
                        {
                            errors.text && touched.text ?
                                <div className={"error"}>{errors.text}</div>
                                : ''
                        }
                        <button className={"add"} type="submit" disabled={isSubmitting || errors.text}>
                            ADD
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}