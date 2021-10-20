import {uiActions} from './ui-slice'

export const openSidebar = () => {
  return async (dispatch) => {
    await dispatch(
        uiActions.sidebarCssChange({
            cssClass: "closingSidebar"
        })
    )
  };
};

export const closeSidebar = () => {
    return async (dispatch) => {
        await dispatch(
            uiActions.sidebarCssChange({
                cssClass: "openingSidebar"
            })
        )

    };
  };

  export const openSearch = () => {
    return async (dispatch) => {
      await dispatch(
          uiActions.searchCssChange({
              cssClass: "closingSearch"
          })
      )
    };
  };
  
  export const closeSearch = () => {
      return async (dispatch) => {
          await dispatch(
              uiActions.searchCssChange({
                  cssClass: "openingSearch"
              })
          )
  
      };
    };