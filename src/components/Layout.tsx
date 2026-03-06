import {Link, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header>
                <h1>MENU</h1>
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