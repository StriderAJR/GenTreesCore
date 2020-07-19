class MenuBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthorized: false
        };

        //this.handleClick = handleClick.bind(this);
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/users/isloggedin', true); // замените адрес
        xhr.send();
        //this.setState({ isLoading: true });

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return false;
            }

            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText);
            } else {
                this.setState({
                    isAuthorized: JSON.parse(xhr.responseText)
                    //data: JSON.parse(xhr.responseText),
                    //isLoading: false,
                });
            }
        }
    }

    publickTreesHandleClick() {
        console.log('clicked');
        window.location.assign('/Home/PublicTrees');
    }

    loginHandleClick(){
        console.log('clicked');
        window.location.assign('/Users/Login');
    }

    myTreesHandleClick() {
        console.log('clicked');
        window.location.assign('/Home/MyTrees');
    }

    signOutHandleClick() {
        console.log('clicked');
        this.setState({ isAuthorized: !this.state.isAuthorized });
        window.location.assign('/users/logout');
    }

    render() {
        if (!this.state.isAuthorized) {
            return (
                <nav>
                    <ul className="nav nav-pills nav-fill flex-column flex-sm-row mb-3 " id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="flex-sm-fill text-sm-center nav-link btn btn-outline-primary" id="pills-project-tab"
                               data-toggle="pill" href="/Home/TestTree" role="tab" aria-controls="pills-project"
                               aria-selected="true">About project</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="flex-sm-fill text-sm-center nav-link btn btn-outline-primary" id="pills-publicTrees-tab"
                                data-toggle="pill" href="/Home/PublicTrees" onClick={(e) => this.publickTreesHandleClick(e)} role="tab" aria-controls="pills-publicTrees"
                                aria-selected="false">Public trees</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="flex-sm-fill text-sm-center nav-link btn btn-outline-primary" id="pills-signIn-tab" data-toggle="pill"
                                href="/Users/Login" onClick={(e) => this.loginHandleClick(e)} role="tab" aria-controls="pills-signIn" aria-selected="false">Sign in</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade" id="pills-project" role="tabpanel" aria-labelledby="pills-project-tab"></div>
                        <div className="tab-pane fade" id="pills-publicTrees" role="tabpanel" aria-labelledby="pills-publicTrees-tab"></div>
                        <div className="tab-pane fade" id="pills-signIn" role="tabpanel" aria-labelledby="pills-signIn-tab"></div>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav>
                    <ul className="nav nav-pills nav-fill flex-column flex-sm-row mb-3 " id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="flex-sm-fill text-sm-center nav-link btn btn-outline-primary" id="pills-myTrees-tab"
                                data-toggle="pill" href="/Home/MyTrees" onClick={(e) => this.myTreesHandleClick(e)} role="tab" aria-controls="pills-myTrees"
                               aria-selected="true">My trees</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="flex-sm-fill text-sm-center nav-link btn btn-outline-primary" id="pills-publicTrees-tab"
                                data-toggle="pill" href="/Home/PublicTrees" onClick={(e) => this.publickTreesHandleClick(e)} role="tab" aria-controls="pills-publicTrees"
                               aria-selected="false">Public trees</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="flex-sm-fill text-sm-center nav-link btn btn-outline-primary" id="pills-signOut-tab" data-toggle="pill"
                                href="/users/logout" onClick={(e) => this.signOutHandleClick(e)}
                                role="tab" aria-controls="pills-signOut" aria-selected="false">Sign out</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade" id="pills-myTrees" role="tabpanel" aria-labelledby="pills-myTrees-tab"></div>
                        <div className="tab-pane fade" id="pills-publicTrees" role="tabpanel" aria-labelledby="pills-publicTrees-tab"></div>
                        <div className="tab-pane fade" id="pills-signOut" role="tabpanel" aria-labelledby="pills-signOut-tab"></div>
                    </div>
                </nav>
            );
        }
    }
}

export default MenuBar;