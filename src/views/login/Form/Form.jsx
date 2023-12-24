import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"

import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import styles from "./Form.module.scss"
import { useLoginMutation } from "~/features/auth/authApiSlice"
import { useNavigate } from "react-router-dom"
const cx = classNames.bind(styles)

const logInSchema = Yup.object().shape({
    username: Yup.string().required("User is required"),
    password: Yup.string().required("Password is required"),
})

const initialValues = {
    username: "",
    password: "",
}

const LoginForm = () => {
    const navigate = useNavigate()
    const [login] = useLoginMutation()

    const handleSubmit = async (values) => {
        try {
            const userData = await login(values).unwrap()
            localStorage.setItem("user", JSON.stringify(userData.metadata.user))
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={logInSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik
                return (
                    <div className={cx("container")}>
                        <h1>Log in to Exclusive</h1>
                        <p>Enter your details below</p>
                        <Form>
                            <div className={cx("form-row")}>
                                <Field
                                    type="username"
                                    name="username"
                                    id="username"
                                    placeholder="Enter your username"
                                    className={
                                        errors.username && touched.username
                                            ? cx("input-error")
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="username"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <div className={cx("form-row")}>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className={
                                        errors.password && touched.password
                                            ? "input-error"
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="password"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <div className={cx("forgot-password-container")}>
                                <button
                                    type="submit"
                                    className={
                                        !(dirty && isValid)
                                            ? cx("disabled-btn")
                                            : ""
                                    }
                                    disabled={!(dirty && isValid)}
                                >
                                    Login
                                </button>
                                <div className={cx("forgot-password")}>
                                    <Link to="/login">
                                        <span
                                            className={cx(
                                                "forgot-password-link"
                                            )}
                                        >
                                            Forgot Password?
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default LoginForm
