import {MainComponent} from "../layout/main/main.component";
/**
 * Created by Administrator on 2018/8/31 0031.
 */
export const routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {path: '', loadChildren: './home/home.module#HomeModule'}
    ]
  },
]
