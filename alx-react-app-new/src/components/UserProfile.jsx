const UserProfile = (props) => {
    return (
        <div style={{
            border: '2px solid #ddd',
            borderRadius: '10px',
            padding: '20px',
            margin: '20px auto',
            backgroundColor: '#f9f9f9',
            maxWidth: '400px',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease-in-out'
        }}>
            <h2 style={{
                color: '#2c3e50',
                marginTop: '0',
                fontSize: '1.8em',
                borderBottom: '2px solid #3498db',
                paddingBottom: '10px',
                textAlign: 'center'
            }}>
                {props.name}
            </h2>
            
            <p style={{
                fontSize: '1.1em',
                color: '#34495e',
                margin: '15px 0',
                textAlign: 'center'
            }}>
                Age: <span style={{
                    fontWeight: 'bold',
                    color: '#e74c3c',
                    fontSize: '1.2em'
                }}>
                    {props.age}
                </span>
            </p>
            
            <p style={{
                fontSize: '1em',
                color: '#555',
                lineHeight: '1.6',
                fontStyle: 'italic',
                backgroundColor: '#ecf0f1',
                padding: '15px',
                borderRadius: '8px',
                margin: '15px 0 0 0',
                border: '1px solid #bdc3c7'
            }}>
                <strong style={{ color: '#2c3e50' }}>Bio:</strong> {props.bio}
            </p>
        </div>
    );
};

export default UserProfile;