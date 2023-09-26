import { FinanceForm } from "./components/FinanceForm"
import { Header } from "./components/Header"
import "./styles/index.scss"


function App() {

  return (
    <>
      <Header />
      <main className="main__container">
        <FinanceForm />

      </main>
    </>
  )
}

export default App
