class Heading extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid h-40">
                <div className="container">
                    <div className="media">
                        <img src="/img/logo.svg"
                            width="130" height="130" alt="image format svg" />
                        <div className="media-body">
                            <h3 className="display-4">Gen Tree</h3>
                            <h3 className="display-5">Genealogical tree</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Heading;