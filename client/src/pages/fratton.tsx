import LocationPage from "@/components/location-page";
import { locationPages } from "@shared/location-pages";

export default function Fratton() {
  return <LocationPage page={locationPages[2]} />;
}
