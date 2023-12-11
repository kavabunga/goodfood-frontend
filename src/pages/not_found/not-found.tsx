import React from 'react';
import notFoundSvg from '@images/page-404.svg';
import styles from './not-found.module.scss';

const NotFound: React.FC = () => {
	return (
		<section className={`${styles['otFound']}`}>
			<img src={notFoundSvg} alt="notFoundSvg" />
			<div>
				<h1>Упс! Что-то пошло не так</h1>
				<button></button>
			</div>
		</section>
	);
};

export default NotFound;
