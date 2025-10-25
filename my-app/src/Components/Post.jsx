export default function Post({ name, content="no content" }) {

    const Style2 = {
        padding: '20px',
        margin: '20px',
        border: '5px solid teal',
        borderRadius: '10px',
        color: '#000',
        textAlign:'center'
        
    }
    return (
        <div style={Style2}>
            <h2>{name}</h2>
            <hr />
            <p style={{fontWeight:'bold'}}>{content}</p>
        </div>
    );
}