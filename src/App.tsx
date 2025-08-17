import './App.css'
import Header from "./components/Header.tsx";
import Dashboard from "./components/Dashboard.tsx";
import BorrowerList from "./components/BorrowerList.tsx";

function App() {

  return (
    <main className="container px-2 mx-auto">
        <Header/>
        <Dashboard totalBorrowers={2} totalOutstanding={1} totalPaid={1000}/>
        <hr className="border-gray-200"/>
        <BorrowerList />
    </main>
  )
}

export default App
