import React from "react"

interface LengthComponentProps{
    length: number;
    name: string
}

const MovieLengthComponent: React.FC<LengthComponentProps> = ({length, name}) => {
  return (
    <div className="MovieLengthComponent">
        <p>{name}</p>
        <p className="MovieLengthComponent_length">{length}</p>
    </div>
  )
}

export default MovieLengthComponent