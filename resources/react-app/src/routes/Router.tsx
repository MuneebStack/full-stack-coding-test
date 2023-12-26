import { Route, createBrowserRouter, createRoutesFromElements, defer } from "react-router-dom";
import fetchLoaderData, { fetchActionData } from "@/utils/fetchData";
import DefaultLayout from "@/layouts/DefaultLayout";
import ErrorPage from "@/pages/Errors/ErrorPage";
import Home from "@/pages/Home";
import Employees from "@/pages/Employees";

const apiBaseURL = import.meta.env.VITE_BACKEND_API_URL;

export default createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                element={
                    <DefaultLayout />
                }
                errorElement={<ErrorPage />}
            >
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/employees"
                    element={<Employees />}
                    loader={async ({ request }) => {
                        const url = new URL(request.url);
                        const searchParams = url.search;
                        const apiURL = `${apiBaseURL}/employees${(searchParams) ? searchParams : ''}`;
                        return defer({
                            response: fetchLoaderData(apiURL)
                        });
                    }}
                />
            </Route >
        </>
    )
)