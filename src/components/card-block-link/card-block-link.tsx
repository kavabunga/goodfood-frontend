import styles from './card-block-link.module.scss';
// import { Link } from 'react-router-dom';

type CardBlockLinkProps = {
	title: string;
	backgroundImage: string | undefined;
};

function CardBlockLink({ title, backgroundImage }: CardBlockLinkProps) {
	return (
		<div
			className={styles['card-block-link']}
			style={{ backgroundImage: backgroundImage }}
		>
			<h3 className={styles['card-block-link__title']}>{title}</h3>
		</div>
	);
}

export default CardBlockLink;
