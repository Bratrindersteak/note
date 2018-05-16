<template>
	<div class="table">
		<table>
			<tr>
				<th v-for="item in title">{{ item.title }}</th>
			</tr>
			<tr v-for="item in data">
				<td><input class="input" type="text" v-model="item.type" /></td>
				<td><input class="input" type="text" v-model="item.name" /></td>
				<td><input class="input" type="text" v-model="item.cost" /></td>
			</tr>
		</table>
		<div class="operation">
			<button type="button">添加</button>
			<button type="button">提交</button>
			<button type="button">刷新</button>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';

	export default {
		data () {
			return {
				value: '',
				list: [],
				title: [
					{
						title: '类型',
						key: 'type'
					},
					{
						title: '名称',
						key: 'name'
					},
					{
						title: '金额',
						key: 'cost'
					}
				],
				data: [],
				isLoading: true
			}
		},
		mounted: function () {
			axios.get(`//${ location.hostname }:3000/getData`, {
				params: {}
			})
				.then(res => {
					return Object.assign({
						status: res.status,
						statusText: res.statusText,
						data: res.data
					});
				})
				.then(res => {
					if (res.data.length) {
						this.data = [...res.data];
					}
				})
				.then(() => {
					this.isLoading = false;
				})
				.catch(error => {
					console.log(error);
				});
		},
		methods: {
			add(value) {

				if (value) {
					this.list.unshift(value);
					this.value = '';
				}
			},
			remove(index) {
				this.list.splice(index, 1);
				console.log(index);
			},
			submit() {
				axios.post(`//${ location.hostname }:3000/postData`, {
					userID: 1,
					data: this.data
				})
					.then(() => {

					})
					.catch((error) => {
						console.log( error );
					});
			}
		}
	}
</script>
<style scoped>
	.table {
		height: 100%;
	}

	table {
		width: 80%;
		margin-left: 10%;
		margin-right: 10%;
		border: 1px solid #000000;
	}

	tr {

	}

	th {
		height: 30px;
		padding: 0;
		font-weight: normal;
	}

	td {
		width: 33.33%;
		height: 30px;
		padding: 0;
	}

	.input {
		width: 100%;
		height: 100%;
		padding: 0;
		border: 0;
		text-align: center;
	}

	th, .input {
		font-size: 1.6rem;
	}

	.operation {
		text-align: center;
	}

	button {
		cursor: pointer;
	}

	table, .operation {
		margin-top: 20px;
	}
</style>
