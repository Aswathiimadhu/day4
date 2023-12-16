import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [SlicePipe,RouterLink],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.css'
})
export class DistrictsComponent {
  district:any =[
    {
      id:1,
      title:"Thiruvanathapuram",
      image:"assets/images/tvm.jpg",
      discription:"Thiruvananthapuram (or Trivandrum) is the capital of the southern Indian state of Kerala. It's distinguished by its British colonial architecture and many art galleries. It’s also home to Kuthira Malika (or Puthen Malika) Palace, adorned with carved horses and displaying collections related to the Travancore royal family, whose regional capital was here from the 18th–20th centuries",
      wiki:"https://en.wikipedia.org/wiki/Thiruvananthapuram"
    },
 
      {
        id:2,
        title:"Kollam",
        image:"assets/images/kolam2.jpg",
      discription:"Kollam is a city in the state of Kerala, on India's Malabar Coast. It’s known as a trade hub and for its beaches, like lively Kollam and secluded Thirumullavaram. Sardar Vallabhbhai Patel Police Museum has artifacts tracing the history of the police force. Nearby, Ashtamudi Lake is a gateway to the Kerala backwaters, a network of waterways rich with vegetation. The striped 1902 Tangasseri Lighthouse has ocean views. ",
      wiki:"https://en.wikipedia.org/wiki/Kollam"
      },
      {
        id:3,
        title:"pathanamthitta",
        image:"assets/images/cl11.jpg",
        discription:"Pathanamthitta, is a municipality situated in the Southern Kerala, India, spread over an area of 23.50 km². It is the administrative capital of Pathanamthitta district. The town has a population of 37,538.Pathanamthitta district is a treat to eyes with its vast unending stretches of forests, rivers and rural landscapes. Blessed by nature, the district is famous for its scenic beauty, fairs and festivals.",
        wiki:"https://en.wikipedia.org/wiki/Pathanamthitta"
      },
      {
        id:4,
        title:"alappuzha",
        image:"assets/images/alapy2.jpg",
        discription:"Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The city's Mullakkal Temple features a traditional design. Punnamada Lake's snake boat races are a well-known annual event. ",
        wiki:"https://en.wikipedia.org/wiki/Alappuzha"
      },
      {
        id:5,
        title:"kottayam",
        image:"assets/images/kt1.jpg",
        discription:"Kottayam is a city in the Indian state of Kerala, flanked by the Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west. It is the district headquarters of Kottayam district, located in south-west Kerala.Kottayam is also called as “Akshara Nagari” .",
        wiki:"https://en.wikipedia.org/wiki/Kottayam"
      },
      {
        id:6,
        title:"Idukki",
        image:"assets/images/pta11.jpg",
        discription:" Idukki district is a densely forested, mountainous region in the south Indian state of Kerala. In the north, Anamudi mountain towers over Eravikulam National Park, where the rare, blue Neelakurinji flower blooms every 12 years. Nearby, Munnar is a hill station known for its sprawling tea plantations and Tea Museum. Farther south is the vast, curved Idukki Dam and Periyar National Park, a tiger and elephant reserve",
        wiki:"https://en.wikipedia.org/wiki/Idukki_district"
      },
      {
        id:7,
        title:"Ernakulam",
        image:"../../../assets/images/ern23.jpg",
        discription:"Sprawling, residential Ernakulam is known for Marine Drive, a busy waterfront promenade where boats offer backwater cruises. The Kerala Folklore and Hill Palace museums explore local heritage through art and antiquities. Shops likes crafts, and spices, while modern Lulu Mall also has a cinema and an ice rink. ",
        wiki:"https://en.wikipedia.org/wiki/Ernakulam"
      },
      {
        id:8,
        title:"thrissur",
        image:"assets/images/amb3434.jpg",
        discription:"Thrissur is a city in the south Indian state of Kerala. It's known for sacred sites and colorful festivals. In the center is Vadakkumnathan Temple, dedicated to Lord Shiva and adorned with murals. The ornate, Indo-Gothic Our Lady of Dolours Basilica is nearby. To the north, Thiruvambady Temple is home to several elephants. Sakthan Thampuran Palace houses an archaeology museum with bronze statues and ancient coins. ",
        wiki:"https://en.wikipedia.org/wiki/Thrissur"
      },
 
  ]
 
}
  
    
      
  

    


