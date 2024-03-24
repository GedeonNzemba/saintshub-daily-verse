import React, { useEffect, useRef } from 'react';
import './bible.css'

const VerseOfTheDay = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const iframeStyles = `
    header {
        display: none !important;
      }
      
      button.text-11.absolute.right-3.top-0.text-blue-30 {
        display: none;
      }
      
      body main button {
        display: none;
      }
      
      .max-w-container-lg.mx-2 {
        display: none;
      }
      
      main {
        margin-block: 0;
      }
      
      * {
        margin-block: 0;
      }
      
      .max-w-container-md.mx-auto {
        display: none;
      }
      
      div#bottom-widgets {
        display: none;
      }
      
      footer {
        display: none;
      }
      
      a[href=""] {
        display: none;
      }
      
      header {
        padding-inline: 0;
        padding-block: 0;
      }
      
      a.relative.overflow-hidden.items-center.font-bold.ease-in-out.duration-100.focus\:outline-2.focus\:outline-info-light.dark\:focus\:outline-info-dark.hover\:shadow-light-2.disabled\:text-gray-50.dark\:disabled\:bg-gray-40.dark\:disabled\:text-white.disabled\:hover\:shadow-none.disabled\:opacity-50.disabled\:bg-gray-10.disabled\:cursor-not-allowed.flex.w-full.max-w-fit.bg-gray-15.dark\:bg-gray-35.text-gray-50.dark\:text-white.hover\:bg-gray-10.dark\:hover\:bg-gray-30.active\:bg-gray-20.dark\:active\:bg-gray-40.rounded-3.text-xs.pis-2.pie-3.h-6.cursor-pointer.no-underline.justify-center.mlb-3.md\:w-1\/3 {
        display: none !important;
      }
      
      div#__next div:not(div div *) {
        position: unset !important;
      }
      
      #__next, body, html {
        height: fit-content;
      }
      
      .mbs-6 {
        margin-block: 0 !important;
      }
      
      .mbe-8 {
        margin-block: 0 !important;
      }
      
    `;

    let fr = 'https://www.bible.com/fr/verse-of-the-day'

    return (
           <div className='container'>
             <iframe
                ref={iframeRef}
                id='daily-verse'
                title="Bible Website"
                src="https://www.bible.com/verse-of-the-day"
                scrolling='no'
                frameBorder="0"
            ></iframe>
           </div>
    );
};

export default VerseOfTheDay;
