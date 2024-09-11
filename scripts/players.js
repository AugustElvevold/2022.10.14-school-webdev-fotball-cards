const players = [
    {
        id: 1,
        team: "FC Bayern München", 
        firstname: "Sadio", 
        lastname: "Mané",
        imgSrc: 'images/Sadio-Mané.png',
        birthdate: '1992-04-10',
        height: 174,
        weight: 69
    },
    {
        id: 2,
        team: "Chelsea FC", 
        firstname: "Didier", 
        lastname: "Drogba",
        imgSrc: 'images/Didier-Drogba.jpeg',
        birthdate: '1978-03-11',
        height: 188,
        weight: 84
    },
    {
        id: 3,
        team: "Al Ain", 
        firstname: "Abedi", 
        lastname: "Pele",
        imgSrc: 'images/Abedi-Pele.webp',
        birthdate: '1964-11-05',
        height: 174,
        weight: 68
    },
    {
        id: 4,
        team: "Qatar SC", 
        firstname: "Samuel", 
        lastname: "Eto'o",
        imgSrc: "images/Samuel-Eto'o.jpeg",
        birthdate: '1981-03-10',
        height: 176,
        weight: 75
    },
    {
        id: 5,
        team: "Manchester City", 
        firstname: "Riyad", 
        lastname: "Mahrez",
        imgSrc: 'images/Riyad-Mahrez.jpeg',
        birthdate: '1991-02-21',
        height: 179,
        weight: 67
    },
    {
        id: 6,
        team: "Porthsmouth", 
        firstname: "Nwankwo", 
        lastname: "Kanu",
        imgSrc: 'images/Nwankwo-Kanu.jpeg',
        birthdate: '1976-08-01',
        height: 197,
        weight: 80
    },
    {
        id: 7,
        team: "Putra Samarinda", 
        firstname: "Roger", 
        lastname: "Milla",
        imgSrc: 'images/Roger-Milla.jpeg',
        birthdate: '1952-05-20',
        height: 176,
        weight: 'unknown'
    },
    {
        id: 8,
        team: "Manchester City", 
        firstname: "Yaya", 
        lastname: "Touré",
        imgSrc: 'images/Yaya-Touré.jpeg',
        birthdate: '1983-05-13',
        height: 188,
        weight: 78
    },
    {
        id: 9,
        team: "Sebail", 
        firstname: "Michael", 
        lastname: "Essien",
        imgSrc: 'images/Michel-Essien.jpeg',
        birthdate: '1982-12-03',
        height: 178,
        weight: 85
    }
]    
const getAll =()=>{
    return players;
}

export default getAll