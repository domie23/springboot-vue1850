const base = {
    get() {
        return {
            url : "http://localhost:8080/wuliupeisongguanlixitong/",
            name: "wuliupeisongguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wuliupeisongguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "物流配送人员车辆调度管理系统"
        } 
    }
}
export default base
