import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import useMetrika from '../hooks/useMetrika';

const Modal = React.lazy(
	() => import('../components/modal' /*webpackChunkName: "modal" */)
);

const AnotherComponent = React.lazy(
	() =>
		import(
			'../components/another-component' /*webpackChunkName: "another-component" */
		)
);

export const App = () => {
	const ym = useMetrika();

	return (
		<div className={styles.page}>
			<div className={styles.links}>
				<Link to='/another' className={styles.link}>
					Перейти на станицу c компонентом AnotherComponent
				</Link>
				<Link to='/modal' className={styles.link}>
					Перейти на станицу c компонентом Modal
				</Link>
			</div>
			<Routes>
				<Route
					path='/modal'
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Modal />
						</Suspense>
					}
				/>
				<Route
					path='/another'
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<AnotherComponent />
						</Suspense>
					}
				/>
			</Routes>
			<button className={styles.link} onClick={() => ym.ym('reachGoal', 'buy')}>
				Купить
			</button>
			<button
				className={styles.link}
				onClick={() =>
					(window as any).gtag('event', 'add_to_cart', {
						send_to: 'G-KH56L0KNT7', // указываем ID потока
						event_name: 'add_to_cart',
					})
				}>
				Купить в 1 клик
			</button>
		</div>
	);
};
