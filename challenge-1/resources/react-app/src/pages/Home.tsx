import { Link } from 'react-router-dom';
import PrimaryButton from '@/components/PrimaryButton';

const Home = () => {
    return (
        <>
            <h1 className="text-4xl font-bold text-center py-10">Attendance Viewer</h1>
            <div className="flex flex-col items-center justify-center text-2xl">
                <Link to="/upload-data">
                    <PrimaryButton className="mb-6">Upload Data</PrimaryButton>
                </Link>
                <Link to="/employees">
                    <PrimaryButton>All Employees</PrimaryButton>
                </Link>
            </div>
        </>
    );
}

export default Home;