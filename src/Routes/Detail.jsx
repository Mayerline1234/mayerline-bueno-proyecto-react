import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const { dentist } = useContext(ContextGlobal)

    const params = useParams()
    let docSelected = dentist.find(doc => doc.id === parseInt(params.id))

    return (
        <>
            <h1>Detail Dentist </h1>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo Electrónico</th>
                        <th>Teléfono</th>
                        <th>Página Web</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{docSelected.name}</td>
                        <td>{docSelected.email}</td>
                        <td>{docSelected.phone}</td>
                        <td>{docSelected.website}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Detail
