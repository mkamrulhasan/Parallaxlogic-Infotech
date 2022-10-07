import React, {useState} from "react";

const DeveloperContext = React.createContext({
  developer: [],
  serarchResult:[],
  serarchHandler: () =>{}
});


export const DeveloperContextProvider= (props)=>{
  const [developerState, setDeveloperState] = useState([
    {
      name: "M Kamrul Hasan",
      img: "team-1.jpg",
      DOB: "06-11-1999",
      address: "Godagari, Rajshahi",
      skills: ["Html", "Css", "Javascript", "React", "Vue"],
      rank: "Front-end Developer",
      Contact: "+8801712413190",
      id: 137,
      completeProject: 184,
      exprience: 3,
      projects: [
        {
          name: "Chat Apps",
          technology: ["Angular", "Node"],
          deadline: "20-11-2022",
        },
        {
          name: "Deliveryallies",
          technology: ["Html", "Css", "Javascript"],
          deadline: "26-11-2022",
        },
        {
          name: "Viablee",
          technology: ["React", "Asp.net"],
          deadline: "26-11-2022",
        },
        {
          name: "JelMedia",
          technology: ["Html", "Css", "Javascript"],
          deadline: "26-11-2022",
        },
      ],
    },
    {
      name: "Maruf Shafique",
      img: "team-2.jpg",
      DOB: "29-06-1999",
      address: "Godagari, Rajshahi",
      skills: ["Javascript", "React", "Vue", "Node"],
      rank: "Front-end Developer",
      Contact: "+8801712000000",
      id: 192,
      completeProject: 214,
      exprience: 3,
      projects: [
        {
          name: "Chat Apps",
          technology: ["Angular", "Node"],
          deadline: "20-11-2022",
        },
        {
          name: "Ai Bot",
          technology: ["Vue", "Ruby"],
          deadline: "18-12-2022",
        },
        {
          name: "Deliveryallies",
          technology: ["Html", "Css", "Javascript"],
          deadline: "26-11-2022",
        },
        {
          name: "HoverSpec",
          technology: ["Html", "Css", "Wordpress"],
          deadline: "26-11-2022",
        },
      ],
    },
    {
      name: "Abdullah Sadi",
      img: "team-4.jpg",
      DOB: "10-08-1990",
      address: "Mirpur, Dhaka",
      skills: ["Javascript", "PHP", "Python", "C#"],
      rank: "Back-end Developer",
      Contact: "+8801712000001",
      id: 232,
      completeProject: 377,
      exprience: 7,
      projects: [
        {
          name: "Chat Apps",
          technology: ["Angular", "Node"],
          deadline: "20-11-2022",
        },
        {
          name: "Ai Bot",
          technology: ["Vue", "Ruby"],
          deadline: "18-12-2022",
        },
        {
          name: "Deliveryallies",
          technology: ["Html", "Css", "Javascript"],
          deadline: "26-11-2022",
        },
        {
          name: "HoverSpec",
          technology: ["Html", "Css", "Wordpress"],
          deadline: "26-11-2022",
        },
      ],
    },
    {
      name: "Tanveer Jahan",
      img: "team-4.jpg",
      DOB: "22-11-1999",
      address: "Godagari, Rajshahi",
      skills: ["Html", "Css", "Javascript"],
      rank: "Front-end Developer",
      Contact: "+8801712000007",
      id: 377,
      completeProject: 74,
      exprience: 1,
      projects: [
        {
          name: "Chat Apps",
          technology: ["Angular", "Node"],
          deadline: "20-11-2022",
        },
        {
          name: "Ai Bot",
          technology: ["Vue", "Ruby"],
          deadline: "18-12-2022",
        },
        {
          name: "Deliveryallies",
          technology: ["Html", "Css", "Javascript"],
          deadline: "26-11-2022",
        },
        {
          name: "HoverSpec",
          technology: ["Html", "Css", "Wordpress"],
          deadline: "26-11-2022",
        },
      ],
    },
    {
      name: "Ismail Hossain",
      img: "team-5.jpg",
      DOB: "13-11-1999",
      address: "Godagari, Rajshahi",
      skills: ["Photoshop", " Illustrator", "Adobe XD"],
      rank: "Graphic Designer",
      Contact: "+8801712000004",
      id: 173,
      completeProject: 274,
      exprience: 2,
      projects: [
        {
          name: "The Royal courier",
          technology: ["Illustrator"],
          deadline: "20-11-2022",
        },
        {
          name: "Jelmedia Logo",
          technology: ["Illustrator"],
          deadline: "27-11-2022",
        },
        {
          name: "HoverSpce",
          technology: ["Illustrator"],
          deadline: "22-11-2022",
        },
        {
          name: "ISpyLook",
          technology: ["Illustrator"],
          deadline: "26-11-2022",
        },
      ],
    },
  ]);

  const [serarchResult, setSerarchResult]= useState([])

  const serarchHandler= (e, input) =>{
    e.preventDefault();
    let resultArr=[];

    if(input.current.value.trim().length > 2){resultArr = developerState.filter(
      (dev) =>
        dev.name
          .toLowerCase()
          .trim()
          .indexOf(input.current.value.toLowerCase().trim()) > -1 ||
        dev.rank
          .toLowerCase()
          .trim()
          .indexOf(input.current.value.toLowerCase().trim()) > -1
    );}

      setSerarchResult(resultArr);
  }

  return (
    <DeveloperContext.Provider
      value={{
        developer: developerState,
        serarchResult: serarchResult,
        serarchHandler: serarchHandler,
      }}
    >
      {props.children}
    </DeveloperContext.Provider>
  );
}

export default DeveloperContext;

