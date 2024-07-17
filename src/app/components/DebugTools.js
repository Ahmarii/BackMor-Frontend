import AddMarkerButton from '../AddMarkerButton';
import LogMarkersButton from './MarkerDebug';
export default function DebugTools() {
    return(
        <div className="w-1/6 p-5 space-y-4">
            <AddMarkerButton />
            <LogMarkersButton />
        </div>

    );
}
