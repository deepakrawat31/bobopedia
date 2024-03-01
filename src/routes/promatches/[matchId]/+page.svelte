<script lang="ts">
	import type { PageData } from './$types';
	type Match = {
		radiant_win: boolean;
		league: {
			leagueid: number;
			tier: string;
			name: string;
		};
		duration: number;
		series_id: number;
		radiant_score: number;
		radiant_team: {
			team_id: number;
			name: string;
			tag: string;
			logo_url: string;
		};
		dire_score: number;
		dire_team: {
			team_id: number;
			name: string;
			tag: string;
			logo_url: string;
		};
		picks_bans: {
			is_pick: boolean;
			hero_id: number;
			team: number;
			order: number;
		}[];
	};

	type Heros = {
		id: number;
		name: string;
		primary_attr: string;
		attack_type: string;
		roles: string[];
		icon: string;
		base_health_regen: number;
		base_mana_regen: number;
		base_armor: number;
		base_attack_min: number;
		base_attack_max: number;
		base_str: number;
		base_agi: number;
		base_int: number;
		str_gain: number;
		agi_gain: number;
		int_gain: number;
		attack_range: number;
		attack_rate: number;
		move_speed: number;
		localized_name: string;
	}[];

	export let data: PageData;

	const matchData: Match = data.match;

	const heros: Heros = data.heros;
</script>

<svelte:head>
	<title>{matchData.radiant_team.tag} vs {matchData.dire_team.tag}</title>
</svelte:head>

<main class="min-h-[calc(100dvh-56px)] p-4 flex">
	<section class="flex-1 rounded-lg flex flex-col gap-4 font-semibold">
		<h1
			class="text-xl md:text-2xl font-bold uppercase flex items-center justify-between gap-2 text-amber-400"
		>
			<span>{matchData.league.name}</span>
			<span class="text-end">{(matchData.duration / 60).toFixed(0)} min</span>
		</h1>
		<div class="uppercase md:text-xl flex flex-col gap-4">
			<span class="flex items-center gap-2">
				<span>
					{matchData.radiant_team.name}
				</span>
				{#if matchData.radiant_win}
					<span> (w) </span>
				{/if}
				<span>- {matchData.radiant_score}</span>
			</span>
			<span class="flex gap-2 md:gap-4 flex-wrap">
				{#each matchData.picks_bans as item}
					{#each heros as hero}
						{#if item.team === 0 && hero.id === item.hero_id}
							<a
								href={`/heros/${hero.id}`}
								class={`p-2 rounded md:hover:scale-110 transition-transform ${item.is_pick ? 'bg-emerald-400' : 'bg-rose-400'}`}
								><img
									src={`https://cdn.cloudflare.steamstatic.com${hero.icon}`}
									alt={hero.localized_name}
								/></a
							>
						{/if}
					{/each}
				{/each}
			</span>
		</div>
		<div class="uppercase md:text-xl flex flex-col gap-4">
			<span class="flex items-center gap-2">
				<span>
					{matchData.dire_team.name}
				</span>
				{#if !matchData.radiant_win}
					<span> (w) </span>
				{/if}
				<span>- {matchData.dire_score}</span>
			</span>
			<span class="flex gap-2 md:gap-4 flex-wrap">
				{#each matchData.picks_bans as item}
					{#each heros as hero}
						{#if item.team === 1 && hero.id === item.hero_id}
							<a
								href={`/heros/${hero.id}`}
								class={`p-2 rounded md:hover:scale-110 transition-transform ${item.is_pick ? 'bg-emerald-400' : 'bg-rose-400'}`}
								><img
									src={`https://cdn.cloudflare.steamstatic.com${hero.icon}`}
									alt={hero.localized_name}
								/></a
							>
						{/if}
					{/each}
				{/each}
			</span>
		</div>
	</section>
</main>
