
import { useState } from 'react'

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = e => {
        e.preventDefault()

        const validate = email => {
            const reqEmail =
                /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
            return reqEmail.test(email)
        }

        if (nombre.length > 5 && validate(email)) {
            setMensaje(`Gracias ${nombre}, te contactaremos cuanto antes vía email`)
        } else {
            setMensaje('Por favor verifique su información nuevamente')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre Completo"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <h4>{mensaje}</h4>
        </>
    )
}

export default Form;