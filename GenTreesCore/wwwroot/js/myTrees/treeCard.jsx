import ModalWindow from './modalWindow'

class TreeCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.tree,
            image: props.image,
            show: false
        };

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
                        Are you sure you want to delete the tree?
                    </ModalWindow>
                </div>
                <img className="card-img-top" src={this.state.image.imgUrl} alt={this.state.image.name}>  
                </img>
                <div className="card-body">
                    <h4 className="card-title">{this.state.data.name}</h4>
                    <p className="card-text">Date of creation: </p>
                </div>
                <div class="card-footer">
                    <small className="text-muted">Last updated ~~~</small>
                </div>
            </div> 
        );
    }
}

//{this.state.data.dateCreate}
//{this.state.data.dateLastChange}

export default TreeCard;