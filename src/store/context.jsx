import { Children, createContext, useState } from "react";

export const Context = createContext();
// token = 35c3168fb329eb2df07b655ae9a4d0477252854248a2010fd9bdceaa46030677a05c0babb9f6b6b73415c33d2899e306b846e5abf18891c7dbd6f272dbd626cc015ea0b495779a99d7e94d0316ee69996d171b08ca4622f2bb0d82da0f30fc4f2835a0d1d241f52af4fbefd877aea60833d9568bbe9dc2ee6360fe98fa4b7f83

const AppContext = (props) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  return (
    <Context.Provider
      value={{ categories, setCategories, products, setProducts }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AppContext;
