import axios from "@/utils/https";
// 请求的均是 Mock 模拟的数据
let api = {
    getMenuList() {
        return axios.get('/menulist/index');
    },
    getSliderImgs() {
        return axios.get('/sliders/index');
    },
    getMinsuInfo() {
        return axios.get('/minsuinfo/index');
    },
    getAddressList() {
        return axios.get('/address/index');
    }
}

export default api;