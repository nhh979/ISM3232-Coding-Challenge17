
export default function FancyText({type, text}) {
    if (type == "title"){
        return <h1 className="fancy title">{text}</h1>
    } else if (type == 'task') {
        return <h3 className="fancy task">{text}</h3>
    } else if (type == 'message') {
        return <h4 className="fancy message">{text}</h4>
    }

    // return title
    //             ? <h1 className="fancy title">{text}</h1>
    //             : <h3 className="fancy cursive">{text}</h3>
}
