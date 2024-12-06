class Local {
  saveFields(arr) {
    arr.forEach((item) =>
      localStorage.setItem(item.field, JSON.stringify(item.data))
    );
  }

  deleteFields(arr) {
    console.log(arr);
    arr.forEach((item) => localStorage.removeItem(item));
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

export const LocalStorage = new Local();
