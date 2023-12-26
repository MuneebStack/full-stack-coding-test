import { Link, useRouteError } from "react-router-dom";
import PrimaryButton from '@/components/PrimaryButton';

interface ErrorMessage {
    status: number;
    title: string;
    description: string;
    buttonText: string;
}

const ErrorPage = () => {
    const error = useRouteError() as {status: number};
    const status = error.status;

    const errorMessages: Record<number, ErrorMessage> = {
        404: {
            status: status,
            title: 'Page Not Found',
            description: 'Sorry, the page you are looking for does not exist.',
            buttonText: 'Go back to Home',
        },
        500: {
            status: status,
            title: 'Internal Server Error',
            description: 'Sorry, there was an internal server error. Please try again later.',
            buttonText: 'Go back to Home',
        },
    };

    const errorMessage = errorMessages[status] || errorMessages[500];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-600 dark:text-white">
            <div className="text-6xl font-bold text-gray-800 mb-4 dark:text-white">{errorMessage.status}</div>
            <div className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">{errorMessage.title}</div>
            <p className="text-gray-600 mb-4 dark:text-white text-center">{errorMessage.description}</p>

            <Link to="/" className="mt-4 px-4 py-2 rounded-md">
                <PrimaryButton className="w-full">
                    {errorMessage.buttonText}
                </PrimaryButton>
            </Link>
        </div>
    );
}

export default ErrorPage;