import styled from 'styled-components';

/***** VARIABLES CSS *****/

const root = {
    header_height: '3rem',
    font_medium: '500',
    font_semi_bold: '600',
    font_bold: '700',
    dark_color: '#141414',
    dark_color_light: '#8A8A8A',
    dark_color_lighten: '#F2F2F2',
    white_color: '#FFF',
    body_font: 'Poppins',
    big_font_size: '1.25rem',
    bigger_font_size: '1.5rem',
    biggest_font_size: '2rem',
    h2_font_size: '1.25rem',
    normal_font_size: '.938rem',
    smaller_font_size: '.813rem',
    mb_1: '.5rem',
    mb_2: '1rem',
    mb_3: '1.5rem',
    mb_4: '2rem',
    mb_5: '2.5rem',
    mb_6: '3rem',
    z_fixed: '100',
    rotate_img: 'rotate(-30deg)',
}

export const Container = styled.div`
    h1,h2,h2,p,ul{
        margin: 0;
    }
    ul{
        padding: 0;
        list-style: none;
    }
    a{
        text-decoration: none;
        color: ${root.dark_color}
    }
    img{
        max-width: 100%;
        height: auto;
        display: block;
    }

    .section{
        padding: 5rem 0 2rem;
    }

    .section-title{
        position: relative;
        font-size: ${root.big_font_size};
        margin-bottom: ${root.mb_4};
        text-align: center;
        letter-spacing: .1rem;
    }

    .section-title::after{
        content: '';
        position: absolute;
        width: 56px;
        height: .18rem;
        top: -1rem;
        left: 0;
        right: 0;
        margin: auto;
        background-color: ${root.dark_color};
    }

    /*LAYOUT*/

    .bd-grid{
        max-width: 1024px;
        display: grid;
        grid-template-columns: 100%;
        column-gap: 2rem;
        width: calc(100% - 2rem);
        margin-left: ${root.mb_2};
        margin-right: ${root.mb_2};
    }

    .l-header{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: ${root.z_fixed};
        background-color: ${root.dark_color_lighten};
    }

    /*NAV*/

    .nav{
        height: ${root.header_height};
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: 768px){
        .nav__menu{
            position: fixed;
            top: ${root.header_height};
            left: -100%;
            width: 70%;
            height: 100vh;
            padding: 2rem;
            background-color: ${root.white_color};
            transition: .5s;
        }
    }

    .nav__item{
        margin-bottom: ${root.mb_4};
        cursor: pointer;
    }

    .nav__logo{
        font-weight: ${root.font_semi_bold};
        cursor: pointer;
    }

    .nav__toggle, .nav__shop{
        font-size: 1.3rem;
        cursor: pointer;
    }

    /*SHOW MENU*/
    .show{
        left: 0
    }

    /*ACTIVE LINK*/
    .active{
        position: relative;
    }

    .active::before{
        content: '';
        position: absolute;
        bottom: -.5rem;
        left: 45%;
        width: 4px;
        height: 4px;
        background-color: ${root.dark_color};
        border-radius: 50%;
    }

    /*CHANGE HEADER'S COLOR*/

    .scroll-header{
        background-color: ${root.white_color};
        box-shadow: 0 2px 4px rgba(0,0,0,.1);
    }

    /*HOME*/
    .home{
        border-color: ${root.dark_color_lighten};
        overflow: hidden;
    }
    .home__container{
        height: calc(100vh - ${root.header_height});
    }
    .home__sneaker{
        position: relative;
        display: flex;
        justify-content: center;
        align-self: center;
    }
    .home__shape{
        width: 220px;
        height: 220px;
        background-color: ${root.dark_color};
        border-radius: 50%;
    }
    .home__img{
        position: absolute;
        top: 1.5rem;
        max-width: initial;
        width: 275px;
        transform: ${root.rotate_img}
    }
    .home__new{
        display: block;
        font-size: ${root.smaller_font_size};
        font-weight: ${root.font_semi_bold};
        margin-bottom: ${root.mb_2};
    }
    .home__title{
        font-size: ${root.bigger_font_size};
        margin-bottom: ${root.mb_1};
    }
    .home__description{
        margin-bottom: ${root.mb_6};
    }

    /*BUTTONS*/

    .button{
        display: inline-block;
        background-color: ${root.dark_color};
        color: ${root.white_color};
        padding: 1.125rem 2rem;
        font-weight: ${root.font_medium};
        border-radius: .5rem;
        transition: .3s;
        cursor: pointer;
        outline: none;
        border: none;

        &:hover{
            transform: translateY(.25rem);
        }
    }
    .button-light{
        display: inline-flex;
        color: ${root.dark_color};
        font-weight: ${root.font_bold};
        align-items: center;
        cursor: pointer;
        &:hover  .button-icon{
            transform: translateX(.23rem);
        }
    }
    .button-icon{
        font-size: 1.25rem;
        margin-left: ${root.mb_1};
        transition: .3s;
    }
    

    /*FEATURED*/

    .featured__container{
        row-gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
    .sneaker{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background-color: ${root.dark_color_lighten};
        border-radius: .5rem;
        transition: .3s;
        &:hover{
            transform: translateY(-.5rem);
        }
    }
    .sneaker__sale{
        position: absolute;
        left: .5rem;
        background-color: ${root.dark_color};
        color: ${root.white_color};
        padding: .25rem .5rem;
        border-radius: .25rem;
        font-size: ${root.h2_font_size};
        transform: rotate(-90deg);
        letter-spacing: .1rem;
    }
    .sneaker__img{
        width: 220px;
        margin-top: ${root.mb_3};
        margin-bottom: ${root.mb_6};
        transform: ${root.rotate_img};
        filter: drop-shadow(0 12px 8px rgba(0,0,0,.2));
    }
    .sneaker__name, .sneaker__price{
        font-size: ${root.h2_font_size};
        letter-spacing: .1rem;
        font-weight: ${root.font_bold};
    }
    .sneaker__name{
        margin-bottom: ${root.mb_1};
    }
    .sneaker_price{
        margin-bottom: ${root.mb_4};
    }

    /*COLLECTIONS*/
    .collection__container{
        row-gap: 2rem;
        justify-content: center;
    }
    .collection__card{
        position: relative;
        display: flex;
        height: 328px;
        background-color: ${root.dark_color_lighten};
        padding: 2rem;
        border-radius: .5rem;
        transition: .3s;
        &:hover{
            transform: translateY(-.5rem);
        }
    }
    .collection__data{
        align-self: flex-end;
    }
    .collection__img{
        position: absolute;
        top: 0;
        right: 0;
        width: 230px;
    }

    /*WOMEN SNEAKERS*/
    .women__container{
        row-gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }  
    
    /*OFFER*/
    .offer__container{
        grid-template-columns: 55% 45%;
        column-gap: 0;
        background-color: ${root.dark_color_lighten};
        border-radius: .5rem;
        justify-content: center
    }
    .offer__data{
        padding: 4rem 0 4rem 1.5rem;
    }
    .offer__title{
        font-size: ${root.biggest_font_size};
        margin-bottom: .25rem;
    }
    .offer__description{
        margin-bottom: ${root.mb_3};
    }
    .offer__img{
        width: 153px;
    }
    
    /*NEW COLLECTION*/
    .new__container{
        row-gap: 2rem;
    }
    .new__mens{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${root.dark_color_lighten};
        border-radius: .5rem;
        padding: 2rem;
    }
    .new__mens-img{
        width: 276px;
        margin-bottom: ${root.mb_3};
    }
    .new__title{
        font-size: ${root.bigger_font_size};
        margin-bottom: .25rem;
    }
    .new__price{
        display: block;
        margin-bottom: ${root.mb_3};
    }
    .new__sneaker{
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
    .new__sneaker-card{
        position: relative;
        padding: 3.5rem 1.5rem;
        background-color: ${root.dark_color_lighten};
        border-radius: .5rem;
        overflow: hidden;
        display: flex;
        justify-content: center;

        &:hover .new__sneaker-overlay{
            bottom: 0;
        }
    }
    .new__sneaker-img{
        width: 220px;
    }
    .new__sneaker-overlay{
        position: absolute;
        left: 0;
        bottom: -100%;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(138,138,138,.3);
        transition: .3s;
    }

    /*NEWSLETTER*/
    .newsletter__container{
        background-color: ${root.dark_color};
        color: ${root.white_color};
        padding: 2rem .5rem;
        text-align: center;
        border-radius: .5rem;

    }
    .newsletter__title{
        font-size: ${root.bigger_font_size};
        margin-bottom: ${root.mb_2};
    }
    .newsletter__description{
        margin-bottom: ${root.mb_5};
    }
    .newsletter__subscribe{
        display: flex;
        column-gap: .5rem;
        background-color: ${root.white_color};
        padding: .5rem;
        border-radius: .5rem;
    }
    .newsletter__input{
        outline: none;
        border: none;
        width: 90%;
        font-size: ${root.normal_font_size};
    }
    .newsletter__input::placeholder{
        color: ${root.dark_color};
        font-family: ${root.body_font},sans-serif;
        font-size: ${root.normal_font_size};
        font-weight: ${root.font_semi_bold};
    }

    /*FOOTER*/
    .footer__container{
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
    .footer__box{
        margin-bottom: ${root.mb_4};
    }
    .footer__title{
        font-size: ${root.big_font_size};
    }
    .footer__link{
        display: block;
        width: max-content;
        margin-bottom: ${root.mb_1};
        cursor: pointer;
    }
    .footer__social{
        font-size: 1.5rem;
        margin-right: 1.25rem;
        cursor: pointer;
    }
    .footer__copy{
        padding-top: 3rem;
        font-size: ${root.smaller_font_size};
        color: ${root.dark_color_light};
        text-align: center;
    }

    /****MEDIA QUERIES****/
    @media screen and (min-width: 576px){
        .collection__container{
            grid-template-columns: 415px;
        }
        .collection__img{
            width: 260px;
        }

        .offer__container{
            grid-template-columns: max-content max-content;
        }
        .offer__data{
            text-align: center;
        }

        .new__mens{
            align-items: center;
        }
    }

    @media screen and (min-width: 768px){
        .section{
            padding: 7rem 0 3rem;
        }
        .section-title::after{
            width: 76px;
        }
        .nav{
            height: calc(${root.header_height} + 1.5rem);
        }
        .nav__menu{
            margin-left: auto;
        }
        .nav__list{
            display: flex;
        }
        .nav__item{
            margin-left: ${root.mb_6};
            margin-bottom: 0;
        }
        .nav__toggle{
            display: none;
        }
        

        .home__container{
            height: 100vh;
            grid-template-columns: max-content max-content;
            justify-content: center;
            align-items: center;
        }
        .home__sneaker{
            order: 1;
        }
        .home__shape{
            width: 376px;
            height: 376px;
        }
        .home__img{
            width: 470px;
            top: 3.5rem;
            right: 0;
            left: -3rem;
        }


        .newsletter__container{
            grid-template-columns: max-content max-content;
            justify-content: center;
            align-items: center;
            padding: 4.5rem 2rem;
            column-gap: 3rem;
        }
        .newsletter__description{
            margin-bottom: 0;            
        }
        .newsletter__subscribe{
            width: 360px;
            height: max-content;
        }
    }
    @media screen and (min-width: 1024px){
        .bd-grid{
            margin-left: auto;
            margin-right: auto;
        }
        .home__container{
           column-gap: 8rem; 
        }

        .collection__container{
            grid-template-columns: repeat(2,415px)
        }

        .new__container{
            grid-template-columns: max-content 1fr;
        }
        .new__mens{
            align-items: initial;
            justify-content: flex-end;
            padding: 4rem 2rem;
        }
        .new__mens-img{
            margin-bottom: ${root.mb_6};
        }
    }
`