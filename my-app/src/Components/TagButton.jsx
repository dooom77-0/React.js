import "./TagButttonStyle.css"
export default function TagButton({title, children}) {
    return (
        <div>
            {title == null || title == "" ? (<></>) : (<div>
                <button className={"btn"}>
                    {title}
                    {children}
                </button>
            </div>)}
        </div>
    );
}