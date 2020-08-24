import Person from './person'
import Draggable from 'react-draggable'
import { serialize, deserialize } from "react-serialize"

class GenTree extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            isLoading: false,
        }
    }

    componentDidMount() {
        var foo = localStorage.getItem("foo");
        console.log(foo);
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/Trees/gentree?id='+foo, true); // замените адрес
        xhr.send();
        this.setState({ isLoading: true });

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return false;
            }

            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText);
            } else {
                this.setState({
                    data: JSON.parse(xhr.responseText),
                    isLoading: false,
                });
            }
        }
    }

    renderPersons() {
        const { data, isLoading } = this.state;
        //const d = serialize(this.state.data.value);
        if (isLoading) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else if (data == null)
        {
            return (<div></div>);
        } else {
            console.log(data.Persons);
            return (
                <div>
                    {data.Persons.map(pers => {
                        return (
                            <Person pers={pers} />
                        );
                    })}
                </div>
            );
        }
    }



    logInf() {
        var foo = localStorage.getItem("foo");
        console.log("/Trees/gentree?id="+ foo);
    }

    render() {
        return (
            <div onClick={(e) => this.logInf(e)}>
                {this.renderPersons()}
            </div>
        );
    }
}

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