import { onMounted, ref, watch } from 'vue';
import index from './index';
import styles from './index.module.scss';
import { baseUrl } from '@/utils/utils';
import { Layout, Menu, Slider } from "ant-design-vue";



declare global {
    interface MouseEvent {
        key: string,
        keyPath: Array<string>
    }

    namespace JSX {
        interface ElementClass {

        }
        interface ElementAttributesProperty {

        }
    }
    class Slider {

    }
}



export default {
    setup() {
        const { Header, Content, Sider, Footer, } = Layout;
        const { Item, SubMenu } = Menu;
        const test = ref("string");
        const { state, getBookDetailAsync } = index();
        const selectedKeys = ref<Array<string>>(['1']);
        const openKeys = ref<Array<string>>(['sub1']);
        const openMenuSelect  = ref<Array<string>>(['9']);
        onMounted(() => {
            console.log(123);
            getBookDetailAsync();
        });
        watch(test, (newV, oldV) => {
            console.log(newV, oldV, '??');
        })
        const submit = () => {
            console.log(123);
            console.log(test.value);
        }
        const change = (e: Event) => {
            const _ = (e.target) as HTMLInputElement;
            test.value = _.value;
        }



        const changeMenuItem = (e: MouseEvent) => {
            console.log(e);
            selectedKeys.value = e.keyPath;
        }

        const titleClick = (e: MouseEvent) => {
            console.log(e, [e.keyPath[0]]);
            openMenuSelect.value = [e.keyPath[0]];
            openKeys.value = [e.keyPath[1]];
        }
        return () => (
            <div class={styles.index} >
                <Layout class={styles.layout}>
                    <Header class={styles.header}>
                        <Menu mode="horizontal" onClick={(e: MouseEvent) => changeMenuItem(e)} theme="dark" style={{ lineHeight: '64px', display: 'flex' }} selectedKeys={selectedKeys.value}>
                            <Item key={'1'}>
                                首页
                            </Item>
                            <Item key={'2'}>
                                首页
                            </Item>
                            <Item key={'3'}>
                                首页
                            </Item>
                        </Menu>
                    </Header>
                    <Content>
                        <Sider >
                            <Menu defaultOpenKeys={openKeys.value} mode={'inline'} defaultSelectedKeys={openMenuSelect.value}
                                  selectedKeys={openMenuSelect.value} onClick={(e: MouseEvent) => titleClick(e)}>
                                <SubMenu title={'test'} key={'sub1'} >
                                    <Item key={'9'}>
                                        123
                                    </Item>
                                    <Item key={'10'}>
                                        123
                                    </Item>
                                    <Item key={'11'}>
                                        123
                                    </Item>
                                </SubMenu>
                                <SubMenu title={'test'} key={'sub2'}>
                                    
                                    <Item key={'4'}>
                                        123
                                    </Item>
                                    <Item key={'5'}>
                                        123
                                    </Item>
                                    <Item key={'6'}>
                                        123
                                    </Item>
                                </SubMenu>
                                <SubMenu title={'test'} key={'sub3'}>
                                    
                                    <Item key={'7'}>
                                        123
                                    </Item>
                                    <Item key={'8'}>
                                        123
                                    </Item>
                                    <Item key={'12'}>
                                        123
                                    </Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                    </Content>
                </Layout>
            </div>
        );
    }
}