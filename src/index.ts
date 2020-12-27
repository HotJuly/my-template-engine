import MyTemplateEngine from '@utils/mte';

// let templateStr: string = `我是{{name}},我的妻子是{{wife}},我的小三是{{mistress}},我真{{b.c.mood}}啊!`;
let templateStr: string = `
        <ul id="content">
            {{#roles}}
                <li>
                    <div>{{item.name}}的基本信息</div>
                    <ol>
                        <li>姓名:{{name}}</li>
                        <li>年龄:{{age}}</li>
                        <li>性别:{{sex}}</li>
                        <li>介绍:{{info}}</li>
                        <li>
                            喜好:
                            <ul>
                                {{#hobbies}}
                                    <li>{{.}}</li>
                                {{/hobbies}}
                            </ul>
                        </li>
                    </ol>
                </li>
            {{/roles}}
        </ul>
    `;

// let templateStr: string = `
//         <ul id="content">
//             {{#roles}}
//                 <li>
//                     <div>{{name}}的基本信息</div>
//                     <ol>
//                         <li>姓名:{{name}}</li>
//                         <li>年龄:{{age}}</li>
//                         <li>性别:{{sex}}</li>
//                         <li>介绍:{{info}}</li>
//                     </ol>
//                 </li>
//             {{/roles}}
//         </ul>
//     `;


// let data: object={
//     name:"李逍遥",
//     wife:"赵灵儿",
//     mistress:"林月如",
//     b:{
//         c:{
//             mood:"幸福"
//         }
//     }
// }
let data: object = {
    roles:[
        {name:"李逍遥4",age:18,sex:'男',info:"男一号",hobbies:["偷看洗澡","失忆"]},
        {name:"赵灵儿4",age:17,sex:'女',info:"女一号",hobbies:["洗澡","被偷看"]},
        {name:"林月如4",age:19,sex:'女汉子',info:"工具人",hobbies:["李逍遥","无私奉献"]},
    ]
}

let domStr: string = MyTemplateEngine.render(templateStr,data);
let app = document.getElementById("app");
app&&(app.innerHTML = domStr);