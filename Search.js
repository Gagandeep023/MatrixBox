import React, { useState } from 'react';
const SearchPage = () => {
	const [ students, setStudents ] = useState([]);

	  const handleColorChange = (number) => {
		if(!(students.includes(number)) && students.length < 2) {
			setStudents(prevArray => [...prevArray, number])
		}
	};
	return (
		<div>
		<table>
		  <tbody>
				<tr>
				  <td style={{ backgroundColor: students.includes('1') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '1')}>item[3]</td>
				  <td style={{ backgroundColor: students.includes('2') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '2')}>item[3]</td>
				  <td style={{ backgroundColor: students.includes('3') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '3')}>item[3]</td>
				  <td style={{ backgroundColor: students.includes('4') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '4')}>item[3]</td>
				</tr>
				<tr>
				  <td style={{ backgroundColor: students.includes('5') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '5')}>item[3]</td>
				  <td style={{ backgroundColor: students.includes('6') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '6')}>item[3]</td>
				  <td style={{ backgroundColor: students.includes('7') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '7')}>item[3]</td>
				  <td style={{ backgroundColor: students.includes('8') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '8')}>item[3]</td>
				</tr>
				<tr>
				  <td style={{ backgroundColor: students.includes('9') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '9')}>item[3]</td>
				  <td style={{ backgroundColor: students.includes('10') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '10')}>item[3]</td>
				  <td style={{ backgroundColor: students.includes('11') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '11')}>item[3]</td>
				  <td style={{ backgroundColor: students.includes('12') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '12')}>item[3]</td>
				</tr>
				<tr>
				  <td style={{ backgroundColor: students.includes('13') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '13')}>item[3]</td>
				  <td style={{ backgroundColor: students.includes('14') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '14')}>item[3]</td>
				  <td style={{ backgroundColor: students.includes('15') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '15')}>item[3]</td>
				  <td style={{ backgroundColor: students.includes('16') ? 'red' : 'blue'}} onClick={handleColorChange.bind(this, '16')}>item[3]</td>
				</tr>
		  </tbody>
		</table>
	  </div>
	);
};

export default SearchPage;