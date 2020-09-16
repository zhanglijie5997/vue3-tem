// import { onMounted } from 'vue';
// import index from './index';
// import styles from './index.module.scss';
// import { baseUrl } from '@/utils/utils'
// export default {
//     setup() {
//         const { state, getBookDetailAsync } = index();
//         onMounted(() => {
//             getBookDetailAsync();
//         });
//         return () => (
//             <div class={styles.index}>
//             <div class={`${styles.header} ${styles.boxShadow}`} >
//             <div class={styles.top}>
//                 <div class={`${styles.left} ${styles.boxShadow}`}>
//                     <img src={state.coverImg} alt="" />
//                 </div>
//                 <div class={styles.right}>
//                     <p>{ state.name }</p>
//                     <p>{ state.press }</p>
//                     <p>{ state.author }</p>
//                 <p><span class={styles.symbol}>{`￥`}</span> <span class={styles.money}>{ state.price }</span></p>
//                 </div>
//             </div>
//             </div>

//             <div class={`${styles.body} ${styles.boxShadow}`}>
//             <div class={styles.bodyDetail}>
//                 <p class={styles.ready}>{'精彩解读'}</p>
//                 <ul>
//                     {/* {
//                         state.list.map(_ => (
//                             <li key={_.id}> 
//                                 <img src={JSON.parse(_.coverImgUrl.imgUrl)} alt="" class={`${styles.cover} ${styles.boxShadow} `}/>
//                                 <div class={styles.detail}>
//                                     <p>{ _.name }</p>
//                                     <p>{ _.description }</p>
//                                 </div>
//                             </li>
//                         ))
//                     } */}
                   
//                 </ul>
//             </div> 
//             </div>

//             <div class={`${styles.recommend} ${styles.boxShadow} ${styles.details}`}>
//                 <p class={styles.ready}>{'主播推荐语'}</p>
//                 <div class={styles.recommendContent}>
//                     <div class={styles.left}>
//                     <img src={baseUrl + 'left.png'} alt="" />
//                     </div>
//                     <p class={styles.contentText}>{ state.recommend }</p>
//                     <div class={styles.right}>
//                     <img src={baseUrl + 'right.png'} alt="" />
//                     </div>
//                 </div>
//                 </div>

//                 <div class={`${styles.detailMsg} ${styles.boxShadow} ${styles.details}`}>
//                 <p class={styles.ready}>{'内容简介'}</p>
//                 <div class={styles.detailMsgContent}>
//                     { state.introduction }
//                 </div>
//             </div>
//         </div>
//         );
//     }
// }