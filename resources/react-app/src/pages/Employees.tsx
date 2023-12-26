import EmployeeTable from "@/components/EmployeeTable";
import Pagination from "@/components/Pagination";
import { Await, useAsyncValue, useLoaderData } from "react-router-dom";

interface Employee {
    id: number;
    name: string;
    email: string;
}

interface Links {
    url: string | null;
    label: string;
    active: boolean;
}

interface LoaderData {
    response: {
        data: Employee[],
        links: Links[]
    }
}

const Employees = () => {
    const { response } = useLoaderData() as LoaderData;

    return (
        <>
            <Await resolve={response}>
                <Content />
            </Await>
        </>
    );
}

const Content = () => {
    const { data, links } = useAsyncValue() as LoaderData["response"];

    return (
        <>
            <h1 className="text-4xl font-bold text-center py-10">All Employees</h1>
            <EmployeeTable rows={data} />
            <Pagination links={links} />
        </>
    );
}

export default Employees;
