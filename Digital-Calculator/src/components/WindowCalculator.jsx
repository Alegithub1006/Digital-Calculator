import Button from "./Button.jsx";

const WindowCalculator = ()=>{
    return(
        <div>
            <h2>operations ?</h2>
            <Button label={1} parenthMethod={()=>{console.log(`click`)}} />
            <Button label={2} parenthMethod={()=>{console.log(`click`)}} />
            <Button label={3} parenthMethod={()=>{console.log(`click`)}} />
            <br/>
            <Button label={4} parenthMethod={()=>{console.log(`click`)}} />
            <Button label={5} parenthMethod={()=>{console.log(`click`)}} />
            <Button label={6} parenthMethod={()=>{console.log(`click`)}} />
            <br/>
            <Button label={7} parenthMethod={()=>{console.log(`click`)}} />
            <Button label={8} parenthMethod={()=>{console.log(`click`)}} />
            <Button label={9} parenthMethod={()=>{console.log(`click`)}} />
            <br/>
            <Button label={0} parenthMethod={()=>{console.log(`click`)}} />
            <br/>
            <br/>
            <Button label={'+'}/>
            <Button label={'-'}/>
            <Button label={'*'}/>
            <Button label={'/'}/>
            <Button label={'AC'}/>
            <Button label={'Reset'}/>
        </div>
    )
}
export default  WindowCalculator;