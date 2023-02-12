import { Swipe, SwipeItem,Button } from 'vant';

let xunhuan = [
    Swipe, SwipeItem,Button
]
 export default function getVant (app) {
xunhuan.forEach((item)=> {
    return app.use(item)
})
}