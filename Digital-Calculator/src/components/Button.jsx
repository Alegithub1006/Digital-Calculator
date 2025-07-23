function Button({label, parenthMethod,className}){
    return(
        <button onClick={parenthMethod} className={className} >{label}</button>
    )
}
export default Button;