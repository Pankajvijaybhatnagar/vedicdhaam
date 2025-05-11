// ✅ Dynamic Image Import using Vite's import.meta.glob
const imagePaths = import.meta.glob("../assets/VIP-photos/*.{jpg,jpeg,png,webp}", { eager: true });

// ✅ Function to get image by filename
function getImage(filename) {
  const path = `../assets/VIP-photos/${filename}`;
  return imagePaths[path] || null;
}

// ✅ Importing Main Images
import panditImg from "../assets/Manoj_Kulkarni_Purohit.jpg";
import gokarnaTemple from "../assets/about-us/gokarna_temple.jpg";
import pashuTemple from "../assets/about-us/Pashupatinath_Temple.jpg";
import kashiTemple from "../assets/about-us/Kashi_Vishwanath_Temple_Banaras.jpg";

// ✅ About Us Data Structure
export const aboutUsPageData = {
  main: {
    pandit_img: panditImg,
    pandit_name: "Manoj Kulkarni Purohit",
  },
  content: {
    gokarna: {
      text: "I possess 12 years of experience in performing Pooja, Homa, and havan daily at the renowned Gokarna Mahabaleshwaram in South Kashi.",
      img: gokarnaTemple,
      imgTitle: "Gokarna Mahabaleshwaram Temple in South Kashi",
    },
    nepal: {
      text: "I have also conducted various types of yagas and havans at the Pashupatinath Devasthan in Nepal, including Rugveda Yaga, Laghu Rudra Havan, Shata Chandi Havan, Ganapathi Homa, Sudharshana Yagam, and Chandi Havana.",
      img: pashuTemple,
      imgTitle: "Pashupatinath Temple in Nepal",
    },
    kashi: {
      text: "I have performed Pooja and abhisheka, such as Rudrabhishek to Lord Shiva and Ganga Pooja, at the renowned Kashi Varanasi Temple.",
      img: kashiTemple,
      imgTitle: "Kashi Vishwanath Temple in Banaras",
    },
    hyderabad:
      "In Hyderabad, I have conducted Shata Chandi Yaga, Rudra Yaga, Manyu Sukta Homa, and Lakshmi Narayana Parayana Japa Homa. My experience also extends to various other poojas and yagnas in the Hyderabad region.",
    
    formerPm: {
      text: "I had the honor of performing sacred rituals for H.D. Deve Gowda, Former PM of India.",
      img: getImage("panditforpujaS.webp"),
      imgTitle: "H.D. Deve Gowda, Former PM of India",
    },

    dkshiv: {
      text: "I conducted the Homa/Havan at the residence of D K Shivkumar in Bengaluru, performing Manaskalpa Chandika Yaga.",
      img: getImage("panditforpujaI.webp"),
      imgTitle: "Havan at the residence of D K Shivkumar in Bengaluru",
    },
    
    tumukar: {
      text: "In Tumkur, I organized a Shata Chandi Yaga at the Vidya Chowdeshwari Temple.",
      img: getImage("panditforpujaN.webp"),
      imgTitle: "Nagarjuna Rao, Famous South Actor",
    },

    shivRaj: {
      text: "I had the honor of conducting Homa/Yagana and Pooja ceremonies for Dr. Shiva Raj Kumar, Duniya Vijay, and Dhanjay in the Kannada film industry.",
      img: getImage("panditforpujaG.webp"),
      imgTitle: "Dr. Shiva Raj Kumar, Kannada Film Industry",
    },

    variousLocation: {
      text: "In locations like Dakshin Kashi Gokarna and Mysore Talakaveri Kshetra Shrirangapattana, I perform Homa Pooja ceremonies such as Moksh Narayan Bali, Tripindi Shradha, and Tila Homa.",
      img: getImage("panditforpujaP.webp"),
      imgTitle: "Naga Chaitanya, Famous Telugu Actor",
    },

    duniyaVijay: {
      text: "I have performed various poojas, yagas, and homas for Duniya Vijay, a famous Kannada actor, across multiple states.",
      img: getImage("panditforpujaH.webp"),
      imgTitle: "Duniya Vijay, Famous Kannada Actor",
    },

    differentStates:
      "I have extended my services to several states, including Maharashtra, Gujarat, Odisha, Andhra Pradesh (Tirupati), and many more, conducting a wide range of Poojas and Yagnas.",
    
    languages: [
      "Kannada",
      "Marathi",
      "Hindi",
      "English",
      "Goa- Konkani",
      "Tamil",
      "Telugu",
      "Tulu",
      "Karwar Konkani",
    ],
  },
};
