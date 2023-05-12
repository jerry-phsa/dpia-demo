import { useState } from 'react'
import PrintHeader from './PrintHeader';


function App() {
const [data, setData] = useState<any>(null);

 setTimeout(()=>{
  setData('hhihihih')
 }, 5000)

 
  
  return (
    <>
      <PrintHeader data={data} />
      <main>{data}</main>
    </>
  )
}

export default App
