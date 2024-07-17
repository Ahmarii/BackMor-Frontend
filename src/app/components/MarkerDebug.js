'use client';
export default function LogMarkersButton() {
    const handleLogMarkersClick = () => {
      console.log(window.addMarkerToMap)
      if (typeof window !== 'undefined' && window.logMarkers) {
        window.logMarkers();
      } else {
        console.error('logMarkers function is not available');
      }
    };
  
    return (
      <button onClick={handleLogMarkersClick} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Log All Maker
      </button>
    );
  }