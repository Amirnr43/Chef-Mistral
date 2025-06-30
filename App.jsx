/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */
import Header from "./header"
import Main from "./main"
export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}
