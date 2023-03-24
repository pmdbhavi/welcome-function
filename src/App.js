import {useState} from 'react'

import {Container,Con,Heading,Para,Button} from "./styledComponents"

const App=()=>{
  const [subscribe,setSubscribe]=useState(false)

  const onClickButton=()=>{
    setSubscribe(prevState=>(!prevState))
  }

  return(
      <Container>
        <Con>
          <Heading>Welcome</Heading>
          <Para>Thank you! Happy Learning</Para>
          <Button onClick={onClickButton}>{subscribe ? "Subscribed": "Subscribe"}</Button>
        </Con>
      </Container>
  )
}

export default App