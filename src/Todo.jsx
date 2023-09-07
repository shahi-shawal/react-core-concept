//     Conditional Randerirng 01
// export default function Todo({task,isDone}) {
//     // return(
//         // <li>Task: {task}
//         if (isDone) {
//         return <li>Finished: {task}</li>
//         }else{
//             return <li>Work On: {task}</li>
//         }
        
//     // )
// }

    //  Ternarry Rendering 
// export default function Todo({task,isDone}) {
//     return(
//        <li>{isDone ? "Finished" :"Work on"}: {task}</li> 
//     )
// }

// export default function Todo({task,isDone}) {
//     return(
//        <li>{task}{isDone && ':Done'}</li> 
//     )
// }
export default function Todo({task,isDone}) {
    return(
       <li>{task}{isDone ||':Not Yet Done'}</li> 
    )
}