// <%- include('./includes/head.ejs') %>
//     <title><%= pageTitle %> </title>
//     <script>

// $(function() {
//     $('.ui.checkbox').checkbox();
// });

// $(function() {
//     $('.ui.dropdown').dropdown();
// });

// function checkbox1(){
//     console.log('clicked ::');
//     $('.ui.checkbox.cc').checkbox();
// }
// $(function() {
//     $('#chkbx_1').checkbox();
// });
// const htmlStr = `
// <tr>
//                     <td>
//                         <div class="" id="" >
//                             <input type="checkbox" tabindex="0" class="hidden">
//                             <label>Required </label>
//                         </div>
//                     </td>
//                     <td><input type="text" name="1" value="" placeholder="Title"></td>
//                     <td><input type="text" name="1" value="" placeholder="Error Msg"></td>
//                     <td>
//                         <!-- <div class="ui selection dropdown">-->
//                             <!-- <input type="hidden" name="gender"> -->
//                             <i class="dropdown icon"></i>
//                             <!-- <div class="default text">Field type</div>-->
//                             <div class="menu">
//                                 <div class="item" data-value="1">Text</div>
//                                 <div class="item" data-value="0">TextArea</div>
//                                 <div class="item" data-value="0">Number</div>
//                                 <div class="item" data-value="0">CheckBox</div>
//                                 <div class="item" data-value="0">DatePicker</div>
//                             </div>
//                         </div>
//                     </td>
//                     <td>
//                         <button>-</button>

//                     </td>

//                 </tr>
// `;
// function addField(){

//     document.getElementById('formbody').insertAdjacentHTML('beforeend', htmlStr);

//     return;
    
// return ;
// var tr = document.createElement('tr');

// var ck = 2;


// //Check box
// var td_checkbox = document.createElement('td');
// var div_checkbox = document.createElement("div");
// div_checkbox.setAttribute("class", "ui checkbox");
// div_checkbox.setAttribute("id", "chkbx_1");
// var checkbox = document.createElement("input");
// checkbox.setAttribute("type", "checkbox");
// checkbox.setAttribute("tabindex", "0");
// checkbox.setAttribute("class", "hidden");
// checkbox.setAttribute("id", "2");
// var label_checkbox = document.createElement("label");
// label_checkbox.innerText = 'Required';
// div_checkbox.appendChild(checkbox);
// div_checkbox.appendChild(label_checkbox);
// td_checkbox.appendChild(div_checkbox);
// tr.appendChild(td_checkbox);


// //Title
// var td_title = document.createElement('td');
// var title = document.createElement("input");
// title.setAttribute("type", "text");
// title.setAttribute("placeholder", "Title");
// td_title.appendChild(title);
// tr.appendChild(td_title);

// //Error msg
// var td_err = document.createElement('td');
// var errMsg = document.createElement("input");
// errMsg.setAttribute("type", "text");
// errMsg.setAttribute("placeholder", "Error Msg");
// td_err.appendChild(errMsg);
// tr.appendChild(td_err);



// //Field Type List
// var td_list = document.createElement('td');
// var div_list = document.createElement("div");
// div_list.setAttribute("class", "ui selection dropdown");

// var i_list = document.createElement("i");
// i_list.setAttribute("class", "dropdown icon");

// var default_list = document.createElement("div");
// default_list.setAttribute("class", "default text");
// default_list.innerText = "Field type";

// var menu_list = document.createElement("div");
// menu_list.setAttribute("class", "menu");

// //item  -text
// var textfield_list = document.createElement("div");
// textfield_list.setAttribute("class", "item");
// textfield_list.setAttribute("data-value", "1");
// textfield_list.innerText = "Text";
// //item  -textarea
// var textareafield_list = document.createElement("div");
// textareafield_list.setAttribute("class", "item");
// textareafield_list.setAttribute("data-value", "1");
// textareafield_list.innerText = "TextArea";
// //item  -number
// var numberfield_list = document.createElement("div");
// numberfield_list.setAttribute("class", "item");
// numberfield_list.setAttribute("data-value", "1");
// numberfield_list.innerText = "Number";
// //item  -checkbox
// var checkboxfield_list = document.createElement("div");
// checkboxfield_list.setAttribute("class", "item");
// checkboxfield_list.setAttribute("data-value", "1");
// checkboxfield_list.innerText = "CheckBox";
// //item  -datefield
// var datefield_list = document.createElement("div");
// datefield_list.setAttribute("class", "item");
// datefield_list.setAttribute("data-value", "1");
// datefield_list.innerText = "DatePicker";

// div_list.appendChild(i_list);
// div_list.appendChild(default_list);
// div_list.appendChild(menu_list);

// menu_list.appendChild(textfield_list);
// menu_list.appendChild(textareafield_list);
// menu_list.appendChild(numberfield_list);
// menu_list.appendChild(checkboxfield_list);
// menu_list.appendChild(datefield_list);

// div_list.appendChild(menu_list);
// td_list.appendChild(div_list);
// tr.appendChild(td_list);




// //Remove
// var td_remove = document.createElement('td');
// var btn = document.createElement("button");
// btn.innerText = "-";
// td_remove.appendChild(btn);
// tr.appendChild(td_remove);
// // var g = document.createElement("IMG");
// // g.setAttribute("src", "delete.png");
// // increment();
// // y.setAttribute("Name", "textelement_" + i);
// // r.appendChild(y);
// // g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
// // r.appendChild(g);
// // r.setAttribute("id", "id_" + i);

// document.getElementById("formbody").appendChild(tr);
// }
//     </script>
// </head>
// <body>
//     <%- include('./includes/menu.ejs') %> 
       
//     <div class="ui segment">
//         <h2 class="ui header"><%= pageTitle %></h2>

//     <form class="ui form" action="/signup" method="POST">
          
//         <div class="field">
//           <label>Title</label>
//           <input type="text" name="name" value="" placeholder="Name">
//         </div>
//         <div class="field">
//           <label>Description</label>
//           <input type="text" name="email" value="" placeholder="Email">
//         </div>
//         <div class="field">
//           <label>Image</label>
//           <input type="password" name="password" value="" placeholder="Password">
//         </div>
//         <div class="field">
//           <label>Form</label>
//           <table id="form1">
//               <tbody id="formbody">

//                 <tr>
//                     <td>
//                         <div class="ui checkbox">
//                             <input type="checkbox" tabindex="0" class="hidden" onclick="checkbox1()">
//                             <label>Required </label>
//                         </div>
//                     </td>
//                     <td><input type="text" name="1" value="" placeholder="Title"></td>
//                     <td><input type="text" name="1" value="" placeholder="Error Msg"></td>
//                     <td>
//                         <div class="ui selection dropdown">
//                             <!-- <input type="hidden" name="gender"> -->
//                             <i class="dropdown icon"></i>
//                             <div class="default text">Field type</div>
//                             <div class="menu">
//                                 <div class="item" data-value="1">Text</div>
//                                 <div class="item" data-value="0">TextArea</div>
//                                 <div class="item" data-value="0">Number</div>
//                                 <div class="item" data-value="0">CheckBox</div>
//                                 <div class="item" data-value="0">DatePicker</div>
//                             </div>
//                         </div>
//                     </td>
//                     <td>
//                         <button>-</button>

//                     </td>

//                 </tr>
//               </tbody>

              
//           </table>
//           <p id="add-btn" onclick="addField();">+</p>

         
//         </div>
       
//         <button class="ui button" type="submit">Sign Up</button>
//       </form>
//     </div>

// </body>  
// </html>