import Title from "./components/Title"
import { Subtitle } from "./components/Subtitle"
import StatusText from "./components/StatusText"

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#2c2c2d",
        display: "grid",
        minHeight: "100vh",
        placeContent: "center",
        textAlign: "center"
      }}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  )
}
