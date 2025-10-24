export default function Header() {
    const Style = {
      backgroundColor: 'teal',
      color: '#fff',
      width: '100%',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '25px',
      fontWeight: 'bold',
      position: 'fixed',
      top: 0,
      zIndex: 1000,
      padding: '25px',
      boxShadow:'0 5px 13px rgba(0, 0, 0, 0.4)'
    }
    return (
        <header style={Style}>
            <h1>Abdulrahman</h1>
        </header>
    )
}