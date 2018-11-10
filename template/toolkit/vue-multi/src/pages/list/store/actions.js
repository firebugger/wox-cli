import { fetchData } from '../api';
import { CHANGE_STATE } from './mutations';

export default {
  /**
   * 获取列表数据
   */
  async getList({ commit, state }, payload) {
    commit(CHANGE_STATE, { key: 'loading', value: true });

    try {
      let res =  await fetchData(payload);
      if (res.code === 0) {
        const resData = res.data;
        const { data } = payload;

        if (state.list.products) {
          resData.products = state.list.products.concat(resData.products);
        }
        commit(CHANGE_STATE, { key: 'list', value: res.data });

        if (data && data.page) {
          commit(CHANGE_STATE, { key: 'page', value: ++data.page });
        }
      }
    } catch(e) {
      console.log('请求列表数据出错！', e);

      // mock
      commit(CHANGE_STATE, { key: 'list', value: {
        total: 100,
        products: [{"code":"10415","title":"&lt;10年全站销量之冠：美东6日&gt;【纽约+华盛顿+大瀑布+波士顿】一团到底，一次游遍美东经典地标，可选波士顿离团","feature":"<p>一团到底，专业导游带您游遍经典地标 尼亚加拉大瀑布深度游览，还可游尼亚加拉军事要塞古堡喔 特色风味餐：波士顿龙虾晚餐 可选择在波士顿离团，更灵活安排行程</p>","currency":"CNY","price":1270,"cover":"https://www.quimg.com/wximg/gtravel/360x240/180524/163913be8a9.jpg","discount":"35% OFF","startcity":"纽约","endpoint":"波士顿、纽约","tourlen":6,"tags":[{"name":"畅游大瀑布","type":"normal"},{"name":"大瀑布深度游","type":"normal"}],"link":"/tour/view/tourcode-10415","soldOut":0,"ads":null},{"code":"11935","title":"&lt;广受好评口碑团:美东深度7日&gt;【纽约+费城+华盛顿+康宁+大瀑布+波士顿】入内国会，入住瀑布景区酒店，可升级时代广场中心酒店","feature":"<p>一团到底，专业导游带您游遍经典地标； 纽约、华盛顿DC两日行程，游玩深度轻松； “入内”参观美国国会，在总统馆的总统办公桌前照相留念； 亲临瀑布风之洞，入住瀑布景区酒店。全程品质酒店，纽约出发深度游玩，体验波士顿风情；哈佛大学学生带领深度游哈佛。</p>","currency":"CNY","price":1361,"cover":"https://www.quimg.com/wximg/gtravel/360x240/180810/16523191e68.jpg","discount":"40% OFF","startcity":"纽约","endpoint":"波士顿、纽约","tourlen":7,"tags":[{"name":"畅游大瀑布","type":"normal"},{"name":"入住瀑布景区酒店","type":"normal"}],"link":"/tour/view/tourcode-11935","soldOut":0,"ads":null},{"code":"8933","title":"&lt;性价比之选：美东6日&gt;【纽约+华盛顿+大瀑布+波士顿】一团到底，经济博览美东名城名景","feature":"<p>一团到底，专业导游带您游遍经典地标；尼亚加拉大瀑布深度游览，还可游尼亚加拉军事要塞古堡；特色风味餐：波士顿龙虾晚餐。</p>","currency":"CNY","price":1172,"cover":"https://www.quimg.com/wximg/gtravel/360x240/181031/166c9d43854.jpg","discount":"25% OFF","startcity":"纽约","endpoint":"波士顿、纽约","tourlen":6,"tags":[{"name":"畅游大瀑布","type":"normal"},{"name":"大瀑布深度游","type":"normal"}],"link":"/tour/view/tourcode-8933","soldOut":0,"ads":null},{"code":"216","title":"&lt;美东经典6日&gt;【纽约+费城+华盛顿+大瀑布+波士顿】纽约机场接送，天天出发，玩转名校，尼加拉大瀑布","feature":"<p>每天出团, 机票交通安排便利 世界七大奇景 - 大瀑布深度 游尼亚加拉军事要塞古堡</p>","currency":"CNY","price":1954,"cover":"https://www.quimg.com/wximg/gtravel/360x240/180419/162dc86550d.jpg","discount":null,"startcity":"纽约","endpoint":"波士顿、纽约","tourlen":6,"tags":[{"name":"美东","type":"normal"},{"name":"买二赠二","type":"normal"}],"link":"/tour/view/tourcode-216","soldOut":0,"ads":null},{"code":"13956","title":"&lt;新年倒数：2019美东7日狂欢&gt;【纽约+华盛顿+弗吉尼亚海滩+费城】全新跨年方式三选一：时代广场、VIP专区、哈德逊河游船跨年！","feature":"<p>2019年令人惊喜的全新跨年行程！一路向南直至弗吉尼亚海滩，避开寒冷都市，享受温暖的节日气氛！个性跨年方式三选一：亲临时代广场和百万人共迎新年；在VIP尊享专区近距离体验时代广场水晶球的降落；乘哈德逊河游船饱览曼哈顿夜色，欣赏跨年烟火。 入住希尔顿酒店，弗吉尼亚则特别安排入住温德姆沙滩酒店。</p>","currency":"CNY","price":3881,"cover":"https://www.quimg.com/wximg/gtravel/360x240/181018/16686b53288.jpg","discount":null,"startcity":"纽约","endpoint":"纽约","tourlen":7,"tags":[{"name":"赠梅西百货购物券","type":"normal"},{"name":"美东","type":"normal"}],"link":"/tour/view/tourcode-13956","soldOut":0,"ads":null},{"code":"16321","title":"&lt;特选大瀑布深度2日&gt;【雾中少女号+风之洞+公羊岛】20小时长时间停留，玩透大瀑布！可升级入住瀑布景区酒店","feature":"<p><span style=\"color: rgb(102, 102, 102);\">停留瀑布长时间的两日团，全方位欣赏美境尼亚加拉瀑布</span>；可升级入住瀑布景区内酒店;内进瀑布公羊岛和风之洞；搭乘雾中少女号近距离感受大自然的魅力；经验导游深度讲解</p>","currency":"CNY","price":502,"cover":"https://www.quimg.com/wximg/gtravel/360x240/180720/164b62bbb4c.jpg","discount":null,"startcity":"纽约","endpoint":"纽约","tourlen":2,"tags":[{"name":"畅游大瀑布","type":"normal"},{"name":"买二赠一","type":"normal"}],"link":"/tour/view/tourcode-16321","soldOut":0,"ads":null},{"code":"2587","title":"&lt;大家都在买：迈阿密5日&gt;【迈阿密+沼泽公园+西锁岛+罗德岱堡】一晚入住墨西哥湾白沙滩度假酒店，小哈瓦那感受拉丁风情","feature":"<p>入住白沙滩边的度假酒店；全新产品体验，墨西哥湾看日落 穿越大沼泽</p>","currency":"CNY","price":2476,"cover":"https://www.quimg.com/wximg/gtravel/360x240/171226/1609216e79a.jpg","discount":"11% OFF","startcity":"迈阿密","endpoint":"迈阿密","tourlen":5,"tags":[{"name":"佛罗里达旅游局推荐","type":"normal"},{"name":"买二赠一","type":"normal"}],"link":"/tour/view/tourcode-2587","soldOut":0,"ads":null},{"code":"457","title":"&lt;美东经典5日&gt;【纽约+华盛顿+大瀑布+波士顿】遍览美东六大名城，享受龙虾大餐，可加游罗德岛","feature":"<p>加游项目：罗得岛听涛山庄+耶鲁大学（如时间允许） 登顶新世贸中心一号大楼顶楼 尼加拉军事战争要塞古堡，漩涡公园 品尝特色风味：波士顿当地龙虾卷+特制面包里的新英格兰蛤蜊巧达浓汤</p>","currency":"CNY","price":1108,"cover":"https://www.quimg.com/wximg/gtravel/360x240/170926/15ebda06aa6.jpg","discount":"20% OFF","startcity":"华盛顿","endpoint":"华盛顿、纽约","tourlen":5,"tags":[{"name":"赠梅西百货购物券","type":"normal"},{"name":"退改安心险","type":"normal"}],"link":"/tour/view/tourcode-457","soldOut":0,"ads":null},{"code":"8937","title":"&lt;美东黑五血拼8日&gt;【纽约+华盛顿+大瀑布+波士顿+罗德岛】全程品质酒店，黑色星期五当天在第五大道、Woodbury奥特莱斯尽情买！","feature":"<p>一团到底，品质导游带您游遍地标景点 全程品质酒店，纽约出发游玩奥特莱斯时尚购物，波士顿美丽风情 尼亚加拉大瀑布深度游览，还可游尼亚加拉军事要塞古堡喔 特色风味餐：波士顿龙虾晚餐</p>","currency":"CNY","price":2136,"cover":"https://www.quimg.com/wximg/gtravel/360x240/181031/166c9d16a58.jpg","discount":"20% OFF","startcity":"纽约","endpoint":"纽约","tourlen":8,"tags":[{"name":"畅游大瀑布","type":"normal"},{"name":"woodbury购物","type":"normal"}],"link":"/tour/view/tourcode-8937","soldOut":0,"ads":null},{"code":"16518","title":"&lt;路路行小美东品质3日&gt;【华盛顿+康宁+大瀑布】舒适与深度兼具！游玩“千层幽谷”沃特金斯峡谷，欣赏瀑布夜景，特别入内国会山庄","feature":"<p>入内国会山庄，导游全程陪同翻译，参观参议院、众议院和外观至高法院。乘坐波多马克河首都遊船，包揽华盛顿全景。如遇国会关门，用三大景点取代：五角大楼外观， 美国空军纪念碑，硫磺岛纪念碑。内进风之洞：尼加拉瀑布震撼的景点。内进公羊岛：欣赏瀑布七彩夜景+烟花表演。夏季加游“千层幽谷”沃特金斯峡谷公园，冬季加“水上法拉利”瀑布冲锋艇500个导游里选出15位顶尖导游：7-20年带团经验，知识渊博，讲解风趣，保证0投诉。全程陪同，深度讲解。</p>","currency":"CNY","price":583,"cover":"https://www.quimg.com/wximg/gtravel/360x240/170926/15ebdb42378.jpg","discount":"5% OFF","startcity":"纽约","endpoint":"纽约","tourlen":3,"tags":[{"name":"买二赠一","type":"normal"},{"name":"赠梅西百货购物券","type":"normal"}],"link":"/tour/view/tourcode-16518","soldOut":0,"ads":null}]
      }});
    }
    commit(CHANGE_STATE, { key: 'loading', value: false });
  }
}
