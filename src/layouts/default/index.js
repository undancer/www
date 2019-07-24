import React from "react"
import { Container } from "@material-ui/core"

const DefaultLayout = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default DefaultLayout
