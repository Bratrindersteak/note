<template>
	<Layout>
		<Header>Header</Header>
		<Content>
			<Table :columns="columns1" :data="data1"></Table>
		</Content>
		<Footer>Footer</Footer>
	</Layout>
</template>
<script>
	export default {
		data () {
			return {
				value: '',
				list: [],
				columns1: [
					{
						title: 'Name',
						key: 'name'
					},
					{
						title: 'Age',
						key: 'age'
					},
					{
						title: 'Address',
						key: 'address'
					}
				],
				data1: [
					{
						name: 'John Brown',
						age: 18,
						address: 'New York No. 1 Lake Park',
						date: '2016-10-03'
					},
					{
						name: 'Jim Green',
						age: 24,
						address: 'London No. 1 Lake Park',
						date: '2016-10-01'
					},
					{
						name: 'Joe Black',
						age: 30,
						address: 'Sydney No. 1 Lake Park',
						date: '2016-10-02'
					},
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park',
						date: '2016-10-04'
					}
				]
			}
		},
		methods: {
			add (value) {

				if (value) {
					this.list.unshift(value);
					this.value = '';
				}
			},
			remove (index) {
				this.list.splice(index, 1);
				console.log( index );
			},
		},
	}
</script>
<style scoped>
	.input {
		margin: 30px 0;
	}
</style>
