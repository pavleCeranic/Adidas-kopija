import {categoryActions} from './category-slice'


  export const show = () => {
      return async (dispatch) => {
          await dispatch(
              categoryActions.showCategory({
                  categories: true
              })
          )
  
      };
    };