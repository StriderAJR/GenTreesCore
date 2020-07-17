class App extends React.Component {
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
        this.setState({ isLoading: true })

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return false
            }

            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText)
            } else {
                this.setState({
                    data: JSON.parse(xhr.responseText),
                    isLoading: false,
                })
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
            <div className='App'>
                <div className='trees-list'>
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    React.createElement(App, null),
    document.getElementById('content')
);