function Footer() {
    return (
        <footer style={{
            backgroundColor: '#34495e',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            marginTop: '40px',
            fontSize: '0.9em',
            borderTop: '3px solid #3498db'
        }}>
            <p style={{
                margin: '0',
                fontFamily: 'Arial, sans-serif',
                letterSpacing: '1px'
            }}>
                © 2023 City Lovers | 
                <span style={{
                    color: '#3498db',
                    fontWeight: 'bold',
                    marginLeft: '5px'
                }}>
                    Explore the World
                </span>
            </p>
        </footer>
    );
}

export default Footer;