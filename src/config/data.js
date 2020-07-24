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
// const imagePath="../media/images/";
import { jpStyle, jpTheme } from '../styles/global';

export default {
    imagesColumnView: [[0, 3, 5], [1, 4, 7], [2, 5, 8]],
    images: [
        {
            id: "1",
            name: "Walton Hall",
            filepath: WaltonHallB4OU_HomagePainting,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            createdDate: "",
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
            filepath: dream_home,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            createdDate: "",
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
            filepath: nightmare,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            createdDate: "",
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
            filepath: revisited_sanative,
            description: "Lorem sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            createdDate: "",
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
            filepath: serenity,
            description: "Lorem ipsum eiusmod tempor incididunt ut labore et dolore magna aliqua",
            createdDate: "",
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
            filepath: forest,
            description: "Lorem ipsum dolor ssmod tempor incididunt ut labore et dolore magna aliqua",
            createdDate: "",
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
            filepath: village_life,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            createdDate: "",
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
            filepath: chaturmuka_basadi,
            description: "Lorem do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            createdDate: "",
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
            filepath: rainy_season,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            createdDate: "",
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