const UserProfile = (props) => {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '10px', 
      margin: '10px', 
      borderRadius: '8px', 
      backgroundColor: '#f9f9f9',
      maxWidth: '300px'
    }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '8px' }}>{props.name}</h2>
      <p style={{ fontSize: '1rem' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
