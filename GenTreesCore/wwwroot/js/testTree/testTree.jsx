import MenuBar from '../index/menuBar'
import Heading from './heading'
import GenTree from './genTree'

class TestTreePage extends React.Component {
    render() {
        return (
            <div className="container">
                <Heading />
                <MenuBar />
                <GenTree />
            </div>
        );
    }
}

ReactDOM.render(<TestTreePage />, document.getElementById('root'));