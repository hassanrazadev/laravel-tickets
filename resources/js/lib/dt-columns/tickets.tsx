import {ColumnDef} from "@tanstack/react-table";
import {Ticket, User} from "@/types";
import {Badge} from "@/Components/ui/badge";
import { FaEye } from "react-icons/fa";

import {usePage, Link} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/Components/ui/avatar";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/Components/ui/tooltip";

export const ticketStatusMapping = {
    backlog: 'backlog',
    open: 'open',
    in_progress: 'in progress',
    resolved: 'resolved',
    closed: 'closed',
}

export const getBadgeVariant = (status: string) => {
    let badgeVariant: "default" | "info" | "warning" | "success" | "danger" | null | undefined;
    switch (status) {
        case 'backlog':
            badgeVariant = 'default';
            break;
        case 'open':
            badgeVariant = 'info';
            break;
        case 'in_progress':
            badgeVariant = 'warning';
            break;
        case 'resolved':
            badgeVariant = 'success';
            break;
        case 'closed':
            badgeVariant = 'danger';
            break;
        default:
            badgeVariant = 'default';
            break;
    }
    return badgeVariant;
}
const useColumns = () => {
    const { auth } = usePage().props;
    // @ts-ignore
    const user: User = auth.user;

    const columns: ColumnDef<Ticket>[] = [
        {
            header: '#',
            accessorKey: 'ticket_number',
            cell: ({row}) => (
                <div className={"capitalize"}>{row.getValue('ticket_number')}</div>
            )
        },
        {
            header: 'Title',
            accessorKey: 'title',
            cell: ({row}) => (
                <div className={"capitalize"}>{row.getValue('title')}</div>
            )
        },
        // {
        //     header: 'Description',
        //     accessorKey: 'description',
        //     cell: ({row}) => (
        //         <div className={"text-wrap capitalize"} dangerouslySetInnerHTML={{__html: row.getValue('description')}} />
        //     )
        // },
        {
            header: 'Status',
            accessorKey: 'status',
            cell: ({row}) => (
                <Badge
                    variant={getBadgeVariant(row.getValue('status'))}
                    // @ts-ignore
                    className={"capitalize px-2 py-1"}>{ticketStatusMapping[row.getValue('status')]}</Badge>
            ),
            enableSorting: false
        }
    ]

    if (user && user.role === 'admin' || user.role == 'manager') {
        columns.push({
            header: 'Assigned To',
            cell: ({row}) => (
                <div className={"flex flex-wrap"}>
                    {
                        row.original.assignedUsers.length ?
                            row.original.assignedUsers.map(user => (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Avatar className={"w-8 h-8"}>
                                                <AvatarImage src={user.avatar}></AvatarImage>
                                                <AvatarFallback>LT</AvatarFallback>
                                            </Avatar>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {user.name}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )) : "----"
                    }
                </div>
            )
        })
    }

    columns.push({
        header: 'Created At',
        accessorKey: 'created_at',
    })

    columns.push({
        header: 'Action',
        cell: ({row}) => (
            <Link href={route('tickets.show', {'ticket': row.original.id})}>
                <Button size={'sm'} className={"py-1"}>
                    <FaEye/>
                </Button>
            </Link>
        ),
        enableSorting: false
    })

    return columns;
}

export default useColumns;
