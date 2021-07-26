import { useState, useEffect } from 'react'

function App(){
 const  [isLoading, setLoading] = useState(true)
 const  [image, setImage] = useState("")
   
    useEffect(() => { fetch("https://dog.ceo/api/breeds/image/random")
                .then(resp=> resp.json())
                .then(json => { setImage(json.message)
                                setLoading(false)
                })                
}, [])

   if(isLoading){
       return <p>Loading...</p>
   }
    return (
        <>
          <img src={image} alt=" A Random Dog"></img>      
        </>
    )
}

export default App