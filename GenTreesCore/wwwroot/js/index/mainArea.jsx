class MainArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body"><div className="text-center">{this.props.text}</div></div>
                <img src={this.props.imgUrl} className="d-block w-100" />

            </div>
        );
    }
}
/*
<div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            className="card-img-bottom"
                            src={this.props.imgUrl}
                            />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">{this.props.text}</p>
                        </div>
                    </div>
                </div>
            </div>*/

export default MainArea;