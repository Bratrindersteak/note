<template>
	<Row class-name="login" type="flex" align="middle" justify="center">
		<Col :xs="20" :sm="18" :md="6">
			<h1 class="headline">{{ text.title }}</h1>
			<Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
				<FormItem :label="text.username" prop="username">
					<Input type="text" v-model="formCustom.username" icon="person" />
				</FormItem>
				<FormItem :label="text.password" prop="password">
					<Input type="password" v-model="formCustom.password" />
				</FormItem>
				<FormItem>
					<Button type="success" @click="handleSubmit('formCustom')" long>{{ text.submit }}</Button>
				</FormItem>
				<FormItem>
					<Row type="flex" justify="space-between">
						<Col span="11">
							<Button type="primary" long>{{ text.regist }}</Button>
						</Col>
						<Col span="11">
							<Button type="ghost" @click="handleReset('formCustom')" long>{{ text.reset }}</Button>
						</Col>
					</Row>
				</FormItem>
			</Form>
		</Col>
	</Row>
</template>
<script>
	import axios from 'axios';

	export default {
		data () {
			const validatePass = (rule, value, callback) => {

				if (value === '') {
					callback(new Error('Please enter your password'));
				} else {
					callback();
				}
			};

			const validateUser = (rule, value, callback) => {

				if (value === '') {
					callback(new Error('Please enter your username'));
				} else {
					callback();
				}
			};

			return {
				text: {
					title: '计',
					username: '用户名',
					password: '密码',
					submit: '登录',
					regist: '注册',
					reset: '重置'
				},
				formCustom: {
					username: '',
					password: '',
				},
				ruleCustom: {
					username: [
						{ required: true, validator: validateUser, trigger: 'blur' }
					],
					password: [
						{ required: true, validator: validatePass, trigger: 'blur' }
					],
				}
			}
		},
		methods: {
			handleSubmit (name) {
				this.$refs[name].validate((valid) => {
					if (valid) {
						this.$Message.success('Success!');

						axios.get(`//${ location.hostname }:3000/login`)
							.then(res => {

								if (res.status === 200) {
									this.$router.push('table');
								}

								return Object.assign({
									status: res.status,
									statusText: res.statusText
								}, res.data);
							})
							.then(res => {
								console.log( res );
							})
							.catch(error => {
								console.log( error );
							});
					} else {
						this.$Message.error('Fail!');
					}
				})
			},
			handleReset (name) {
				this.$refs[name].resetFields();
			}
		}
	}
</script>

<style scoped>
	.login {
		margin-top: 60px;
	}
</style>
