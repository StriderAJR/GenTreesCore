class TreeCard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: props.tree,
            image: props.image
        };
    }

    handleClick() {
        console.log('clicked');
    }

    render() {
        return (
            <div className="card" key={this.state.data.id} onClick={(e) => this.handleClick(e)}>
                <img className="card-img-top" src={this.state.data.image} alt={this.state.image.name} />
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
        );
    }
}
//<p className="card-text text-right">Created by {this.state.data.creator}</p>
export default TreeCard;