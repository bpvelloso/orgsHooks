import { Image, StyleSheet, Text, View } from "react-native";
import logo from '../../../../assets/logo.png'

interface IPropsTopo{
    usuario:string,
    legenda: string
}

export default function Topo({usuario, legenda}:IPropsTopo) {
    return(
        <View style={estilos.topo}>
            <Image style={estilos.imagem} source={logo}/>
            <Text style={estilos.boasvindas}>Olá {usuario}</Text>
            <Text style={estilos.legenda}>{legenda}</Text>
        </View>
    )
}


const estilos = StyleSheet.create({
    topo:{
        backgroundColor: '#f6f6f6',
        padding: 16
    },
    imagem:{
        width:70,
        height:28
    },
    boasvindas:{
        color: '#464646',
        marginTop:24,
        fontSize:26,
        lineHeight:42,
        fontWeight:'bold'
    },
    legenda:{
        color:"#a3a3a3",
        fontSize:16,
        lineHeight:26
    }
})