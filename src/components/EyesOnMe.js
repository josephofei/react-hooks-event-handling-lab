// Code EyesOnMe Component Here





function EyesOnMe() {
    // const isFocusOrBlur = (event) => {
    //     console.log(event)
    //     // if (event === "focus") {
    //     //     console.log("Good!")
    //     // }
    //     // else if (event === "blur") {
    //     //     console.log("Hey! Eyes on me!")
    //     // }
    // }
    const focus = (event) => console.log("Good!");
    const blur = (event) => console.log("Hey! Eyes on me!")
    return (

        <button onFocus={focus} onBlur={blur}>Eyes on me</button>

    )
}



export default EyesOnMe;