import './GenTree'

function App() {
    return (
        <div className="container">
            <Heading />
            <MenuBar />
            <MainArea
                name={testData.name}
                text={testData.text}
                imgUrl={testData.imgUrl}
            />
            <Footer />
        </div>    
    )
}

function Heading() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 className="display-3">Gen Tree</h1>
                <h5 className="display-4">Genealogical tree</h5>
            </div>
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
                <nav>
                    <ul class="nav nav-pills nav-fill flex-column flex-sm-row mb-3 " id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="flex-sm-fill text-sm-center nav-link active" id="pills-project-tab"
                                data-toggle="pill" href="#pills-project" role="tab" aria-controls="pills-project"
                                aria-selected="true">About project</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="flex-sm-fill text-sm-center nav-link" id="pills-publicTrees-tab"
                                data-toggle="pill" href="#pills-publicTrees" role="tab" aria-controls="pills-publicTrees"
                                aria-selected="false">Public trees</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="flex-sm-fill text-sm-center nav-link" id="pills-signIn-tab" data-toggle="pill"
                                href="#pills-signIn" role="tab" aria-controls="pills-signIn" aria-selected="false">Sign in</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-project" role="tabpanel" aria-labelledby="pills-project-tab"></div>
                        <div class="tab-pane fade" id="pills-publicTrees" role="tabpanel" aria-labelledby="pills-publicTrees-tab"></div>
                        <div class="tab-pane fade" id="pills-signIn" role="tabpanel" aria-labelledby="pills-signIn-tab"></div>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav>
                    <ul class="nav nav-pills nav-fill flex-column flex-sm-row mb-3 " id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="flex-sm-fill text-sm-center nav-link active" id="pills-myTrees-tab"
                                data-toggle="pill" href="#pills-myTrees" role="tab" aria-controls="pills-myTrees"
                                aria-selected="true">My trees</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="flex-sm-fill text-sm-center nav-link" id="pills-publicTrees-tab"
                                data-toggle="pill" href="#pills-publicTrees" role="tab" aria-controls="pills-publicTrees"
                                aria-selected="false">Public trees</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="flex-sm-fill text-sm-center nav-link" id="pills-signOut-tab" data-toggle="pill"
                                href="#pills-signOut" role="tab" aria-controls="pills-signOut" aria-selected="false">Sign out</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-myTrees" role="tabpanel" aria-labelledby="pills-myTrees-tab"></div>
                        <div class="tab-pane fade" id="pills-publicTrees" role="tabpanel" aria-labelledby="pills-publicTrees-tab"></div>
                        <div class="tab-pane fade" id="pills-signOut" role="tabpanel" aria-labelledby="pills-signOut-tab"></div>
                    </div>
                </nav>
            )
        }
    }
}

function MainArea(props) {
    return (
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img 
                        class="card-img-bottom"
                        src={props.imgUrl}
                        alt={props.name} />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p class="card-text">{props.text}</p>
                    </div>
                </div>
            </div>
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
        'ullamcorper sit amet ligula.Proin ornare mollis ligula, sed facilisis leo vestibulum et.',
    imgUrl: 'https://i.pinimg.com/736x/ec/87/21/ec8721be95197e25509de03e13896fbe.jpg',
};

    //+ 'Ut ultricies dolor id nunc feugiat viverra.Quisque a diam vitae sapien imperdiet iaculis.' +
    //'Duis ultrices, orci non sagittis maximus, tellus dolor faucibus risus, sed egestas lacus nibh ut arcu.' +
    //'In eget bibendum lorem.Nulla iaculis eros sed ex varius cursus.Fusce sit amet justo ac erat lacinia tincidunt.' +
    //'Donec ornare id risus vitae egestas.'

function Footer() {
    return (
        <footer class="page-footer font-small primary-color">
            <hr />
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div class="col-xs-6 col-sm-3">
                        <h5 class="text-uppercase">Creators</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">CharlyFox</a>
                            </li>
                            <li>
                                <a href="#!">inn</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <hr />
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="#!">Gen tree</a>
            </div>
        </footer>
    )
}
//&copy;{new Date().getFullYear()} GEN TREES| All right reserved | Privacy


ReactDOM.render(
    React.createElement(App, null),
    document.getElementById('content')
);