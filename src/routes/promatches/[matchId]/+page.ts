import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, fetch }) => {
	let matchId = url.pathname.slice(12);
	const matchRes = await fetch(`https://api.opendota.com/api/matches/${matchId}`);
	const matchData = await matchRes.json();

	return {
		match: matchData
	};
};
