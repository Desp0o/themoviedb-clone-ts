import React from "react"

interface LengthComponentProps{
    length: number;
    name: string;
    funName: ()=>void
}

const MovieLengthComponent: React.FC<LengthComponentProps> = ({length, name, funName}) => {
  return (
    <div className="MovieLengthComponent" onClick={funName}>
        <p>{name}</p>
        <p className="MovieLengthComponent_length">{length}</p>
    </div>
  )
}

export default MovieLengthComponent