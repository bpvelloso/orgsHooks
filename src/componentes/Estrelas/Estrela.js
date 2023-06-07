import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import estrela from '../../../assets/estrela.png'
import estrelaCinza from '../../../assets/estrelaCinza.png'

export default function Estrela({onPress, editavel, marcada, grande}) {
    const estilos = estilosFuncao(grande)
    return(
        <TouchableOpacity 
            onPress={onPress}
            disabled={!editavel}
            >
            <Image  style={estilos.estrela} source={marcada? estrela:estrelaCinza}/>
        </TouchableOpacity>
    )
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela:{
        width: grande? 32 :12,
        height: grande? 32 :12,
        marginRight:2
    }
    
})