export interface Player {
    id: number;
    name: string;
    position: string;
    age: number;
    height: string;
    image: string;
  }
  
  export const PLAYERS: Player[] = [
    {
      id: 1,
      name: "Michael Jordan",
      position: "Escolta",
      age: 40,
      height: "1.98m",
      image: "assets/images/jordan.jpg"
    },
    {
      id: 2,
      name: "LeBron James",
      position: "Alero",
      age: 38,
      height: "2.06m",
      image: "assets/images/lebron.jpg"
    },
    {
      id: 3,
      name: "Stephen Curry",
      position: "Base",
      age: 35,
      height: "1.88m",
      image: "assets/images/curry.jpg"
    }
  ];
  //Añado esta linea para poder utilizar el array y cargar automáticamente a Firebase
  export { PLAYERS };
