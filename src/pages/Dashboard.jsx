import React from "react";
import 'react-awesome-slider/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookSquare,FaInstagram,FaSearch,FaTelegram,FaYoutube} from "react-icons/fa";
import styled from "styled-components";
import { Progress,Input } from 'reactstrap';

const Gap = styled.div`
    width: 1.5rem;
`;

const SocallAll = styled.div`
    &:first-child{
        margin-left: -1rem;
    };
    display: flex;
    justify-content: center;    
`;


const MainWord = styled.h1`
    font-family: Times New Roman Arial Bold;
    margin: 0 0 0 -4rem;
`;

const SocallName = styled.div`
    &:hover{
        background-color: ${(props) => props.backgroundColor};
        color: ${(props) => props.color};
        color: white;
        cursor: pointer;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 3rem;
    margin: 0 2rem 1rem 4rem;
    background-color: bisque;
    border-radius: 3rem;
    width: ${(props) => props.width};
    text-decoration: none;
`;
const Hrf = styled.a`
    text-decoration: none;
    color: black;
`
const Inp = styled.input`
    width: 8rem;
    height: 2rem;
    background-color: bisque;
    border: none;
`
const MainImg = styled.div`
    width: 113rem;
    height: 55rem;
    margin: 0 0 0 1rem;
    background-image: linear-gradient(-40deg, rgb(255, 255, 255) 15%, #00dada 50%, #00b9da 80%);
    position: relative;
    
    .word{
        color: white;
        position: absolute;
        top: 17rem;
        left: 13rem;
        font-size: 8rem;
    }
    .word2{
        color: white;
        position: absolute;
        top: 29rem;
        left: 9rem;
    }
`
const Img1 = styled.img`
    width: 45rem;
    height: 38rem;
    border: none;
    border-radius: 20rem 20rem 0 20rem;
    position: relative;
    top: 17rem;
    left: 68rem;
`
const Reclama = styled.div`
    display: flex;
    width: 110rem;
    height: 350px;
    margin: 1rem 0 1rem 1rem;
    background-image: linear-gradient(40deg, #00b3d3 10%, #8effff 40%, #00b3d3 60%,  #70ffff 75%);
`
const SmallCard = styled.div`
    width: 320px;
    height: 320px;
    margin: 10px;
`
const Face = styled.img`
    width: 300px;
    height: 280px;
`
const Name = styled.p`
    text-align: center;
    color: black;
    font-size: 1.4rem;
`
const Ifer = styled.iframe`
    width: 750px;
    margin: 2rem 0 0 2rem;
    position: relative;
    left: 35rem;
`
const Ifer2 = styled.iframe`
    margin: 2rem;
    position: relative;
    left: 13rem;
`
const Focus = styled.div`
    width: 110rem;
    position: relative;
    left: 3rem;
`
const Still = styled.div`
    width: 8rem;
    height: 2.4rem;
    margin-top: .3rem;
    margin-left: 3rem;
    background-color: bisque;
    border: none;
`
// const Btn = styled.button`
//     width: 5rem;
//     height: 3rem;
//     border: none;
//     border-radius: 2rem;
//     background-color: bisque;
//     &:hover{
//         background-color: gray;
//         color: white;
//     }
// `

// const i1 = document.querySelector('#uzb');
// const i2 = document.querySelector('#eng');
// const i3 = document.querySelector('#ru');

