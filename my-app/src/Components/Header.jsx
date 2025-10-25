export default function Header() {
    const Style = {
      backgroundColor: 'teal',
      color: '#fff',
      width: '100%',
      height: '70px',
      display: 'flex',
      alignItems: 'center', /* توسيط عمودي */
      justifyContent: 'center', /* توسيط افقي */
      fontSize: '25px',
      fontWeight: 'bold',
      position: 'fixed', /** إضافة خاصية position */
      top: 0,
      zIndex: 1000, /** إضافة خاصية z-index */
      padding: '25px',
      boxShadow: '0 5px 13px rgba(0, 0, 0, 0.4)'
    }
    return (
        <header style={Style}>
            <h1>Abdulrahman</h1>
        </header>
    )
}