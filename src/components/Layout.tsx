import {Link, Outlet} from "react-router-dom";

export const Layout = () => {
    const google = import.meta.env.VITE_API_URL
    const ya = import.meta.env.SECRET_URL
    return (
        <>
            <header>
                <h1>Header</h1>
                <nav style={{display: 'flex', gap: '30px'}}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/counter'}>Counter</Link>
                </nav>
            </header>
            <main style={{flex: '1'}}>
                <Outlet/>
            </main>
            <footer>Footer</footer>
        </>
    )
}