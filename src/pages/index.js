import React from "react"
import { Button } from "@material-ui/core"
import DefaultLayout from "../layouts/default"

const Index = () => {
  return (
    <DefaultLayout>
      <Button variant="contained" color="primary">
        Hello World!
      </Button>
    </DefaultLayout>
  )
}

export default Index
