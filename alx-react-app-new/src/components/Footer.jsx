function Footer() {
    return (
        <footer style={{
            backgroundColor: '#34495e',
            color: 'white',
            textAlign: 'center',
            padding: '30px 20px',
            marginTop: '40px',
            fontSize: '0.9em',
            borderTop: '4px solid #3498db'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <p style={{
                    margin: '0 0 15px 0',
                    fontFamily: 'Arial, sans-serif',
                    letterSpacing: '1px',
                    fontSize: '1.1em'
                }}>
                    © 2023 City Lovers | 
                    <span style={{
                        color: '#3498db',
                        fontWeight: 'bold',
                        marginLeft: '8px',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}>
                        Explore the World
                    </span>
                </p>
                <div style={{
                    borderTop: '1px solid #566573',
                    paddingTop: '15px',
                    marginTop: '15px'
                }}>
                    <p style={{
                        margin: '0',
                        fontSize: '0.8em',
                        opacity: '0.8',
                        fontStyle: 'italic'
                    }}>
                        Built with React and enhanced with beautiful inline CSS styling
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
