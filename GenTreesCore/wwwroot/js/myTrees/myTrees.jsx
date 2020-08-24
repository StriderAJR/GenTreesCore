import Heading from '../index/heading'
import Footer from '../index/footer'
import MenuBar from '../index/menuBar'
import TreeCard from './treeCard'
import ModalWindow from './modalWindow'

class MyTreesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
            data: [],
            isLoading: false,
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/trees/my', true); // замените адрес
        xhr.send();
        this.setState({ isLoading: true });

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return false;
            }

            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText);
            } else {
                this.setState({
                    data: JSON.parse(xhr.responseText),
                    isLoading: false,
                });
            }
        }
    }

    renderProducts() {
        const { data, isLoading } = this.state;
        if (isLoading) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row row-cols-1 row-cols-md-3">
                    {data.map(tree => {
                        return (
                            <TreeCard tree={tree} />
                        );
                    })}
                </div>
            );
        }
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
                {this.renderProducts()}
                <Footer />
            </div>
        );
    }
}

/*<TreeCard tree={tree} image={testData} />

const tree = {
    id: '1',
    name: 'Sailor Moon',
    dateCreate: '01.02.2020',
    dateLastChange: '29.03.2020'
}; */

const testData = {
    name: 'you want to make me crazy again, right?',
    imgUrl: 'https://sun9-12.userapi.com/c855020/v855020970/d1c61/l-bqL1nE21k.jpg'
};

ReactDOM.render(
    React.createElement(MyTreesPage, null),
    document.getElementById('myTreesContent')
);
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