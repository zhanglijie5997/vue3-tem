import { ref, Ref } from 'vue';
import BScroll from 'better-scroll';

/**
 * better-scroll 滚动方法
 * @param fn   请求接口函数
 * @param refs dom节点
 * @param ele  dom节点
 */
export default (fn: Promise<void>, refs: Ref<HTMLDivElement | undefined> , ele: string) => {
    const bs = ref<BScroll>();
    fn.then(() => {
        setTimeout(() => {
            if(!bs.value) {
                bs.value = new BScroll(refs.value ?? ele, {
                    click: true,
                    probeType: 3,
                    bounceTime: 700
                })
            }else {
                bs.value.refresh();
            }
        }, 10)
        
    }).catch( () => {
        if(!bs.value) {
            bs.value = new BScroll(refs.value ?? ele, {
                click: true,
                probeType: 3,
                bounceTime: 700
            })
        }else {
            bs.value.refresh();
        }
    })
    
}