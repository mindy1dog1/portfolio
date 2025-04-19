import img1 from "./Photos/DSC8810.png"
import img2 from "./Photos/IMG_9588.PNG"
import img3 from "./Photos/vollyball.png"
import img4 from "./Photos/bbl-motion-blur.png"
import img5 from "./Photos/DSC_3956.png"

import React, { useState, useEffect } from 'react';
import { RevealOnScroll } from "../../RevelOnScroll";
import { useNavigate } from 'react-router-dom'; // Importing useNavigate


export const SportsPhotography = () => {

  const navigate = useNavigate(); // Create a navigate function

  
  useEffect(() => {
    // Scroll to the top when the page is loaded
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only once when the component is mounted


  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page in the browser history
  };


  // An array of image URLs for the gallery (replace with your actual image paths)
  const images = [img1, img2, img3, img4, img5];
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      // Show the modal with fade-in when the image is selected
      setModalVisible(true);
    } else {
      // Hide modal with fade-out when it's closed
      setModalVisible(false);
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-slate-900 to-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out relative animate-background-move" style={{ backgroundSize: '200% 200%' }}>
      <div className="px-4 w-full max-w-screen-xl">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Sports Photography
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md border border-transparent hover:border-cyan-400 hover:shadow-cyan-400/50 transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Sports Photography ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px] border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex justify-center items-center">
                <p className="text-white text-xl font-bold drop-shadow-lg">View</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 ${modalVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          onClick={() => setSelectedImage(null)} // Click outside to close
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}


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
  );
};