// function Sub() {
//   const element = document.getElementById('til')
//   if(element.value === "eng"){
//       i1.style.display = 'none'
//       i2.style.display = 'block'
//       i3.style.display = 'none'
//   }else if(element.value === "ru"){
//       i1.style.display = 'none'
//       i2.style.display = 'none'
//       i3.style.display = 'block'
//   }else if(element.value === "uzb"){
//       i1.style.display = 'block'
//       i2.style.display = 'none'
//       i3.style.display = 'none'
//   }
// }
const Register2 = styled.p`
    text-align: center;
    color: black;
    font-size: 3rem;
`
const Dashboard = () => {
    return(
        <div>
            <SocallAll>
                <MainWord>Main Menu</MainWord>
                <Hrf href="https://www.facebook.com/ezguniyatmed/" target="_blank">
                <SocallName  backgroundColor="rgba(0, 81, 255, 0.705)">
                    <FaFacebookSquare/>
                    <Gap/>
                    Facebook
                </SocallName>
                </Hrf>
                <Hrf href="https://www.instagram.com/ezguniyat.uzb/?ysclid=lh4nx191as702714410" target="_blank">
                <SocallName  backgroundColor="rgba(255, 0, 255, 0.705)">
                    <FaInstagram/>
                    <Gap/>
                    Instagram
                </SocallName>
                </Hrf>
                <Hrf href="https://t.me/ezguniyat_med" target="_blank">
                <SocallName  backgroundColor="rgba(0, 130, 255, 0.705)">
                    <FaTelegram/>
                    <Gap/>
                    Telegram
                </SocallName>
                </Hrf>
                <Hrf href="https://www.youtube.com/watch?app=desktop&v=Z_vT5QS6-qA" target="_blank">
                <SocallName  backgroundColor="rgba(255, 0, 0, 0.705)">
                    <FaYoutube/>
                    <Gap/>
                    Youtube
                </SocallName>
                </Hrf>
                <SocallName width="14rem">
                    <FaSearch color="black"/>
                    <Gap/>
                    <Inp placeholder="Search"/>
                </SocallName>
                    <Still>
                        <Input
                        id="exampleSelect til"
                        name="select"
                        type="select"
                        >
                        <option>uzb</option>
                        <option>eng</option>
                        <option>ru</option>
                        </Input>
                    </Still>
                        {/* <Btn onClick={Sub()}>chouse</Btn> */}
            </SocallAll>
            <MainImg>
                <h1 id="uzb" className="word">Ezgu Niyat</h1>
                <h1 id="eng" className="word">Good Intention</h1>
                <h1 id="ru" className="word">Хорошие намерения</h1>
                <h1 id="uzb" className="word2">Shayxontohur tumani Paxtakor ko'chasi 79</h1>
                <Img1 className="img1" src="https://policliniki.uz/d/223.jpg" alt="" />
            </MainImg>
                <Ifer src="https://clinics.uz/images/banners/banner-medilux-ru.gif.pagespeed.ce.UZh5j0YTNY.gif" frameborder="0"></Ifer>
                <Register2>Tajribali konsultantlarimiz</Register2>
            <Reclama>
                <SmallCard>
                    <Face src="http://med24.uz/upload/iblock/20e/20e712daf874192f80fe71df169a05f9.jpg" alt="" />
                    <Name>Ibragimov Sayfulla Xamidullaevich</Name>
                </SmallCard>
                <SmallCard>
                    <Face src="http://med24.uz/upload/iblock/5ee/5ee3a9c549726a4627f55af347fee1c2.png" alt="" />
                    <Name>Tursunqulov Ilxomjon Kamalovich</Name>
                </SmallCard>
                <SmallCard>
                    <Face src="http://med24.uz/upload/iblock/ac5/ac521139ccfd1aea5655eb38a77fc5d9.jpg" alt="" />
                    <Name>Irmuhamedov Axmadjon Rustamovich</Name>
                </SmallCard>
                <SmallCard>
                    <Face src="https://avt-6.foto.mail.ru/list/dr.rustamov/_avatar180?" alt="" />
                    <Name>Rustamov Baxt Erashimovich</Name>
                </SmallCard>
                <SmallCard>
                    <Face src="http://med24.uz/upload/iblock/800/80002d989fd017fcdb84ddfc7d885627.png" alt="" />
                    <Name>Islombekov Xayot</Name>
                </SmallCard>
            </Reclama>
            <Ifer2 width="1280" height="720" src="https://www.youtube.com/embed/wKzKPipX4Dg" title="Я Рустамов Бахт Ерашимович" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Ifer2>
            <>
            <Focus>
            <Name>Bolalarni kasal bolishining asosiy sabablari</Name>
            <Name>Noto'g'ri oqatlanish 80%</Name>
                <Progress
                    animated
                    className="my-2"
                    color="danger"
                    value={80}
                />
                <Name>Bir birlariga yuqtirish holatlari 35%</Name>
                <Progress
                    animated
                    className="my-3"
                    color="info"
                    value="35"
                />
                <Name>Gegenik qoidalarga rioya qilmaslik 55%</Name>
                <Progress
                    animated
                    className="my-3"
                    color="warning"
                    value={55}
                />
                <Name>Tabiy shamollash yani "mavsumiy shamolash 20%"</Name>
                <Progress
                    animated
                    className="my-3"
                    color="success"
                    value={20}
                />
                </Focus>
            </>
            <Ifer src="https://cab.adcaravan.uz/delivery/ai.php?filename=_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_(4).png&contenttype=png" frameborder="0"></Ifer>
        </div>
    )
}
export default Dashboard;