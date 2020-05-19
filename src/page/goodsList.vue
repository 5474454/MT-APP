<template>
	<div class="page-product">
		<el-row class="m-crumbs">
			<Crumbs />
		</el-row>
		<el-row>
			<el-col :span="19">
				<el-row>
					<Categroy />
				</el-row>
				<el-row>
					<List />
				</el-row>
			</el-col>
			<el-col :span="5">
				map + fav
			</el-col>
		</el-row>
	</div>
</template>

<script>
import Categroy from '@/components/products/categroy.vue'
import Crumbs from '@/components/products/crumbs.vue'
import List from '@/components/products/list.vue'
export default {
	components: {
		Crumbs,
		Categroy,
		List
	}
}
</script> 

<style lang="scss" >
@import '@/assets/css/products/index.scss';
</style>