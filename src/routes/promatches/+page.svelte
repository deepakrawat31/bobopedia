<script lang="ts">
	import { IconArrowUpRight } from '@tabler/icons-svelte';

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

<svelte:head>
	<title>Bobopedia | Pro Matches</title>
</svelte:head>

<main class="min-h-[calc(100dvh-56px)] p-4 lg:p-8 flex flex-col gap-4">
	<h1 class="text-2xl lg:text-6xl uppercase font-bold text-amber-400">recent pro matches</h1>
	<section
		class="bg-amber-400 rounded-lg flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 text-zinc-900 p-2"
	>
		{#each proMatches as match}
			<div
				class="bg-amber-200 hover:bg-amber-400 transition-colors ring-2 ring-zinc-900 rounded text-zinc-900 font-bold p-2 flex flex-col justify-between gap-2 lg:gap-4 group"
			>
				<span class="flex-1 flex flex-col gap-2">
					<h3 class="lg:text-xl">
						{match.league_name}
					</h3>
					<span class="text-sm lg:text-base flex-1 flex items-center gap-2 uppercase">
						<span
							>{match.radiant_name}
							{#if match.radiant_win}
								(w)
							{/if}</span
						>
						<span>v/s</span>
						<span
							>{match.dire_name}
							{#if !match.radiant_win}
								(w)
							{/if}</span
						>
					</span>
				</span>
				<a
					href={`/promatches/${match.match_id}`}
					class="p-1 lg:p-2 bg-amber-400 rounded-full self-end hover:scale-110 transition-transform ease-in-out group-hover:bg-amber-200 ring-2 ring-zinc-900"
					><IconArrowUpRight /></a
				>
			</div>
		{/each}
	</section>
</main>
