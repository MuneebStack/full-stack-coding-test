import PrimaryButton from '@/components/PrimaryButton';
import { useEffect, useRef } from 'react';
import { useFetcher } from 'react-router-dom';

interface ResponseData {
    error?: string | object;
    message?: string;
}

interface UploadFormProps {
    fetcher: any;
    response: ResponseData;
    isSubmitting: boolean;
    clearInputRef: React.RefObject<HTMLInputElement>;
}

const UploadData = () => {
    const fetcher = useFetcher();
    const response = fetcher.data as ResponseData;
    const state = fetcher.state;
    let isSubmitting = state == 'submitting';

    const clearInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (response?.message && clearInputRef.current) {
            clearInputRef.current.value = '';
        }
    }, [response]);

    return (
        <>
            <h1 className="text-4xl font-bold text-center py-10">Upload File</h1>
            <UploadForm
                fetcher={fetcher}
                response={response}
                isSubmitting={isSubmitting}
                clearInputRef={clearInputRef}
            />
        </>
    );
}

const UploadForm: React.FC<UploadFormProps> = ({ fetcher, response, isSubmitting, clearInputRef }) => {
    return (
        <fetcher.Form
            method='post'
            encType='multipart/form-data'
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto"
        >
            {response?.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {typeof response.error === 'object' ? (
                        <ul>
                            {Object.entries(response.error).map(([key, value]) => (
                                <li key={key}>{value}</li>
                            ))}
                        </ul>
                    ) : (
                        response.error
                    )}
                </div>
            )}

            {response?.message && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    {response.message}
                </div>
            )}

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                    Choose a file:
                </label>
                <input
                    ref={clearInputRef}
                    type="file"
                    id="file"
                    name="file"
                    className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    required
                />
            </div>
            <div className="flex items-center justify-center mb-4">
                <PrimaryButton
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Uploading ... ' : 'Upload'}
                </PrimaryButton>
            </div>
            <ul className="text-red-500 list-disc pl-4">
                <li>Only Excel files are allowed.</li>
                <li>The Excel File must contain 6 separate worksheets.</li>
                <li>Each sheet should be named and organized in the following order:</li>
                <ol className="list-decimal pl-6">
                    <li>Employees</li>
                    <li>Locations</li>
                    <li>Shifts</li>
                    <li>Schedules</li>
                    <li>Attendances</li>
                    <li>Attendances_Faults</li>
                </ol>
            </ul>
        </fetcher.Form>
    );
}

export default UploadData;