import React from 'react'

const Greetings = (props) => {
    if (props.lang === 'en') {
        return <div>Hello {props.children}</div>
    }
    else if (props.lang === 'de'){
        return <div>Hallo {props.children}</div>
    }
    else if (props.lang === 'es'){
        return <div>Ola {props.children}</div>
    }
    else if (props.lang === 'fr'){
        return <div>Bonjour {props.children}</div>
    }
    else
    return (
        <div>
            Incorrect language
        </div>
    )
}

export default Greetings
