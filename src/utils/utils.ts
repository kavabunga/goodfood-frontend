// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function splitIntoSubArrays(arr: Record<string, any>[], arrSize: number) {
	const arrayWithSubArrays = [];
	for (let i = 0; i < arr.length; i += arrSize) {
		arrayWithSubArrays.push(arr.slice(i, i + arrSize));
	}

	return arrayWithSubArrays;
}
