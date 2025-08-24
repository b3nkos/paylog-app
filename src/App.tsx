import './App.css'
import Header from "./components/Header.tsx";
import Dashboard from "./components/Dashboard.tsx";
import BorrowerList from "./components/BorrowerList.tsx";
import FormDialog from "./components/FormDialog.tsx";
import type {Borrower} from "./models/Borrower.ts";
import {useState} from "react";

function App() {

    const [isOpen, setOpen] = useState<boolean>(false);

    function handleNewBorrowerCreation() {
        setOpen(true);
    }

    function handleCloseFormDialog() {
        setOpen(false);
    }

    function handleSubmitForm(borrower: Borrower) {
        console.log(borrower);
    }

    return (
        <main className="container px-2 mx-auto">
            <Header handleOnclick={handleNewBorrowerCreation}/>
            <Dashboard totalBorrowers={2} totalOutstanding={1} totalPaid={1000}/>
            <hr className="border-gray-200"/>
            <FormDialog isOpen={isOpen} onSubmit={handleSubmitForm} handleOnClose={handleCloseFormDialog}/>
            <BorrowerList/>
        </main>
    )
}

export default App
