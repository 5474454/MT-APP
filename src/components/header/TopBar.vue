<template>
	<el-row class="m-header m-header-topbar">
		<el-col :span="10">
			<Geo />
		</el-col>
		<el-col :span="14">
			<my-nav />
		</el-col>
	</el-row>
</template>

<script>
import Geo from './Geo'
import MyNav from './Nav'
export default {
	components: {
		Geo,
		MyNav
	}
} 
</script>

<style lang="scss" >
@import '@/assets/css/public/header/topbar.scss';
</style>