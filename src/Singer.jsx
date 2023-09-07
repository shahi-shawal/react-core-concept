export default function Singer({singer}) {
    console.log(singer);
    return (
        <div>
            <li>Singer: {singer.name} </li>
           <li>age:{singer.age} </li>
        </div>
    )
}