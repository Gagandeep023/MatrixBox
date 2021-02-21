import React, { useState } from 'react';

	const ColorGamePage = () => {
		const [ selectedCell, setselectedCell ] = useState([]);
		const matrix = [['1'],['2'],['3'],['4']];
		const handleColorChange = (number) => {
			if(!(selectedCell.includes(number))) {
				if(selectedCell.length === 2) {
					selectedCell.splice(0, 1);
				}
				setselectedCell(prevArray => [...prevArray, number])
			}
		};
		return (
			<div>
			<table>
			<tbody>
				{matrix.slice(0, 4).map((item, index) => {
					return (
					<tr>
						<td style={{ backgroundColor: selectedCell.includes(item[0]) ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, item[0])}>item</td>
						<td style={{ backgroundColor: selectedCell.includes(item[0]+1) ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, item[0]+1)}>item</td>
						<td style={{ backgroundColor: selectedCell.includes(item[0]+2) ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, item[0]+2)}>item</td>
						<td style={{ backgroundColor: selectedCell.includes(item[0]+3) ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, item[0]+3)}>item</td>
					</tr>
					);
				})}
			</tbody>
			</table>
		</div>
		);
	};

	export default ColorGamePage;