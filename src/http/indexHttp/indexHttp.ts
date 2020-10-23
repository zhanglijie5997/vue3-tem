import { get, PublicType } from '@http/http'

const networdUrl = {
    // 书籍信息     参数 = id
    appBooksBaseBook: 'skincare/postUploadImg',
    // 获取书籍作者信息
    appBooksBaseAuthor: 'skincare/postUploadImg',
    // 书籍-精彩解读
    appBooksBaseBookProject: 'skincare/postUploadImg'
}


interface PublisherBaseListType {
    name: string
}

interface AppBooksBaseBookType extends PublicType{
    data: {
        name: string, // 姓名
        description: string, // 简介
        coverImgUrl: string, // 书籍缩略图
        publisherBaseList: Array<PublisherBaseListType>,
        price: number, // 价格
        recommend: string,  // 主播寄语
    }
}

/**
 * 书籍信息
 * @param {string} id 书籍id
 */
export const appBooksBaseBook = (id: string): Promise<AppBooksBaseBookType>  => get(networdUrl.appBooksBaseBook, {
        id
    });



 interface AppBooksBaseAuthorDataType {
    author: string, // 作者姓名
}

interface AppBooksBaseAuthor extends PublicType {
    data: Array<AppBooksBaseAuthorDataType>
}

/**
 * 获取书籍作者信息
 * @param {string} bookId 书籍id
 */
export const appBooksBaseAuthor = (bookId: string): Promise<AppBooksBaseAuthor>  => get(networdUrl.appBooksBaseAuthor, {
    bookId
})


export interface AppBooksBaseBookProjectData {
    coverImgUrl: string, // 缩略图
    tag: string, // 标签JSON
}

interface AppBooksBaseBookProject extends PublicType {
    data: Array<AppBooksBaseBookProjectData>
}
/**
 * 书籍-精彩解读
 * @param {string} id 书籍id
 */
export const appBooksBaseBookProject = (id: string): Promise<AppBooksBaseBookProject> => get(networdUrl.appBooksBaseBookProject, {
    id
})