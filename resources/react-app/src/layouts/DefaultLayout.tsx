import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

export default function DefaultLayout() {
    return (
        <Suspense fallback={<Loader />}>
            <main>
                <Navbar />
                <Outlet />
            </main>
        </Suspense>
    );
}