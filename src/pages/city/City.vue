<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list></city-list>
    <city-alphabet></city-alphabet>
	</div>
</template>

<script>
import CityHeader from './components/Header.vue';
import CitySearch from './components/Search.vue';
import CityList from './components/List.vue';
import CityAlphabet from "./components/Alphabet.vue";
export default {
	name: "MyCity",
	components: {CityAlphabet, CityHeader, CitySearch, CityList }
}
</script>

<style lang="stylus" scoped>

</style>