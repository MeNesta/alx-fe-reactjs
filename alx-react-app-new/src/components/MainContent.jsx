function MainContent() {
    return (
        <main style={{
            backgroundColor: '#ecf0f1',
            padding: '30px',
            margin: '20px auto',
            maxWidth: '900px',
            borderRadius: '10px',
            minHeight: '60vh',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                textAlign: 'center',
                marginBottom: '40px'
            }}>
                <p style={{
                    fontSize: '1.4em',
                    color: '#2c3e50',
                    fontFamily: 'Georgia, serif',
                    lineHeight: '1.8',
                    margin: '0 0 30px 0',
                    fontWeight: '300'
                }}>
                    I love to visit 
                    <span style={{ 
                        color: '#e74c3c', 
                        fontWeight: 'bold',
                        fontSize: '1.1em',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                    }}> New York</span>, 
                    <span style={{ 
                        color: '#3498db', 
                        fontWeight: 'bold',
                        fontSize: '1.1em',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                    }}> Paris</span>, and 
                    <span style={{ 
                        color: '#27ae60', 
                        fontWeight: 'bold',
                        fontSize: '1.1em',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                    }}> Tokyo</span>.
                </p>
            </div>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '20px',
                marginTop: '40px'
            }}>
                <UserProfile 
                    name="Alice Johnson" 
                    age={28} 
                    bio="A passionate web developer who loves creating beautiful and functional user interfaces. Enjoys hiking and photography in her free time."
                />
                <UserProfile 
                    name="Bob Smith" 
                    age={34} 
                    bio="Full-stack engineer with 10 years of experience. Specializes in React and Node.js development. Coffee enthusiast and tech blogger."
                />
                <UserProfile 
                    name="Carol Davis" 
                    age={26} 
                    bio="UX/UI designer with a keen eye for detail. Loves creating intuitive designs that solve real-world problems. Avid traveler and sketcher."
                />
            </div>
        </main>
    );
}

export default MainContent;