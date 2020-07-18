import Person from './person'
import Draggable from 'react-draggable'

class GenTree extends React.Component {
    constructor(props) {
        super(props);

        //this.state = {
        //    activeDrags: 0,
        //    deltaPosition: { x: 0, y: 0 },
        //    controlledPosition: { x: -400, y: 200 }
        //};

        //this.handleDrag = this.handleDrag.bind(this);
        //this.onStart = this.onStart.bind(this);
        //this.onStop = this.onStop.bind(this);
    }

    //handleDrag(e, ui) {
    //    const { x, y } = this.state.deltaPosition;
    //    this.setState({
    //        deltaPosition: {
    //            x: x + ui.deltaX,
    //            y: y + ui.deltaY,
    //        }
    //    });
    //}

    //onStart() {
    //    this.setState({ activeDrags: ++this.state.activeDrags });
    //}

    //onStop() {
    //    this.setState({ activeDrags: --this.state.activeDrags });
    //}

    renderPersons() {
        //const persons = testData.map((pers) => <Person pers={pers} />);
        //return persons;
        //<div draggable="true" onDragStart={(e) => this.handleDrag(e)}></div>
        //const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            <div>    
                {testData.map(pers => {
                    return (
                            <Person pers={pers} />
                    );
                })}  
            </div>
        );
    }

    //handleDrag(e: React.DragEvent<HTMLDivElement>) {
    //    const id = (e.target as HTMLDivElement).id;
    //    e.st
    //}

    render() {
        return (
            <div>
                {this.renderPersons()}
            </div>
        );
    }
}
/*
const testData =
{
    id: 0,
    name: 'Sailor Venera',
    gender: 'women',
    dateBirth: '22.10.1993'
};*/
/*
class GenTree extends React.Component {
    constructor(props) {
        super(props);

        this.state = { disabled: false };

        this.toggleDraggable = this.toggleDraggable.bind(this);
    }

    toggleDraggable(e){
        this.setState(prevState => ({ disabled: !this.state.disabled }));
    }

    render() {
        //const disabled = this.state.disabled;
        return (
            <div>
                <Draggable disabled={this.state.disabled} bounds="parent">
                    <div
                        style={{ width: 200 }}
                        className={!this.state.disabled ? "draggable" : null}
                    >
                        <h4 style={{ height: 20, userSelect: "none" }}>
                            {!this.state.disabled && "Drag Me"}
                        </h4>
                        <textarea disabled={!this.state.disabled} className="uk-textarea" />
                        <input disabled={!this.state.disabled} className="uk-input" />
                        <input
                            className="uk-checkbox	"
                            type="checkbox"
                            disabled={!this.state.disabled}
                        />
                        <br />
                        <button
                            className="uk-button uk-button-primary"
                            onClick={(e) => this.toggleDraggable(e)}
                        >
                            {this.state.disabled ? "Enable" : "Disable"} Drag
                        </button>
                    </div>
                </Draggable>
            </div>
        );
    };
}*/
/*
class GenTree extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeDrags: 0,
            deltaPosition: { x: 0, y: 0 },
            controlledPosition: { x: -400, y: 200 }
        };

        this.handleDrag = this.handleDrag.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
    }

    handleDrag(e, ui) {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    }

    onStart() {
        this.setState({ activeDrags: ++this.state.activeDrags });
    }

    onStop() {
        this.setState({ activeDrags: --this.state.activeDrags });
    }

    renderPersons() {
        return (

            <Draggable onStart={(e) => this.onStart(e)} onStop={(e) => this.onStop(e)}>
                <div className="box">I can be dragged anywhere</div>
            </Draggable>

        );
    }

    render() {
        return (
            <div>
                {this.renderPersons()}
            </div>
        );
    }
}*/

const testData = [
    {
        id: '0',
        name: 'Sailor Venera',
        gender: 'women',
        dateBirth:'22.10.1993'
    }, {
        id: '1',
        name: 'Sailor Mars',
        gender: 'women',
        dateBirth: '17.04.1993'
    }, {
        id: '2',
        name: 'Sailor Moon',
        gender: 'women',
        dateBirth: '30.06.1993'
    }, {
        id: '3',
        name: 'Sailor Neptun',
        gender: 'women',
        dateBirth: '6.03.1993'
    }, {
        id: '4',
        name: 'Sailor Uran',
        gender: 'women',
        dateBirth: '27.01.1993'
    },
    {
        id: '5',
        name: 'Sailor Venera',
        gender: 'women',
        dateBirth: '22.10.1993'
    }, {
        id: '6',
        name: 'Sailor Mars',
        gender: 'women',
        dateBirth: '17.04.1993'
    }, {
        id: '7',
        name: 'Sailor Moon',
        gender: 'women',
        dateBirth: '30.06.1993'
    }, {
        id: '8',
        name: 'Sailor Neptun',
        gender: 'women',
        dateBirth: '6.03.1993'
    }, {
        id: '9',
        name: 'Sailor Uran',
        gender: 'women',
        dateBirth: '27.01.1993'
    }
];

export default GenTree;