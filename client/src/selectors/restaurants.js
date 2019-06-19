import { createSelector } from "reselect";

export const getAllRestaurants = (state) => {

    const restaurants = state.restaurants.items.map(restaurant => (
        {
            name: restaurant.name,
            rating: restaurant.ratingScore,
            logo: `https://d1v73nxuzaqxgd.cloudfront.net/restaurants/${restaurant.logo}`,
            deliveryTime: restaurant.deliveryTime,
            deliveryTimeId: restaurant.deliveryTimeId,
            paymentMethods: restaurant.paymentMethods
        }
    ));
    return restaurants;
}

export const getAllPaymentMethods = createSelector(
    getAllRestaurants,
    (restaurants) => {
        const methods = {};
        restaurants.forEach(restaurant => {
            restaurant.paymentMethods.forEach(paymentMethod => {
                if (!methods[paymentMethod.id]) {
                    methods[paymentMethod.id] = {
                        id: paymentMethod.id,
                        name: paymentMethod.descriptionES
                    };
                }
            })
        });
        return methods;
    }
)

export const getRestaurantsFilteredPayments = createSelector(
    getAllRestaurants,
    (state) => state.restaurants.removedPayments,
    (restaurants, removedPayments) => {
        return restaurants.filter( restaurant => {
            return restaurant.paymentMethods.find( payment => {
                return !removedPayments[payment.id];
            })
        } );
    }
)

export const getRestaurantsOrderedBy = createSelector(
    getRestaurantsFilteredPayments,
    (state) => state.restaurants.orderBy,
    (restaurants, orderBy) => {
        return restaurants.sort((a, b) => {
            if (a[orderBy] < b[orderBy]) {
                return -1;
            }
            if (a[orderBy] > b[orderBy]) {
                return 1;
            }
            return 0;
        });
    }
); 