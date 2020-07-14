class MenuBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthorized: false
        };

        //this.handleClick = handleClick.bind(this);
    }

    publickTreesHandleClick() {
        console.log('clicked');
        window.location.assign('https://localhost:5001/Home/PublicTrees');
    }

    render() {
        if (!this.state.isAuthorized) {
            return (
                <nav>
                    <ul className="nav nav-pills nav-fill flex-column flex-sm-row mb-3 " id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="flex-sm-fill text-sm-center nav-link active" id="pills-project-tab"
                               data-toggle="pill" href="/Home/TestTree" role="tab" aria-controls="pills-project"
                               aria-selected="true">About project</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="flex-sm-fill text-sm-center nav-link" id="pills-publicTrees-tab"
                                data-toggle="pill" href="/Home/PublicTrees" onClick={(e) => this.publickTreesHandleClick(e)} role="tab" aria-controls="pills-publicTrees"
                                aria-selected="false">Public trees</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="flex-sm-fill text-sm-center nav-link" id="pills-signIn-tab" data-toggle="pill"
                               href="#pills-signIn" role="tab" aria-controls="pills-signIn" aria-selected="false">Sign in</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-project" role="tabpanel" aria-labelledby="pills-project-tab"></div>
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
                            <a className="flex-sm-fill text-sm-center nav-link active" id="pills-myTrees-tab"
                               data-toggle="pill" href="#pills-myTrees" role="tab" aria-controls="pills-myTrees"
                               aria-selected="true">My trees</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="flex-sm-fill text-sm-center nav-link" id="pills-publicTrees-tab"
                               data-toggle="pill" href="#pills-publicTrees" role="tab" aria-controls="pills-publicTrees"
                               aria-selected="false">Public trees</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="flex-sm-fill text-sm-center nav-link" id="pills-signOut-tab" data-toggle="pill"
                               href="#pills-signOut" role="tab" aria-controls="pills-signOut" aria-selected="false">Sign out</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-myTrees" role="tabpanel" aria-labelledby="pills-myTrees-tab"></div>
                        <div className="tab-pane fade" id="pills-publicTrees" role="tabpanel" aria-labelledby="pills-publicTrees-tab"></div>
                        <div className="tab-pane fade" id="pills-signOut" role="tabpanel" aria-labelledby="pills-signOut-tab"></div>
                    </div>
                </nav>
            );
        }
    }
}

export default MenuBar;