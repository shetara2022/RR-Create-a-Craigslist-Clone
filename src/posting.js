function Posting(props) {
    return (
        <div>
            <img src={props.posting.imageURL} />
            <h3>{props.posting.title} {props.posting.price} </h3>
            <p>{props.posting.description}</p>


        </div>
    )
}
export { Posting }