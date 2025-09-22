/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function Button({text,hrefLink}) {
  return (
    <div className=" mt-4 bg-transparent border-[1px] border-white text-white font-semibold py-2 px-4 rounded-full">
      <Link to={hrefLink}>{text}</Link>
    </div>
  )
}

export default Button
