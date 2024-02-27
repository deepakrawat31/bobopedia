import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	const proMatchRes = await fetch('https://api.opendota.com/api/proMatches');
	const proMatches = await proMatchRes.json();

	const heroRes = await fetch('https://api.opendota.com/api/heroStats');
	const heros = await heroRes.json();

	return {
		proMatches: proMatches,
		heros: heros
	};
};
