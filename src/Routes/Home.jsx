import { useContext } from 'react'

import { ContextGlobal } from '../Components/utils/global.context'

import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
    const { dentist } = useContext(ContextGlobal)

    return (
        <>
            <main>
                <h1>Home</h1>
                <div className="card-grid">
                    {/* Aqui deberias renderizar las cards */}
                    {dentist.map(doc => (
                        <Card
                            key={doc.id}
                            name={doc.name}
                            username={doc.username}
                            id={doc.id}
                        />
                    ))}
                </div>
            </main>
        </>
    )
}

export default Home
