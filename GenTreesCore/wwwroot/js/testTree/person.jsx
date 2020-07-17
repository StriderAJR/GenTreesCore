import ModalWindow from '../myTrees/modalWindow'

class Person extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.pers,
            show: false
        }

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        console.log('clicked');
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div className="card" key={this.state.data.id}>
                <div className="card-header">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={(e) => this.handleShow(e)}>
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Delete</span>
                    </button>
                    <ModalWindow onClose={(e) => this.handleShow()} show={this.state.show}>
                        Are you sure you want to delete the person?
                    </ModalWindow>
                </div>
                <div className="card-body">
                    <p className="card-text">{this.state.data.name}</p>
                    <p className="card-text">Gender: {this.state.data.gender}</p>
                    <p className="card-text">Date of birth: {this.state.data.dateBirth}</p>
                </div>
                <div class="card-footer">
                    <small className="text-muted">Last updated ~~~</small>
                </div>
            </div>     
        );
    }
}

export default Person