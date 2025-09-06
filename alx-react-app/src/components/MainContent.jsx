function MainContent() {
    return (
        <main style={{
            backgroundColor: '#ecf0f1',
            padding: '30px',
            margin: '20px auto',
            maxWidth: '800px',
            borderRadius: '8px',
            textAlign: 'center'
        }}>
            <p style={{
                fontSize: '1.4em',
                color: '#2c3e50',
                fontFamily: 'Georgia, serif',
                lineHeight: '1.8',
                margin: '0',
                fontWeight: '300'
            }}>
                I love to visit 
                <span style={{ 
                    color: '#e74c3c', 
                    fontWeight: 'bold',
                    fontSize: '1.1em'
                }}> New York</span>, 
                <span style={{ 
                    color: '#3498db', 
                    fontWeight: 'bold',
                    fontSize: '1.1em'
                }}> Paris</span>, and 
                <span style={{ 
                    color: '#27ae60', 
                    fontWeight: 'bold',
                    fontSize: '1.1em'
                }}> Tokyo</span>.
            </p>
        </main>
    );
}

export default MainContent;