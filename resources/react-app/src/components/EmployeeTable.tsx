import { Link } from "react-router-dom";

interface Employee {
    id: number;
    name: string;
    email: string;
}

interface EmployeeTableProps {
    rows: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ rows }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 text-center">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4 font-bold border-b">ID</th>
                        <th className="py-2 px-4 font-bold border-b">Name</th>
                        <th className="py-2 px-4 font-bold border-b">Email</th>
                        <th className="py-2 px-4 font-bold border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.length ?
                        rows.map((row) => (
                            <tr key={row.id}>
                                <td className="py-2 px-4 border-b">{row.id}</td>
                                <td className="py-2 px-4 border-b">{row.name}</td>
                                <td className="py-2 px-4 border-b">{row.email}</td>
                                <td className="py-2 px-4 border-b">
                                    <Link to={`/employee-attendance/${row.id}`} >
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                        >
                                            View Attendance
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                        :
                        (
                            <div className="flex justify-center text-gray-500 bg-white py-6">
                                <p>No Results Found.</p>
                            </div>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;