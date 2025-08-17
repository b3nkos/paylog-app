import Button from "./Button.tsx";

function Header() {
    return (
        <header className="flex justify-between items-start text-black my-4">
            <nav>
                <h1 className="text-3xl font-medium">Paylog</h1>
                <p className="text-muted-foreground">Track your personal loans</p>
            </nav>
            <Button>+ Add Borrower</Button>
        </header>
    );
}

export default Header;