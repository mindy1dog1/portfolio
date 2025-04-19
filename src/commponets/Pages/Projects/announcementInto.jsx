import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import { RevealOnScroll } from "../../RevelOnScroll";
import { useEffect } from 'react';


export const AnnouncementIntoPage = () => {
  const navigate = useNavigate(); // Create a navigate function

  
  useEffect(() => {
    // Scroll to the top when the page is loaded
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only once when the component is mounted


  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page in the browser history
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-b from-black via-slate-900 to-black">
      <RevealOnScroll>
        <div className="max-w-4xl w-full">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-8">
            Friday Announcements - 3D Intro Project
          </h1>

          {/* Video Embed */}
          <div className="relative w-full h-0 pb-[56.25%] mb-8 overflow-hidden rounded-2xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dWxjE79_yZw?modestbranding=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Description */}
          <div className="bg-white/5 p-8 rounded-2xl shadow-md text-gray-300 backdrop-blur-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
              About This Project
            </h2>
            <p className="leading-relaxed text-lg">
              For a school assignment, I created a custom 3D animated intro using After Effects to introduce the 
              Friday announcements. The project involved hundreds of layers, lighting, and syncing animation to music.
              It ended up being number one, even though we had primarily learned Premiere Pro and not After Effects.
              I wanted to try something more advanced.
            </p>
          </div>

          {/* Steps Taken */}
          <div className="bg-white/5 p-8 rounded-2xl shadow-md text-gray-300 backdrop-blur-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
              Steps Taken to Create This Project
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-lg">
              <li>
                <strong>Concept Development:</strong> I started by looking for inspiration and stumbled across the 3D realm.
              </li>
              <li>
                <strong>Modeling & Animation:</strong> Using After Effects and the school's logos, I created many layers for the 3D effect with 3D camera movement.
              </li>
              <li>
                <strong>Lighting & Effects:</strong> The lighting was a beam ray, and the 3D camera movement was done with a 3D camera layer. The 3D logo effect involved shifting the X, Y, and Z axes.
              </li>
              <li>
                <strong>Music Syncing:</strong> I added a music track, getting the music/SFX from a copyright-free platform.
              </li>
              <li>
                <strong>Final Rendering:</strong> After finalizing the animation, I rendered the project. As we went around rating the best animations, I received. 🥇
              </li>
            </ol>
          </div>

          {/* Go Back Button */}
          <div className="mt-8 flex justify-center items-center">
            <button
              onClick={handleGoBack}
              className="px-6 py-3 text-white bg-cyan-400 rounded-full hover:bg-cyan-500 transition duration-300"
            >
              Go Back to Projects
            </button>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
