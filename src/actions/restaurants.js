export const addRestaurant = ({restaurant, location}) => {
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};
