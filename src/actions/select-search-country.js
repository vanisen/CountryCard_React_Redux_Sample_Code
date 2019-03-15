import { UPDATE_SELECTED_RESULT, UPDATE_SELECTED_RESULTS }  from './action-types';

export function updateSelectedResult(selectedIndex) {
    return {
        type : UPDATE_SELECTED_RESULT,
        selectedIndex
    };
}

export function updateSelectedResults(selectedIndexes) {
    return {
        type : UPDATE_SELECTED_RESULTS,
        selectedIndexes
    };
}