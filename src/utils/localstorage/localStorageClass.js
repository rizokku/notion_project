class Local {

  saveFields(arr) {
    arr.forEach(item => localStorage.setItem(item.field, JSON.stringify(item.data)));
  }

  deleteFields(arr) {
    console.log(arr);
    arr.forEach(item => localStorage.removeItem(item));
  }
}

export const LocalStorage = new Local();