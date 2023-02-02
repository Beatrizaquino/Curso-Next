export default function NumeroDisplay(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            width: "100px",
            borderRadius: "100px",
            backgroundColor: "#222",
            color: "#fff",
            margin: "20px",
            padding: "20px",
            fontSize: "50px"
        }}>
            {props.numero}
        </div>
    )
}