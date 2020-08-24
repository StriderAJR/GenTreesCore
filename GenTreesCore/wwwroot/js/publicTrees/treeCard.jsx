class TreeCard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: props.tree
        };
    }

    handleClick() {
        console.log('clicked');
        localStorage.setItem("foo", this.state.data.id);
        window.location.assign('/Home/TestTree');
    }

    render() {
        return (
            <div className="col mb-4">
                <div className="card " key={this.state.data.id} onClick={(e) => this.handleClick(e)}>
                    <img className="card-img-top" src={this.state.data.image} />
                    <div className="card-body">
                        <h4 className="card-title">{this.state.data.name}</h4>
                        <p className="card-text">{this.state.data.description}</p>
                        <footer class="blockquote-footer text-right">
                            Created by <cite title="Source Title">{this.state.data.creator}</cite>
                        </footer>
                    </div>
                    <div class="card-footer">
                        <small className="text-muted">Last updated ~ {this.state.data.lastUpdated}</small>
                    </div>
                </div>
            </div>
        );
    }
}
//<p className="card-text text-right">Created by {this.state.data.creator}</p>
export default TreeCard;