import React from 'react';

interface SearchBarProps {
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ placeholder, value, onChange }: SearchBarProps) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='border border-gray-400 rounded-lg px-4 py-2'
        />
    );
};

export default SearchBar;
