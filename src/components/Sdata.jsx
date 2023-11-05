// import React from 'react'
import web from "../images/dices/dal-bati-churma-720x620.jpg";
import web1 from "../images/dices/7u1gma9g_matar-paneer_625x300_06_July_22.png";
import web2 from "../images/dices/Dal-Makhani-1.jpg";
import web3 from "../images/dices/paneer-butter-masala-recipe-2.jpg";
import web4 from "../images/dices/dhaba.jpg";
import web5 from "../images/dices/annie-spratt-oT7_v-I0hHg-unsplash.jpg";
import Paneer_Tikka from "../images/dices/Tandoori Paneer Tikka.jpg";
import coffe from "../images/dices/Cold-Coffee.png";
import tea from "../images/dices/tea.jpg";
import papad from "../images/dices/papad.jpg";
import Yellow_Dal from "../images/dices/yellow_dal.jpg";
import romaali_roti from "../images/dices/Roomali Roti.jpg";
import butter_roti from "../images/dices/Butter_Roti.jpg";
import plain_naan from "../images/dices/plain_Naan (1).jpg";
import curd_rice from "../images/dices/steamed-rice-with-seafood-calamary-corns-carrot-peas-side-view (1) (1).jpg";
// import Paneer_Butter_massala from "../images/dices/paneer-butter-masala-recipe-2.jpg";
import lacha_paratha from "../images/dices/Lachha-Paratha-1 (2).jpg";
import paratha from "../images/dices/paneer-butter-masala-recipe-2.jpg";
import kadai_panner from "../images/dices/Kadhai Paneer.jpg";
import noodles from "../images/dices/Chilli Garlic Noodles.jpg";
import tandoori_roti from "../images/dices/Tandoori.jpg";


const Sdata = [
    {
        imgsrc: web,
        title: "Dal Bati Churma",
        price: '₹ 150',
        description: "Dal Bati Churma is a traditional Rajasthani dish comprising lentil curry (dal), baked wheat bread (bati), and sweet crumbled bread (churma)"
    },
    {
        imgsrc: web1,
        title: "Matar Paneer",
        price: '₹ 120',
        description: "Matar Paneer is a North Indian dish featuring paneer (Indian cheese) and peas in a tomato-based gravy, spiced with aromatic flavors."
    },
    {
        imgsrc: web2,
        title: "Dal-Makhani",
        price: '₹ 90 ',
        description: "Dal Makhni is a rich North Indian dish made with black lentils and kidney beans cooked in creamy tomato-based gravy.or roti and is a popular vegetarian choice in Indian cuisine."
    },
    {
        imgsrc: web3,
        title: "Paneer-Butter-Masala",
        price: '₹ 140',
        description: "Paneer Butter Masala is a popular North Indian dish featuring paneer (Indian cheese) in a creamy, tomato-based gravy, rich in butter and aromatic spices."
    },
    {
        imgsrc: web4,
        title: "Sev Bhaji",
        price: '₹ 80',
        description:"Sev Bhaji is a Maharashtrian dish made with gram flour noodles (sev) cooked in a spicy and tangy curry with vegetables."
    },
    {
        imgsrc: web5,
        title: "Rice -Tadka",
        price: '₹ 70 ',
        description:"Rice Tadka, also known as Tadka Rice, is a simple Indian dish of steamed rice tempered with spiced ghee or oil. light food"
    },
    {
        imgsrc: Paneer_Tikka,
        title: "Tandoori Paneer Tikka",
        price: '₹ 22 ',
        description:"Tandoori Paneer Tikka is an Indian appetizer, made by marinating paneer (Indian cheese) in a spiced yogurt mixture and then grilled to perfection."
    },
    {
        imgsrc: kadai_panner,
        title: "Kadhai Paneer ",
        price: '₹ 210',
        description:"Kadhai Paneer is a North Indian dish with paneer (Indian cheese) and bell peppers cooked in a tomato-based gravy with aromatic spices."
    },
    {
        imgsrc: curd_rice,
        title: "Curd Rice",
        price: '₹ 132',
        description:"Curd Rice, or Thayir Sadam, Indian dish made by mixing cooked rice with yogurt and t. It is commonly served as a side dish or a main course in Indian meals."
    },
    {
        imgsrc: tandoori_roti,
        title: "Tandoori Roti",
        price: '₹ 30 ',
        description:"Tandoori Roti is an Indian flatbread, cooked in a tandoor (clay oven), with a smoky flavor and a soft, slightly charred texture and it is a popular choice in Indian restaurants and homes."
    },
    {
        imgsrc: romaali_roti,
        title: "Roomali Roti",
        price: '₹ 17 ',
        description:"Roomali Roti is a thin and soft Indian flatbread, resembling a handkerchief, made by twirling and stretching the dough before cooking."
    },
    {
        imgsrc: Yellow_Dal,
        title: "Yellow Dal",
        price: '₹ 140',
        description:"Yellow Dal refers to a simple Indian dish made with yellow lentils (usually toor or moong dal) cooked with spices, often tempered with ghee and cumin."
    },
    {
        imgsrc: butter_roti,
        title: "Butter Roti",
        price: '₹ 36 ',
        description:"Butter Roti is an Indian flatbread made with whole wheat flour and often brushed with ghee (clarified butter) for added flavor and richness."
    },
    {
        imgsrc: plain_naan,
        title: "Plain Naan",
        price: '₹ 43 ',
        description:"Plain Naan is a soft, leavened Indian bread, usually oval-shaped and cooked in a tandoor (clay oven), often served as an accompaniment to various Indian dishes."
    },
    {
        imgsrc: paratha,
        title: "Tawa Parantha",
        price: '₹ 53  ',
        description:"Tawa Parantha is an Indian flatbread cooked on a griddle (tawa), usually stuffed with various fillings and often served with yogurt or chutney"
    },
    {
        imgsrc: lacha_paratha,
        title: "Laccha Parantha",
        price: '₹ 53 ',
        description:"Laccha Parantha is a North Indian layered flatbread made by folding and rolling out the dough into thin, flaky layers before cooking on a griddle"
    },
    {
        imgsrc: papad,
        title: "Papad",
        price: '₹ 15 ',
        description:"Papad is a thin, crispy Indian flatbread made from lentil, chickpea, rice, or potato flour, often deep-fried or roasted and served as a side dish or snack"
    },
    {
        imgsrc: tea,
        title: " kulhad Tea",
        price: '₹ 10 ',
        description:"Kulhad Tea is traditional Indian chai served in clay cups (kulhad), adding a unique earthy flavor reducing waste  is commonly found at street stalls and roadside tea vendors."
    },
    {
        imgsrc: coffe,
        title: "Cold Coffee",
        price: '₹ 75 ',
        description:"Cold Coffee is a chilled beverage made from brewed coffee or instant coffee, milk, sugar, and ice, often garnished with cream or chocolatedelightful and fragrant cup of tea."
    },
    {
        imgsrc: noodles,
        title: "Chilli Garlic Noodles ",
        price: '₹ 145',
        description:"Chilli Garlic Noodles are a spicy and garlicky Chinese dish made with stir-fried noodles, vegetables, and a flavorful chili-garlic sauce Noodles known savory and spicy taste"
    },
]
export default Sdata