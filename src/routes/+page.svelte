<script lang="ts">
	import { IconArrowUp, IconArrowUpRight } from '@tabler/icons-svelte';
	import type { LayoutData } from './$types';
	import { scale } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

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

	export let data: LayoutData;

	let scrollY: number;

	const proMatches: ProMatches = data.proMatches;
	const heros: Heros = data.heros;
	let filteredMatches = proMatches.filter((match) => match.radiant_win != null).slice(0, 3);

	const scrollTop = () => {
		scrollY = 0;
	};

	let randomHeros: number;
	onMount(() => {
		randomHeros = Math.floor(Math.random() * (heros.length - 3));
	});
</script>

<svelte:head>
	<title>Bobopedia</title>
</svelte:head>
<svelte:window bind:scrollY />

<main>
	<section class="h-[calc(100dvh-56px)] flex flex-col items-center justify-center gap-4 px-4">
		<h1 class="text-6xl md:text-8xl lg:text-9xl uppercase font-bold">bobopedia</h1>
		<p class="md:text-lg capitalize font-semibold">
			you can check out <a
				href="#hero"
				class="underline underline-offset-2 hover:underline-offset-4 transition-all ease-in text-amber-400"
				>heros stats</a
			>
			or
			<a
				href="#matches"
				class="underline underline-offset-2 hover:underline-offset-4 transition-all ease-in text-amber-400"
				>recent pro matches</a
			>.
		</p>
	</section>
	<section class="h-[calc(100dvh-56px)] flex flex-col gap-2 lg:gap-4 p-2 lg:p-8" id="hero">
		<h2 class="text-4xl lg:text-6xl uppercase font-semibold text-amber-400">heros</h2>
		<p class="capitalize font-semibold">a few heros to pique interest.</p>
		<div
			class="flex-1 bg-amber-400 rounded-lg grid grid-rows-4 lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-2 p-2"
		>
			{#each heros.slice(randomHeros, randomHeros + 3) as hero}
				<div
					class="bg-amber-200 hover:bg-amber-400 transition-colors ring-2 ring-zinc-900 rounded text-zinc-900 font-semibold p-2 flex flex-col justify-between lg:gap-4 group"
				>
					<span class="flex items-center justify-between gap-2">
						<span class="flex flex-col gap-1 font-bold uppercase">
							<h3 class="lg:text-xl">
								{hero.localized_name}
							</h3>
							<span class=""
								>{#if hero.primary_attr === 'str'}
									strength
								{:else if hero.primary_attr === 'agi'}
									agility
								{:else if hero.primary_attr === 'int'}
									intelligence
								{:else}
									universal
								{/if}
							</span>
						</span>
						<span>
							<img
								src={`https://cdn.cloudflare.steamstatic.com${hero.icon}`}
								alt={hero.localized_name}
							/>
						</span>
					</span>
					<a
						href={`/heros/${hero.id}`}
						class="self-end p-1 lg:p-2 bg-amber-400 rounded-full hover:scale-110 transition-transform ease-in-out group-hover:bg-amber-200 ring-2 ring-zinc-900"
					>
						<IconArrowUpRight />
					</a>
				</div>
			{/each}
			<div
				class="bg-amber-200 hover:bg-amber-400 transition-colors ring-2 ring-zinc-900 text-zinc-900 rounded flex flex-col justify-between gap-2 p-2 group"
			>
				<span
					class="flex-1 flex items-center justify-center text-2xl lg:text-4xl uppercase font-semibold"
					>all hero</span
				>
				<a
					href="/heros"
					class="p-1 lg:p-2 bg-amber-400 rounded-full self-end hover:scale-110 transition-transform ease-in-out group-hover:bg-amber-200 ring-2 ring-zinc-900"
					><IconArrowUpRight /></a
				>
			</div>
		</div>
	</section>
	<section class="h-[calc(100dvh-56px)] flex flex-col gap-2 lg:gap-4 p-2 lg:p-8" id="matches">
		<h2 class="text-4xl lg:text-6xl uppercase font-semibold text-amber-400">pro matches</h2>
		<p class="capitalize font-semibold">few of the recent pro matches.</p>
		<div
			class="flex-1 bg-amber-400 text-zinc-900 rounded-lg grid grid-rows-4 lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-2 p-2"
		>
			{#each filteredMatches as match}
				<div
					class="bg-amber-200 hover:bg-amber-400 transition-colors ring-2 ring-zinc-900 rounded text-zinc-900 font-semibold p-2 flex flex-col justify-between gap-2 lg:gap-4 group"
				>
					<span class="flex-1 flex flex-col gap-2">
						<h3 class="lg:text-xl">
							{match.league_name}
						</h3>
						<span class="flex-1 flex items-center justify-between uppercase">
							<span>{match.radiant_name}</span>
							<span>v/s</span>
							<span>{match.dire_name}</span>
						</span>
					</span>
					<a
						href={`/promatches/${match.match_id}`}
						class="p-1 lg:p-2 bg-amber-400 rounded-full self-end hover:scale-110 transition-transform ease-in-out group-hover:bg-amber-200 ring-2 ring-zinc-900"
						><IconArrowUpRight /></a
					>
				</div>
			{/each}
			<div
				class="bg-amber-200 hover:bg-amber-400 transition-colors ring-2 ring-zinc-900 text-zinc-900 rounded flex flex-col justify-between gap-2 p-2 group"
			>
				<span
					class="flex-1 flex items-center justify-center text-xl md:text-4xl uppercase font-semibold text-center"
					>recent pro matches</span
				>
				<a
					href="/promatches"
					class="p-1 lg:p-2 bg-amber-400 rounded-full self-end hover:scale-110 transition-transform ease-in-out group-hover:bg-amber-200 ring-2 ring-zinc-900"
					><IconArrowUpRight /></a
				>
			</div>
		</div>
	</section>
	{#if scrollY > 450}
		<button
			on:click={() => scrollTop()}
			transition:scale={{
				duration: 300,
				easing: quintInOut
			}}
			class="fixed bottom-4 right-4 p-2 bg-indigo-400 text-zinc-900 rounded-full hover:scale-110 transition-transform ease-in-out"
			><IconArrowUp /></button
		>
	{/if}
</main>
