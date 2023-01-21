export default function Lista(props) {
    return (
        <ul style={{listStyle:'none', padding:0}}>
            {props.children}
        </ul>
    )
}