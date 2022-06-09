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
import Lily from '../media/images/lily.jpg'
import Tiger from '../media/images/tiger.jpg'
import Intheair from '../media/images/intheair.jpg'
import DreamHome2 from '../media/images/dreamhome.jpg'
import Bharatanatyam from '../media/images/bharatanatya.jpg'
import Praveen from '../media/images/praveen.jpg'
import Jinraj from '../media/images/jinraj.png'
import { jpStyle, jpTheme } from '../styles/global';

export default {
    views: 1,
    paintings: {
        showLessCount: 9
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
                facebook: "https://www.facebook.com/praveen.jain.7798",
                instagram: "https://www.instagram.com/praveenkrarts"
            },
            description: `Praveen is a figurative and illustrative artist practicing since childhood, learnt from artist-cum-father R S Karebasannanavar. He has been a resident of England since the year 2019. Most of his artworks are in watercolour, acrylic and rarely in oil media influenced from landscape, history and architecture. Some of his paintings are illustrative and metaphorical where he tries to express his intention through nonverbal power of communication and encourages the audience to stay in their imagination. Since the pandemic, he’s been motivated by Paint Out – Norfolk event to mainly work in plein air.
<br/>
            His lockdown painting titled SANATIVE was selected and featured in the 2020 open stage online gallery of UK’s leading arts school – Bristol Old Victoria Theatre. He secured first place in the national level painting competition held at IISc – Bangalore, India in 2010 and has participated and won 71 prizes in state, district and zone level competitions in India. He has been participating, exhibiting in UK’s premier plein-air painting competition and exhibition Paint Out Norfolk since the year 2020.  He recently displayed his works in the Spring Exhibition of Buckinghamshire Art Society at Beaconsfield in England. He is an elected member of Bucks Art Society and also a member of Milton Keynes Society of Artists.
<br/>       
            In parallel to this profession, he is currently a PhD scholar in Engineering and Innovation department at The Open University - Milton Keynes, England researching in collaboration with Technical Center of Mechanical Industries, CETIM - France. He graduated from NIT Patna, India with a master’s degree in Structural Engineering (2015) and completed his bachelor’s degree in Civil Engineering from Bangalore Institute of technology (2013).`
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
    wallpaper: [rainy_season],
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
            name: "Fantasy Home",
            size: "",
            isEvent: true,
            filepath: [dream_home],
            description: `An imaginary painting represents a dream home in the middle of
            forest, next to a lake with happy animals being fed in the garden.`,
            createdDate: "01/Jun/2006",
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
            name: "Chaosim",
            size: "",
            isEvent: true,
            filepath: [nightmare],
            description: `This painting was made during national level competition held by IISc – Bangalore. The
            topic – Chaosim was given on the spot and asked to picturize through our envisagement.
            The painting depicts the sufferings of the man and to overcome it through self-realisation.
            The knife pierced through the head represents the sufferings or imaginary problems of
            human being, whereas fist depicts the resilient power to overcome it.`,
            createdDate: "01/Mar/2012",
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
            name: "Sanative",
            size: "",
            isEvent: false,
            filepath: [revisited_sanative],
            description: `A mystical and spiritual painting which depicts a saint (Individual Conciousness) 
            meditating in varuna mudra praying Supreme Conciousness to cure the world from COVID-19. 
            Varuna Mudra: It is a kind of hastha mudra yoga to balance water element and blood circulation.
            In spirituality, there is a notion of supreme/absolute/pure consciousness which is ubiquitous
            (present in every living and non-living things). All we as an individual also possess pure
            consciousness however it is bounded by non-conscious layers viz., physical/body,
            astral/emotional, causal/mental, and supra causal or intuitive causing one to have bounded
            soul/consciousness or individual point of view. Through meditation we can transcend
            through all these layers and can experience supreme consciousness. The painting represents 
            a prayer to the supreme power (higher consciousness) to
            strengthen our mental immunity and redeem the world from COVID-19.`,
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
            description: `Another imaginary painting created in the year 2015 of a home located 
            outside the city with peaceful environment without noise or work pressure.`,
            createdDate: "01/Sep/2015",
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
            name: "Riparian Forestland",
            size: "",
            isEvent: false,
            filepath: [forest],
            description: `The fictional painting illustrates a forest dominated by dense
            trees and meandering river boldly flowing amid the flora.`,
            createdDate: "01/Mar/2011",
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
            description: `The life of an Indian village is by no means a walk in the park, the economic condition is
            always remaining dire. An imaginary glimpse of village life in India showing bullock cart and
            cycle representing the obsolete transportation system captured in the year 2007.`,
            createdDate: "01/Jun/2007",
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
            name: "Jain Basadi",
            size: "",
            isEvent: false,
            filepath: [chaturmuka_basadi],
            description: `This painting (created in the year 2005) represents typical Jain Basadi/temple in Dakshina
            Kannada region of Karnataka in India. This is an imaginary basadi inspired from
            Chaturmukha Basadi - a symmetrical Jain temple situated in Karkala, Karnataka, India. It has
            four symmetrical faces and is thus called chaturmukha (four faces) basadi (a term used to
            refer to Jain temples. It is one of the most famous monuments in Karkala, and was built in
            the late 16th century by Immadi Bhairarasa Vodeya of the Santara dynasty in 1586.`,
            createdDate: "01/Jun/2005",
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
            name: "Charmudi Ghat",
            size: "",
            isEvent: true,
            filepath: [rainy_season],
            description: `This painting represents Charmudi ghat is a motorable pathway in
            Western ghats connecting Dakshina Kannada and Chikkamagaluru district in Karnataka -
            India. The section of ghat is known by the name of Charmadi Ghat. The elevated ghat
            section is famous for its 12 Hairpin curves which receives very heavy rainfall of over 7000
            mm during the monsoon.`,
            createdDate: "01/Jun/2008",
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
        {
            id: "10",
            name: "Tiger",
            size: "",
            isEvent: false,
            filepath: [Tiger],
            description: `A water painting of a tiger who is relaxing in the river`,
            createdDate: "01/Mar/2006",
            category: ["portrait"],
            likes: 0,
            artist: "Jinraj K R",
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
        {
            id: "11",
            name: "Bharatanatyam",
            size: "",
            isEvent: false,
            filepath: [Bharatanatyam],
            description: `Bharatanatyam is the older classical dance tradition of India. This painting is
            insprired from one of the artist performing live on stage`,
            createdDate: "07/May/2012",
            category: ["portrait"],
            likes: 0,
            artist: "Jinraj K R",
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
        {
            id: "12",
            name: "Dream Home",
            size: "",
            isEvent: false,
            filepath: [DreamHome2],
            description: `A childhood dream to paint a home which is surrounded by nature and nothing else`,
            createdDate: "05/Jan/2012",
            category: ["landscape"],
            likes: 0,
            artist: "Jinraj K R",
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
        {
            id: "13",
            name: "In The Air",
            size: "",
            isEvent: false,
            filepath: [Intheair],
            description: `One of my favorite painting which was painted from the inspiration of 
            actress Nargis Fakhri in a bollywood movie called Rockstar.`,
            createdDate: "05/Jan/2012",
            category: ["portrait"],
            likes: 0,
            artist: "Jinraj K R",
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
        {
            id: "14",
            name: "Lily",
            size: "22” * 34”",
            isEvent: false,
            filepath: [Lily],
            description: `This is an acrylic portrait painting`,
            createdDate: "17/Apr/2020",
            category: ["portrait"],
            likes: 0,
            artist: "Jinraj K R",
            position: 1,
            hide: false,
            backgroundColor: { backgroundColor: jpStyle.colorGreyLight },
            more: {
                hideFrame: true,
                frameColor: { backgroundColor: "#6c666d" },
                hideMargin: true,

                marginColor: "#fff"
            }
        }
    ]
}


// module.exports = { images }