import React from 'react'
import {Input} from 'antd'
import {string} from 'prop-types'

const {Password} = Input

const map = new Map(
    [
        ['password',Password]
    ]
)

const MyInput = ({type,...props}) =>  {

    const Component = map.get(type)

    return (
        <div>
            <Component  {...props} />
        </div>
    )
}

MyInput.propTypes ={
    type: string
}

export default  MyInput
  
