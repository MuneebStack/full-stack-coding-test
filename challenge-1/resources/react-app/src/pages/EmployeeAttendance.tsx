import { Await, useAsyncValue, useLoaderData } from "react-router-dom";

interface Attendance {
    name: string;
    checkin: string;
    checkout: string;
    total_working_hours: number;
}

interface LoaderData {
    response: Attendance
}

const EmployeeAttendance = () => {
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
    const { name, checkin, checkout, total_working_hours } = useAsyncValue() as LoaderData["response"];

    return (
        <>
            <h1 className="text-4xl font-bold text-center py-10">Employee Attendance</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 text-center">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 font-bold border-b">Employee Name</th>
                            <td className="py-2 px-4 font-bold border-b">Check-in Time:</td>
                            <td className="py-2 px-4 font-bold border-b">Checkout Time:</td>
                            <td className="py-2 px-4 font-bold border-b">Total Working Hours:</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">{name}</td>
                            <td className="py-2 px-4 border-b">{checkin ?? 'N/A'}</td>
                            <td className="py-2 px-4 border-b">{checkout ?? 'N/A'}</td>
                            <td className="py-2 px-4 border-b">{total_working_hours ? `${total_working_hours} hours` : 'N/A'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default EmployeeAttendance;
