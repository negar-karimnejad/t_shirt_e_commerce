import Stripe from "stripe"

export type ProductTypes = {
    id : string,
    name : string,
    image : string,
    unit_amount : any,
    price_id? : string,
    currency? : any,
    description? : string|null,
    metadata? : Stripe.Metadata,
    quantity? : number
}