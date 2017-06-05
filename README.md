# **路由**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

### 路由守卫

##### CanActave: 处理导航到某路由的情况
##### CanDeactave: 处理从当前路由离开的情况
```TypeScript
  import {CanDeactivate} from "@angular/router";
  import {ProductComponent} from "../app/product/product.component";
 
  export class UnSaveGuard implements CanDeactivate<ProductComponent> {
   canDeactivate(component: ProductComponent) {
     return window.confirm('尚未保存，离开此页?');
   }
  }
 ```
 
##### Resolve: 在路由激活之前获取路由数据
