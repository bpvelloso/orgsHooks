import { useEffect, useLayoutEffect, useState } from "react"
import { carregaProdutores,titulo as tProd  } from "../dados/dao"

export default function useProdutores() {

    const [listaProdutores, setListaProdutores] = useState([])
    const [tituloProdutores, setTituloProdutores] = useState('')

    useLayoutEffect(() => {
        setListaProdutores(carregaProdutores())
        setTituloProdutores(tProd)
    }, [])

    return [tituloProdutores, listaProdutores]
}