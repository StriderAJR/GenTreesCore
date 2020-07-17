import Person from './person'

class GenTree extends React.Component {
    renderPersons() {
        //const persons = testData.map((pers) => <Person pers={pers} />);
        //return persons;
        return (
            <div className="card-deck">
                {testData.map(pers => {
                    return (
                        <Person pers={pers} />
                    );
                })}
            </div>
        );
    }

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