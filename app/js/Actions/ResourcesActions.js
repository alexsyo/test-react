import AppDispatcher from './../Dispatcher/AppDispatcher';
import ResourcesConstants from './../Constants/ResourcesConstants.js';

class ResourcesActions {
    
    static store(resourceType, quantity) {

        AppDispatcher.dispatch({
            actionType: ResourcesConstants.STORE,
            resourceType,
            quantity
        });

    }

    static consume(resourceType, quantity) {

        AppDispatcher.dispatch({
            actionType: ResourcesConstants.STORE,
            resourceType,
            quantity
        });

    }

}

export default ResourcesActions;