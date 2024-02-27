<script lang="ts">
	type ProMatches = {
		match_id: number;
		duration: number;
		start_time: number;
		radiant_team_id: number;
		radiant_name: string;
		dire_team_id: number;
		dire_name: string;
		leagueid: number;
		league_name: string;
		series_type: number;
		radiant_score: number;
		dire_score: number;
		radiant_win: boolean;
	}[];

	export let data;
	const proMatches: ProMatches = data.proMatches;
</script>

<main class="min-h-[calc(100dvh-56px)] p-4 lg:p-8 flex">
	<section
		class="bg-amber-400 rounded-lg flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-900 font-semibold p-2"
	></section>
</main>
