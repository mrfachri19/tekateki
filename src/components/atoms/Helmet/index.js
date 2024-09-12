import React from 'react'
import {Helmet} from "react-helmet";

const HelmetComponent = (props) => {
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{props.title} | Unicoinex</title>
        </Helmet>
    </div>
  )
}

export default HelmetComponent