import React from "react";

export const List = (props) => {
    const {data} = props;

    let result = data.sort((a, b) => {
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    });

    return (
        <div className='box'>
            <h3>Most Searched Anagrams</h3>
            <ul>{
                result.slice(0, 10).map((value) => {
                    return (
                        <li className={'list-group-item'} key={value.word}>
                            <b>{value.word} </b> ({value.count})
                            <p>
                                {value.compared.map((word) => {
                                    return <span className='chip' key={word}> {word}</span>
                                })}
                            </p>
                        </li>
                    )
                })

            }
            </ul>
        </div>
    );
}
