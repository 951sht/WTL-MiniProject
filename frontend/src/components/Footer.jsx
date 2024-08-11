
export default function Footer() {

    return (
        <div style={{ padding: "12px 0px", backgroundColor: "rgb(232, 227, 227)", textAlign: 'center', position: 'fixed', width: '100%', height: '85px', bottom: '0', left: '0', right: '0', zIndex: '999' }}>

            <div className="text-center">
                <h5>
                    Made by <a href="https://www.linkedin.com/in/shrihari-tiwari-063426224/" style={{ textDecoration: "none", color: "red" }}>Shrihari Tiwari</a> and <a href="https://www.linkedin.com/in/ritanshu-koul-593b52229/" style={{ textDecoration: "none", color: "red" }}>Ritanshu Koul</a>
                </h5>
            </div>

            <div className="text-center pt-1">
                <a href="mailto:951sht@gmail.com" target="_blank" rel="noreferrer">
                    <i className="bi bi-envelope-fill mx-2" style={{ fontSize: "20px" }}></i>
                </a>

                <a href="https://wa.me/917420895281" target="_blank" rel="noreferrer">
                    <i className="bi bi-whatsapp mx-2" style={{ fontSize: "20px" }}></i>
                </a>

                <a href="https://github.com/951sht" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{ fontSize: "20px" }}></i>
                </a>

                <a href="mailto:ritanshu321@gmail.com" target="_blank" rel="noreferrer">
                    <i className="bi bi-envelope-fill mx-2" style={{ fontSize: "20px" }}></i>
                </a>

                <a href="https://wa.me/917006349124" target="_blank" rel="noreferrer">
                    <i className="bi bi-whatsapp mx-2" style={{ fontSize: "21px" }}></i>
                </a>

                <a href="https://github.com/koulritanshu" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{ fontSize: "21px" }}></i>
                </a>
            </div>
            {/* <footer style={{backgroundColor: 'crimson', color:'springgreen', textAlign: 'center', position:'fixed', width: '100%',height : '50px', bottom : '0', left: '0', right: '0', zIndex : '999'}}><h1>THIS IS MY FOOTER</h1></footer> */}
        </div>

    )
}
