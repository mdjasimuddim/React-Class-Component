import React from 'react'

export default function Card1(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h3>{props.desc}</h3>
    </div>
  )
}
