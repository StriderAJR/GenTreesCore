import Heading from '../index/heading'
import MenuBar from '../index/menuBar'
import Footer from '../index/footer'
import Tree from './tree'
import TreeForm from './treeForm'

//class PublicTreesPage extends React.Component {
//    constructor(props) {
//        super(props);

//        this.state = { trees: [] };

//        this.onAddTree = this.onAddTree.bind(this);
//        this.onRemoveTree = this.onRemoveTree.bind(this);
//    }

//    loadData() {
//        const xhr = new XMLHttpRequest();
//        xhr.open('GET', '/trees/public', true); // замените адрес
//        xhr.onload = function () {
//            var data = JSON.parse(xhr.responseText);
//            this.setState({ trees: data });
//        }.bind(this);
//        xhr.send();
//    }

//    onAddTree(tree) {
//        if (tree) {
//            var data = new FormData();
//            data.append("name", tree.name);
//            data.append("description", tree.description);
//            data.append("creator", tree.creator);

//            var xhr = new XMLHttpRequest();
//            xhr.open("post", '/trees/public', true);
//            xhr.onload = function () {
//                if (xhr.status == 200) {
//                    this.loadData();
//                }
//            }.bind(this);
//            xhr.send(data);
//        }
//    }

//    onRemoveTree(tree) {

//        if (tree) {
//            var data = new FormData();
//            data.append("name", tree.name);

//            var xhr = new XMLHttpRequest();
//            xhr.open("delete", '/trees/public', true);
//            xhr.onload = function () {
//                if (xhr.status == 200) {
//                    this.loadData();
//                }
//            }.bind(this);
//            xhr.send(data);
//        }
//    }

//    componentDidMount() {
//        this.loadData();
//    }

//    render() {
//        var remove = this.onRemoveTree;
//        return (
//            <div className="container">
//                <TreeForm onSubmit={this.onAddTree} />
//                <h1>i'm working, bitch</h1>
//                <div>
//                    {
//                        this.state.tree.map(function (tree) {
//                            return <Tree tree={tree} name={tree.name} description={tree.description} creator={tree.creator}/>  
//                        })
//                    }
//                </div>
//            </div>    
//        );
//    }
//}

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
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{data.map(tree => { return (<p>{tree.name}</p>); })}</h5>
                        <p className="card-text">{data.map(tree => { return (<p>{tree.description}</p>); })}</p>
                        <h6 class="card-subtitle mb-2 text-muted">{data.map(tree => { return (<p>{tree.creator}</p>); })}</h6>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <h1>i'm working, bitch</h1>
                {this.renderProducts()}
            </div>
        );
    }
}

ReactDOM.render(
    React.createElement(PublicTreesPage, null),
    document.getElementById('publicContent')
);

