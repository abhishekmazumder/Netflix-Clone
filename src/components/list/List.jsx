import React, { useRef, useState } from 'react';
import './list.scss';
import ListItem from '../listItem/ListItem';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const List = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [isMoved, setIsMoved] = useState(false);
	const listRef = useRef();

	const handleClick = direction => {
		setIsMoved(true);
		let distance = listRef.current.getBoundingClientRect().x - 50;
		if (direction === 'left' && slideNumber > 0) {
			setSlideNumber(slideNumber - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		}
		if (direction === 'right' && slideNumber < 6) {
			setSlideNumber(slideNumber + 1);
			listRef.current.style.transform = `translateX(${-230 + distance}px)`;
		}
	};

	return (
		<div className="list">
			<span className="listTitle">Continue to watch</span>
			<div className="wrapper">
				<ArrowBackIosIcon
					className="sliderArrow left"
					onClick={() => handleClick('left')}
					style={{ display: !isMoved && 'none' }}
				/>
				<div className="container" ref={listRef}>
					<ListItem index={0} />
					<ListItem index={1} />
					<ListItem index={2} />
					<ListItem index={3} />
					<ListItem index={4} />
					<ListItem index={5} />
					<ListItem index={6} />
					<ListItem index={7} />
					<ListItem index={8} />
					<ListItem index={9} />
					<ListItem index={10} />
					<ListItem index={11} />
				</div>
				<ArrowForwardIosIcon
					className="sliderArrow right"
					onClick={() => handleClick('right')}
				/>
			</div>
		</div>
	);
};

export default List;
