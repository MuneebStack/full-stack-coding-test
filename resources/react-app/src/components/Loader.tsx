const Loader = () => {
    return (
        <div className="fixed inset-0 w-screen h-screen flex justify-center items-center z-[50] bg-gray-100">
            <svg
                style={{
                    margin: "auto",
                    background: "none",
                    display: "block",
                    shapeRendering: "auto",
                    animationPlayState: "running",
                    animationDelay: "0s"
                }}
                width="200px"
                height="200px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    stroke="#e15b64"
                    strokeWidth="2.5"
                    r="20"
                    strokeDasharray="52.93361431346415 25.97787143782138"
                    style={{
                        animationPlayState: "running",
                        animationDelay: "0s"
                    }}
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        repeatCount="indefinite"
                        dur="0.7s"
                        values="0 50 50;360 50 50"
                        keyTimes="0;1"
                        style={{
                            animationPlayState: "running",
                            animationDelay: "0s"
                        }}
                    />
                </circle>
            </svg>
        </div>
    );
}

export default Loader;