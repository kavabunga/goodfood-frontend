import { useRef } from 'react';
import styles from './input-address.module.scss';
import closeIcon from '@images/profile/close.svg';
import checkIcon from '@images/profile/check.svg';
import editIcon from '@images/profile/edit.svg';
import clsx from 'clsx';

type InputAddressType = React.InputHTMLAttributes<HTMLInputElement> & {
	readonly deleteAddress?: () => void;
	readonly addAddress?: ((newAddress: string) => void) | (() => void);
	readonly changeAddress?: ((newAddress: string) => void) | (() => void);
	readonly initialValue?: string;
	readonly onChangeValue?: ((value: string) => void) | (() => void);
	readonly value?: string;
};

export default function InputAddress({
	initialValue = '',
	onChangeValue = () => {},
	deleteAddress = () => {},
	changeAddress = () => {},
	addAddress = () => {},
	value = '',
	...props
}: InputAddressType) {
	const inputRef = useRef<null | HTMLInputElement>(null);

	const isChanged = value !== initialValue;
	const isButtonHidden = value === '' && initialValue === '';

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		onChangeValue(e.target.value);

	const onClickChange = () => {
		if (value === '') {
			const isConfirm = confirm(`Вы хотите удалить адрес ${initialValue}`);
			isConfirm ? deleteAddress() : onChangeValue(initialValue);
			return;
		}
		if (initialValue === '') {
			addAddress(value);
		} else {
			changeAddress(value);
		}
	};

	const onClickClose = () => {
		if (isChanged) {
			onChangeValue(initialValue);
		} else {
			const isConfirm = confirm(`Вы хотите удалить адрес ${initialValue}`);
			isConfirm && deleteAddress();
		}
	};

	const onClickEdit = () => {
		inputRef.current && inputRef.current.focus();
	};

	return (
		<div className={clsx(styles.wrapper)}>
			<input
				ref={inputRef}
				type="text"
				placeholder="Добавить адрес"
				{...props}
				onChange={onChange}
				value={value}
				className={styles.input}
			/>
			{!isButtonHidden && (
				<div className={styles.buttons}>
					{isChanged ? (
						<button
							onClick={() => onClickChange()}
							type="button"
							className={clsx(styles.button, styles.button__check)}
						>
							<img src={checkIcon} alt="check-icon" />
						</button>
					) : (
						<button
							onClick={() => onClickEdit()}
							type="button"
							className={clsx(styles.button, styles.button__edit)}
						>
							<img src={editIcon} alt="edit-icon" />
						</button>
					)}
					<button
						onClick={() => onClickClose()}
						type="button"
						className={clsx(styles.button, styles.button__close)}
					>
						<img src={closeIcon} alt="close-icon" />
					</button>
				</div>
			)}
		</div>
	);
}
