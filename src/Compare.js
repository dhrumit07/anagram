
//list component
import React, {useState} from "react";
import ls from "local-storage";

export const Compare = (props) => {

    const {data, setData} = props;
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');

    const checkAnagram = () => {
        if (word1.trim() === word2.trim()) {

            alert("Word is always anagram of it self");

        } else if (word1.trim().toLowerCase().split("").sort().join("") === word2.trim().toLowerCase().split("").sort().join("")) {

            alert('anagram');
            //if the word is anagram add that into the local storage and increment counter


            let result = data.find((obj) => obj.word === word2 || obj.word === word1)
            if (result === undefined) {
                data.push({
                    word: word1,
                    count: 1,
                    compared: [word2]
                })
            } else {
                let compared = result.compared;
                if (word1 === result.word) {
                    if (compared.indexOf(word2) === -1) {
                        compared.push(word2);
                    }
                } else {
                    if (compared.indexOf(word1) === -1) {
                        compared.push(word1);
                    }
                }

                data[data.indexOf(result)] = {
                    ...result,
                    ...{
                        count: result.count + 1,
                        compared: compared

                    }
                }
            }
            ls.set('data', data);
            setData(data);
            setWord1('');
            setWord2('');

        } else {
            alert('Not anagram');
        }

    }

    const changeWord1 = (e) => {
        setWord1(e.target.value.toLowerCase());
    }

    const changeWord2 = (e) => {
        setWord2(e.target.value.toLowerCase());
    }


    return (
        <div className='box'>
            <h3>Check Anagram</h3>
            <input className='input' type='text' onChange={changeWord1} value={word1}/>
            <input className='input' type='text' onChange={changeWord2} value={word2}/>
            <input className='button' type='submit' onClick={checkAnagram}
                   disabled={!((word1.length === word2.length) && word1.length > 0 && word2.length > 0)}
                   value={'Check for anagram'}/>

        </div>

    );
}