import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';

//console.log(Sdata[0].sname);

function ncard(val) {
	return (
		<Card
			key={val.id}
			imgsrc={val.imgsrc}
			title={val.title}
			sname={val.sname}
			link={val.link}
		/>
	);
}

ReactDOM.render(
	<>
		<h1 className='heading_style'> List of Top 5 Netflix Series</h1>
		{/* use map method instead of writing card information again n again ncard is callback function ncard pass kiya*/}
		{Sdata.map(ncard)}
	</>,
	document.getElementById('root')
);
