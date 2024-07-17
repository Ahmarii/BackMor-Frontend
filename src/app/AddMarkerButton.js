'use client';
export default function AddMarkerButton() {
    const handleAddMarkerClick = () => {
      // Example coordinates (replace with actual coordinates)
      const lngLat = [100.514517, 13.8298705];
      console.log(window.addMarkerToMap)
      if (typeof window !== 'undefined' && window.addMarkerToMap) {
        window.addMarkerToMap(lngLat);
      } else {
        console.error('addMarkerToMap function is not available');
      }
    };
  
    return (
      <button onClick={handleAddMarkerClick} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Add Marker to Map
      </button>
    );
  }