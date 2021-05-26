import * as React from 'react';
import { useState, useRef } from 'react';

// <> === React.Fragment
//ts나 babel이 <>을 변환할 때, React.Fragment로 변환하는데 React가 없으면 undefined가 된다.
const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => { //함수를 분리를 하는 경우 e는 타입추론이 안 됨
        e.preventDefault();
        const input = inputEl.current;
        if (parseInt(value) === first * second) {
            setResult('정답');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            if (input) {
                input.focus();
            }
        } else {
                setResult('땡');
                setValue('');
                if (input) {
                    input.focus();
                }
            }
        }
    

    
    return (
        <>
            <div>{first} 곱하기 {second} 는 ?</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    type="number"
                    value={value}
                    onChange={ (e)=>setValue(e.target.value)}/>
            </form>
            <div>{ result}</div>
        </>
    )
}

export default GuGuDan;