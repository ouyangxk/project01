<template>
    <div class="container">
        <div class="login-wrap">
            <el-form :model="ruleForm" label-width="100px" class="demo-ruleForm login-container">
                <h1 style="text-align: center;">账号登录</h1>
                <el-form-item label="账号" style="width: 85%">
                    <el-input type="text" placeholder="请输入帐号" v-model="ruleForm.uname"></el-input>
                </el-form-item>
                <el-form-item label="密码" style="width: 85%">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pwd"></el-input>
                </el-form-item>
               
                <el-form-item>
                    <el-row>
                        <el-col :span="19">
                            <div class="grid-content bg-purple-dark">
                                <el-button type="primary" style="width:100% ;" @click="doLogin" >登录</el-button>
                            </div>
                        </el-col>
                        
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple-dark">
                                <el-link type="success" @click="toReg">用户注册</el-link>
                            </div>
                        </el-col> 
                      <!--   <el-col :span="12">
                            <div class="grid-content bg-purple-dark">
                                <el-link type="success">忘记密码</el-link>
                            </div>
                        </el-col>-->
                    </el-row>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					uname: '',
					pwd: ''
				}
			};
		},
		methods: {
			 toReg() {
			 	this.$router.push({
			 		path: '/registry'
			 	});
			 },
			doLogin() {
            //    this.$emit(ruleForm.uname),
              this.$router.push({
					path: '/'
				});

				// console.log(url)
				// this.axios.get(url, {
				// 	params: this.ruleForm
				// }).then((response) => {
				// 	console.log(response);
				// 	if (response.data.code == 1) {
				// 		this.$message({
				// 			showClose:true,
				// 			message:response.data.msg,
				// 			type: 'success'
				// 		});
				// 	} else {
				// 		this.$message({
				// 			showClose:true,
				// 			message:response.data.msg,
				// 			type: 'error'
				// 		});
				// 	}

				// }).catch((response) => {
				// 	console.log(response);
				// });
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