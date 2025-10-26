import TagButton from "./TagButton"
export default function SideBar() {
    const buttons = [{
        id: 1,
        title: 'My',
        children: <img style={{width:'110px', height:'auto'}} src="https://i.pinimg.com/736x/81/08/bd/8108bd3f9cc9956575fb4415febd0af3.jpg"/>
    },
    {
        id: 2,
        title: 'Name',
        children: <img style={{width:'100px', height:'auto'}} src='https://i.pinimg.com/736x/0e/09/3e/0e093e03e9de97f7c5cc1e392602f0f8.jpg'/>
        },
        {
            id: 3,
            title: 'is',
            children: <img style={{width:"100px",borderRadius:'10px'}} src='https://i.pinimg.com/1200x/dd/3b/a6/dd3ba633eb5fe0708f057771047d0774.jpg'/>
        },
        {
            id: 4,
            title: 'Abdulrahman',
            children: <img style={{width:"100px",borderRadius:'10px'}} src='https://preview.redd.it/sigma-monarch-v0-76lt41jttxie1.jpeg?auto=webp&s=1f35c2cfdf822d3a4805ee4cc3da6f56a938c496'/>
        },
        {
            id: 5,
            title: 'Mohammed',
            children: <img style={{width:"120px",borderRadius:'10px'}} src='https://i.pinimg.com/1200x/58/25/ae/5825ae33ba473315be2d4fa1397fa179.jpg'/>
        }
    ]
    const buttonsList = buttons.map((button) => {
        return (
            <TagButton key={button.id} title={button.title}>
                {button.children}
            </TagButton>
        )
    })
    return (
        <div style={{margin:'25px', border:'2px solid teal',borderRadius:'15px'}}>
            {buttonsList}
        </div>
    )
}