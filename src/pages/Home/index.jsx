import "./css/style.css"
import LeftContentHome from "./components/leftContent"
import RightContentHome from "./components/rightContent"

export default function Home() {
  return (
    <div className="home">
      <LeftContentHome />
      <RightContentHome />
    </div>
  )
}