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
// const imagePath="../media/images/";
import { jpStyle, jpTheme } from '../styles/global';

export default {
    views: 1,
    wallpaper: [background5,background5,background5],
    images: [
        {
            id: "1",
            name: "Walton Hall",
            size: "", 
            isEvent: true, 
            filepath: [WaltonHallB4OU_HomagePainting],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            createdDate: "01/Mar/2020",
            category: "landscape",
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
            category: "imaginary",
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
            category: "imaginary",
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
            description: "Lorem sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            createdDate: "15/May/2020",
            category: "imaginary",
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
            category: "imaginary",
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
            category: "landscape",
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
            category: "landscape",
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
            category: "landscape",
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
            category: "landscape",
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