const base = {
    get() {
        return {
            url : "http://localhost:8080/django4032ydxt/",
            name: "django4032ydxt",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "食品销售数据分析系统"
        } 
    }
}
export default base
