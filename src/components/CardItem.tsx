import { formatCurrency } from "../utils/formatCurrency"


type StoreItemsProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function CardItem({ id, name, price, imgUrl }: StoreItemsProps) {

    const quantity = 0;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img style={{ width: "385px", height: "337px", objectFit: "cover" }} src={imgUrl} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="mb-4">{formatCurrency(price)}</p>
                {quantity === 0 ? (
                    <div className="card-actions justify-end ">
                        <button className="btn" style={{ backgroundColor: '#213555' , color : 'white'}}> + Add To Cart</button>
                    </div>
                ) :  <div className="fex items-center flex-col gap-5" > 
                            <div className="flex items-center justify-center" style={{ gap: "5rem"}}>
                                        <button className=" text-4xl px-3 rounded-lg border-2 bg-[#213555] text-white hover:bg-white hover:border-black hover:text-black py-1"> - </button>
                                            <span className="text-2xl font-semibold mx-3 ">{quantity}</span>
                                        <button  className=" text-4xl px-3 rounded-lg border-2 bg-[#213555] text-white hover:bg-white hover:border-black hover:text-black py-1"> + </button>
                            </div>
                            <div className="flex items-center justify-center" style={{ gap: "5rem"}}>
                                    <button className="bg-red-500 font-bold text-white px-2 py-2 rounded-lg">Remove</button>
                            </div>
                    </div>}
            </div>
        </div>
    )
}