import React, { useState } from 'react'
import DraggableNode from '../DraggableNode.jsx'
import Golang from '../wrappers/Golang.jsx'

const Rosetta = (props) => {
  const [s, setS] = useState({})
  const node = {
    arrows: [
      //{color: 'Green', light: 'lightgreen', end: 'carroll', startAnchor: 'bottom', endAnchor: 'top'}
    ],
    id: 'rosetta', 
    className: 'rosetta',
    lighten: 'lightgrey',
    style: {},
  }
  return (
    <div className={"rosetta-wrapper"} >
      <DraggableNode setS={setS} {...props} node={node} >
      <Golang {...props} content={node} >
        <div className={"content-padding"} >
          rosetta.systems
        </div>
      </Golang>
      </DraggableNode>
    </div>
  )
}

export default Rosetta
