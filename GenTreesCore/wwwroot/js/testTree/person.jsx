import ModalWindow from '../myTrees/modalWindow'
import Draggable from 'react-draggable'

class Person extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.pers,
            show: false,
            activeDrags: 0,
            deltaPosition: { x: 0, y: 0 },
            controlledPosition: { x: -400, y: 200 }
        }

        this.handleDrag = this.handleDrag.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.getImage = this.getImage.bind(this);
        //this.handleShow = this.handleShow.bind(this);
    }

    handleDrag(e, ui) {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    }

    onStart() {
        this.setState({ activeDrags: ++this.state.activeDrags });
    }

    onStop() {
        this.setState({ activeDrags: --this.state.activeDrags });
    }

    handleShow() {
        console.log('clicked');
        this.setState({ show: !this.state.show });
    }

    getImage() {
        if (this.state.data.Image == null) {
            return noImage.imgUrl;
        } else {
            return this.state.data.Image;
        }
    }

    render() {
        return (
            <Draggable onStart={(e) => this.onStart(e)} onStop={(e) => this.onStop(e)}>
                <div className="card" style={TodoComponent} key={this.state.data.Id}>
                    <img className="card-img-top" src={this.getImage()} />
                    <div className="card-body">
                        <p className="card-text">{this.state.data.LastName} {this.state.data.FirstName} {this.state.data.MiddleName}</p>
                        <p className="card-text">Gender: {this.state.data.Gender}</p>
                        <p className="card-text">Date of birth: {this.state.data.ShortBirthDate}</p>
                        <p className="card-text">Date of death: {this.state.data.ShortDeathDate}</p>
                    </div>
                </div>     
            </Draggable>
            //<div className="card-header">
            //    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={(e) => this.handleShow(e)}>
            //        <span aria-hidden="true">×</span>
            //        <span className="sr-only">Delete</span>
            //    </button>
            //    <ModalWindow onClose={(e) => this.handleShow()} show={this.state.show}>
            //        Are you sure you want to delete the person?
            //    </ModalWindow>
            //</div>
        );
    }
}

const noImage = {
    imgUrl: 'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png'
};

const TodoComponent = {
    width: "230px"
};

export default Person