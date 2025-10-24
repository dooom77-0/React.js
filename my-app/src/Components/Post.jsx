export default function Post() {
    const Style2 = {
        padding: '20px',
        margin: '20px',
        border: '5px solid teal',
        borderRadius: '10px',
        color: '#000',
        textAlign : 'center'
    }
    return (
        <div style={Style2}>
            <h2>This is the Post title</h2>
            <hr />
            <p>This is the Post content</p>
        </div>
    );
}