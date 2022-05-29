import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import './../styles/styles.css'

export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>
        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                                .min(2, 'El nombre debe de ser de 3 caracteres o mas')
                                .max(15, 'El nombre debe de ser máximo 15 caractres')
                                .required('Requerido'),
                    email: Yup.string()
                                .email('Revise el formato del correo')
                                .required('Requerido'),
                    password1: Yup.string()
                                .min(6, 'Mínimo 6 letras')
                                .required('Requerido'),
                    password2: Yup.string()
                                .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                                .required('Requerido')
                })
            }
        >
            {({handleReset}) => (
                <Form>
                    <MyTextInput
                        label='Nombre'
                        name='name'
                        placeholder='Nombre Placeholder'
                    />
                    <MyTextInput
                        label='Email'
                        name='email'
                        placeholder='email@email.com'
                    />
                    <MyTextInput
                        label='Passsword'
                        name='password1'
                        placeholder='*****'
                        type='password'
                    />
                    <MyTextInput
                        label='Confirm Password'
                        name='password2'
                        placeholder='*****'
                        type='password'
                    />
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset}>Reset Form</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}
