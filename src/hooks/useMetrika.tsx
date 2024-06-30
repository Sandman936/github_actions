import { useContext } from 'react';
import { Analytic } from '../context/analityc';

const useMetrika = () => {
	const { yandexId, googleId } = useContext(Analytic);
	const ym = (method: string, idTarget: string, options: any = {}) => {
		if ((window as any).ym && yandexId) {
			(window as any).ym(yandexId, method, idTarget, options);
		}
	};

	const gtag = (method: string, eventName: string, options: any = {}) => {
		if ((window as any).gtag && googleId) {
			(window as any).gtag(method, eventName, {
				send_to: googleId,
				...options,
			});
		}
	};

	return { ym, gtag };
};

export default useMetrika;
