const Button = ({label, perantFunc11}) => {

    const funCall = () => {
        console.log("Child")
    }

    return <button onClick={perantFunc11}>{label}</button>
}

export default Button;