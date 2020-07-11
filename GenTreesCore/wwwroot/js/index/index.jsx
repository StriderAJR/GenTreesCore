import Heading from './heading'
import MenuBar from './menuBar'
import MainArea from './mainArea'

class IndexPage extends React.Component {
    render() {
        return (
            <div className="container">
                <Heading />
                <MenuBar />
                <MainArea
                    name={testData.name}
                    text={testData.text}
                    imgUrl={testData.imgUrl} />

            </div>
        );
    }
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

//function Footer() {
//    return (
//        <footer class="page-footer font-small primary-color">
//            <hr />
//            <div class="container-fluid text-center text-md-left">
//                <div class="row">
//                    <div class="col-xs-6 col-sm-3">
//                        <h5 class="text-uppercase">Creators</h5>
//                        <ul class="list-unstyled">
//                            <li>
//                                <a href="#!">CharlyFox</a>
//                            </li>
//                            <li>
//                                <a href="#!">inn</a>
//                            </li>
//                        </ul>
//                    </div>

//                </div>
//            </div>
//            <hr />
//            <div class="footer-copyright text-center py-3">© 2020 Copyright:
//                <a href="#!">Gen tree</a>
//            </div>
//        </footer>
//    )
//}
//&copy;{new Date().getFullYear()} GEN TREES| All right reserved | Privacy


ReactDOM.render(
    React.createElement(IndexPage, null),
    document.getElementById('content')
);