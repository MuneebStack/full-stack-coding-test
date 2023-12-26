import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import ErrorPage from "@/pages/Errors/ErrorPage";
import Home from "@/pages/Home";

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
            </Route >
        </>
    )
)