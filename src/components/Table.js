import React from 'react';
import TableRow from './TableRow';

const Table = () => {

    const data = [
        {
            title : 'Billy Elliot',
            length : 123,
            rating : 5,
            genres : ['Drama', 'Comedia'],
            awards : 2
        },
        {
            title : 'Alicia en el país de las maravillas',
            length : 142,
            rating : 4.8,
            genres : ['Drama', 'Acción', 'Comedia'],
            awards : 3
        }
    ];

    return (
        <div className = 'container'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Duración</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Género</th>
                        <th scope="col">Premios</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <TableRow
                                key = {item.title + 1}
                                {...item}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;