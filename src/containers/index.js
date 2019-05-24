
// Example container route mapping:

import HotelsContainer from './../containers/Hotels/HotelsContainer';
import HotelDetailContainer from './../containers/Hotels/HotelDetailContainer';

export default {

  stay: {
    title: 'Stay',
    containers: {
      default: HotelsContainer,   // .../EN/stay
      view: HotelDetailContainer, // .../EN/stay/:hotelId
    }
  },

}