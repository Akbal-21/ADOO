import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/auth/*" element={
                        <PublicRoute>
                            <AuthRouter/>
                        </PublicRoute>
                    } />
                    <Route path="/*" element={
                        <PrivateRoute>
                            <DashboardRoutes/>
                        </PrivateRoute>
                    } />

                </Routes>
            </div>
        </BrowserRouter>
    )
}