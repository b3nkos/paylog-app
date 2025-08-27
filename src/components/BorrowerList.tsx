import type {Borrower} from "../models/Borrower.ts";

interface Props {
    list: Borrower[]
}

export default function BorrowerList({list}: Props) {

    const listToRender = list?.map((borrower) => <li>{borrower.name}</li>)
    const emptyList = (
        <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No borrowers yet</p>
            {listToRender}
            <p className="text-sm text-muted-foreground">Add your first borrower to get started</p>
        </div>
    );

    return listToRender?.length > 0 ? listToRender : emptyList;
}