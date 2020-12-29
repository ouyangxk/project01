<template>
	<div class="login-wrap">
		<el-form :model="ruleForm" label-width="100px" class="demo-ruleForm login-container">
			<h1 style="text-align: center;">用户注册</h1>
			<el-form-item label="账号" style="width: 85%">
				<el-input type="text" placeholder="请输入帐号" v-model="ruleForm.uname"></el-input>
			</el-form-item>
			<el-form-item label="密码" style="width: 85%">
				<el-input type="password" placeholder="请输入密码" v-model="ruleForm.pwd"></el-input>
			</el-form-item>
            <el-form-item label="确认密码" style="width: 85%">
                    <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.pwd"></el-input>
            </el-form-item>
			<el-form-item>
				<el-row>
					<el-col :span="19">
						<div class="grid-content bg-purple-dark">
							<el-button type="primary" style="width:100% ;">提交</el-button>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content bg-purple-dark">
							 <el-link type="success" @click="toLogin">用户登录</el-link>
						</div>
					</el-col>
			
				</el-row>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				ruleForm:{
					uname:'',
					pwd:''
				}
			};
		},
		methods:{
			toLogin(){
				this.$router.push({
					path:'/Login'
				});
			}
		}
	}
</script>

<style scoped>
	.login-wrap {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		padding-top: 10%;
		background-repeat: no-repeat;
		background-position: center right;
		background-size: 100%;
	}

	.login-container {
		border-radius: 10px;
		margin: 0px auto;
		width: 450px;
		padding: 30px 35px 15px 35px;
		background: #fff;
		border: 1px solid #eaeaea;
		text-align: left;
		box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
	}

	.title {
		margin: 0px auto 40px auto;
		text-align: center;
		color: #505458;
	}
</style>