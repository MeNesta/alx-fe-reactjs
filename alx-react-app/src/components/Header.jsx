function Header() {
    return (
        <header style={{
            backgroundColor: 'navy',
            color: 'whitesmoke',
            textAlign: 'center'
        }}>
            <h1 style= {{
                margin: '0',
                fontSize: '2.5em',
                fontFamily: 'arial, san-serif'
            }}>
                My Favorite Cities
            </h1>
        </header>
    );
}

export default Header;