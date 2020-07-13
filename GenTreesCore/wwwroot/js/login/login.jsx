﻿//function App() {
//    return (
//        <div className="container">
//            <LogIn />
//        </div>
//    )
//}

class LogInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Login: "",
            Password: ""
        };

        //this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLoginInput = this.onLoginInput.bind(this);
        this.onPasswordInput = this.onPasswordInput.bind(this);
    }

    onLoginInput(e) {
        this.setState({ Login: e.target.value });
    }

    onPasswordInput(e) {
        this.setState({ Password: e.target.value });
    }

    //changeHandler(e){
    //    this.setState({ [e.name]: e.value});
    //}

    onSubmit(){
        var data = new FormData;
        data.append("Login", this.Login);
        data.append("Password", this.Password);

        var xhr = new XMLHttpRequest();
        xhr.open('post', 'https://localhost:5001/Users/Login', true);
        xhr.onload = function () {
            if (xhr.status == 200) {
                console.log('aliluya');
            }
        }.bind(this);
        xhr.send(data);
    }

    render() {
        return (
            <div className="container">
                <div className="row my-lg-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card">
                            <form onSubmit={ this.onSubmit} className="text-center border border-white p-5" action="#!" >

                                <p className="h4 mb-4">Sign in</p>

                                <input type="text" id="defaultloginformemail"
                                    className="form-control mb-4" placeholder="Login"
                                    /*name="Login"*/ value={this.state.Login} onChange={this.onLoginInput} />

                                <input type="password" id="defaultloginformpassword"
                                    className="form-control mb-4" placeholder="Password"
                                    /*name="Password"*/ value={this.state.Password} onChange={this.onPasswordInput} />

                                <div className="d-flex justify-content-around">
                                    <div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="defaultloginformremember" />
                                            <label className="custom-control-label" htmlFor="defaultloginformremember">Remember me</label>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="">Forgot password?</a>
                                    </div>
                                </div>

                                <button className="btn btn-block btn-primary my-4" type="submit" >Sign in</button>

                                <p>Not a member?
                                <a href="">Create an Account</a>
                                </p>
                            </form>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    React.createElement(LogInPage, null),
    document.getElementById('logInContent')
);