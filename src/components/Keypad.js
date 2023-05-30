// Code Keypad Component Here

// function Keypad (){
//     return (
//         <div></div>
//     )
// }

function Keypad() {
    return (
        <div>
            <input onChange={(event) => console.log("Entering password...")} type="password" />
        </div>
    )
}



export default Keypad;