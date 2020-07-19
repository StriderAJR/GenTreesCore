import Heading from './heading'
import MenuBar from './menuBar'
import MainArea from './mainArea'
import Footer from './footer'

class IndexPage extends React.Component {
    render() {
        return (
            <div className="container">
                <Heading/>
                <MenuBar/>
                <MainArea
                    name={testData.name}
                    text={testData.text}
                    imgUrl={testData.imgUrl} />
                <Footer />
            </div>
        );
    }
}

const testData = {
    name: 'Avatar family',
    text: 'Ipsum dolor sit amet, consectetur adipiscing elit.' +
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

ReactDOM.render(
    React.createElement(IndexPage, null),
    document.getElementById('content')
);