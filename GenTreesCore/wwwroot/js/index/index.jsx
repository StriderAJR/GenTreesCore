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
                    text={testData.text}
                    imgUrl={testData.imgUrl}/>
                <Footer />
            </div>
        );
    }
}

const testData = {
    text: 'This is a web application where you can view or create genealogical trees. '+
            'The tree consists of nodes on which people of the whole family are located.Each person has a name, '+
            'surname, possibly a patronymic, often there are photographs, years of life. ' +
            'More detailed trees also include a biography of the person. These people are linked by marital ' +
            'ties and usually the spouses are located nearby, and close family ties, for example, children are also displayed. ' +
            'Usually the tree is divided into several “floors”, each of which contains representatives of the same generation, ' +
            'with the children located below the parents.\n' +
            'On the top panel, you can see the "About", "Public Trees" and "Login" buttons. ' +
            'You are now on the "About" page, you can also view public trees or log in to create your own tree. '+
            'You must have an account to log in.',
    imgUrl: '/img/mainPage.png'
};

ReactDOM.render(
    React.createElement(IndexPage, null),
    document.getElementById('content')
);