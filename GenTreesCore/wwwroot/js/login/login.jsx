function App() {
    return (
        <div className="container">
            <LogIn />
        </div>
    )
}

function LogIn() {
    return (
        <div class="row my-lg-4">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="card">
                    <form class="text-center border border-white p-5" action="#!">

                        <p class="h4 mb-4">Sign in</p>

                        <input type="email" id="defaultloginformemail" class="form-control mb-4" placeholder="E-mail" />

                        <input type="password" id="defaultloginformpassword" class="form-control mb-4" placeholder="Password" />

                        <div class="d-flex justify-content-around">
                            <div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="defaultloginformremember" />
                                    <label class="custom-control-label" for="defaultloginformremember">Remember me</label>
                                </div>
                            </div>
                            <div>
                                <a href="">Forgot password?</a>
                            </div>
                        </div>

                        <button class="btn btn-block btn-primary my-4" type="submit">Sign in</button>

                        <p>Not a member? 
                            <a href="">Create an Account</a>
                        </p>
                    </form>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="col-md-3"></div>
        </div>
    )
}

ReactDOM.render(
    React.createElement(App, null),
    document.getElementById('logInContent')
);