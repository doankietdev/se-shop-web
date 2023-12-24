import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"

import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import styles from "./Form.module.scss"
import { useSignupMutation } from "~/features/auth/authApiSlice"
import { useNavigate } from "react-router-dom"
const cx = classNames.bind(styles)

const signUpSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Username is required"),
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Firstname is required"),

    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Lastname is required"),

    genderId: Yup.string().required("Gender is required"),

    phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, "Invalid phone number"),

    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

    address: Yup.string()
        .min(2, "Too Short!")
        .max(100, "Too Long!")
        .required("Address is required"),

    password: Yup.string()
        .required("Password is required")
        .min(6, "Password is too short - should be 6 chars minimum"),
    passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
    ),
})

const initialValues = {
    username: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    password: "",
    passwordConfirmation: "",
}

const SignUpForm = () => {
    const navigate = useNavigate()
    const [signup, { isLoading }] = useSignupMutation()
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={async (values) => {
                delete values.passwordConfirmation
                console.log(values)
                if(!isLoading) {
                    try {
                        await signup(values)
                        navigate('/login')
                    } catch (error) {
                        console.error(error)
                    }
                }
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty } = formik
                return (
                    <div className={cx("container")}>
                        <h1>Create an account</h1>
                        <p>Enter your detail below</p>
                        <Form>
                            <div className={cx("form-row")}>
                                <Field
                                    name="username"
                                    id="username"
                                    placeholder="User Name"
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
                                    name="firstName"
                                    id="firstName"
                                    placeholder="First Name"
                                    className={
                                        errors.firstName && touched.firstName
                                            ? cx("input-error")
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="firstName"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <div className={cx("form-row")}>
                                <Field
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Last Name"
                                    className={
                                        errors.lastName && touched.lastName
                                            ? cx("input-error")
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="lastName"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <div
                                className="flex items-center gap-8"
                                role="group"
                                aria-labelledby="my-radio-group"
                            >
                                <label className="flex items-center gap-3 m-0">
                                    <Field
                                        type="radio"
                                        name="genderId"
                                        value="1"
                                    />
                                    <span className="text-base text-[#4a4a4a] font-medium">Male</span>
                                </label>
                                <label className="flex items-center gap-3 m-0">
                                    <Field
                                        type="radio"
                                        name="genderId"
                                        value="0"
                                    />
                                    <span className="text-base text-[#4a4a4a] font-medium">Female</span>
                                </label>
                            </div>

                            <div className={cx("form-row")}>
                                <Field
                                    type="string"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    placeholder="Enter your phone"
                                    className={
                                        errors.phoneNumber &&
                                        touched.phoneNumber
                                            ? cx("input-error")
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="phoneNumber"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <div className={cx("form-row")}>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className={
                                        errors.email && touched.email
                                            ? cx("input-error")
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="email"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <div className={cx("form-row")}>
                                <Field
                                    type="address"
                                    name="address"
                                    id="address"
                                    placeholder="Enter your address"
                                    className={
                                        errors.address && touched.address
                                            ? cx("input-error")
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="address"
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

                            <div className={cx("form-row")}>
                                <Field
                                    type="password"
                                    name="passwordConfirmation"
                                    id="passwordConfirmation"
                                    placeholder="Confirm your password"
                                    className={
                                        errors.passwordConfirmation &&
                                        touched.passwordConfirmation
                                            ? "input-error"
                                            : null
                                    }
                                />
                                <ErrorMessage
                                    name="passwordConfirmation"
                                    component="span"
                                    className={cx("error")}
                                />
                            </div>

                            <button
                                type="submit"
                                className={
                                    !(dirty && isValid)
                                        ? cx("disabled-btn")
                                        : ""
                                }
                                disabled={!(dirty && isValid)}
                            >
                                Create Account
                            </button>
                            <div className={cx("account-ready")}>
                                <h3 className={cx("account-content")}>
                                    Already have account?
                                </h3>
                                <Link to="/login">
                                    <span
                                        className={cx(
                                            "account-content",
                                            "account-content-link"
                                        )}
                                    >
                                        Log in
                                    </span>
                                </Link>
                            </div>
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default SignUpForm
