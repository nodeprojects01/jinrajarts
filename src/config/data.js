import React from 'react';
import WaltonHallB4OU_HomagePainting from '../media/images/WaltonHallB4OU_HomagePainting.jpg'
import dream_home from '../media/images/dream_home.JPG'
import nightmare from '../media/images/nightmare.jpg'
import revisited_sanative from '../media/images/revisited_sanative.jpg'
import serenity from '../media/images/serenity.jpg'
import forest from '../media/images/forest.jpg'
import village_life from '../media/images/village_life.JPG'
import chaturmuka_basadi from '../media/images/chaturmuka_basadi.JPG'
import rainy_season from '../media/images/rainy_season.JPG'
import background2 from '../media/images/background2.jpg'
import background1 from '../media/images/background1.jpg'
import Praveen from '../media/images/praveen.jpg'
import Jinraj from '../media/images/jinraj.jpg'
// const imagePath="../media/images/";
import { jpStyle, jpTheme } from '../styles/global';

export default {
    views: 1,
    paintings: {
        showLessCount: 6
    },
    recentEvents: {
        showLessCount: 3
    },
    aboutUs: [
        {
            id: "1",
            name: "Praveen K R",
            filepath: [Praveen],
            websites: {
                youtube: "https://www.youtube.com/channel/UCadO25GiC-YBWzosiAzz0Ag",
                facebook: "https://www.facebook.com/praveen.jain.7798"
            },
            description: `He is a PhD student in the Engineering and Innovation department at 
            OU - Milton Keynes with civil engineering background hailing from Karnataka, India. 
            He resident of Milton Keynes, England since 2019. He inherited the art of painting 
            from his father R S Karebasannanavar. He has been practising art since childhood. 
            He received first place in the national level painting competition held at IISc - Bangalore 2010. 
            Have participated and won 71 prizes in state, district and zone level competition in india.`
        },
        {
            id: "2",
            name: "Jinraj K R",
            filepath: [Jinraj],
            websites: {
                youtube: "https://www.youtube.com/watch?v=50QwDgDlHok&t",
                facebook: "https://www.facebook.com/Jinraj.KR",
                instagram: "https://www.instagram.com/jinraj.arts"
            },
            description: `He is a software engineer by profession but a passionated artist, 
            who is following his father's artistry from his childhood. The artistic ideas helped 
            throughout his educational and professional journey in developing the presentation skills. 
            Through his realism, portrait, imaginary, commercial and some landscape art, 
            he creates his own pictorial language. Jinraj is currently practicing his paintings on 
            his own in Bangalore, India, during all the free time that he gets.`
        }
    ],
    wallpaper: [background1, background2],
    menu: [
        // { name: "home", link: "#home" },
        { name: "events", link: "#events" },
        { name: "paintings", link: "#paintings" },
        { name: "about us", link: "#aboutus" },
        { name: "contact", link: "#contact" }
    ],
    images: [
        {
            id: "1",
            name: "Walton Hall",
            size: "",
            isEvent: true,
            filepath: [WaltonHallB4OU_HomagePainting],
            description: `This painting is inspired by the Walton Hall in Milton Keynes, UK, 
            in the early 20th century and shows Dr Harley's eldest daughter Diana, 
            who together with her husband, Brigadier Eric Earle, were the last family to live on the Estate.`,
            createdDate: "01/Mar/2020",
            category: ["landscape"],
            likes: 0,
            artist: "Praveen K R",
            position: 1,
            hide: false,
            backgroundColor: { backgroundColor: jpStyle.colorGreyLight },
            more: {
                hideFrame: true,
                frameColor: { backgroundColor: "#a58769" },
                hideMargin: true,
                marginColor: "#fff"
            }
        },
        {
            id: "2",
            name: "Dream Home",
            size: "",
            isEvent: true,
            filepath: [dream_home],
            description: `My dream home would be in the area surrounded by greenary, a river, 
            animals and birds.`,
            createdDate: "01/Mar/2002",
            category: ["imaginary"],
            likes: 0,
            artist: "Praveen K R",
            position: 2,
            hide: false,
            backgroundColor: { backgroundColor: jpStyle.colorGreyLight },
            more: {
                hideFrame: true,
                frameColor: { backgroundColor: "#c7b1bd" },
                hideMargin: true,
                marginColor: "#fff"
            }
        },
        {
            id: "3",
            name: "Nightmare",
            size: "",
            isEvent: true,
            filepath: [nightmare],
            description: `This painting of a dream associated with the humankind who is crossing 
            the danger line and keeping the earth unsutable for living.`,
            createdDate: "01/Mar/2000",
            category: ["imaginary"],
            likes: 0,
            artist: "Praveen K R",
            position: 2,
            hide: false,
            backgroundColor: { backgroundColor: jpStyle.colorGreyLight },
            more: {
                hideFrame: true,
                frameColor: { backgroundColor: "#94b0c5" },
                hideMargin: true,
                marginColor: "#fff"
            }
        },
        {
            id: "4",
            name: "Revisited Sanative",
            size: "",
            isEvent: false,
            filepath: [revisited_sanative],
            description: `Painting depicts a saint (Individual Soul) meditating in varuna mudra 
            praying Supreme Soul/Doctor to cure the world from COVID-19. When there is no medicine for a sickness, 
            the only hope is supreme doctor -  Lord Vishnu/Dhanvantari (Supreme Soul).`,
            createdDate: "17/Apr/2020",
            category: ["imaginary"],
            likes: 0,
            artist: "Praveen K R",
            position: 2,
            hide: false,
            backgroundColor: { backgroundColor: jpStyle.colorGreyLight },
            more: {
                hideFrame: true,
                frameColor: { backgroundColor: "#a58769" },
                hideMargin: true,
                marginColor: "#fff"
            }
        },
        {
            id: "5",
            name: "Serenity",
            size: "",
            isEvent: false,
            filepath: [serenity],
            description: `A peaceful living at home, living behind the city noise and work pressure.`,
            createdDate: "01/Sep/2018",
            category: ["imaginary"],
            likes: 0,
            artist: "Praveen K R",
            position: 2,
            hide: false,
            backgroundColor: { backgroundColor: jpStyle.colorGreyLight },
            more: {
                hideFrame: true,
                frameColor: { backgroundColor: "#a58769" },
                hideMargin: true,
                marginColor: "#fff"
            }
        },
        {
            id: "6",
            name: "Forest",
            size: "",
            isEvent: false,
            filepath: [forest],
            description: `A Land dominated by thousands of dense trees and flowing river noise.`,
            createdDate: "01/Mar/2010",
            category: ["landscape"],
            likes: 0,
            artist: "Praveen K R",
            position: 1,
            hide: false,
            backgroundColor: { backgroundColor: jpStyle.colorGreyLight },
            more: {
                hideFrame: true,
                frameColor: { backgroundColor: "#e5e5e5" },
                hideMargin: true,

                marginColor: "#fff"
            }
        },
        {
            id: "7",
            name: "Village Life",
            size: "",
            isEvent: false,
            filepath: [village_life],
            description: `Tried to portray a village home surrounded by beautiful green nature.`,
            createdDate: "01/Mar/1998",
            category: ["landscape"],
            likes: 0,
            artist: "Praveen K R",
            position: 1,
            hide: false,
            backgroundColor: { backgroundColor: jpStyle.colorGreyLight },
            more: {
                hideFrame: true,
                frameColor: { backgroundColor: "#94b0c5" },
                hideMargin: true,

                marginColor: "#fff"
            }
        },
        {
            id: "8",
            name: "Chaturmuka Basadi",
            size: "",
            isEvent: true,
            filepath: [chaturmuka_basadi],
            description: `This painting of Chaturmukha Basadi, is a symmetrical Jain temple situated 
            in Karkala, Karnataka, India. It has four symmetrical faces and is thus called chaturmukha (four faces) 
            basadi (a term used to refer to Jain temples. It is one of the most famous monuments in Karkala, 
            and was built in the late 16th century by Immadi Bhairarasa Vodeya of the Santara dynasty in 1586.`,
            createdDate: "01/Mar/1996",
            category: ["landscape"],
            likes: 0,
            artist: "Praveen K R",
            position: 1,
            hide: false,
            backgroundColor: { backgroundColor: jpStyle.colorGreyLight },
            more: {
                hideFrame: true,
                frameColor: { backgroundColor: "#f0d4d1" },
                hideMargin: true,

                marginColor: "#fff"
            }
        },
        {
            id: "9",
            name: "Rainy Season",
            size: "",
            isEvent: true,
            filepath: [rainy_season],
            description: `A scene of access routes into the mountainous Western Ghats of Mangaluru, Karnataka.`,
            createdDate: "01/Mar/1997",
            category: ["landscape"],
            likes: 0,
            artist: "Praveen K R",
            position: 1,
            hide: false,
            backgroundColor: { backgroundColor: jpStyle.colorGreyLight },
            more: {
                hideFrame: true,
                frameColor: { backgroundColor: "#6c666d" },
                hideMargin: true,

                marginColor: "#fff"
            }
        },
    ]
}


// module.exports = { images }