import ReactDOM from "react-dom";
import {type FormEvent} from "react";
import type {Borrower} from "../models/Borrower.ts";
import {Button} from "./Button.tsx";

interface Props {
    isOpen: boolean,
    handleOnClose: () => void
    onSubmit: (borrower: Borrower) => void
}

function FormDialog({isOpen, onSubmit, handleOnClose}: Props) {

    if (!isOpen) {
        return null;
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        onSubmit({name: form.get("name")?.toString() ?? ""})
    }

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded shadow-lg mx-3 p-6 w-full max-w-md">
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    <div className="flex justify-end gap-2">
                        <Button
                            type="button"
                            level="secondary"
                            onClick={handleOnClose}>
                            Cancel
                        </Button>
                        <Button type="submit" onClick={() => {
                        }}>
                            Add Borrower
                        </Button>
                    </div>
                </form>
            </div>
        </div>,
        document.getElementById('form-dialog')!
    );
}

export default FormDialog;