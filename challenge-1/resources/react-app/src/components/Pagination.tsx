import DOMPurify from 'dompurify';
import { Link, useLocation } from 'react-router-dom';

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationProps {
    links: PaginationLink[];
}

const Pagination: React.FC<PaginationProps> = ({ links }) => {
    const location = useLocation();

    function getClassName(active: boolean) {
        if (active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    return (
        links.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap justify-center mt-8">
                    {links.map((link, key) => (
                        link.url === null ?
                            (<div
                                key={key}
                                className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(link.label) }}
                            ></div>) :

                            (<Link
                                key={key}
                                className={getClassName(link.active)}
                                to={manipulateUrl(location.pathname, link.url)}
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(link.label) }}
                            ></Link>)
                    ))}
                </div>
            </div>
        )
    );
}

const manipulateUrl = (currentUrl: string, linkUrl: string): string => {
    const linkSearchParams = new URL(linkUrl);
    const searchParams = linkSearchParams.search;

    return currentUrl + searchParams;
};

export default Pagination;