import { FC } from "react"
import "./headHome.scss"

export interface HeadHomeProps {
  title: string,
  paragraph: string,
  button: string
}

const HeadHome: FC<HeadHomeProps> = ({ title, paragraph, button }) => {
  return (
    <div style={{ display: "flex", justifyContent:"space-between", width:"90%", alignItems:"end" , marginBottom:"20px", marginTop:"20px"}}>
      <div style={{width:"55%"}}>
        <h2>{title}</h2>
        <p style={{fontSize:"0.85em"}}>{paragraph}</p>
      </div>
      <button className="headButton">{button}</button>
    </div>
  )
}

export default HeadHome