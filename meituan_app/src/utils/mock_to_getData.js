// 引入mockjs
const Mock = require('mockjs');
// menu
const munuData = () => {
        const menuList = require("@/assets/json/menuList.json");
        return { menuList };
    }
    // 返回 menuList 数据
Mock.mock('/menulist/index', 'get', munuData);

// 获取 mock.Random 对象
const Random = Mock.Random;


/**
 * 轮播图随机图片
 */
const sliderImgs = () => {
    let sliderImgsList = [],
        maoyanImgs = [];
    //
    for (let i = 0; i < 5; i++) {
        sliderImgsList.push(Random.dataImage('550x240', 'mock Image'));
        // maoyan
        let maoyanObj = {
            filmName: Random.name(),
            filmImg: Random.dataImage('214x300', 'MaoYan Movies Image'),
            filmScore: Random.integer(10000, 100000)
        }
        maoyanImgs.push(maoyanObj);
    }
    return {
        sliderImgsList,
        maoyanImgs
    }
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/sliders/index', 'get', sliderImgs);

const minsuInfo = () => {
    let minsuList = [];
    /**
     * {
          img: "",  370x208 * 6
          title: "",
          sub_title: "",
          price: 89
        }
     */
    for (let m = 0; m < 6; m++) {
        let minsuObj = {
            img: Random.dataImage('370x208', 'MinSu Image'),
            title: Random.csentence(),
            sub_title: Random.sentence(5),
            price: Random.integer(50, 200)
        }
        minsuList.push(minsuObj);
    }
    return {
        minsuList
    }
}

Mock.mock('/minsuinfo/index', 'get', minsuInfo);

/**
 * 中国省市区数据
 */
const address = require("@/assets/json/address.json");
Mock.mock('/address/index', 'get', address);