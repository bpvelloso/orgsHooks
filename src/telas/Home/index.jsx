import Topo from "./componentes/Topo";
import dados from '../../dados/orgs-dados.json'

import { FlatList, Image, ListRenderItem, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import Produtores from "./componentes/Produtores";
import useProdutores from "../../hooks/useProdutores";


export default function Home(){

    
    const [tituloProdutores, listaProdutores] = useProdutores()


    return(
        <FlatList 
            data={listaProdutores}
            
            renderItem={
                ({item})=>{
                    return <Produtores item={item} />    
                }
            } 

            keyExtractor={(item) => item.nome}
            
            ListHeaderComponent={
                <>
                    <Topo usuario={dados.geral.usuario} legenda={dados.geral.legenda}/>
                    <Text>{tituloProdutores}</Text>
                </>
            }>
        
        </FlatList>
    )
}

