import ModalWindow from './modalWindow'

class TreeCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.tree,
            show: false
        };

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        console.log('clicked');
        this.setState({ show: !this.state.show });
    }

    handleClick() {
        console.log('clicked');
        localStorage.setItem("foo",  this.state.data.id);
        window.location.assign('/Home/TestTree');
    }

    render() {
        return (
            <div className="col mb-4">
                <div className="card h-100" key={this.state.data.id}>
                    <div className="card-header">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={(e) => this.handleShow(e)}>
                            <span aria-hidden="true">×</span>
                            <span className="sr-only">Delete</span>
                        </button>
                        <ModalWindow onClose={(e) => this.handleShow()} show={this.state.show}>
                            Are you sure you want to delete the tree?
                        </ModalWindow>
                    </div>
                    <div onClick={(e) => this.handleClick(e)}>
                        <img className="card-img-top" src={this.state.data.image} />
                        <div className="card-body">
                            <h4 className="card-title">{this.state.data.name}</h4>
                            <p className="card-text">Description: {this.state.data.description}</p>
                            <p className="card-text">Date of creation: {this.state.data.dateCreated}</p>
                        </div>
                    </div>
                    <div class="card-footer" onClick={(e) => this.handleClick(e)}>
                        <small className="text-muted">Last updated ~ {this.state.data.lastUpdated}</small>
                    </div>
                </div> 
            </div>
        );
    }
}

//var foo;
//export default foo;

//{this.state.data.dateCreate}
//{this.state.data.dateLastChange}

export default TreeCard;