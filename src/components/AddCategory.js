import React,{useState} from 'react';
import PropTypes from 'prop-types';

//usando desestructuración para cargar las props
export const AddCategorie = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const handleSumit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){

            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSumit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

AddCategorie.protoTypes = {
    setCategories: PropTypes.func.isRequired
}
