import Heading from '../index/heading'
import Footer from '../index/footer'
import MenuBar from '../index/menuBar'
import TreeCard from './treeCard'
import ModalWindow from './modalWindow'
/*
class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = { show: false };

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div className="container">
                <button className="btn btn-primary" onClick={(e) => this.handleShow()}>
                    Launch demo modal
                </button>

                <ModalWindow onClose={(e) => this.handleShow()} show={this.state.show}>Message in modal</ModalWindow>
            </div>
        );
    }
}*/


class MyTreesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { show: true };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }

    render() {
        return (
            <div className="container">
                <Heading />
                <MenuBar />
                <TreeCard tree={tree} image={testData} />
                <Footer />
            </div>
        );
    }
}

const tree = {
    id: '1',
    name: 'Sailor Moon',
    dateCreate: '01.02.2020',
    dateLastChange: '29.03.2020'
};

const testData = {
    name: 'you want to make me crazy again, right?',
    imgUrl: 'https://sun9-12.userapi.com/c855020/v855020970/d1c61/l-bqL1nE21k.jpg',
};

ReactDOM.render(
    React.createElement(MyTreesPage, null),
    document.getElementById('myTreesContent')
);