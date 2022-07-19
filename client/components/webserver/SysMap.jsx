import React, { useState } from 'react'
import ReactWrapper from '../wrappers/React.jsx'
import DraggableNode from '../DraggableNode.jsx'

const SysMap = (props) => {
  const [s, setS] = useState({})
  const id = "sysmap"
  const node = {
    arrows: [
      //{color: 'lightblue', light: 'lightcoral', start: id, end: 'jynx', startAnchor: 'top', endAnchor: 'bottom', headSize: 2}
    ],
    id: id, 
    className: 'sysmap',
    lighten: 'lightgrey',
    style: {},
  }
  return (
    <div className={"sysmap-wrapper"}>
      <DraggableNode setS={setS} {...props} node={node} >
        <ReactWrapper {...props} content={node} >
          <div className={"content-padding"} >
            SysMap
          </div>
        </ReactWrapper>
      </DraggableNode>
    </div>
  )
}

export default SysMap
