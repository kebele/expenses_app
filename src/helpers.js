// helper.js içinde app'ın her yerinde kullanacağımız tekrar yazmak istemediğimiz func koyarız, gerektğinde buradan çağırırız.

// local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// delete item

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
