<template>
<div class="content" :style='{"minHeight":"calc(100vh - 200px)","padding":"30px","margin":"0 auto","alignItems":"flex-start","flexWrap":"wrap","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230830/d58ecc944fb54dbfa18ecd2b64e92170.png) no-repeat center top / cover","display":"flex","width":"100%","fontSize":"16px","justifyContent":"center","height":"100%"}'>
	<!-- notice -->
	<!-- title -->
	<div class="text" :style='{"padding":"10px 20px","margin":"0px auto 40px","borderColor":"#ceddee","color":"rgb(51, 51, 51)","borderRadius":"0px","textAlign":"center","background":"none","borderWidth":"0px","width":"100%","fontSize":"28px","borderStyle":"solid","fontWeight":"500"}'>欢迎使用 {{this.$project.projectName}}</div>
	<!-- statis -->
	<div :style='{"padding":"0","boxShadow":"0 0px 0px 0px rgba(100,100,100,.05)","margin":"0 30px 30px 0px","borderColor":"#fceaee","alignItems":"center","color":"#666","display":"flex","justifyContent":"center","borderRadius":"3px","flexWrap":"wrap","background":"none","borderWidth":"0px","width":"100%","fontSize":"18px","borderStyle":"double","order":"1"}'>
		<div :style='{"boxShadow":"0 0px 0px rgba(0,0,0,.3)","padding":"0 10px 0 0","margin":"0 0 10px 0","borderColor":"#ceddee","textAlign":"center","display":"flex","clipPath":"polygon(95% 0, 100% 51%, 95% 100%, 5% 100%, 0% 50%, 5% 0)","justifyContent":"center","borderRadius":"3px","background":"#2aca76","borderWidth":"0px","width":"18%","borderStyle":"solid"}' v-if="isAuth('jianfei','首页总数')">
			<div :style='{"width":"100px","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230811/0eb67b67438049adae248456cd16752f.png) no-repeat left center","justifyContent":"center","display":"flex","height":"100px"}'>
				<span class="icon iconfont icon-tongji7" :style='{"color":"#fff","fontSize":"32px","display":"none"}'></span>
			</div>
			<div :style='{"width":"auto","flexDirection":"column","justifyContent":"center","display":"flex"}'>
				<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"32px","color":"#fff","fontWeight":"bold","height":"24px"}'>{{jianfeiCount}}</div>
				<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"inherit","color":"#fff","height":"24px"}'>食品总数</div>
			</div>
		</div>
	</div>
	<!-- statis -->
	

	
	<!-- echarts -->
