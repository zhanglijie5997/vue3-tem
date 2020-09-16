import { get, PublicType } from '../http';

interface AppAuthorBaseAuthorType extends PublicType {
    data: AppAuthorBaseAuthorDataType
}

export interface AppAuthorBaseAuthorDataType {
    author: string, // 作者
    description: string, // 个人简介
    headUrl: string, // 头像图片
    id: number, // 作者id
    country: string, // 国家
    tags: string, // json 字符串 标签
    appUserNickname?: string, // 用户名
}   

/**
 * 作者页-作者
 * @param id 作者id
 */
export const appAuthorBaseAuthor = (id: string): Promise<AppAuthorBaseAuthorType> => get('/app/authorBase/author', {
    id
});

export interface AppAuthorBaseAuthorBooksDataType {
    name?: string, // 姓名
    description?: string, // 描述
    coverImgUrl?: string, // 缩略图
    id?: number, // id
}

interface AppAuthorBaseAuthorBooksType extends PublicType {
    data: Array<AppAuthorBaseAuthorBooksDataType> 
}

/**
 * 作者页-作者相关书籍
 * @param id 作者id
 */
export const appAuthorBaseAuthorBooks = (id: string): Promise<AppAuthorBaseAuthorBooksType> => get('/app/authorBase/author/books', {
    id
});




interface AppAuthorBaseAuthorReaderType extends PublicType {}
/**
 * 解读人
 * @param id 作者id
 */
export const appAuthorBaseAuthorReader = (id: string): Promise<AppAuthorBaseAuthorReaderType>  => get('/app/authorBase/author/reader', {
    id
});

interface AppAuthorBaseParaphraseProjects extends PublicType {

}

/**
 *  主播-节目
 * @param id 作者id
 */
export const appAuthorBaseParaphraseProjects = (id: string): Promise<AppAuthorBaseParaphraseProjects> => get('/app/authorBase/paraphrase/projects', {
    id
});

/**
 * 解读人-节目
 * @param id 作者id
 */
export const appAuthorBaseReaderProjects = (id: string): Promise<AppAuthorBaseAuthorBooksType> => get('/app/authorBase/reader/projects', {
    id
})
