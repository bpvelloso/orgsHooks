import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useEffect, useState } from "react";
import Estrela from "./Estrela";

export default function Estrelas({quantidade: quantidadeInicial, editavel=false, grande=false}) {

    
    const [quantidade, setQuantidade] = useState(quantidadeInicial)
    
    useEffect(() => {
        setQuantidade(quantidadeInicial)
    }, [])

    function RenderEstrelas() {
        const listaEstrelas = []    
        for(let i=0;i<5;i++){
            listaEstrelas.push(
                <Estrela key={i} 
                    onPress={()=>setQuantidade(i+1)} 
                    marcada={quantidade>i} 
                    editavel={editavel} 
                    grande={grande}/>
            )
        }
            
        return listaEstrelas
    }

    return(
        <View style={estilos.painelEstrelas}>
            <RenderEstrelas/>
        </View>
    )
}

const estilos = StyleSheet.create({
    painelEstrelas:{
        flexDirection: 'row',
        marginLeft: 8
    }
})