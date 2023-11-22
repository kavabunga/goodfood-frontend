import React, { useState } from 'react';
import Select from 'react-select';
import './drop-down.scss';

type SelectOptionType = { label: string; value: string };

const options: SelectOptionType[] = [
	{ value: 'popular', label: 'По популярности' },
	{ value: 'cheap', label: 'Сначала дешевые' },
	{ value: 'expensive', label: 'Сначала дорогие' },
	{ value: 'rating', label: 'По рейтингу' },
];

const DropDown: React.FC = () => {
	const [currentOption, setCurrentOption] = useState({
		value: 'choose',
		label: 'Выбрать',
	});

	const handleSelectionChange = (option: SelectOptionType | null) => {
		if (option) {
			setCurrentOption(option);
		}
	};

	return (
		<Select
			classNamePrefix="custom-select"
			placeholder="Выбрать"
			onChange={handleSelectionChange}
			value={currentOption}
			options={options}
		/>
	);
};

export default DropDown;
