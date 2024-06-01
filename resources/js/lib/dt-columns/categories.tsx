import { ColumnDef } from "@tanstack/react-table";
import {Category, User} from "@/types";
import { FaTrash, FaEdit } from "react-icons/fa";

import { usePage, Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

const useColumns = ({ deleteCategoryCallback = (id: number) => {} }) => {
    const { auth } = usePage().props;
    // @ts-ignore
    const user: User = auth.user;
    const columns : ColumnDef<Category>[] = [
        {
            header: "Name",
            accessorKey: "name"
        }, {
            header: "Description",
            accessorKey: "description",
            cell: ({row}) => (
                <div className={"text-wrap"} dangerouslySetInnerHTML={{__html: row.getValue('description')}} />
            )
        }, {
            header: "Created At",
            accessorKey: "created_at"
        }, {
            header: "Action",
            cell: ({row}) => (
                <div>
                    {user.permissions.includes('update_categories') &&
                        <Link href={route('categories.edit', { category: row.original.id })}>
                            <Button size={"sm"}>
                                <FaEdit/>
                            </Button>
                        </Link>
                    }

                    {user.permissions.includes('delete_categories') &&
                        <Button variant={"destructive"} onClick={() => {deleteCategoryCallback(row.original.id as number)}} size={"sm"} className={"ms-2"}>
                            <FaTrash />
                        </Button>
                    }
                </div>
            )
        }
    ];

    return columns;
}

export default useColumns;
