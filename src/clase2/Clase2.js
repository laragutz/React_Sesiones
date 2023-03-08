import Card from './components/Card/Card'
const Clase2 = () => {

    const dummyCardData = {
        author: 'kodemia',
        company: 'kodemia'
    }

    return (
        <div className="container" style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap'
        }}>
            <Card 
                BGImage="https://picsum.photos/200/300" 
                creationDate="04/03/2023" 
                cardTitle="Hola"
                metadata = {dummyCardData}
             />
            <Card 
                BGImage="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" 
                creationDate="04/05/2023" 
                cardTitle="Hola"
                metadata = {dummyCardData}
             />
            <Card 
                BGImage="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" 
                creationDate="04/06/2023" 
                cardTitle="Hola"
                metadata = {dummyCardData}
             />
            <Card 
                BGImage="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" 
                creationDate="04/03/2022" 
                cardTitle="Hola"
                metadata = {dummyCardData}
             />
            <Card 
                BGImage="https://picsum.photos/200/300" 
                creationDate="04/03/2023" 
                cardTitle="Hola"
                metadata = {dummyCardData}
             />
            <Card 
                BGImage="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" 
                creationDate="04/03/2023" 
                cardTitle="Hola"
                metadata = {dummyCardData}
             />
            <Card 
                BGImage="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" 
                creationDate="04/03/2023" 
                cardTitle="Hola"
                metadata = {dummyCardData}
             />
        </div>
    )
}

export default Clase2;