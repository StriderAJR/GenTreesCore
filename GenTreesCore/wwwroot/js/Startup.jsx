// import { GenTree } from './GenTree.jsx'
//import '../lib/bootstrap/dist/css/bootstrap.css'

/*
class CommentBox extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'commentBox' },
            'Hello, world! I am a CommentBox.'
        );
    }
}
*/

function Heading() {
    return (
        <div className="PageContainer">
            <div className="Content">
                <h1>Gen Trees</h1>
                <h3>Genealogical tree</h3>
                <MenuBar />
                <MainArea
                    name={testData.name}
                    text={testData.text}
                    imgUrl={testData.imgUrl}
                />
            </div>
            <Footer />
        </div>
    )
}

class MenuBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthorized: false
        }
    }

    render() {
        if (!this.state.isAuthorized) {
            return (
                <div class="btn-group" role="group" area-label="basic">
                    <button /*class="btn btn-primary"*/ class="btn btn-secondary">About project</button>
                    <button class="btn btn-secondary">Public trees</button>
                    <button class="btn btn-secondary">Sign in</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button >My trees</button>
                    <button>Public trees</button>
                    <button>Sign out</button>
                </div>
            )
        }
    }
}

//function MenuBar() {
//    return (
//        <div>
//            <button>About project</button>
//            <button>Public trees</button>
//            <button>Sign in</button>
//        </div>
//    )
//}

function MainArea(props) {
    return (
        <div className="TestArea">
            <div className="TestText">{props.text}</div>
            <img
                className="TestImage"
                src={props.imgUrl}
                alt={props.name} />
        </div>
    )
}

const testData = {
    name: 'Avatar family',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        'Vivamus a purus sit amet ante cursus rutrum eget sed nunc.Vestibulum id pretium mauris.' +
        'Etiam tincidunt bibendum purus vel congue.Donec egestas egestas sapien.Suspendisse et risus ' +
        'id diam sodales finibus sed at turpis.Maecenas eu metus gravida, egestas dui quis, auctor metus.' +
        'Praesent libero lectus, lacinia vitae sapien sit amet, euismod facilisis mi.' +
        'Vestibulum euismod quam nisi, vitae porttitor dui tincidunt a.Quisque sit amet ultrices dui.' +
        'Ut vehicula dignissim leo id ultricies.Nunc a sollicitudin nisl.Sed feugiat et metus eu faucibus.' + '\n' +
        'Praesent et euismod tortor, ultricies eleifend ante.Phasellus ante urna, imperdiet vel iaculis ut,' +
        'ullamcorper sit amet ligula.Proin ornare mollis ligula, sed facilisis leo vestibulum et.' +
        'Ut ultricies dolor id nunc feugiat viverra.Quisque a diam vitae sapien imperdiet iaculis.' +
        'Duis ultrices, orci non sagittis maximus, tellus dolor faucibus risus, sed egestas lacus nibh ut arcu.' +
        'In eget bibendum lorem.Nulla iaculis eros sed ex varius cursus.Fusce sit amet justo ac erat lacinia tincidunt.' +
        'Donec ornare id risus vitae egestas.',
    imgUrl: 'https://i.pinimg.com/736x/ec/87/21/ec8721be95197e25509de03e13896fbe.jpg',
};

function Footer() {
    return (
        <div className="MainFooter">
            <div className="Container">
                <div style={{ display: "grid", gridTemplateColumns: "150px 60px", gridGap: 20 }}>
                    {/* column1 */}
                    <div className="Copyrates">
                        <h4>&copy;StridingSoft</h4>
                    </div>
                    {/* column2 */}
                    <div className="Creaters">
                        <h4>Creaters</h4>
                        <ul className="CreatersList">
                            <li>inn</li>
                            <li>CharlyFox</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="Row">
                    <p>
                        &copy;{new Date().getFullYear()} GEN TREES| All right reserved | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    React.createElement(Heading, null),
    document.getElementById('content')
);