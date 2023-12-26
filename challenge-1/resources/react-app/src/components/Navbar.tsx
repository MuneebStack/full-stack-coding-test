import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <Link to="/" className="text-white font-bold text-lg">
                    Home
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;