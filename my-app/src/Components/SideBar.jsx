import TagButton from "./TagButton"
export default function SideBar() {
    const buttons = [{
        id: 1,
        title: 'My',
        children: <></>
    },
    {
        id: 2,
        title: 'Name',
        children: <></>
        },
        {
            id: 3,
            title: 'is',
            children: <></>
        },
        {
            id: 4,
            title: 'Abdulrahman',
            children: <div>
                <img style={{width:"100px",borderRadius:'10px'}} src='https://preview.redd.it/sigma-monarch-v0-76lt41jttxie1.jpeg?auto=webp&s=1f35c2cfdf822d3a4805ee4cc3da6f56a938c496'/>
            </div>
        },
        {
            id: 5,
            title: 'Mohammed',
            children: <img style={{width:"120px",borderRadius:'10px'}} src='https://i.pinimg.com/736x/49/08/c5/4908c5545ad226fcf6354c48f1b5d527.jpg'/>
        },
        {
            id: 6,
            title: 'Khalid',
            children: <img style={{width:"120px",borderRadius:'10px'}} src='https://i.pinimg.com/736x/49/08/c5/4908c5545ad226fcf6354c48f1b5d527.jpg'/>
        },
          
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