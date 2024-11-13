export default function Button(props) {

    return (
        <>
            <button onClick={props.handler}>
                {props.label}
            </button>
        </>
    )

}