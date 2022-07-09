import { Formik, Field, Form } from 'formik';

const Login  = () => {
    return <Formik
        initialValues={{username: '',password: '',}}
        onSubmit={() => {

        }}
    >
        <Form>
            <Field id="username" name="username" placeholder="Username" />
            <Field type="password" id="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
        </Form>
    </Formik>
}

export default Login;