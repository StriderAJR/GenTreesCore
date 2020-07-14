import Heading from '../index/heading'
import MenuBar from '../index/menuBar'
import Footer from '../index/footer'
import TreeCard from './treeCard'

class PublicTreesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false,
        }
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/trees/public', true); // замените адрес
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
        const { data, isLoading } = this.state
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
                <div className="card-deck">
                    {data.map(tree => {
                        return (
                            <TreeCard tree={tree} image={testData} />   
                            /*
                            <div className="col mb-4" key={tree.id}>
                                <div className="card">
                                    <img className="card-img-top" src={testData.imgUrl} alt={testData.name} />
                                    <div className="card-body">
                                        <h4 className="card-title">{tree.name}</h4>
                                        <p className="card-text">Description: {tree.description ? tree.description : "¯\_(ツ)_/¯"}</p>
                                        <p className="card-text">Created by {tree.creator}</p>
                                    </div>
                                    <div class="card-footer">
                                        <small className="text-muted">Last updated ~~~</small>
                                    </div>
                                </div>
                            </div>
                            */
                        );
                    })}
                </div>
            );
        }
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

const testData = {
    name: 'you want to make me crazy again, right?',
    imgUrl: 'https://sun9-12.userapi.com/c855020/v855020970/d1c61/l-bqL1nE21k.jpg',
};

//https://i.pinimg.com/originals/62/1d/3f/621d3f7f58708b65aff0a2c5bc5b017b.jpg

ReactDOM.render(
    React.createElement(PublicTreesPage, null),
    document.getElementById('publicContent')
);