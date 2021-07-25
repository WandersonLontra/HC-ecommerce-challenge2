# 🚀 DESAFIO 2-VTEXT & GAMA ACADEMY

<p align="center">
    <img src="/public/sample/sample_video.gif"/>
</p>

## 🧑‍💻 Este projeto usa as seguintes tecnologias:

* ✔React.JS (useState, useEffect, Link, Components)
* ✔HTML
* ✔STYLED COMPONENTS (GRID, FLEX, CSS)
* ✔[Boxicons](https://boxicons.com/?query=)
* ✔JavaScript
* ✔[REACT SCROLL](https://www.npmjs.com/package/react-scroll)

# 🚩SOBRE

Projeto criado para o desafio do programa Hiring Coders [VTEX](https://www.hiringcoders.com.br). Trata-se de uma página de ecommerce, com dados do carrinho de compras guardadas no LocalStorage.

# 👀 OVERVIEW

- Foi utilizado component React, React Scroll, para navegação no head da aplicação, que por sua vez permite uma rolagem suave para as section's.
- Todos os produtos listados para compra, estão armazenados em um arquivo JSON (src/data/products.json)
- Página 100% responsiva.

### Estrutura para salvar os produtos no localStorage.
```js
 const [ cart, setCart ] = useState([]);

    useEffect(() => {
        localStorage.setItem('@cart',JSON.stringify(cart,null,2));
    },[cart]);

    const handleCart = ( event,index ) => {
        event.preventDefault();
        
        let data = featured[index];

        let cartItems = localStorage.getItem('@cart');

        if(cartItems === null) {
            setCart([data]);
            return
        }

        if (cartItems !== []){
            cartItems = JSON.parse(cartItems);
            setCart([...cartItems,data]);
            return
        }
    }
```

### Os próximos passos serão criar a exibição de um Modal com o Cart e exibir na bag abaixo, a quantidade de items no carrinho

<p align="center">
    <img src="/public/sample//bag_shop.png"/>
</p>


