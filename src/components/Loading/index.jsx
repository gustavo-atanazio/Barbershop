import { MoonLoader } from "react-spinners";

function Loading() {
    const style = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25
    };

    return (
        <div style={style}>
            <MoonLoader
                color="#000"
                size={100}
                speedMultiplier={0.6}
            />
        </div>
    )
}

export default Loading;