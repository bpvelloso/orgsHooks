import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Estrelas from "../../../componentes/Estrelas"
import { useReducer } from "react"


export default function Produtores({item}) {
    
    const [editando, inverterEditando] = useReducer(
        (editando)=>!editando, false)

    return (<TouchableOpacity style={estilos.painel} onPress={inverterEditando} >
         <Image style={estilos.imagemProdutor} source={item.imagem} /> 
         <View style={estilos.dadosProtudor}>
             <View>
                    <Text style={estilos.nomeProdutor}>{item.nome}</Text>
                    <Estrelas quantidade={item.estrelas} editavel={editando} grande={editando} /> 
             </View>
             <Text style={estilos.distanciaProdutor}>{item.distancia}m</Text>
         </View>
         
    </TouchableOpacity>)
    
}

const estilos = StyleSheet.create({
    imagemProdutor:{
        width:45,
        height:45,
        borderRadius: 7
    },
    painel:{
        margin:5,
        backgroundColor:"#dedede",
        borderRadius: 5,
        flexDirection:'row',
        padding:7,
        alignItems:'center',
        elevation: 3
    },
    nomeProdutor:{
        fontSize: 14,
        lineHeight: 22,
        margin: 8,
        fontWeight: 'bold',
        fontVariant: 'small-caps',
        color: '#464646'
    },
    dadosProtudor:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8
    },
    distanciaProdutor:{
        fontSize: 14,
        lineHeight: 22
    }
})