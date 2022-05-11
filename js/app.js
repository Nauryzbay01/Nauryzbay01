let toDo = document.querySelector(".toDo");
let removeElem = document.querySelectorAll(".remove");
let counterID = 1;
toDo.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('remove')) {
        let input__parent = target.closest('.toDo__item');
        input__parent.remove();
    }
    if (target.classList.contains('edit')) {
        let input = target.closest('.toDo__item').querySelector("input");
        input.removeAttribute('readonly');
        input.closest('.toDo__item').classList.add('editInput');
    }
    if (target.classList.contains('btn-to-save')) {
        let input__parent = target.closest('.toDo__item');
        input__parent.querySelector("input").setAttribute("readonly", "readonly");
        input__parent.classList.remove('editInput');
    }
    if (target.classList.contains('add-block__btn')) {
        createInput();
    }
    if (target.classList.contains('check-item') && !target.closest('.toDo__item').classList.contains('editInput')) {
        let toDo__wrapper = document.querySelector('.toDo__wrapper.secondary');
        let new__InputItem = document.createElement('li');
        new__InputItem.className = "toDo__item done";
        let inputName = target.querySelector('.check-input').value;
        // let inputID = target.querySelector('.check-input').id;
        let checkItem = document.createElement('div');
        let input = document.createElement('input');
        let label = document.createElement('label');
        let btns = document.createElement('div');
        let remBtn = document.createElement('button');
        new__InputItem.className = "toDo__item";
        checkItem.className = "check-item";
        btns.className = "toDo__item-btns";
        remBtn.className = "remove";
        new__InputItem.append(checkItem);
        new__InputItem.append(btns);
        checkItem.append(input);
        checkItem.append(label);
        btns.append(remBtn);
        input.setAttribute("type", "radiobutton");
        label.textContent = inputName;
        // label.id = inputID;
        new__InputItem.className = "toDo__item done";
        toDo__wrapper.querySelector('.toDo__list.secondary').append(new__InputItem);
        target.closest('.toDo__item').remove();
    }
})
function generateID(){
    return `input${counterID++}`;
}
let addBlockInput = document.querySelector('.add-block__input');
addBlockInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        createInput();
    }
})
let addBtn = document.querySelector('.add-block__btn');
let addInput = document.querySelector('.add-block__input');
function createInput() {
    let date = new Date();
    let options = {day: 'numeric', month: 'long',year: 'numeric', hour: 'numeric' };
    date = date.toLocaleString('en-US', options);
    let toDo__wrapper = document.querySelector('.toDo__wrapper');
    let new__InputItem = document.createElement('li');
    let addBlockInput = document.querySelector('.add-block__input').value;
    // new__InputItem.innerHTML = inputInner;
    let checkItem = document.createElement('div');
    let input = document.createElement('input');
    let btns = document.createElement('div');
    let remBtn = document.createElement('button');
    let editBtn = document.createElement('button');
    let saveBtn = document.createElement('a');
    new__InputItem.className = "toDo__item";
    checkItem.className = "check-item";
    input.className = "check-input";
    input.id = generateID();
    btns.className = "toDo__item-btns";
    remBtn.className = "remove";
    editBtn.className = "edit";
    saveBtn.className = "btn-to-save";
    saveBtn.innerHTML = 'Сохранить';
    new__InputItem.append(checkItem);
    new__InputItem.append(btns);
    checkItem.append(input);
    btns.append(editBtn);
    btns.append(remBtn);
    btns.append(saveBtn);
    input.setAttribute("value", `${addBlockInput} ${date}`);
    input.setAttribute("type", "text");
    document.querySelector('.add-block__input').value = "";
    toDo__wrapper.querySelector('.toDo__list.main').append(new__InputItem);
    setTimeout(() => alert(`🛎 Не забудь про: ${addBlockInput}`), 10000);
    addBtn.setAttribute('disabled', 'disabled')
}

addInput.addEventListener('input', function () {
        if(addInput.value !== ""){
            addBtn.removeAttribute('disabled')
        }else{
            addBtn.setAttribute('disabled', 'disabled')
        }
    
})