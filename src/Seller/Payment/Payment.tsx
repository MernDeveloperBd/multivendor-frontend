import { Card, Divider } from "@mui/material";
import TransactionTable from "../Transaction/TransactionTable";

const Payment = () => {
    return (
        <div>
           <div className="space-y-2">
                <Card className="space-y-2">
                    <h2>Total Earning:</h2>
                    <h3 className="font-bold text-xl pb-1">TK 2856</h3>
                    <Divider/>
                    <p className="py-2">Last Payment: <strong>TK 0</strong></p>
                </Card>
                <TransactionTable/>
           </div>
        </div>
    );
};

export default Payment;