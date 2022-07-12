import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routerPaths } from './routes'

export const Router = () => {

    const renderRoutes = () => {
        return routerPaths.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                element={route.element}
            />
        ))
    }

    return (
        <BrowserRouter>
            {/* <AppWrapper> */}
            {/* Acá va el hub var */}
            {/* <MainWrapper> */}
            {/* <MenuNav /> */}
            <Routes>
                {renderRoutes()}
            </Routes>
            {/* </MainWrapper> */}
            {/* </AppWrapper> */}
        </BrowserRouter>
    )
}
