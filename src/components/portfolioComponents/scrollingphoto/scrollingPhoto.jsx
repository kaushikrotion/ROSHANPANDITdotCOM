import React, { useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import './scrollingPhoto.scss';

const ScrollingImage = ({ images, currentIndex, setCurrentIndex, isHovered }) => {
  const controls = useAnimation();
  const duplicatedImages = [...images, ...images]; // Duplicate images for seamless scrolling
  const totalImages = images.length;

   // Trigger the animation based on currentIndex
  useEffect(() => { 
    const targetIndex = currentIndex % totalImages;
    console.log(targetIndex);

    // Update the animation to smoothly scroll to the next image
    controls.start({ x: `-${targetIndex * 100}%` }).then(() => {
      console.log(currentIndex);
      // Check if we've reached the duplicated end, then reset to the start without transition
      if (currentIndex >= totalImages) {
        console.log('yes')
        setCurrentIndex(currentIndex % totalImages); // Reset to equivalent index in original set
        controls.set({ x: `${(currentIndex % totalImages) * 100}%` });
      }
    });
  }, [currentIndex, controls, images.length, setCurrentIndex]);

  return (
     <motion.div
        className="images-wrapper"
        animate={controls}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        {duplicatedImages.map((image, index) => (
          <img key={index} src={image} alt="" className="scrolling-photo" />
        ))}
      </motion.div>
  );
};

export default ScrollingImage;
