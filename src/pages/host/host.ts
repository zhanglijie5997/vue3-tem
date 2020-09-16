import Vue, { ref, Ref, reactive } from "vue";
import { baseUrl } from "@utils/utils";
import {
  AppAuthorBaseAuthorDataType,
  appAuthorBaseAuthorReader,
  appAuthorBaseReaderProjects,
  AppAuthorBaseAuthorBooksDataType,
} from "@http/hostHttp/hostHttp";

interface MoreMenuType {
    name: string, 
    id: number,
    img: string
}

export default function() {
  const id = "324";
  const moreMenu = Vue.readonly<Array<MoreMenuType>>([
    { name: "分享", id: 0, img: baseUrl + "host/path.png" },
    { name: "举报", id: 1, img: baseUrl + "host/warning.png" },
    { name: "黑名单", id: 2, img: baseUrl + "host/report.png" },
  ]);
  // 控制显示隐藏更多
  const showMoreStatus: Ref<boolean> = ref(false);
  const rightImg: string = baseUrl + "host/right.png";
  const bgImg: string = baseUrl + "host/bg.png";
  // 解读人数据
  const authorData = reactive<AppAuthorBaseAuthorDataType>({
    author: "",
    description: "",
    headUrl: "",
    id: 0,
    country: "",
    tags: "",
  });
  // 列表
  const list = ref<Array<AppAuthorBaseAuthorBooksDataType>>([]);

  function changeShowMoreStatus(e: MouseEvent) {
    e.stopPropagation();
    console.log(1123);
    showMoreStatus.value = !showMoreStatus.value;
  }

  // 获取主播信息
  async function getAuthorAsync() {
    const data = await appAuthorBaseAuthorReader(id);
    const _ = await appAuthorBaseReaderProjects(id);
    console.log(_, "解读人 --> ");
    console.log(data);
    const { author, description, headUrl, country, tags } = data.data;
    authorData.author = author;
    authorData.country = country;
    authorData.description = description;
    authorData.headUrl = JSON.parse(headUrl);
    authorData.country = country;
    authorData.tags = JSON.parse(tags);
    if (_.data.length > 0) {
      list.value = _.data.map((_) => ({
        ..._,
        coverImgUrl: JSON.parse(_.coverImgUrl ?? ""),
      }));
    }
    console.log(authorData.tags);
  }

  // 关闭弹出菜单
  function close() {
    showMoreStatus.value = false;
  }

  // 去下载app
  function goAppStore(e: any, _: MoreMenuType) {
    e.stopPropagation();
    console.log(_, 'oooo');
  }

  return {
    moreMenu,
    rightImg,
    bgImg,
    showMoreStatus,
    changeShowMoreStatus,
    getAuthorAsync,
    authorData,
    list,
    close,
    goAppStore
  };
}
