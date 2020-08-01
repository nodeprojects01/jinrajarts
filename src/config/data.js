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
import background5 from '../media/images/background5.jpg'
import background3 from '../media/images/background3.jpg'
import background2 from '../media/images/background2.jpg'
import background1 from '../media/images/background1.jpg'
import Praveen from '../media/images/praveen.JPG'
import Jinraj from '../media/images/jinraj.jpg'
// const imagePath="../media/images/";
import { jpStyle, jpTheme } from '../styles/global';

export default {
    views: 1,
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
    wallpaper: [background1, background5, background2, background3],
    menu: [
        { name: "home", link: "#home" },
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
            filepath: [WaltonHallB4OU_HomagePainting,background1, background5],
            description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,"+
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"+
            "ut aliquip ex ea commodo consequat.consectetur adipiscing elit,"+
            "sed do eiusmod consectetur adipiscing elit,"+
            "sed do eiusmod temporconsectetur adipiscing elit, sed do eiusmod temportempor.",
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
            isEvent: false,
            filepath: [dream_home],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
            description: "Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
            description: "Lorem ipsum dolor ssmod tempor incididunt ut labore et dolore magna aliqua",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
            description: "Lorem do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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