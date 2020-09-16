import { appAuthorBaseAuthor, AppAuthorBaseAuthorDataType, appAuthorBaseAuthorBooks, AppAuthorBaseAuthorBooksDataType } from '@http/hostHttp/hostHttp'
import { reactive, ref } from 'vue';
export default () => {
    const id = '324';
    // 作者数据
    const authorData = reactive<AppAuthorBaseAuthorDataType>({
        author: '', 
        description: '',
        headUrl: '',
        id: 0,
        country: '',
        tags: '',
        appUserNickname: ''
    });

    // 列表
    const list = ref<Array<AppAuthorBaseAuthorBooksDataType>>([]);

    async function getDetailAsync() {
        const data = await appAuthorBaseAuthor(id);
        const _ = await appAuthorBaseAuthorBooks(id);
        console.log(_, '??');
        if(_.data.length > 0) {
            list.value =  _.data.map(_ => ({..._, coverImgUrl: JSON.parse(_.coverImgUrl ?? '')}));
        }
        // console.log(data);
        // console.log(_, '解读人 --> ')
        console.log(data);
        const { author, description, headUrl, country, tags } = data.data;
        authorData.author = author;
        authorData.country = country;
        authorData.description = description;
        authorData.headUrl = JSON.parse(headUrl) ;
        authorData.country = country;
        authorData.tags = JSON.parse(tags);
        console.log(authorData.tags);
    }

    return {
        getDetailAsync,
        authorData,
        list
    }
}