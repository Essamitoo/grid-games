import './App.css';
import { VideoGame } from './models/video-game';
import VideoGameGrid from './VideoGames/VideoGameGrid';

function App() {
   const games: VideoGame[] = [
      {
         id: 1,
         title: "Sekiro: Shadows Die Twice",
         subtitle: "Un desafío de samuráis",
         description: "Enfréntate a enemigos letales en un Japón feudal oscuro con intensos combates.",
         image: "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg"
      },
      {
         id: 2,
         title: 'Elden Ring',
         subtitle: 'Un mundo abierto lleno de desafíos',
         description:
            'Explora las Tierras Intermedias, enfrenta jefes colosales y descubre una historia oscura.',
         image: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg',
      },
      {
         id: 3,
         title: 'God of War',
         subtitle: 'El regreso de Kratos',
         description:
            'Vive la historia de Kratos y Atreus en la mitología nórdica con combates espectaculares.',
         image: 'https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg',
      },
      {
         id: 4,
         title: 'Cyberpunk 2077',
         subtitle: 'Un futuro distópico lleno de acción',
         description:
            'Explora Night City, mejora tu personaje con implantes cibernéticos y toma decisiones que afectan la historia.',
         image: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg',
      },
      {
         id: 5,
         title: 'Red Dead Redemption 2',
         subtitle: 'Una historia del viejo oeste',
         description:
            'Sigue a Arthur Morgan en una aventura de forajidos llena de acción, exploración y drama.',
         image: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg',
      },
      {
         id: 6,
         title: 'Hollow Knight',
         subtitle: 'Un metroidvania desafiante',
         description:
            'Explora Hallownest, un reino subterráneo lleno de secretos, enemigos y plataformas desafiantes.',
         image: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg',
      },
      {
         id: 7,
         title: 'The Witcher 3: Wild Hunt',
         subtitle: 'Un RPG de fantasía épico',
         description:
            'Acompaña a Geralt de Rivia en su misión de encontrar a Ciri y enfrentarse a la Cacería Salvaje.',
         image: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg',
      },
   ];

   return <VideoGameGrid games={games} />;
}

export default App;
