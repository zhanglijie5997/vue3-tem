import { reactive, computed } from 'vue';
import { appBooksBaseBook, appBooksBaseAuthor, appBooksBaseBookProject, AppBooksBaseBookProjectData } from '@http/indexHttp/indexHttp'

interface ReactiveType {
  name: string, // 名称
  press: string, // 出版社
  introduction: string, // 简介
  price: number, // 价格
  coverImg: string, // 书籍缩略图
  author: string,  // 作者
  base: string, // 图片基础路径
  list: Array<AppBooksBaseBookProjectData>, // 数组
  recommend: string, // 主播寄语
  description: string, // 内容简介
}
export default function() {
    const id = '258';
    // const test = 
    const state = reactive<ReactiveType>({
        name: '', 
        press: '', 
        introduction: '', 
        price: 0, 
        coverImg: '', 
        author: '',
        base: 'https://heybooks-test-console.oss-cn-shenzhen.aliyuncs.com/img/', 
        list: [],
        recommend: '', 
        description: '', 
      });
      const grade = computed(() => new Array(4));

      /**
       * 获取书籍信息
       */
      async function getBookDetailAsync ()  {
        const _ = await appBooksBaseBook(id);
        const author = await appBooksBaseAuthor(id);
        const project = await appBooksBaseBookProject(id);
        const resultAuthor = author.data[0];
        const { name, description, coverImgUrl, publisherBaseList, price, recommend } = _.data;
        state.name = name;
        state.recommend = recommend;
        state.introduction = description;
        state.author = resultAuthor.author;
        state.press = publisherBaseList[0].name;
        state.coverImg = JSON.parse(coverImgUrl) ;
        state.price = price;
        state.list = project.data.map(_ => ({
          ..._, coverImgUrl: JSON.parse(_.coverImgUrl),
          tag: JSON.parse(_.tag),
        }));
        console.log(project, '精彩解读')
      }
      return {
          state,
          grade,
          getBookDetailAsync
      }
}