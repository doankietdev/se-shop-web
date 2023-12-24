import * as Yup from "yup"
import { Field, Form, Formik } from "formik"
import InputForm from "./InputForm"
import classNames from "classnames/bind"
import ProductFormInfo from "./ProductFormInfo"
import { Line, Button } from "~/components"
import images from "~/assets/images"
import styles from "./Form.module.scss"
import { useNavigate } from "react-router-dom"
import { useGetUserQuery } from "~/features/user/userApiSlice"
import { useCreateOrderFromCartMutation, useCreateOrderNowMutation } from "~/features/order/orderApiSlice"
import { useGetCartByUserIdQuery } from "~/features/cart/cartApiSlice"

const cx = classNames.bind(styles)

const checkOutForm = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("name is required"),

    streetAdrress: Yup.string()
        .min(2, "Too Short!")
        .max(100, "Too Long!")
        .required("Address should be added to determine where to deliver"),

    phoneNumber: Yup.string()
        .required("Phone number should be added to contact with you")
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, "Invalid phone number"),
})

const fieldNames = {
    name: ["Name", false],
    streetAdrress: ["Street Address", false],
    phoneNumber: ["Phone Number", false],
}

const requiredFields = Object.keys(fieldNames).filter(
    (key) => fieldNames[key][1]
)

const CheckOutForm = (singlePurchasedProduct) => {
    const navigate = useNavigate()
    const [createOrderNow, { isLoading: isHandlingNow }] = useCreateOrderNowMutation()
    const [createOrderFromCart, { isLoading: isHandlingCart }] = useCreateOrderFromCartMutation()
    const isOrderFromCart = Object.keys(singlePurchasedProduct).length === 0

    // Get from state, when have time i'll handle it
    const {
        data: user,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUserQuery()

    const {
        data: cart,
        isLoading: isLoadingCart,
        isSuccess: isSuccessCart,
        isError: isErrorCart,
        error: errorCart,
    } = useGetCartByUserIdQuery()

    let username = `${user?.metadata?.user?.lastName} ${user?.metadata?.user?.firstName}`
    let address = `${user?.metadata?.user?.address}`
    let phone = `${user?.metadata?.user?.phoneNumber}`

    const initialValues = {
        name: `${username}`,
        streetAdrress: `${address}`,
        phoneNumber: `${phone}`,
        paymentFormId: "",
    }

    let cartProduct
    // If customer buy a single product which doesn't have in cart
    // singlePurchasedProduct contains enough information to create order
    if (isOrderFromCart) {
        if (isLoadingCart) {
            cartProduct = <p>Loading...</p>
        } else if (isSuccessCart) {
            cartProduct = cart?.metadata?.cart?.products
        } else if (isErrorCart) {
            cartProduct = <p>{errorCart}</p>
        }
    } else {
        cartProduct = singlePurchasedProduct
    }

    let orderProducts
    if (Array.isArray(cartProduct)) {
        orderProducts = cartProduct.map((product) => ({
            productId: product?.product?.id,
            quantity: product?.quantity,
        }))
    } else {
        orderProducts = {
            productId: cartProduct?.productId,
            quantity: cartProduct?.quantity,
        }
    }

    let sumTotal = Array.isArray(cartProduct)
        ? cartProduct.reduce(
              (acc, cur) => acc + cur?.quantity * cur?.product?.price,
              0
          )
        : cartProduct?.quantity * cartProduct?.price

    const handleCreateOrder = async (values, orderProducts) => {
        const orderInfo = {
            shipAddress: values.streetAdrress,
            phoneNumber: values.phoneNumber,
            paymentFormId: values.paymentFormId,
            order: orderProducts,
        }

        if(isOrderFromCart && !isHandlingCart) {
            try {
                const result = await createOrderFromCart(orderInfo).unwrap()
                navigate(`/member/order/${result?.metadata?.orderId}`)
            } catch (error) {
                console.error('Error when order from cart', error)
            }
        } else if(!isHandlingNow) {
            try {
                const result = await createOrderNow(orderInfo).unwrap()
                navigate(`/member/order/${result?.metadata?.orderId}`)
            } catch (error) {
                console.error('Error when order product', error)
            }
        }
    }

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        content = (
            <Formik
                initialValues={initialValues}
                validationSchema={checkOutForm}
                onSubmit={async (values) => {
                    await handleCreateOrder(values, orderProducts)
                    // navigate("/member/order/1")
                }}
            >
                {(formik) => {
                    const { errors, touched, isValid, dirty, values } = formik
                    return (
                        <div className={cx("container")}>
                            <Form>
                                <div className="flex flex-row items-start gap-44">
                                    <div className="form-input-container min-w-[470px]">
                                        {Object.entries(fieldNames).map(
                                            ([field, name], index) => (
                                                <InputForm
                                                    key={index}
                                                    name={name}
                                                    field={field}
                                                    errors={errors}
                                                    touched={touched}
                                                    requiredFields={
                                                        requiredFields
                                                    }
                                                />
                                            )
                                        )}
                                    </div>
                                    <div className="w-full flex flex-col">
                                        <div className="flex flex-col gap-4">
                                            <ProductFormInfo
                                                carts={cartProduct}
                                            />
                                        </div>
                                        <div className="flex flex-col mt-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="subtotal">
                                                    Subtotal:
                                                </h3>
                                                <p className="">
                                                    {sumTotal || 0}
                                                </p>
                                            </div>
                                            <div className="w-full my-4">
                                                <Line style="w-full h-[1px] bg-black opacity-[0.4]" />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <h3 className="shippinh">
                                                    Shipping:
                                                </h3>
                                                <p className="">Free</p>
                                            </div>
                                            <div className="w-full my-4">
                                                <Line style="w-full h-[1px] bg-black opacity-[0.4]" />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <h3 className="shippinh">
                                                    Total:
                                                </h3>
                                                <p className="">
                                                    {sumTotal || 0}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-4 gap-8">
                                            <div
                                                role="group"
                                                aria-labelledby="my-radio-group"
                                                className="flex flex-col"
                                            >
                                                <label className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <Field
                                                            className="w-4 h-4 me-4"
                                                            type="radio"
                                                            name="paymentFormId"
                                                            value="1"
                                                        />
                                                        <span className="text-base">
                                                            Bank
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-row gap-2">
                                                        <img
                                                            className="w-[42px] h-[28px] object-contain"
                                                            src={images.pay_1}
                                                        />
                                                        <img
                                                            className="w-[42px] h-[28px] object-contain"
                                                            src={images.pay_2}
                                                        />
                                                        <img
                                                            className="w-[42px] h-[28px] object-contain"
                                                            src={images.pay_3}
                                                        />
                                                        <img
                                                            className="w-[42px] h-[28px] object-contain"
                                                            src={images.pay_4}
                                                        />
                                                    </div>
                                                </label>
                                                <label className="flex items-center">
                                                    <Field
                                                        className="w-4 h-4 me-4"
                                                        type="radio"
                                                        name="paymentFormId"
                                                        value="2"
                                                    />
                                                    <span className="text-base">
                                                        Cash on delivery
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex justify-start w-[150px] mt-4">
                                            <Button
                                                type="submit"
                                                className={
                                                    !(dirty && isValid)
                                                        ? cx("disabled-btn")
                                                        : ""
                                                }
                                                disabled={!(dirty && isValid)}
                                            >
                                                Place Order
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    )
                }}
            </Formik>
        )
    } else if (isError) {
        content = <p>{error}</p>
    }

    return <>{content}</>
}

export default CheckOutForm
