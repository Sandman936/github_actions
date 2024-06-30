import { useContext } from 'react';
import { Analytic } from '../context/analityc';

const useMetrika = () => {
	const { yandexId } = useContext(Analytic);
	const ym = (method: string, idTarget: string, options: any = {}) => {
		if ((window as any).ym && yandexId) {
			(window as any).ym(yandexId, method, idTarget, options);
		}
	};

	return { ym };
};

export default useMetrika;