</div>
</template>
<script>
//0
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            jianfeiCount: 0,
		};
	},
	mounted(){
		this.init();
		this.getjianfeiCount();
	},
	methods:{
		init(){
			if(this.$storage.get('Token')){
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code != 0) {
				router.push({ name: 'login' })
				}
			});
			}else{
				router.push({ name: 'login' })
			}
		},
		getjianfeiCount() {
			this.$http({
				url: `jianfei/count`,
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code == 0) {
					this.jianfeiCount = data.data
				}
			})
		},
  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
	
	// 日历
	.calendar td .text {
				border: 1px solid rgba(163,207,63,.2);
				border-radius: 8px;
				flex-direction: column;
				background: rgba(255,255,255,1);
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td .text:hover {
				background: rgba(163,207,63,.1);
			}
	.calendar td .text .new {
				color: inherit;
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td .text .old {
				color: inherit;
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td.festival .text {
				border-radius: 8px;
				flex-direction: column;
				background: rgba(163,207,63,.3);
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td.festival .text:hover {
				background: rgba(163,207,63,.3);
				opacity: 0.8;
			}
	.calendar td.festival .text .new {
				color: inherit;
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td.festival .text .old {
				color: inherit;
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td.other .text {
				border: 0;
				border-radius: 20px;
				flex-direction: column;
				color: #ccc;
				background: none;
				display: flex;
				width: 100%;
				font-size: inherit;
				justify-content: center;
				align-items: center;
				opacity: 1;
				height: 100%;
			}
	.calendar td.other .text:hover {
				background: rgba(163,207,63,.2);
			}
	.calendar td.other .text .new {
				color: #999;
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td.other .text .old {
				color: #999;
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td.today .text {
				border-radius: 8px;
				flex-direction: column;
				color: #fff;
				background: rgba(163,207,63,.8);
				display: flex;
				width: 100%;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
	.calendar td.today .text:hover {
				color: #fff;
				background: rgba(163,207,63,.8);
				opacity: 0.8;
			}
	.calendar td.today .text .new {
				font-size: inherit;
				line-height: 1.4;
			}
	.calendar td.today .text .old {
				font-size: inherit;
				line-height: 1.4;
			}
	
	// echarts1
	.type1 .echarts1 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1);
				margin: 0px 0;
				background: rgba(255,255,255,.96);
				width: 49%;
				border-color: #d9d9d9;
				border-width: 1px 3px 1px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 486px;
			}
	.type1 .echarts1:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	// echarts2
	.type2 .echarts1 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0x 0px 0px rgba(100,100,100,.1);
				margin: 0;
				background: rgba(255,255,255,.96);
				width: 49%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 486px;
			}
	.type2 .echarts1:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type2 .echarts2 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px0px 0px rgba(100,100,100,.1);
				margin: 0;
				background: rgba(255,255,255,.96);
				width: 49%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 486px;
			}
	.type2 .echarts2:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	// echarts3
	.type3 .echarts1 {
				padding: 10px;
				margin: 0 0 30px 0;
				color: #333;
				border-color: #d9d9d9;
				transition: 0.3s;
				border-radius: 8px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1);
				background: rgba(255,255,255,.96);
				width: 32%;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				height: 360px;
			}
	.type3 .echarts1:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type3 .echarts2 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1);
				margin: 0 0 30px 0;
				background: rgba(255,255,255,.96);
				width: 32%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 360px;
			}
	.type3 .echarts2:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type3 .echarts3 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0x 0px 0px rgba(100,100,100,.1);
				margin: 0;
				background: rgba(255,255,255,.96);
				width: 32%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 360px;
			}
	.type3 .echarts3:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	// echarts4
	.type4 .echarts1 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1);
				margin: 0px 0 30px;
				background: rgba(255,255,255,.96);
				width: 49%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 360px;
			}
	.type4 .echarts1:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type4 .echarts2 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1);
				margin: 0px 0 30px;
				background: rgba(255,255,255,.96);
				width: 49%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 360px;
			}
	.type4 .echarts2:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type4 .echarts3 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1);
				margin: 0px 0 30px;
				background: rgba(255,255,255,.96);
				width: 49%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 360px;
			}
	.type4 .echarts3:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type4 .echarts4 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1);
				margin: 0px 0 30px;
				background: rgba(255,255,255,.96);
				width: 49%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 360px;
			}
	.type4 .echarts4:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	// echarts5
	.type5 .echarts1 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1);
				margin: 0px 0 20px;
				background: rgba(255,255,255,.96);
				width: 49%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 360px;
			}
	.type5 .echarts1:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type5 .echarts2 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1);
				margin: 0px 0 30px;
				background: rgba(255,255,255,.96);
				width: 49%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 360px;
			}
	.type5 .echarts2:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type5 .echarts3 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1);
				margin: 0px 0 20px;
				background: rgba(255,255,255,.96);
				width: 49%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 360px;
			}
	.type5 .echarts3:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type5 .echarts4 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1);
				margin: 0px 0 20px;
				background: rgba(255,255,255,.96);
				width: 49%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 360px;
			}
	.type5 .echarts4:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	.type5 .echarts5 {
				border-radius: 8px;
				padding: 10px;
				box-shadow: inset 0px 0px 0px 0px #E8EFF7,0 0px 0px 0px rgba(100,100,100,.1);
				margin: 0px 0 20px;
				background: rgba(255,255,255,.96);
				width: 49%;
				border-color: #d9d9d9;
				border-width: 1px 3px;
				position: relative;
				border-style: inset;
				transition: 0.3s;
				height: 360px;
			}
	.type5 .echarts5:hover {
				transform: translate3d(0, 0px, 0);
				z-index: 1;
			}
	
	.echarts-flag-2 {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-between;
	  padding: 10px 20px;
	  background: rebeccapurple;
	
	  &>div {
	    width: 32%;
	    height: 300px;
	    margin: 10px 0;
	    background: rgba(255,255,255,.1);
	    border-radius: 8px;
	    padding: 10px 20px;
	  }
	}
</style>
