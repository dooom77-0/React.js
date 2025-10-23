import React from 'react'

export default function Child() {
    return (
        <div>
            <h1 className='child'onClick={sayHello}> hello world</h1>
        </div>
    )
}
function sayHello() {
    return "Hello monkey"
}
// {} for JS codes
// () for functions
// [] for arrays