function createTable() {
    //Write your code here
	const row = prompt('Input number of rows');
	const col = prompt('Input number of columns');

	const table = document.createElement('table');
	
	for(let i = 0; i < row.length; i++){
		const row = document.createElement('tr');
		for(let j = 0; j < col.length; j++){
			const col = document.createElement('td');
			col.innerText = `Row-${i} Column-${j}`;
			row.append(col);
		}
		table.appendChild(row);
	}
}
