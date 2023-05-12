import React from 'react'

type Props = {
    data: any;
}

const PrintHeader = ({data}: Props) => {
    const [isImgLoaded, setIsImgLoaded] = React.useState(false);

React.useEffect(()=> {
    if(data && isImgLoaded) {
        window.print();
    }
}, [data, isImgLoaded])

  return (
    <img src="https://www.shutterstock.com/image-vector/fake-stamp-vector-grunge-rubber-260nw-1049845097.jpg" 
        alt="img" 
        onLoad={()=>setIsImgLoaded(true)}
    />
  )
}

export default PrintHeader