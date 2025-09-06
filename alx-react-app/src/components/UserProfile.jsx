const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      maxWidth: '400px',
      fontFamily: 'arial, sans-serif',
}}>
      <h2 style={{
      color: '#2c3e50',
      marginTop: '0',
      fontSize: '1.8em',
      borderBottom: '2pxsolid #3498db',
      paddingBottom: '10px'
      }}>{props.name}</h2>

      <p style={{
        fontSize: '1.1em',
        color: '#34495e',
        magin: '15px 0'
      }}>
        Age: <span style={{
          fontWeight: 'bold',
          color: '#e74c3c',
          fontSize: '1.2em'
        }}>{props.age}</span></p>
      <p style={{
        fontSize: '1em',
        color: '#555',
        lineHeight: '1.6',
        fontStyle: 'italic',
        backgroundColor: '#ecf0f1',
        padding: '10px',
        borderRadius: '5px',
        margin: '15px 0 0 0'}}>
          <strong>Bio:</strong> {props.bio}
          </p>
    </div>
  );
};

export default UserProfile;