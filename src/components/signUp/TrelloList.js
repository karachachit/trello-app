import React from 'react'
import TrelloCard from './TrelloCard'


const trelloList = ({title}) =>{
    return(
        <div style ={styles.container}>b
            <h4>{title}</h4>
            <TrelloCard />
        </div>
    )
}

const styles = {
    container:{
        backgroundColor:"#ccc",
        borderRadius:3 ,
        width:300,
        padding:8
    }
}
export default trelloList