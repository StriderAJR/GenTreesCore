class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-small primary-color">
                <hr />
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-xs-6 col-sm-3">
                            <h5 className="text-uppercase">Creators</h5>
                            <ul className="list-unstyled">
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
                <div className="footer-copyright text-center py-3">
                    © 2020 Copyright:
            <a href="#!">StridingSoft</a>
                </div>
            </footer>    
        );
    }
}

export default Footer;