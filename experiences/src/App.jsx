import { useState } from 'react'
export default function App() {
  const [name, setName] = useState('') // input value
  const [devices, setDevices] = useState([ // button value
    
  ]);
  function DeleteBtn(id) {
    const newDevices = devices.filter((device) => { return device.id !== id });
    setDevices(newDevices)
  }
  const devicesList = devices.map((device) => {
    return (
      <div>
        <li key={device.id}>{device.name}
          <button style={{ color: '#fff', backgroundColor: 'red', padding: '10px', margin: '10px' }}
            onClick={() => { DeleteBtn(device.id) }}>DEL</button>
        </li>
      </div>
    )
  })
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', placeContent: 'center', padding: '20px', marginLeft: '650px', border: '5px solid teal', borderRadius: '10px', color: '#fff', textAlign: 'center' }}>
      <div>
        {devicesList}
      </div>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => {
          // const newDevices = [...devices, name]
          // setDevices(newDevices)
          setDevices([...devices, { id: devices.length + 1, name: name }])
        }}>Add</button>
      </div>
    </div>
  )
}