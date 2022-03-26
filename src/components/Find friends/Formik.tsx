import React, { FC } from "react";
import { Formik, Form, Field } from 'formik';
import { FilterForm } from "../../Redux/Friend-reducer";

const UsersValidateForm = (values: any) => {
    const errors = {}
    return errors
}
type FormikType ={
    term: string
    friend: 'true' | 'false' | 'null'
}

type Formtype = {
    onFilterChanged: (filter: FilterForm) => void
}

const SearchFormik: FC<Formtype> = React.memo((props) => {

    const submit = (values: FilterForm, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FormikType = {
            term: values.term,
            friend: values.friend === 'null' ? null: values.friend === 'true' ? true : false
        }
        props.onFilterChanged(values)
        setSubmitting(false)
    }

    return (
        <div>
            <h1>Search </h1>

            <Formik
                initialValues={{ tern: '', friend: "null" }}
                validate={UsersValidateForm}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field name='friend' as='select'>
                            <option value="null">All</option>
                            <option value="true">Friend</option>
                            <option value="false">People</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )

})
export default SearchFormik