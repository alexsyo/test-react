import AppDispatcher from './../Dispatcher/AppDispatcher.js';
import ResourcesConstants from './../Constants/ResourcesConstants.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

// The object to be passed to the state of the view
let resources = {
    food: 0,
    wood: 0,
    stone: 0
};

class ResourcesStore extends EventEmitter {

    constructor() {

        super();

        // Set the states of the view
        this.getFood = () => resources.food;
        this.getWood = () => resources.wood;
        this.getStone = () => resources.stone;

    }

    // Listen to changes on componentDidMount
    addChangeListener(callback) {

        this.on(CHANGE_EVENT, callback);

    }

    // Remove the listner on componentWillUnmount
    removeChangeListener(callback) {

        this.removeListener(CHANGE_EVENT, callback);

    }

}

// The instance of the store
const resourcesStore = new ResourcesStore();

// Register the events
AppDispatcher.register((payload) => {

    switch (payload.actionType) {

        case ResourcesConstants.STORE:

            resources[payload.resourceType] += payload.quantity;
            resourcesStore.emit(CHANGE_EVENT);

            break;

        case ResourcesConstants.CONSUME:

            resources[payload.resourceType] -= payload.quantity;
            resourcesStore.emit(CHANGE_EVENT);

            break;

        default:

            // nothing

    }

});

export default resourcesStore;