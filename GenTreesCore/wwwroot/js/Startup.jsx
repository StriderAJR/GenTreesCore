// import { GenTree } from './GenTree.jsx'

class CommentBox extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'commentBox' },
            'Hello, world! I am a CommentBox.'
        );
    }
}

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);