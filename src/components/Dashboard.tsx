import Card from "./Card.tsx";
import './Dashboard.css';

interface Props {
    totalBorrowers: number;
    totalOutstanding: number;
    totalPaid: number
}

function Dashboard({totalBorrowers, totalOutstanding, totalPaid}: Props) {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Total Borrowers</p>
                    <p className="text-3xl font-medium">{totalBorrowers}</p>
                </div>
            </Card>
            <Card>
                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Outstanding Amount</p>
                    <p className="text-3xl font-medium text-orange-600">{formatCurrency(totalOutstanding)}</p>
                </div>
            </Card>
            <Card>
                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Total Paid Back</p>
                    <p className="text-3xl font-medium text-green-600">{formatCurrency(totalPaid)}</p>
                </div>
            </Card>
        </div>
    );
}

export default Dashboard;