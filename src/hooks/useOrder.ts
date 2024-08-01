import { useState } from "react"
import type { OrderItem } from "../types"

export default function useOrder(){

    // El <OrderItem> es un generic para especificar el tipo de dato
    //al order ya que dice que es never, este se usa si es never_
    //nada mas.
    const [order, setOrder] = useState<OrderItem[]>([])
    
    const addItem = () => {
        console.log("agregando item..")
    }

    return{
        addItem
    }
}