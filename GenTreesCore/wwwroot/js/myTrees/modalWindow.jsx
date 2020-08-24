class ModalWindow extends React.Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
    }

    onClose(e) {
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="card text-right">
                
                    <div className="card-body">
                        <h5 className="card-text">{this.props.children}</h5>
                        <a href="#" className="card-link" onClick={(e) => this.onClose(e)}>Yes</a>
                        <a href="#" className="card-link" onClick={(e) => this.onClose(e)}>Cancel</a>
                    </div>
                   
            </div>
        );
    }
}

export default ModalWindow;