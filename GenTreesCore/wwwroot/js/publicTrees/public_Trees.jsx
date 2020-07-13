import Heading from '../index/heading'
import MenuBar from '../index/menuBar'
import Footer from '../index/footer'

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
                    data: /*JSON.parse*/(xhr.responseText),
                    isLoading: false,
                });
            }
        }
    }

    renderProducts() {
        const { data, isLoading } = this.state
        if (isLoading) {
            return <img src='/i/preloader.gif' alt='загружаю...' /> // рисуем прелоадер
        } else {
            return data;
        }
    }

    render() {
        return (
            <div className="container">
                <h1>i'm working, bitch</h1>
                <p><b>{this.props.name}</b></p>
                <p>{this.props.description}</p>
                <p>{this.props.author}</p>
                {this.renderProducts()}
            </div>    
        );
    }
}

ReactDOM.render(
    React.createElement(PublicTreesPage, null),
    document.getElementById('publicContent')
);

//<div id="publicContent"></div>

//    <script src="@Url.Content("~/js/dist / publicTrees.bundle.js")" ></script >