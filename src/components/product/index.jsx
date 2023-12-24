import { CardProduct } from "~/components"
import { Loader } from "~/components"
const Product = ({ products }) => {
    const content = (
        <div className="grid grid-cols-5 gap-x-[10px] gap-y-[10px]">
            {products?.map((product) => (
                <CardProduct key={product.id} {...product} />
            ))}
        </div>
    )

    return <Loader>{content}</Loader>
}

export default Product
