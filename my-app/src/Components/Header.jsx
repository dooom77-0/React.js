export default function Header() {
    const Style = {
      backgroundColor: '#1b1b1bff',
        color: 'white',
      width: '100%',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
      position: 'fixed',
      top: 0,
      zIndex: 1000,
      padding: '20px',
    }
    return (
        <header style={Style}>
            <h1>Abdulrahman</h1>
        </header>
    )
}