const selectElement = document.getElementById('scroll');
let option = document.createElement('option');
for (let i = 1; i <= 10; i++) {
  option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  selectElement.appendChild(option);
}

const clearList = () => {
  let innerchilds = document.getElementById('item3');
  innerchilds.innerHTML = null;
  let fotter = document.getElementById("result");
  fotter.innerHTML = "Start adding some Items to your packing list";

}

const add = () => {
  let itemName = document.getElementById("item_name").value;
  let selectedNumber = document.getElementById("scroll").value;

  if (itemName === "") {
    alert("Enter the item name");
  } else {
    let newDiv = document.createElement("div");
    newDiv.id = 'InnerDiv';

    let CheckBox = document.createElement("input");
    CheckBox.type = 'checkbox';
    CheckBox.id = 'Checkbox';
    CheckBox.className='checkbox';
    CheckBox.addEventListener("change",checkboxstatus);
    
    
    

    let cross = document.createElement('p');
    cross.innerHTML = 'X';
    cross.id = 'cross';
    cross.onclick = () => {
      let div_length = document.getElementById('item3');
      let len = div_length.children.length;
      let parentdiv = cross.parentElement;
      parentdiv.remove();
      len--;
      if (len == 0) {
        let p = document.getElementById("result");
        p.innerHTML = "Start adding some Items to your packing list";
      } else {
        updateText();
      }
    }

    const itemInfoText = document.createTextNode(itemName + ', ' + selectedNumber);

    newDiv.appendChild(CheckBox);
    newDiv.appendChild(itemInfoText);
    newDiv.appendChild(cross);

    
    let Inner_Div = document.getElementById("item3");
    Inner_Div.appendChild(newDiv);
    updateText();
    CheckBox.addEventListener("change",checkboxstatus());
    checkboxstatus();
  }
}

const sorting=()=>{
  console.log("Sorting Clicked");
  let div_count=document.getElementById("item3");
  let number=document.querySelector("#scroll");
  console.log(number);
  let div_length=div_count.children.length;
  let ascending=document.getElementById("asc").value;
  let descending=document.getElementById("desc").value;
  // if(ascending=="2"){
  //   // for(let i=0;i<div_length;i++){
  //   //   if()
  //   // }

  // }
}


const checkboxstatus=()=>{
  let div_count=document.getElementById("item3");
  let div_length=div_count.children.length;
  let fotterText=document.getElementById('result');
  let checkboxes = div_count.querySelectorAll('.checkbox:checked').length;
  let unchechboxes=div_count.querySelectorAll('.checkbox:not(:checked)').length;
  let total=checkboxes/div_length*100;
  if(checkboxes>0){
    fotterText.innerHTML=`You have ${div_length} in your list and you already packed ${checkboxes} (${total}%)`;
  }
  else{
    updateText();
  }
}

const updateText = () => {
  let text = document.getElementById('result');
  let div_length = document.getElementById('item3');
  let length = div_length.children.length;
  text.innerText = `You have ${length} in your list`;
  let itemNameInput = document.getElementById("item_name");
  itemNameInput.value = "";

  let numbers = document.getElementById("scroll");
  numbers.value = 1;
}
