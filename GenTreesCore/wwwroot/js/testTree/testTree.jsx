import MenuBar from '../index/menuBar'
import Heading from './heading'
import GenTree from './genTree'

class TestTreePage extends React.Component {
    constructor(props) {
        super(props);

        //this.state = { link: props.treeUser};
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Heading />
                    <MenuBar />
                </div>
                <div style={TodoComponent}>
                    <GenTree />
                </div>
            </div>
        );
    }
}

const TodoComponent = {
    width: "1700px",
    margin: "30px auto",
    minHeight: "200px"
};

ReactDOM.render(<TestTreePage />, document.getElementById('root'));