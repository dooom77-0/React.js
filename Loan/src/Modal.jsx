import './App.css';
export default function Modal({ isVisible }) {
    if (isVisible) {
        return (
            <div id='Modal'>
                <div id='Modal-content'>
                    <h1>The Form has been submitted successfully</h1>
                </div>
            </div>
        )
    } else {
        return <></>
    }
    
}